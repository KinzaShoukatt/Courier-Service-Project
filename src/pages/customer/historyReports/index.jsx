import React from "react";
import { Container } from "./style";

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

const HistoryReports = () => {
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
      <h2>History & Reports</h2>
      <div className="recentParcels">
        <div className="firstLine">
          <p>Recent Parcels</p>
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

export default HistoryReports;
