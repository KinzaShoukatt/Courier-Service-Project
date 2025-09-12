import React from "react";
import { Container, RecentParcels, GraphDiv } from "./style";
import AI from "../../../components/aiChatBox";
import Card from "../../../components/cardComponent";
import { FaBox } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();

  const dummyParcelHistory = [
    {
      id: "#TRK123451",
      recipient: "Robert Smith",
      destination: "New York, USA",
      status: "Order Placed",
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
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#006769",
        tension: 0.1,
      },
    ],
  };

  return (
    <Container>
      {/* 1st Section */}
      <h2 className="heading">Dashboard</h2>
      <div className="cardComponent">
        <Card
          icon={<FaBox color="#006769" size={21} />}
          number="6"
          text="Total Parcels"
        />
        <Card
          icon={<FaTruckFast color="#006769" size={23} />}
          number="2"
          text="In Transit"
        />
        <Card
          icon={<FaCheckCircle color="#006769" size={23} />}
          number="3"
          text="Delivered"
        />
        <Card
          icon={<FiClock color="#006769" size={23} />}
          number="1"
          text="Pending"
        />
      </div>
      {/* 2nd Section */}
      <RecentParcels>
        <div className="firstLine">
          <p className="heading">Recent Parcels</p>
          <button onClick={() => navigate("/customer/parcel-booking")}>Book New Parcel</button>
        </div>
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
      </RecentParcels>
      {/* 3rd Section */}
      <GraphDiv>
                <Line className="lineChart" data={data} />
              </GraphDiv>
      <AI/>
    </Container>
  );
};

export default Dashboard;
