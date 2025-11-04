import React from "react";
import { Container, FormDiv, AgentchartContainer } from "./style";
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
import UseAdmin from "../useHooks";
import { useForm } from "react-hook-form";

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
  const [countAllAgents, setCountAllAgents] = useState([]);
  const {
    countAgents,
    createUser,
    dailyDeliveredparcels,
    monthlyDeliveredparcels,
    yearlyDeliveredparcels,
  } = UseAdmin();
  const [totalDeliveredParcels, setDeliveredParcels] = useState({});
  const [agentFilter, setAgentFilter] = useState("monthly");
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const popupRef2 = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchParcels = async () => {
      const response = await countAgents();
      if (response) {
        setCountAllAgents(response);
      }
    };
    fetchParcels();
  }, []);

  const handleCreateUser = async (body) => {
    const payload = {
      fullName: body.fullName,
      email: body.email,
      password: body.password,
      phoneNumber: body.phoneNumber,
      role: body.role,
    };
    console.log(payload);
    await createUser(payload);
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

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "bottom" },
    },
  };

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
          <p>{countAllAgents.totalAgents}</p>
        </div>
        <div className="card">
          <p className="heading">Active Agents</p>
          <p>{countAllAgents.activeAgents}</p>
        </div>
      </div>
      {/* Register Agent */}
      <FormDiv>
        <p className="heading">Register Agent</p>
        <form onSubmit={handleSubmit(handleCreateUser)}>
          <div className="inputFields">
            <div className="inputFeild">
              <label htmlFor="">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter Name"
                {...register("fullName", {
                  required: "Name is Required!",
                  minLength: {
                    value: 3,
                    message: "Name should be atleast three characters!",
                  },
                })}
              />
              {errors.fullName && (
                <p className="errorMsg">{errors.fullName.message}</p>
              )}
            </div>
            <div className="inputFeild">
              <label htmlFor="">Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid Email",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="inputFields">
            <div className="inputFeild">
              <label htmlFor="">Phone Number</label>
              <br />
              <input
                type="text"
                placeholder="Enter Phone No"
                {...register("phoneNumber", {
                  required: "Phone Number is Required!",
                  minLength: {
                    value: 11,
                    message: "Invalid Phone Number",
                  },
                  maxLength: {
                    value: 11,
                    message: "Invalid Phone Number",
                  },
                })}
              />
              {errors.phoneNumber && (
                <p className="errorMsg">{errors.phoneNumber.message}</p>
              )}
            </div>
            <div className="inputFeild">
              <label htmlFor="">Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                {...register("password", {
                  required: "Password is Required!",
                  minLength: {
                    value: 6,
                    message:
                      "Password should contain atleast 6 characters long!",
                  },
                })}
              />
              {errors.password && (
                <p className="errorMsg">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="inputFields">
            <div className="inputFeild">
              <label htmlFor="">Role</label>
              <br />
              <input
                type="text"
                value="agent"
                {...register("role", {
                  required: "Role is Required!",
                })}
              />
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

      {/* agent Performance */}
      <AgentchartContainer>
        <p className="mainHeading">Agent Performance</p>
        <div className="headingDiv">
          <h2 className="heading1">
            Total Order Delivered: {totalDeliveredParcels.totalCount}
          </h2>
          <h2 className="heading2"> {totalDeliveredParcels.period}</h2>
        </div>
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
