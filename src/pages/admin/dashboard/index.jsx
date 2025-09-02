import React, { useEffect, useState, useRef } from "react";

import {
  Heading,
  Container,
  PickupDeliveryContainer,
  Charts,
  BookingchartContainer,
  BookingChart,
  AgentchartContainer,
  AgentChart,
  RevenuechartContainer,
} from "./style";

import { Line, Pie, Bar } from "react-chartjs-2";
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

const AdminDashboard = () => {
  const bookingDatasets = {
    daily: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [5, 10, 8, 3, 12, 15, 10],
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
      data: [10, 20, 25, 5, 50, 40, 60, 100, 120, 150, 100, 130],
    },
    yearly: {
      labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
      data: [300, 500, 1000, 1800, 2500, 2500],
    },
  };

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
  const revenueDatasets = {
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

  const [bookingFilter, setBookingFilter] = useState("daily");
  const [agentFilter, setAgentFilter] = useState("daily");
  const [revenueFilter, setRevenueFilter] = useState("daily");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [isPopupOpen3, setIsPopupOpen3] = useState(false);

  const bookingDataset = bookingDatasets[bookingFilter];
  const totalBookings = bookingDataset.data.reduce((a, b) => a + b, 0);

  const agentDataset = agentDatasets[agentFilter];
  const totalAgents = agentDataset.data.reduce((a, b) => a + b, 0);

  const revenueDataset = revenueDatasets[revenueFilter];
  const totalRevenue = revenueDataset.data.reduce((a, b) => a + b, 0);

  const bookingChartData = {
    labels: bookingDataset.labels,
    datasets: [
      {
        label: "Bookings",
        data: bookingDataset.data,
        borderColor: "#006769",
        backgroundColor: "#006769",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const agentChartData = {
    labels: agentDataset.labels,
    datasets: [
      {
        label: "Bookings",
        data: agentDataset.data,
        backgroundColor: [
          "#4D96FF ",
          "#6BCB77",
          "#FFD93D",
          "#FF6B6B",
          "#845EC2",
          "#FF9671 ",
          "#2EC4B6 ",
          "#A3A1FB ",
          "#F9C80E ",
          "#E07A5F ",
          "#90E0EF ",
          "#73A580",
        ],
        BorderWidth: 1,
      },
    ],
  };

  const revenueChartData = {
    labels: revenueDataset.labels,
    datasets: [
      {
        label: "Revenue",
        data: revenueDataset.data,
        borderColor: "#006769",
        backgroundColor: "#006769",
        fill: true,
        tension: 0.3,
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

  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const popupRef3 = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef3.current && !popupRef3.current.contains(event.target)) {
        setIsPopupOpen3(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Heading>
        <p>Dashboard</p>
      </Heading>
      <Container>
        <PickupDeliveryContainer>
          <p className="heading1">Pickup/Delivery Status Overview</p>
          <div className="cardParent">
            <div className="card">
              <p className="bold">Scheduled</p>
              <p>350</p>
            </div>
            <div className="card">
              <p className="bold">In Transit</p>
              <p>250</p>
            </div>
            <div className="card">
              <p className="bold">Out for Delivery</p>
              <p>200</p>
            </div>
            <div className="card">
              <p className="bold">Delivered</p>
              <p>500</p>
            </div>
            <div className="card">
              <p className="bold">Returned</p>
              <p>30</p>
            </div>
          </div>
        </PickupDeliveryContainer>
        {/* booking Chart */}
        <Charts>
          {/* BookingReport */}
          <BookingchartContainer>
            <p>Bookings Report:</p>
            <BookingChart>
              <h2 className="heading">
                Total Bookings: {totalBookings} ({bookingFilter.toUpperCase()})
              </h2>
              <div className="filterContainer" ref={popupRef}>
                <button
                  onClick={() => setIsPopupOpen(!isPopupOpen)}
                  className="filter-btn"
                >
                  Choose Filter
                </button>
                {/* Popup */}
                {isPopupOpen && (
                  <div className="popupMenu">
                    <button
                      onClick={() => {
                        setBookingFilter("daily");
                        setIsPopupOpen(false);
                      }}
                    >
                      Daily
                    </button>
                    <button
                      onClick={() => {
                        setBookingFilter("monthly");
                        setIsPopupOpen(false);
                      }}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => {
                        setBookingFilter("yearly");
                        setIsPopupOpen(false);
                      }}
                    >
                      Yearly
                    </button>
                  </div>
                )}
              </div>

              {/* Chart */}
              <div className="chartBox">
                <Line
                  key={bookingFilter + "bookings"}
                  data={bookingChartData}
                  options={options}
                />
              </div>
            </BookingChart>
          </BookingchartContainer>
          {/* agent performance */}
          <AgentchartContainer>
            <p>Agent Performance:</p>
            <AgentChart>
              <h2 className="heading">
                Total Order Delivered: {totalAgents} (
                {agentFilter.toUpperCase()})
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
                <Pie
                  key={agentFilter}
                  data={agentChartData}
                  options={options}
                />
              </div>
            </AgentChart>
          </AgentchartContainer>
        </Charts>
        {/* Revenue Chart */}
        <RevenuechartContainer>
          <h2 className="heading">
            Total Revenue: {totalRevenue} ({revenueFilter.toUpperCase()})
          </h2>
          <div className="filterContainer" ref={popupRef3}>
            <button
              onClick={() => setIsPopupOpen3(!isPopupOpen3)}
              className="filter-btn"
            >
              Choose Filter
            </button>
            {/* Popup */}
            {isPopupOpen3 && (
              <div className="popupMenu">
                <button
                  onClick={() => {
                    setRevenueFilter("daily");
                    setIsPopupOpen3(false);
                  }}
                >
                  Daily
                </button>
                <button
                  onClick={() => {
                    setRevenueFilter("monthly");
                    setIsPopupOpen3(false);
                  }}
                >
                  Monthly
                </button>
                <button
                  onClick={() => {
                    setRevenueFilter("yearly");
                    setIsPopupOpen3(false);
                  }}
                >
                  Yearly
                </button>
              </div>
            )}
          </div>

          {/* Chart */}
          <div className="chartBox">
            <Bar
              key={revenueFilter}
              data={revenueChartData}
              options={options}
            />
          </div>
        </RevenuechartContainer>
      </Container>
    </>
  );
};

export default AdminDashboard;
