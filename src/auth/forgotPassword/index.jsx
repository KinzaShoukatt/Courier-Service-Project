// ForgotPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Container, ImgDiv, Heading, Form, LastText } from "./style";
import LogoImg from "../../assets/images/logo.png";
import { MdEmail } from "react-icons/md";
import UseAuth from "../useHook";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { forgotPassword } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await forgotPassword(data);
  };

  return (
    <Container>
      <ImgDiv>
        <img src={LogoImg} alt="" />
      </ImgDiv>
      <Heading>Enter Your Registered Email</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputFields">
          <MdEmail color="#006769" size={18} />
          <input
            type="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
        </div>
        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        <button className="btn">Send OTP</button>
      </Form>
      <LastText>
        <p>
          Go Back to
          <strong onClick={() => navigate("/auth/login")}>Login</strong>
        </p>
      </LastText>
    </Container>
  );
};

export default ForgotPassword;
