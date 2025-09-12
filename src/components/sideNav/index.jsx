import React, { useState } from "react";
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
import { FaUsers } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaBiking } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";

const SideNav = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [activeitem, setActiveitem] = useState("dashboard");
  const handleClick = (path, name) => {
    setActiveitem(name);
    navigate(path);
  };

  const CustomerRole = [
    {label: "Dashboard", icon: <MdDashboard/>, path: "/customer/dashboard"},
    {label: "Parcel Booking", icon: <FaBox/>, path: "/customer/parcel-booking"},
    {label: "Payment", icon: <FaCreditCard/>, path: "/customer/payment"},
    {label: "Parcel Tracking", icon: <FaLocationDot/>, path: "/customer/tracking"},
    {label: "History & Reports", icon: <FaHistory/>, path: "/customer/history-and-reports"},
    {label: "Support", icon: <FaHeadset/>, path: "/customer/support"},
    {label: "Raise Complaint", icon: <GrCompliance/>, path: "/customer/raise-complaint"},
    {label: "Logout", icon: <FaSignOutAlt/>, path: "/auth/login"},
  ]

  const AdminRole = [
    {label: "Admin Dashboard", icon: <MdDashboard/>, path: "/admin/admin-dashboard"},
    {label: "User Management", icon: <FaUsers/>, path: "/admin/user-management"},
    {label: "Order Management", icon: <FaClipboardList/>, path: "/admin/order-management"},
    {label: "Manual Order Creation", icon: <FaClipboardList/>, path: "/admin/manual-order-creation"},
    {label: "Zone Management", icon: <FaGlobeAsia/>, path: "/admin/zone-management"},
    {label: "Pricing Management", icon: <FaMoneyBill1Wave/>, path: "/admin/pricing-management"},
    {label: "Payment Management", icon: <FaCreditCard/>, path: "/admin/payment-management"},
    {label: "Agent Managementt", icon: <FaBiking/>, path: "/admin/agent-management"},
    {label: "Support", icon: <FaHeadset/>, path: "/admin/support-admin"},
    {label: "Complaint", icon: <GrCompliance/>, path: "/admin/complaint"},
    {label: "CMS & Setting", icon: <IoSettingsSharp/>, path: "/admin/cms-&-setting"},
  ]

  const AgentrRole = [
    {label: "Agent Dashboard", icon: <MdDashboard/>, path: "/agent/agent-dashboard"},
    {label: "History And Earnings", icon: <FaHistory/>, path: "/agent/history-and-earnings"},
  ]

 

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
          <div
            className={`items ${activeitem === "dashboard" ? "active" : ""}`}
            onClick={() => handleClick("/customer/dashboard", "dashboard")}
          >
            <MdDashboard className="icon" color="white" />
            <p>Dashboard</p>
          </div>
          <div
            className={`items ${
              activeitem === "parcel-booking" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/customer/parcel-booking", "parcel-booking")
            }
          >
            <FaBox className="icon" color="white" />
            <p>Parcel Booking</p>
          </div>
          <div
            className={`items ${activeitem === "payment" ? "active" : ""}`}
            onClick={() => handleClick("/customer/payment", "payment")}
          >
            <FaCreditCard className="icon" color="white" />
            <p>Payment</p>
          </div>
          <div
            className={`items ${activeitem === "tracking" ? "active" : ""}`}
            onClick={() => handleClick("/customer/tracking", "tracking")}
          >
            <FaLocationDot className="icon" color="white" />
            <p>Parcel Tracking</p>
          </div>
          <div
            className={`items ${
              activeitem === "history-and-reports" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/customer/history-and-reports", "history-and-reports")
            }
          >
            <FaHistory className="icon" color="white" />
            <p>History & Reports</p>
          </div>
          <div
            className={`items ${activeitem === "support" ? "active" : ""}`}
            onClick={() => handleClick("/customer/support", "support")}
          >
            <FaHeadset className="icon" color="white" />
            <p>Support</p>
          </div>
          <div
            className={`items ${
              activeitem === "raise-complaint" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/customer/raise-complaint", "raise-complaint")
            }
          >
            <GrCompliance className="icon" color="white" />
            <p>Raise Complaint</p>
          </div>
          <div
            className={`items ${activeitem === "/login" ? "active" : ""}`}
            onClick={() => handleClick("/auth/login", "/login")}
          >
            <FaSignOutAlt className="icon" color="white" />
            <p>Logout</p>
          </div>

          {/* Admin Pannel*/}
          <div
            className={`items ${
              activeitem === "admin-dashboard" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/admin/admin-dashboard", "admin-dashboard")
            }
          >
            <MdDashboard className="icon" color="white" />
            <p>Admin Dashboard</p>
          </div>
          <div
            className={`items ${
              activeitem === "user-management" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/admin/user-management", "user-management")
            }
          >
            <FaUsers className="icon" color="white" />
            <p>User Management</p>
          </div>
          <div
            className={`items ${
              activeitem === "order-management" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/admin/order-management", "order-management")
            }
          >
            <FaClipboardList className="icon" color="white" />
            <p>Order Management</p>
          </div>
          <div
            className={`items ${
              activeitem === "manual-order-creation" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/admin/manual-order-creation", "manual-order-creation")
            }
          >
            <FaClipboardList className="icon" color="white" />
            <p>Manual Order Creation</p>
          </div>
          <div
            className={`items ${
              activeitem === "zone-management" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/admin/zone-management", "zone-management")
            }
          >
            <FaGlobeAsia className="icon" color="white" />
            <p>Zone Management</p>
          </div>
          <div
            className={`items ${
              activeitem === "pricing-management" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/admin/pricing-management", "pricing-management")
            }
          >
            <FaMoneyBill1Wave className="icon" color="white" />
            <p>Pricing Management</p>
          </div>
          <div
            className={`items ${
              activeitem === "payment-management" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/admin/payment-management", "payment-management")
            }
          >
            <FaCreditCard className="icon" color="white" />
            <p>Payment Management</p>
          </div>
          <div
            className={`items ${
              activeitem === "agent-management" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/admin/agent-management", "agent-management")
            }
          >
            <FaBiking className="icon" color="white" />
            <p>Agent Management</p>
          </div>
          <div
            className={`items ${
              activeitem === "support-admin" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/admin/support-admin", "support-admin")
            }
          >
            <FaHeadset className="icon" color="white" />
            <p>Support</p>
          </div>
          <div
            className={`items ${
              activeitem === "complaint" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/admin/complaint", "complaint")
            }
          >
            <GrCompliance className="icon" color="white" />
            <p>Complaint</p>
          </div>
          <div
            className={`items ${activeitem === "cms-&-setting" ? "active" : ""}`}
            onClick={() => handleClick("/admin/cms-&-setting", "cms-&-setting")}
          >
            <IoSettingsSharp className="icon" color="white" />
            <p>CMS & Setting</p>
          </div>

          {/* Agent Pannel */}

          <div
            className={`items ${
              activeitem === "agent-dashboard" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/agent/agent-dashboard", "agent-dashboard")
            }
          >
            <MdDashboard className="icon" color="white" />
            <p>Agent Dashboard</p>
          </div>
          <div
            className={`items ${
              activeitem === "history-and-earnings" ? "active" : ""
            }`}
            onClick={() =>
              handleClick("/agent/history-and-earnings", "history-and-earnings")
            }
          >
            <FaHistory className="icon" color="white" />
            <p>History And Earnings</p>
          </div>
        </div>
        
      </Container>
    </>
  );
};

export default SideNav;
