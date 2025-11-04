import React, { useState, useRef, useEffect } from "react";
import {
  Heading,
  AgentPricingTable,
  Popup,
  PaginationWrapper,
  PaginationInfo,
  PaginationNav,
  PageButton,
  PageNavButton,
} from "./style";
import UseAdmin from "../useHooks";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Complaint = () => {
  const [selectedId, setSelectedId] = useState(null);
  const popupRef = useRef(null);

  const { complaintsGet, complaintsStatusUpdation } = UseAdmin();
  const [totalComplaints, setTotalComplaints] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 0,
  });

  const fetchComplaints = async () => {
    const response = await complaintsGet();
    if (response) {
      setTotalComplaints(response.tickets);
      setPagination({
        page: response.pagination.currentPage,
        limit: response.pagination.itemsPerPage,
        totalItems: response.pagination.totalItems,
        totalPages: response.pagination.totalPages,
      });
    }
  };
  useEffect(() => {
    fetchComplaints(pagination.page, pagination.limit);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setSelectedId(null);
      }
    };

    if (selectedId) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedId]);

  const handleComplaintsStatusUpdation = async (id, status) => {
    const body = {
      status: status,
    };
    const response = await complaintsStatusUpdation(id, body);
    if (response.message.includes("updated")) {
      fetchComplaints();
      setSelectedId(null);
    }
  };

  return (
    <>
      <Heading>Complaints</Heading>
      <AgentPricingTable>
        <p className="heading">Riased Complaints</p>
        <div className="tableDiv">
          <table>
            <thead>
              <tr>
                <th>Parcel ID</th>
                <th>Tracking No.</th>
                <th>Customer Name</th>
                <th>Subject</th>
                <th>Complaint Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {totalComplaints.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.parcelId}</td>
                  <td>{ticket.BookingParcel.trackingNumber}</td>
                  <td>{ticket.User.fullName}</td>
                  <td>{ticket.subject}</td>
                  <td>{ticket.description}</td>
                  <td>
                    <span className={`ticketStatus ${ticket.status}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td style={{ position: "relative" }}>
                    <button
                      onClick={() => {
                        if (ticket.status === "open") {
                          setSelectedId(
                            selectedId === ticket.id ? null : ticket.id
                          );
                        } else {
                          alert(
                            "This ticket is already closed. Only tickets with 'open' status can be updated."
                          );
                        }
                      }}
                    >
                      Change Ticket Status
                    </button>
                    {selectedId === ticket.id && (
                      <Popup ref={popupRef}>
                        <div className="btnParent">
                          <button
                            onClick={() =>
                              handleComplaintsStatusUpdation(
                                ticket.id,
                                "closed"
                              )
                            }
                          >
                            Closed
                          </button>
                        </div>
                      </Popup>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationWrapper>
            <PaginationInfo>
              Showing
              {(pagination.page - 1) * pagination.limit + 1}–
              {Math.min(
                pagination.page * pagination.limit,
                pagination.totalItems
              )}
              of {pagination.totalItems}
            </PaginationInfo>

            <PaginationNav>
              <PageNavButton
                disabled={pagination.page === 1}
                onClick={() =>
                  fetchComplaints(pagination.page - 1, pagination.limit)
                }
              >
                <FaChevronLeft size={12} />
              </PageNavButton>

              {Array.from({ length: pagination.totalPages }).map((_, index) => (
                <PageButton
                  key={index}
                  className={pagination.page === index + 1 ? "active" : ""}
                  onClick={() => fetchComplaints(index + 1, pagination.limit)}
                >
                  {index + 1}
                </PageButton>
              ))}

              <PageNavButton
                disabled={pagination.page === pagination.totalPages}
                onClick={() =>
                  fetchComplaints(pagination.page + 1, pagination.limit)
                }
              >
                <FaChevronRight size={12} />
              </PageNavButton>
            </PaginationNav>
          </PaginationWrapper>
        </div>
      </AgentPricingTable>
    </>
  );
};

export default Complaint;
