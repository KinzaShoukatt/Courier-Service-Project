import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Container } from "./style";

import { FaCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname , 'here is my location');
  
  return (
    <Container>
      <div className="headertext">
        <div onClick={toggleSidebar} className="burgerIcon">
          <GiHamburgerMenu className="icon" color="#006769" />
        </div>
        <div>
          <h2>Customer Pannel</h2>
        </div>
      </div>
      <div className="profile">
        <FaCircleUser
          onClick={() => navigate("/customer/profile")}
          color="#006769"
          size={25}
        />
      </div>
    </Container>
  );
};

export default Header;
