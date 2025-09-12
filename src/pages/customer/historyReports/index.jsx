import React from "react";
import { Heading, Container, RecentParcels, GraphDiv } from "./style";
import AI from "../../../components/aiChatBox";

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

        <AI />
      </Container>
    </>
  );
};

export default HistoryReports;
