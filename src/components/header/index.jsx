import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

import { GiHamburgerMenu } from "react-icons/gi";
import UseCustomer from "../../pages/customer/useHooks";
import { useDispatch, useSelector } from "react-redux";
import { setUserName, setProfilePic } from "../../store/userSlice";

const Header = ({ toggleSidebar }) => {
  // const [image, setImage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profilePic = useSelector((state) => state.user.profilePic);
  const userName = useSelector((state) => state.user.userName);
  // console.log(location.pathname, "here is my location");
  const { getCustomerProfile, getCustomerProfilePicture } = UseCustomer();

  let headerText = "Customer Pannel";
  const role = localStorage.getItem("role");

  if (role == "customer") {
    headerText = "Customer Pannel";
  } else if (role == "admin") {
    headerText = "Admin Pannel";
  } else if (role == "agent") {
    headerText = "Agent Pannel";
  }

  const BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  // useEffect(() => {
  //   const fetchProfilePic = async () => {
  //     const data = await getCustomerProfilePicture();
  //     console.log("Profile response:", data);

  //     if (data?.url) {
  //       setImage(`${BASE_URL}${data.url}`);
  //     } else {
  //       const name = localStorage.getItem("UserName");
  //       if (name) setUserName(name);
  //     }
  //   };

  //   fetchProfilePic();
  // }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      const role = localStorage.getItem("role");
      if (!role) return;

      try {
        const data = await getCustomerProfile();
        if (data) {
          // Set name in Redux
          if (data.fullName) dispatch(setUserName(data.fullName));

          // Set profile pic in Redux if user uploaded one
          if (data.ProfilePictures?.length > 0) {
            const fullUrl = `${BASE_URL}${data.ProfilePictures[0].url}`;
            dispatch(setProfilePic(fullUrl));
          } else {
            // If no profile picture, clear Redux profilePic
            dispatch(setProfilePic(null));
          }
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [dispatch, BASE_URL]);

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
      {/* 
      <div className="imgProfileDiv">
        <div className="imgDiv" onClick={() => navigate("/customer/profile")}>
          {image ? (
            <img src={image} alt="profilepicture" className="profileImg" />
          ) : (
            <div className="placeholder">
              {userName ? userName.trim().charAt(0).toUpperCase() : "?"}
            </div>
          )}
        </div> */}

      <div className="imgProfileDiv">
        <div className="imgDiv" onClick={() => navigate("/customer/profile")}>
          {profilePic ? (
            <img src={profilePic} alt="profilepicture" className="profileImg" />
          ) : userName ? (
            <div className="placeholder">
              {userName.trim().charAt(0).toUpperCase()}
            </div>
          ) : (
            <div className="placeholder">?</div>
          )}
        </div>

        <button
          className="profile"
          // onClick={() => navigate("/customer/profile")}
          onClick={() => {
            if (role === "customer") navigate("/customer/profile");
            else if (role === "admin") navigate("/admin/profile");
            else if (role === "agent") navigate("/agent/profile");
          }}
        >
          Profile
        </button>
      </div>
    </Container>
  );
};

export default Header;
