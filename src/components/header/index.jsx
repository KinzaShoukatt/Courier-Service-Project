import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container } from "./style";

import { MdLocationOn } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = ({toggleSidebar}) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div onClick={toggleSidebar} className="burgerIcon" >
        <GiHamburgerMenu className="icon" color="#006769" />
      </div>
      <div className="tracking">
        <MdLocationOn color="#006769" size={20} />
        <input type="text" placeholder="Live Tracking" />
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
