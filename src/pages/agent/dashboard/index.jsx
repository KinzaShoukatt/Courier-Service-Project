import React, { useState } from "react";
import { Container, AssignedDelivery, ReasonRejection, UpdateStatus, PopUp, DeliveryProof } from "./style";

import { FaCircleCheck } from "react-icons/fa6";
const AgentDashboard = () => {
  const [rejection, setRejection] = useState(false);
  const [open, setOpen] = useState(false);

  const dummyDeliveries = [
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 5 RYK",
      deliveryAddress: "Street no 1 Lahore",
    },
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 15 Karachi",
      deliveryAddress: "Street no 1 RYK",
    },
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 15 Karachi",
      deliveryAddress: "Street no 25 Karachi",
    },
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 15 Islamabad",
      deliveryAddress: "Street no 15 Faislabad",
    },
  ];
  
  const dummyStatus = [
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 5 RYK",
      deliveryAddress: "Street no 1 Lahore",
      status: "Pending",
    },
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 15 Karachi",
      deliveryAddress: "Street no 1 RYK",
      status: "Pending",
    },
    {
      id: "#TRK123451",
      customer: "Robert Smith",
      pickupaddress: "Street no 15 Karachi",
      deliveryAddress: "Street no 25 Karachi",
      status: "Pending",
    },
  ];

  return (
    
      <Container>
        <p className="mainHeading">Dashboard</p>
        <AssignedDelivery>
          <p className="heading">Assigned Deliveriers</p>
          <div className="AssignedDeliveryTable">
            <table>
              <thead>
                <tr>
                  <th>Tracking ID</th>
                  <th>Customer Name</th>
                  <th>Pickup Address</th>
                  <th>Delivery Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dummyDeliveries.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.customer}</td>
                    <td>{data.pickupaddress}</td>
                    <td>{data.deliveryAddress}</td>
                    <td><div className="btns">
          <button className="btn1">Accept</button>
          <button className="btn2" onClick={() => setRejection(true)}>Reject</button>
           { rejection && (
        <ReasonRejection>
          <p className="rejectionHeading">Reason of Rejection:</p>
            <textarea name="" id="" rows="10"></textarea>
          
        </ReasonRejection>
         )}
        </div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         
        </AssignedDelivery>
        
        <UpdateStatus>
          <p className="heading">Parcel Status</p>
          <div className="AssignedDeliveryTable">
            <table>
              <thead>
                <tr>
                  <th>Tracking ID</th>
                  <th>Customer Name</th>
                  <th>Pickup Address</th>
                  <th>Delivery Address</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {dummyStatus.map((parcel) => (
                  <tr key={parcel.id}>
                    <td>{parcel.id}</td>
                    <td>{parcel.customer}</td>
                    <td>{parcel.pickupaddress}</td>
                    <td>{parcel.deliveryAddress}</td>
                    <td>
                      <button className="button" onClick={() => setOpen(true)}>
                        {parcel.status}
                      </button>
                      {open && (
                        <PopUp>
                          <div className="btnParent">
                            <div>
                              <button className="btn picked">PickedUp</button>
                            </div>
                            <div>
                              <button className="btn out">
                                Out For Delivery
                              </button>
                            </div>
                          </div>
                          <div className="btnParent">
                            <div>
                              <button className="btn transit">
                                In Transit
                              </button>
                            </div>
                            <div>
                              <button className="btn delivered">
                                <FaCircleCheck size={16} />
                                Delivered
                              </button>
                            </div>
                          </div>
                        </PopUp>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </UpdateStatus>

        <DeliveryProof>
          <input type="image" />
        </DeliveryProof>
      </Container>
    
  );
};

export default AgentDashboard;
