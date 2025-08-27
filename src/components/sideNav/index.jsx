import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import LogoImg from "../../assets/images/LogoWhite.png";

import { MdDashboard } from "react-icons/md";
import { FaBox } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const SideNav = ({toggleSidebar}) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className="closeBtn" onClick={toggleSidebar}>
        <IoClose size={22} color="white" />
      </div>
        <div className="ImgDiv">
          <img src={LogoImg} alt="" />
        </div>
        <div className="parentDiv">
          <div className="items" onClick={() => navigate("/customer/dashboard")}>
            <MdDashboard className="icon" color="white" />
            <p>Dashboard</p>
          </div>
          <div className="items" onClick={() => navigate("/customer/parcelBooking")}>
            <FaBox className="icon" color="white" />
            <p>Parcel Booking</p>
          </div>
          <div className="items" onClick={() => navigate("/customer/payment")}>
            <FaCreditCard className="icon" color="white" />
            <p>Payment</p>
          </div>
          <div className="items" onClick={() => navigate("/customer/tracking")}>
              <FaLocationDot className="icon" color= "white"/>
              <p>Parcel Tracking</p>
          </div>
          <div className="items" onClick={() => navigate("/customer/historyReports")}>
            <FaHistory className="icon" color="white" />
            <p>History & Reports</p>
          </div>
          <div className="items">
            <FaHeadset className="icon" color="white" />
            <p onClick={() => navigate("/customer/support")}>Support</p>
          </div>
          <div className="items">
            <FaSignOutAlt className="icon" color="white" />
            <p onClick={() => navigate("/auth/login")}>Logout</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SideNav;
