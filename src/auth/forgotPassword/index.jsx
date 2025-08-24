// ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {Container, ImgDiv, Heading, Form, LastText} from './style'
import LogoImg from '../../assets/images/logo.png'
import { MdEmail } from "react-icons/md";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <Container>
          <ImgDiv>
          <img src={LogoImg} alt="" />
          </ImgDiv>
          <Heading>Enter Your Registered Email</Heading>
          <Form>
            <div className='inputFields'>
              <MdEmail color='#006769' size={18}/>
              <input type="email" placeholder='Enter Your Email' />
            </div>
            <button onClick={() => navigate("/auth/verifyOtp")} className='btn'>Send OTP</button>
          </Form>
          <LastText>
            <p>Go Back to<strong onClick={() => navigate("/auth/login")}>Login</strong></p>
          </LastText>
        </Container>
  );
};

export default ForgotPassword;
