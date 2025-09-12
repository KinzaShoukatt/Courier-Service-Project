// import React,  from "react";
import {
  Heading,
  Container,
  AssignDelivery,
  DivsSetting,
  LeftDiv,
  RightDiv,
  AssignDeliveryTable,
  RescheduleCancel,
  ParcelHistory,
} from "./style";

import { useEffect, useState, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const dummyOrders = [
  {
    id: "ORD-001",
    from: "Central Warehouse",
    to: "Northside Mall",
    type: "instant",
    status: "confirmed",
    paymentMethod: "COD",
    totalpayment: "500",
    assignedTo: null,
  },
  {
    id: "ORD-002",
    from: "Central Warehouse",
    to: "Westend Plaza",
    type: "scheduled",
    status: "confirmed",
    paymentMethod: "Online",
    totalpayment: "1000",
    assignedTo: null,
  },
  {
    id: "ORD-003",
    from: "Central Warehouse",
    to: "East Market",
    type: "instant",
    status: "unConfirmed",
    paymentMethod: "Online",
    totalpayment: "800",
    assignedTo: null,
  },
];

const dummyAgents = [
  { id: 1, name: "David Wilson" },
  { id: 2, name: "Alex Johnson" },
  { id: 3, name: "Emma Smith" },
  { id: 4, name: "Michael Brown" },
];

const dummyOrdersTable = [
  {
    id: "ORD-001",
    name: "Malaika",
    from: "Central Warehouse",
    to: "Northside Mall",
    assignedTo: "David",
    status: "assigned",
    assignedOn: "1 Sep 2025",
  },
  {
    id: "ORD-002",
    name: "Ayesha",
    from: "Central Warehouse",
    to: "Westend Plaza",
    assignedTo: "Sarah",
    status: "assigned",
    assignedOn: "25 Augest 2025",
  },
  {
    id: "ORD-003",
    name: "Hania",
    from: "Central Warehouse",
    to: "East Market",
    assignedTo: "Robert",
    status: "assigned",
    assignedOn: "18 Augest 2025",
  },
];

const OrderManagement = () => {
  // 🚀 New State for Deliveries & Agents
  const [orders, setOrders] = useState(dummyOrders);
  // const [agents] = useState(dummyAgents);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);

  // Assign delivery to agent (just update local state for now)
  const handleAssign = () => {
    if (!selectedOrder || !selectedAgent) {
      alert("Please select both an order and an agent!");
      return;
    }

    setOrders((prev) =>
      prev.map((order) =>
        order.id === selectedOrder
          ? { ...order, assignedTo: selectedAgent }
          : order
      )
    );

    // Reset selections
    setSelectedOrder(null);
    setSelectedAgent(null);
    alert("Delivery assigned successfully!");
  };

  const unassignedOrders = orders.filter((o) => !o.assignedTo);

  const getOrdersForAgent = (agentId) =>
    orders.filter((order) => order.assignedTo === agentId);

  const dummyParcelHistory = [
    {
      id: "#TRK123451",
      recipient: "Robert Smith",
      destination: "New York, USA",
      status: "scheduled",
      action: "Track",
    },
    {
      id: "#TRK123451",
      recipient: "Robert Smith",
      destination: "New York, USA",
      status: "Pickup",
      action: "Track",
    },
    {
      id: "#TRK123452",
      recipient: "Emma Johnson",
      destination: "London, UK",
      status: "in transit",
      action: "Track",
    },
    {
      id: "#TRK123454",
      recipient: "Robert Smith",
      destination: "New York, USA",
      status: "out For Delivery",
      action: "Track",
    },
    {
      id: "#TRK123455",
      recipient: "Robert Smith",
      destination: "New York, USA",
      status: "delivered",
      action: "View",
    },
  ];
  return (
    <>
      <Heading>Order Management</Heading>
      <Container>
        {/* Assign Delivery to Agent */}
        <AssignDelivery>
          <h2 className="heading">Assign Delivery to Agents</h2>
          <DivsSetting>
            <LeftDiv>
              <p className="leftHeading">Unassigned Deliveries</p>
              <div className="childLeft">
                {dummyOrders.map((order) => (
                  <div className="box" key={order.id}>
                    <div className="paras">
                      <p className="trackingId">#{order.id}</p>
                      <p className="childPara">
                        <span>From: </span>
                        {order.from}
                        <span> → To: </span>
                        {order.to}
                      </p>
                      <p className="childPara">
                        <span>Parcel Type: </span>
                        {order.type}
                      </p>
                      <p className="childPara">
                        <span>Parcel Status: </span>
                        {order.status}
                      </p>
                      <p className="childPara">
                        <span>Payment Method: </span>
                        {order.paymentMethod}
                      </p>
                      <p className="childPara">
                        <span>Total Amount: </span>
                        {order.totalpayment}
                      </p>
                    </div>
                    <div
                      className="btn"
                      onClick={() => setSelectedOrder(order)}
                    >
                      {selectedOrder === order ? "Selected" : "Assign"}
                    </div>
                  </div>
                ))}
              </div>
            </LeftDiv>
            <RightDiv>
              <p className="rightHeading">Available Agents</p>
              <div className="childRight">
                {dummyAgents.map((agent) => (
                  <div className="rightBox" key={agent.id}>
                    <input
                      type="radio"
                      name="agent"
                      checked={selectedAgent === agent.id}
                      onChange={() => setSelectedAgent(agent.id)}
                    />
                    <p>{agent.name}</p>
                  </div>
                ))}
                <button className="button" onClick={handleAssign}>
                  Assign Selected Delivery to Agent
                </button>
              </div>
            </RightDiv>
          </DivsSetting>
        </AssignDelivery>
        {/* Assigned Orders */}
        <AssignDeliveryTable>
          <h2 className="heading">Assigned Deliveries to Agents</h2>
          <div className="tableDiv">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Name</th>
                  <th>Pickup → Delivery</th>
                  <th>Assigned To</th>
                  <th>Status</th>
                  <th>Assigned On</th>
                </tr>
              </thead>
              <tbody>
                {dummyOrdersTable.map((order) => (
                  <tr>
                    <td>{order.id}</td>
                    <td>{order.name}</td>
                    <td>
                      {order.from} -> {order.to}
                    </td>
                    <td>{order.assignedTo}</td>
                    <td>{order.status}</td>
                    <td>{order.assignedOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AssignDeliveryTable>
        {/* Reschedule or Cancel Orders*/}
        <RescheduleCancel>
          <p className="heading">Reschedule/Cancel Orders</p>
          <div className="tableDiv">
            <table>
              <thead>
                <tr>
                  <th>Tracking ID</th>
                  <th>Recipient</th>
                  <th>Pickup Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#TRK123456</td>
                  <td>John Smith</td>
                  <td>New York, USA6</td>
                  <td>
                    <span className="status1">In transit</span>
                  </td>
                  <td className="btns">
                    <button className="btn1">
                      <FaCalendarAlt size={16} />
                      Reschedule
                    </button>
                    <button className="btn2">
                      <RxCross2 size={18} />
                      Cancel
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#TRK123457</td>
                  <td>Emma Johnson</td>
                  <td>London, UK</td>
                  <td>
                    <span className="status2">Delivered</span>
                  </td>
                  <td className="btns">
                    <button className="btn1">
                      <FaCalendarAlt size={16} />
                      Reschedule
                    </button>
                    <button className="btn2">
                      <RxCross2 size={18} />
                      Cancel
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#TRK123458</td>
                  <td>Robert Brown</td>
                  <td>Tokyo, Japan</td>
                  <td>
                    <span className="status3">Pending Pickup</span>
                  </td>
                  <td className="btns">
                    <button className="btn1">
                      <FaCalendarAlt size={16} />
                      Reschedule
                    </button>
                    <button className="btn2">
                      <RxCross2 size={18} />
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </RescheduleCancel>

        {/* Parcel history */}
        <ParcelHistory>
          <p className="heading">Parcels History</p>
          <div className="parcelHistoryTable">
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
                {dummyParcelHistory.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.recipient}</td>
                    <td>{data.destination}</td>
                    <td>
                      <span className={`status ${data.status}`}>
                        {data.status}
                      </span>
                    </td>
                    <td>
                      {" "}
                      <span className="action">{data.action}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ParcelHistory>
      </Container>
    </>
  );
};

export default OrderManagement;
