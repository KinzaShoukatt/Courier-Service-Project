import React from "react";
import { Container } from "./style";

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
      <h2 className="heading">Customer Dashboard</h2>
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
      <div className="recentParcels">
        <div className="firstLine">
          <h3>Recent Parcels</h3>
          <button>Book New Parcel</button>
        </div>
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
            <tr>
              <td>#TRK123456</td>
              <td>John Smith</td>
              <td>New York, USA6</td>
              <td>
                <span className="status1">In transit</span>
              </td>
              <td>
                <button>Track</button>
              </td>
            </tr>
            <tr>
              <td>#TRK123457</td>
              <td>Emma Johnson</td>
              <td>London, UK</td>
              <td>
                <span className="status2">Delivered</span>
              </td>
              <td>
                <button>Track</button>
              </td>
            </tr>
            <tr>
              <td>#TRK123458</td>
              <td>Robert Brown</td>
              <td>Tokyo, Japan</td>
              <td>
                <span className="status3">Pending Pickup</span>
              </td>
              <td>
                <button>Track</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 3rd Section */}
      <div className="graph">
        <Line className="lineChart" data={data} />
      </div>
    </Container>
  );
};

export default Dashboard;
