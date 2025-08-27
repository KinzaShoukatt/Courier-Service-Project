import React, { useState } from "react";
import { useNavigate} from  "react-router-dom";

import { Container, ImgDiv, Heading, Form, LastText } from "./style";
import LogoImg from "../../assets/images/logo.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOffSharp } from "react-icons/io5";
import GoogleLogo from "../../assets/images/googleLogo.png"

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <ImgDiv>
        <img src={LogoImg} alt="" />
      </ImgDiv>
      <Heading>
        Sign In to Your Account!
      </Heading>
      <Form>
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
          <p onClick={() => navigate("/auth/forgotPassword")}>Forget Password?</p>
          
          <button onClick={() => navigate("/customer/dashboard")} className="btn">Login</button>
          
          <p className="or">OR</p>
          <button className="btn1"><img src={GoogleLogo}/>Continue with Google</button>
          
      </Form>
      <LastText>
        <p>
          Don't have an Account?
            <strong onClick={() => navigate("/auth/signUp")}>Sign Up</strong>
        </p>
      </LastText>
    </Container>
  );
};

export default Login;
