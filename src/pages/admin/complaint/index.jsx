import React, { useState, useRef, useEffect } from "react";
import { Heading, AgentPricingTable, Popup } from "./style";
const Complaint = () => {
  const [status, setStatus] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const popupRef = useRef(null);

  const dummyComplains = [
    {
      id: "ORD-001",
      name: "Malaika",
      email: "malaika@gmail.com",
      description: "My order is not delivered yet.",
      action: "",
    },
    {
      id: "ORD-002",
      name: "Ayesha",
      email: "ayesha@gmail.com",
      description: "My order is not delivered yet.",
    },
    {
      id: "ORD-003",
      name: "Hania",
      email: "hania@gmail.com",
      description: "My order is not delivered yet.",
    },
  ];

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

  return (
    <>
      <Heading>Complaints</Heading>
      <AgentPricingTable>
        <p className="heading">Riased Complaints</p>
        <div className="tableDiv">
          <table>
            <thead>
              <tr>
                <th>Tracking ID</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Complaint Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyComplains.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.description}</td>
                  <td style={{position: "relative"}}>
                    <button
                      onClick={() =>
                        setSelectedId(selectedId === user.id ? null : user.id)
                      }
                    >
                      Open
                    </button>
                    {selectedId === user.id && (
                      <Popup ref={popupRef}>
                        <div className="btnParent">
                          <button>In Progress</button>
                          <button>Closed</button>
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
