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
  RevenueChart,
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
import UseAdmin from "../useHooks";

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
  const {
    countParcels,
    dailyBookings,
    monthlyBookings,
    yearlyBookings,
    dailyDeliveredparcels,
    monthlyDeliveredparcels,
    yearlyDeliveredparcels,
    dailyRevenue,
    monthlyRevenue,
    yearlyRevenue,
  } = UseAdmin();

  const [totalParcels, setTotalParcels] = useState([]);

  const [totalBookingData, setTotalBookingData] = useState({});
  const [totalDeliveredParcels, setDeliveredParcels] = useState({});
  const [totalRevenue, setTotalRevenue] = useState({});

  const [bookingFilter, setBookingFilter] = useState("monthly");
  const [agentFilter, setAgentFilter] = useState("monthly");
  const [revenueFilter, setRevenueFilter] = useState("monthly");

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [isPopupOpen3, setIsPopupOpen3] = useState(false);

  const popupRef = useRef(null);
  const popupRef2 = useRef(null);
  const popupRef3 = useRef(null);

  useEffect(() => {
    const fetchParcels = async () => {
      const response = await countParcels();
      if (response) {
        setTotalParcels(response);
      }
    };
    fetchParcels();
  }, []);

  useEffect(() => {
    const fetchTotalBookings = async () => {
      let response;
      if (bookingFilter === "daily") {
        response = await dailyBookings();
      } else if (bookingFilter === "monthly") {
        response = await monthlyBookings();
      } else {
        response = await yearlyBookings();
      }
      setTotalBookingData(response);
    };
    fetchTotalBookings();
  }, [bookingFilter]);

  const bookingDatasets = {
    daily: {
      labels: totalBookingData.labels,
      // data: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
      data: totalBookingData.data,
    },
    monthly: {
      labels: totalBookingData.labels,
      data: totalBookingData.data,
    },
    yearly: {
      labels: totalBookingData.labels,
      data: totalBookingData.data,
    },
  };

  const bookingDataset = bookingDatasets[bookingFilter];
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

  // Delivered Parcels
  useEffect(() => {
    const fetchTotalDeliveredparcels = async () => {
      let response;
      if (agentFilter === "daily") {
        response = await dailyDeliveredparcels();
      } else if (agentFilter === "monthly") {
        response = await monthlyDeliveredparcels();
      } else {
        response = await yearlyDeliveredparcels();
      }
      setDeliveredParcels(response);
    };
    fetchTotalDeliveredparcels();
  }, [agentFilter]);

  const agentDatasets = {
    daily: {
      labels: totalDeliveredParcels.labels,
      data: totalDeliveredParcels.data,
    },
    monthly: {
      labels: totalDeliveredParcels.labels,
      data: totalDeliveredParcels.data,
    },
    yearly: {
      labels: totalDeliveredParcels.labels,
      data: totalDeliveredParcels.data,
    },
  };

  const agentDataset = agentDatasets[agentFilter];

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

  // Revenue
  useEffect(() => {
    const fetchTotalRevenue = async () => {
      let response;
      if (revenueFilter === "daily") {
        response = await dailyRevenue();
      } else if (revenueFilter === "monthly") {
        response = await monthlyRevenue();
      } else {
        response = await yearlyRevenue();
      }
      setTotalRevenue(response);
    };
    fetchTotalRevenue();
  }, [revenueFilter]);

  const revenueDatasets = {
    daily: {
      labels: totalRevenue.labels,
      data: totalRevenue.data,
    },
    monthly: {
      labels: totalRevenue.labels,
      data: totalRevenue.data,
    },
    yearly: {
      labels: totalRevenue.labels,
      data: totalRevenue.data,
    },
  };

  const revenueDataset = revenueDatasets[revenueFilter];

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef2.current && !popupRef2.current.contains(event.target)) {
        setIsPopupOpen2(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <p className="bold">Total Booked Parcels</p>
              <p>{totalParcels.totalBookings || 0}</p>
            </div>
            <div className="card">
              <p className="bold">UnAssigned Orders</p>
              <p>{totalParcels.order_placed}</p>
            </div>
            <div className="card">
              <p className="bold">Pending Pickups</p>
              <p>{totalParcels.scheduled}</p>
            </div>
            <div className="card">
              <p className="bold">Picked Up Orders</p>
              <p>{totalParcels.picked_up}</p>
            </div>
            <div className="card">
              <p className="bold">In Transit Orders</p>
              <p>{totalParcels.in_transit}</p>
            </div>
            <div className="card">
              <p className="bold">Out For Delivery Parcels</p>
              <p>{totalParcels.out_for_delivery}</p>
            </div>
            <div className="card">
              <p className="bold">Delivered Parcels</p>
              <p>{totalParcels.delivered}</p>
            </div>
            <div className="card">
              <p className="bold">Cancelled Parcels</p>
              <p>{totalParcels.cancelled}</p>
            </div>
          </div>
        </PickupDeliveryContainer>
        {/* booking Chart */}
        <Charts>
          {/* BookingReport */}
          <BookingchartContainer>
            <p className="firstHeading">Bookings Report:</p>
            <BookingChart>
              <div className="headingDiv">
                <p className="heading1">
                  Total Bookings: {totalBookingData.totalCount}
                </p>
                <p className="heading2"> {totalBookingData.period}</p>
              </div>
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
            <p className="firstHeading">Agent Performance:</p>
            <AgentChart>
              <div className="headingDiv">
                <p className="heading1">
                  Total Order Delivered: {totalDeliveredParcels.totalCount}
                </p>
                <p className="heading2"> {totalDeliveredParcels.period}</p>
              </div>
              <div className="filterContainer" ref={popupRef2}>
                <button
                  onClick={() => setIsPopupOpen2(!isPopupOpen2)}
                  className="filter-btn"
                >
                  Choose Filter
                </button>

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
          <p className="firstHeading">Revenue Report:</p>
          <RevenueChart>
            <div className="headingDiv">
              <p className="heading1">
                Total Revenue: {totalRevenue.totalRevenue}
              </p>
              <p className="heading2"> {totalRevenue.period}</p>
            </div>
            <div className="filterContainer" ref={popupRef3}>
              <button
                onClick={() => setIsPopupOpen3(!isPopupOpen3)}
                className="filter-btn"
              >
                Choose Filter
              </button>

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
            <div className="chartBox">
              <Bar
                key={revenueFilter}
                data={revenueChartData}
                options={options}
              />
            </div>
          </RevenueChart>
        </RevenuechartContainer>
      </Container>
    </>
  );
};

export default AdminDashboard;
