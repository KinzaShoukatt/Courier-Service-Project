import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, ImgDiv, Heading, Form, LastText } from "./style";
import LogoImg from "../../assets/images/logo.png";

import { FaUserEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <ImgDiv>
          <img src={LogoImg} alt="" />
        </ImgDiv>
        <Heading>Create Your Account!</Heading>
        <Form>
          <div className="inputFields">
            <FaUserEdit color="#006769" size={18} />
            <input type="name" placeholder="Enter Your Name" />
          </div>
          <div className="inputFields">
            <MdEmail color="#006769" size={18} />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="inputFields2">
            <div className="passwordInput">
              <RiLockPasswordFill color="#006769" size={18} />
              <input type="password" placeholder="Enter Your Password" />
            </div>
            <div className="eyeIcon">
              <IoEyeOffSharp color="#006769" size={18} />
            </div>
          </div>
          <div className="inputFields">
            <FaPhone color="#006769" size={16} />
            <input type="contact" placeholder="Enter Your Phone Number" />
          </div>
          <button onClick={() => navigate("/auth/verifyOtp")} className="btn">
            Sign Up
          </button>
        </Form>
        <LastText>
          <p>
            Already have an Account?<strong onClick={() => navigate("/auth/login")}>Login</strong>
          </p>
        </LastText>
      </Container>
    </>
  );
};

export default SignUp;
