import React, { useEffect, useState } from "react";
import {
  Container,
  RecentParcels,
  PaginationWrapper,
  PaginationInfo,
  PaginationNav,
  PageButton,
  PageNavButton,
} from "./style";
import AI from "../../../components/aiChatBox";
import Card from "../../../components/cardComponent";
import { FaBox } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import UseCustomer from "../useHooks";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const parcelId = Number(localStorage.getItem("parcelId"));
  const {
    countParcels,
    customerBookedParcels,
    trackParcels,
    deliveryOrderInvoice,
  } = UseCustomer();

  const [totalParcels, setTotalParcels] = useState([]);
  const [parcelHistory, setParcelHistory] = useState([]);
  const [pagination1, setPagination1] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });

  useEffect(() => {
    const fetchParcels = async () => {
      const response = await countParcels();
      setTotalParcels(response);
    };
    fetchParcels();
  }, []);

  const fetchParcels = async (page = 1, limit = 10) => {
    const response = await customerBookedParcels(page, limit);
    setParcelHistory(response.parcels);
    setPagination1({
      page: response.pagination.currentPage,
      limit: response.pagination.itemsPerPage,
      totalItems: response.pagination.totalItems,
      totalPages: response.pagination.totalPages,
    });
  };
  useEffect(() => {
    fetchParcels(pagination1.page, pagination1.limit);
  }, []);

  const handleTrackParcels = async (body) => {
    return await trackParcels(body);
  };

  const handleDeliveryOrderInvoice = async (id) => {
    await deliveryOrderInvoice(id);
  };

  return (
    <Container>
      {/* 1st Section */}
      <h2 className="heading">Dashboard</h2>
      <div className="cardComponent">
        <Card
          icon={<FaBox color="#006769" size={21} />}
          number={totalParcels?.totalBookings || 0}
          text="Total Parcels"
        />
        <Card
          icon={<FaBox color="#006769" size={21} />}
          number={totalParcels?.order_placed || 0}
          text="Order Placed"
        />
        <Card
          icon={<FaBox color="#006769" size={21} />}
          number={totalParcels?.picked_up || 0}
          text="Picked Up Oders"
        />
        <Card
          icon={<FaTruckFast color="#006769" size={23} />}
          number={totalParcels?.in_transit || 0}
          text="In Transit Orders"
        />
        <Card
          icon={<FaTruckFast color="#006769" size={23} />}
          number={totalParcels?.out_for_delivery || 0}
          text="Out For Delivery Orders"
        />
        <Card
          icon={<FaCheckCircle color="#006769" size={23} />}
          number={totalParcels?.delivered || 0}
          text="Delivered Orders"
        />
      </div>
      {/* 2nd Section */}
      <RecentParcels>
        <div className="firstLine">
          <p className="heading">Recent Parcels</p>
          <button onClick={() => navigate("/customer/parcel-booking")}>
            Book New Parcel
          </button>
        </div>
        <div className="tableDiv">
          <table>
            <thead>
              <tr>
                <th>Tracking ID</th>
                <th>Pickup Address</th>
                <th>Delivery Address</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {parcelHistory.map((data) => (
                <tr key={data.trackingNumber}>
                  <td>{data.trackingNumber}</td>
                  <td>{data.pickupAddress}</td>
                  <td>{data.deliveryAddress}</td>
                  <td>
                    <span className={`status ${data.status}`}>
                      {data.status}
                    </span>
                  </td>
                  <td>
                    <span>
                      {data.status === "delivered" ? (
                        <button
                          className="actionBtn"
                          onClick={() => handleDeliveryOrderInvoice(data.id)}
                        >
                          View
                        </button>
                      ) : (
                        <button
                          className="actionBtn"
                          onClick={() =>
                            handleTrackParcels(data.trackingNumber)
                          }
                        >
                          Track
                        </button>
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationWrapper>
            <PaginationInfo>
              Showing {(pagination1.page - 1) * pagination1.limit + 1}–
              {Math.min(
                pagination1.page * pagination1.limit,
                pagination1.totalItems
              )}
              of {pagination1.totalItems}
            </PaginationInfo>

            <PaginationNav>
              <PageNavButton
                disabled={pagination1.page === 1}
                onClick={() =>
                  fetchParcels(pagination1.page - 1, pagination1.limit)
                }
              >
                <FaChevronLeft size={12} />
              </PageNavButton>

              {Array.from({ length: pagination1.totalPages }).map(
                (_, index) => (
                  <PageButton
                    key={index}
                    className={pagination1.page === index + 1 ? "active" : ""}
                    onClick={() => fetchParcels(index + 1, pagination1.limit)}
                  >
                    {index + 1}
                  </PageButton>
                )
              )}

              <PageNavButton
                disabled={pagination1.page === pagination1.totalPages}
                onClick={() =>
                  fetchParcels(pagination1.page + 1, pagination1.limit)
                }
              >
                <FaChevronRight size={12} />
              </PageNavButton>
            </PaginationNav>
          </PaginationWrapper>
        </div>
      </RecentParcels>

      <AI />
    </Container>
  );
};

export default Dashboard;
