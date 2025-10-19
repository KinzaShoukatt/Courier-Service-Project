import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { FaUsers } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaBiking } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";

const SideNav = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeitem, setActiveitem] = useState("");

  const handleClick = (path) => {
    setActiveitem(path);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth/login", { replace: true });
  };

  const role = localStorage.getItem("role");

  const menus = {
    customer: [
      {
        label: "Dashboard",
        icon: <MdDashboard />,
        path: "/customer/dashboard",
      },
      {
        label: "Parcel Booking",
        icon: <FaBox />,
        path: "/customer/parcel-booking",
      },
      { label: "Payment", icon: <FaCreditCard />, path: "/customer/payment" },
      {
        label: "Parcel Tracking",
        icon: <FaLocationDot />,
        path: "/customer/tracking",
      },
      {
        label: "History & Reports",
        icon: <FaHistory />,
        path: "/customer/history-and-reports",
      },
      { label: "Support", icon: <FaHeadset />, path: "/customer/support" },
      {
        label: "Raise Complaint",
        icon: <GrCompliance />,
        path: "/customer/raise-complaint",
      },
      { label: "Logout", icon: <FaSignOutAlt />, path: "/auth/login" },
    ],

    admin: [
      {
        label: "Admin Dashboard",
        icon: <MdDashboard />,
        path: "/admin/admin-dashboard",
      },
      {
        label: "User Management",
        icon: <FaUsers />,
        path: "/admin/user-management",
      },
      {
        label: "Order Management",
        icon: <FaClipboardList />,
        path: "/admin/order-management",
      },
      {
        label: "Parcel Tracking",
        icon: <FaLocationDot />,
        path: "/admin/tracking",
      },
      {
        label: "Manual Order Creation",
        icon: <FaClipboardList />,
        path: "/admin/manual-order-creation",
      },
      {
        label: "Zone Management",
        icon: <FaGlobeAsia />,
        path: "/admin/zone-management",
      },
      {
        label: "Pricing Management",
        icon: <FaMoneyBill1Wave />,
        path: "/admin/pricing-management",
      },
      {
        label: "Payment Management",
        icon: <FaCreditCard />,
        path: "/admin/payment-management",
      },
      {
        label: "Agent Managementt",
        icon: <FaBiking />,
        path: "/admin/agent-management",
      },
      { label: "Support", icon: <FaHeadset />, path: "/admin/support-admin" },
      { label: "Complaint", icon: <GrCompliance />, path: "/admin/complaint" },
      {
        label: "CMS & Setting",
        icon: <IoSettingsSharp />,
        path: "/admin/cms-&-setting",
      },
      { label: "Logout", icon: <FaSignOutAlt />, path: "/auth/login" },
    ],

    agent: [
      {
        label: "Agent Dashboard",
        icon: <MdDashboard />,
        path: "/agent/agent-dashboard",
      },
      {
        label: "History And Earnings",
        icon: <FaHistory />,
        path: "/agent/history-and-earnings",
      },
      { label: "Logout", icon: <FaSignOutAlt />, path: "/auth/login" },
    ],
  };

  const roleMenus = menus[role] || [];
  // console.log(roleMenus);

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
          {roleMenus.map((item) => (
            <div
              key={item.label}
              className={`items ${
                location.pathname === item.path ? "active" : ""
              }`}
              onClick={() => {
                if (item.label === "Logout") {
                  handleLogout();
                } else {
                  handleClick(item.path, item.label);
                }
              }}
            >
              {item.icon}
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default SideNav;
