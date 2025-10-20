import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "./style";

import { GiHamburgerMenu } from "react-icons/gi";
import UseCustomer from "../../pages/customer/useHooks";
const Header = ({ toggleSidebar }) => {
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname, "here is my location");
  const { getCustomerProfile } = UseCustomer();

  let headerText = "Customer Pannel";

  if (location.pathname?.startsWith("/customer")) {
    headerText = "Customer Pannel";
  } else if (location.pathname?.startsWith("/admin")) {
    headerText = "Admin Pannel";
  } else {
    headerText = "Agent Pannel";
  }

  const BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  console.log(BASE_URL, "base Url");
  useEffect(() => {
    const getProfile = async () => {
      const data = await getCustomerProfile();
      if (data) {
        if (data.ProfilePictures?.length > 0) {
          setImage(`${BASE_URL}${data.ProfilePictures[0].url}`);
        }
      }
    };
    getProfile();
  }, []);

  return (
    <Container>
      <div className="headertext">
        <div onClick={toggleSidebar} className="burgerIcon">
          <GiHamburgerMenu className="icon" color="#006769" />
        </div>
        <div>
          <h2>{headerText}</h2>
        </div>
      </div>
      <div className="imgProfileDiv">
        <div className="imgDiv">
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }}
          />
          {image && <img src={image} alt="profile" className="profileImg" />}
        </div>
        <button
          className="profile"
          onClick={() => navigate("/customer/profile")}
        >
          Profile
        </button>
      </div>
    </Container>
  );
};

export default Header;
