import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, ImgDiv, Heading, Para, Form, LastText } from "./style";
import LogoImg from "../../assets/images/logo.png";

const VerifyOtp = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ImgDiv>
        <img src={LogoImg} alt="" />
      </ImgDiv>
      <Heading>Enter OTP Here!</Heading>
      <Para>We Sent an OTP to Your Email</Para>
      <Form>
        <div className="inputFields">
          <input className="box" type="text" />
          <input className="box" type="text" />
          <input className="box" type="text" />
          <input className="box" type="text" />
          <input className="box" type="text" />
          <input className="box" type="text" />
        </div>
        <button onClick={() => navigate("/auth/resetPassword")} className="btn">
          Continue
        </button>
        <LastText>
          <p>
            Go Back to
            <strong onClick={() => navigate("/auth/login")}>Login</strong>
          </p>
        </LastText>
      </Form>
    </Container>
  );
};

export default VerifyOtp;
