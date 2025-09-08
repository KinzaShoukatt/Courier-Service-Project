import React from "react";
import {
  Container,
  FormDiv,
  AssignDelivery,
  AgentchartContainer,
} from "./style";
import { useState, useRef, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);
const AgentManagement = () => {
  const dummyOrders = [
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

  const agentDatasets = {
    daily: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [2, 3, 2, 1, 2, 2, 4],
    },
    monthly: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "April",
        "May",
        "june",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      data: [10, 10, 5, 25, 15, 30, 20, 10, 12, 15, 20, 30],
    },
    yearly: {
      labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
      data: [300, 500, 1000, 1800, 2500, 2500],
    },
  };
  const [agentFilter, setAgentFilter] = useState("daily");
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const agentDataset = agentDatasets[agentFilter];
  const totalAgents = agentDataset.data.reduce((a, b) => a + b, 0);

  const agentChartData = {
    labels: agentDataset.labels,
    datasets: [
      {
        label: "Bookings",
        data: agentDataset.data,
        backgroundColor: [
          "#006769",
          "#00A6A6",
          "#4ECDC4",
          "#1A535C",
          "#bc87bc",
          "#FF6B6B",
          "#be3535",
          "#FFE66D",
          "#006769",
          "#00A6A6",
          "#4ECDC4",
          "#99a399",
        ],
        BorderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "bottom" },
    },
  };

  const popupRef2 = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef2.current && !popupRef2.current.contains(event.target)) {
        setIsPopupOpen2(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Container>
      <p className="mainHeading">Agent Management</p>
      <div className="cardParent">
        <div className="card">
          <p className="heading">Total Agents</p>
          <p>150</p>
        </div>
        <div className="card">
          <p className="heading">Active Agents</p>
          <p>120</p>
        </div>
      </div>
      {/* Register Agent */}
      <FormDiv>
        <p className="heading">Register Agent</p>
        <form>
          <div className="inputFields">
            <div className="inputFeild">
              <label htmlFor="">Name</label>
              <br />
              <input type="text" placeholder="Enter Name" />
            </div>
            <div className="inputFeild">
              <label htmlFor="">Email</label>
              <br />
              <input type="email" placeholder="Enter Email" />
            </div>
          </div>
          <div className="inputFields">
            <div className="inputFeild">
              <label htmlFor="">Phone Number</label>
              <br />
              <input type="text" placeholder="Enter Phone No" />
            </div>
            <div className="inputFeild">
              <label htmlFor="">Password</label>
              <br />
              <input type="password" placeholder="Enter Password" />
            </div>
          </div>
          <div className="inputFields">
            <div className="inputFeild">
              <label htmlFor="">Role</label>
              <br />
              <input type="text" value="Agent" />
            </div>
          </div>
          <div className="btn">
            <button className="addAgentBtn">
              <FaCheck color="darkgreen" size={18} />
              Register/Add Agent
            </button>
          </div>
        </form>
      </FormDiv>
      {/* Assigned Orders */}
      <AssignDelivery>
        <h2 className="heading">Assign Delivery to Agents</h2>
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
            {dummyOrders.map((order) => (
              <tr>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>
                  {order.from} ->  {order.to}
                </td>
                <td>{order.assignedTo}</td>
                <td>{order.status}</td>
                <td>{order.assignedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </AssignDelivery>
      {/* agent Performance */}
      <AgentchartContainer>
        <p className="mainHeading">Agent Performance</p>
        <h2 className="heading">
          Total Order Delivered: {totalAgents} ({agentFilter.toUpperCase()})
        </h2>
        <div className="filterContainer" ref={popupRef2}>
          <button
            onClick={() => setIsPopupOpen2(!isPopupOpen2)}
            className="filter-btn"
          >
            Choose Filter
          </button>
          {/* Popup */}
          {isPopupOpen2 && (
            <div className="popupMenu">
              <button
                onClick={() => {
                  setAgentFilter("daily");
                  setIsPopupOpen2(false);
                }}
              >
                Daily
              </button>
              <button
                onClick={() => {
                  setAgentFilter("monthly");
                  setIsPopupOpen2(false);
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => {
                  setAgentFilter("yearly");
                  setIsPopupOpen2(false);
                }}
              >
                Yearly
              </button>
            </div>
          )}
        </div>

        {/* Chart */}
        <div className="chartBox">
          <Pie key={agentFilter} data={agentChartData} options={options} />
        </div>
      </AgentchartContainer>
    </Container>
  );
};

export default AgentManagement;
