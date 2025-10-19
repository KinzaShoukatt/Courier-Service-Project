import React, { useEffect, useState } from "react";
import {
  Container,
  PastDeliveries,
  Earnings,
  PaginationWrapper,
  PaginationInfo,
  PaginationNav,
  PageButton,
  PageNavButton,
  Dots,
} from "./style";
import Card from "../../../components/cardComponent";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import UseAgent from "../useHooks";

const HistoryAndEarnings = () => {
  const { alldeliveredParcels, allEarningsGet, countAgentCommision } =
    UseAgent();

  const [pastDeliveries, setPastDeliveries] = useState([]);
  const [totalCommision, setTotalCommision] = useState([]);
  const [earnings, setEarnings] = useState([]);
  const [pagination1, setPagination1] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });
  const [pagination2, setPagination2] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });

  useEffect(() => {
    const fetchAgentsCommision = async () => {
      const response = await countAgentCommision();
      setTotalCommision(response);
    };
    fetchAgentsCommision();
  }, []);

  const fetchPastDeliveries = async (page = 1, limit = 10) => {
    const response = await alldeliveredParcels(page, limit);
    setPastDeliveries(response.parcels);
    setPagination1({
      page: response.pagination.currentPage,
      limit: response.pagination.itemsPerPage,
      totalItems: response.pagination.totalItems,
      totalPages: response.pagination.totalPages,
    });
  };

  useEffect(() => {
    fetchPastDeliveries(pagination1.page, pagination1.limit);
  }, []);

  const fetchAllEarnings = async (page = 1, limit = 10) => {
    const response = await allEarningsGet(page, limit);
    setEarnings(response.parcels);
    setPagination2({
      page: response.pagination.currentPage,
      limit: response.pagination.itemsPerPage,
      totalItems: response.pagination.totalItems,
      totalPages: response.pagination.totalPages,
    });
  };

  useEffect(() => {
    fetchAllEarnings(pagination2.page, pagination2.limit);
  }, []);

  return (
    <Container>
      <p className="mainHeading">History & Earnings</p>
      <div className="cardComponent">
        <Card
          icon={<FaMoneyBill1Wave color="#006769" size={21} />}
          number={totalCommision?.totalCommission || 0}
          text="Total Earnings"
        />
      </div>
      <PastDeliveries>
        <p className="heading">Past Deliveriers</p>
        <div className="AssignedDeliveryTable">
          <table>
            <thead>
              <tr>
                <th>Tracking ID</th>
                <th>Customer Name</th>
                <th>Pickup Address</th>
                <th>Delivery Address</th>
                <th>Pickup Slot</th>
                <th>Payment Method</th>
                <th>Payment Status</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {pastDeliveries.map((parcel) => (
                <tr key={parcel.id}>
                  <td>{parcel.trackingNumber}</td>
                  <td>{parcel.Customer.fullName}</td>
                  <td>{parcel.pickupAddress}</td>
                  <td>{parcel.pickupAddress}</td>
                  <td>{parcel.pickupSlot}</td>
                  <td>{parcel.paymentMethod}</td>
                  <td>{parcel.paymentStatus}</td>
                  <td>
                    <button className="action">{parcel.status}</button>
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
                  fetchPastDeliveries(pagination1.page - 1, pagination1.limit)
                }
              >
                <FaChevronLeft size={12} />
              </PageNavButton>

              {Array.from({ length: pagination1.totalPages }).map(
                (_, index) => (
                  <PageButton
                    key={index}
                    className={pagination1.page === index + 1 ? "active" : ""}
                    onClick={() =>
                      fetchPastDeliveries(index + 1, pagination1.limit)
                    }
                  >
                    {index + 1}
                  </PageButton>
                )
              )}

              <PageNavButton
                disabled={pagination1.page === pagination1.totalPages}
                onClick={() =>
                  fetchPastDeliveries(pagination1.page + 1, pagination1.limit)
                }
              >
                <FaChevronRight size={12} />
              </PageNavButton>
            </PaginationNav>
          </PaginationWrapper>
        </div>
      </PastDeliveries>

      <Earnings>
        <p className="heading">All Earnings</p>
        <div className="AssignedDeliveryTable">
          <table>
            <thead>
              <tr>
                <th>Tracking ID</th>
                <th>Customer Name</th>
                <th>Pickup Address</th>
                <th>Delivery Address</th>
                <th>Pickup Slot</th>
                <th>Payment Method</th>
                <th>Delivery Charges</th>
                <th>Payment Status</th>
                <th>Parcel Status</th>
                <th>Earning</th>
              </tr>
            </thead>
            <tbody>
              {earnings.map((order) => (
                <tr key={order.id}>
                  <td>{order.trackingNumber}</td>
                  <td>{order.Customer.fullName}</td>
                  <td>{order.pickupAddress}</td>
                  <td>{order.deliveryAddress}</td>
                  <td>{order.pickupSlot}</td>
                  <td>{order.paymentMethod}</td>
                  <td>{`${order.deliveryCharge}Rs`}</td>
                  <td>
                    {" "}
                    <span className={`status ${order.paymentStatus}`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td>
                    <button className="action">{order.status}</button>
                  </td>
                  <td> {order.agentCommission}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationWrapper>
            <PaginationInfo>
              Showing {(pagination2.page - 1) * pagination2.limit + 1}–
              {Math.min(
                pagination2.page * pagination2.limit,
                pagination2.totalItems
              )}
              of {pagination2.totalItems}
            </PaginationInfo>

            <PaginationNav>
              <PageNavButton
                disabled={pagination2.page === 1}
                onClick={() =>
                  fetchAllEarnings(pagination2.page - 1, pagination2.limit)
                }
              >
                <FaChevronLeft size={12} />
              </PageNavButton>

              {Array.from({ length: pagination2.totalPages }).map(
                (_, index) => (
                  <PageButton
                    key={index}
                    className={pagination2.page === index + 1 ? "active" : ""}
                    onClick={() =>
                      fetchAllEarnings(index + 1, pagination2.limit)
                    }
                  >
                    {index + 1}
                  </PageButton>
                )
              )}

              <PageNavButton
                disabled={pagination2.page === pagination2.totalPages}
                onClick={() =>
                  fetchAllEarnings(pagination2.page + 1, pagination2.limit)
                }
              >
                <FaChevronRight size={12} />
              </PageNavButton>
            </PaginationNav>
          </PaginationWrapper>
        </div>
      </Earnings>
    </Container>
  );
};

export default HistoryAndEarnings;
