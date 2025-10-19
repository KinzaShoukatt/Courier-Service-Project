import React, { useEffect, useState } from "react";
import {
  Heading,
  Container,
  RecentParcels,
  PaginationWrapper,
  PaginationInfo,
  PaginationNav,
  PageButton,
  PageNavButton,
} from "./style";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AI from "../../../components/aiChatBox";

import UseCustomer from "../useHooks";
import { useLocation } from "react-router-dom";

const HistoryReports = () => {
  const { customerBookedParcels, trackParcels } = UseCustomer();
  const location = useLocation();

  const [parcelHistory, setParcelHistory] = useState([]);
  const [pagination1, setPagination1] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });

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

  return (
    <>
      <Heading>History & Reports</Heading>
      <Container>
        <RecentParcels>
          <p className="heading">Recent Parcels</p>
          <div className="tableDiv">
            <table>
              <thead>
                <tr>
                  <th>Tracking ID</th>
                  <th>Recipient</th>
                  <th>Destination</th>
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
                            onClick={() =>
                              handleTrackParcels(data.trackingNumber)
                            }
                          >
                            Track
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
    </>
  );
};

export default HistoryReports;
