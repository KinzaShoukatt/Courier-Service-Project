import React, { useState, useRef, useEffect } from "react";
import { Heading, AgentPricingTable, Popup } from "./style";
import UseAdmin from "../useHooks";
const Complaint = () => {
  const [status, setStatus] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const popupRef = useRef(null);

  const { complaintsGet, complaintsStatusUpdation } = UseAdmin();
  const [totalComplaints, setTotalComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const response = await complaintsGet();
      if (response) {
        setTotalComplaints(response.data);
      }
    };
    fetchComplaints();
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
        status: status
      }
    await complaintsStatusUpdation(id, body)
  }

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
                <th>Tracking ID</th>
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
                  <td >
                    <span className={`ticketStatus ${ticket.status}`}>{ticket.status}</span></td>
                  <td style={{ position: "relative" }}>
                    <button
                      onClick={() =>
                        setSelectedId(
                          selectedId === ticket.id ? null : ticket.id
                        )
                      }
                    >
                      Change Ticket Status
                    </button>
                    {selectedId === ticket.id && (
                      <Popup ref={popupRef}>
                        <div className="btnParent">
                          {/* <button>In Progress</button> */}
                          <button  onClick={() => handleComplaintsStatusUpdation(ticket.id, "closed")}>Closed</button>
                        </div>
                      </Popup>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AgentPricingTable>
    </>
  );
};

export default Complaint;
