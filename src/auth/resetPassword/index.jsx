import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, ImgDiv, Heading, Form, LastText } from "./style";
import LogoImg from "../../assets/images/logo.png";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOffSharp } from "react-icons/io5";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
     <Container>
          <ImgDiv>
            <img src={LogoImg} alt="" />
          </ImgDiv>
          <Heading>
            Create New Password!
          </Heading>
          <Form>
            <div className="inputFields2">
              <div className="passwordInput">
                <RiLockPasswordFill color="#006769" size={18} />
                <input type="password" placeholder="Enter Your Password" />
              </div>
              <div className="eyeIcon">
                <IoEyeOffSharp color="#006769" size={18} />
              </div>
            </div>
            <div className="inputFields2">
              <div className="passwordInput">
                <RiLockPasswordFill color="#006769" size={18} />
                <input type="password" placeholder="Confirm Your Password" />
              </div>
              <div className="eyeIcon">
                <IoEyeOffSharp color="#006769" size={18} />
              </div>
            </div>
              <button onClick={() => navigate("/auth/login")} className="btn">Confirm</button>
          </Form>
          
        </Container>
  );
};

export default ResetPassword;
