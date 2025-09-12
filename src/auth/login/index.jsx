import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Container, ImgDiv, Heading, Form, LastText } from "./style";
import LogoImg from "../../assets/images/logo.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOffSharp } from "react-icons/io5";
import GoogleLogo from "../../assets/images/googleLogo.png";
import UseAuth from "../useHook";
import { showError, showSuccess } from "../../utils/toast";

const Login = () => {
  const navigate = useNavigate();
  const { login } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try{
      const response = await login(data);
      if(response.success) {
        showSuccess(response.message || "Login Successful!");
        navigate("/customer/dashboard");
      } else {
        showError(response.message || "Invalid email or password");
      } 
    } catch(error) {
        showError("Something went wrong, please try again!");
    }
  };
   
  return (
    <Container>
      <ImgDiv>
        <img src={LogoImg} alt="Logo" />
      </ImgDiv>
      <Heading>Sign In to Your Account!</Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <div className="inputFields">
          <MdEmail color="#006769" size={18} />
          <input
            type="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
        </div>
        {errors.email && <p className="errorMsg">{errors.email.message}</p>}

        {/* Password Input */}
        <div className="inputFields2">
          <div className="passwordInput">
            <RiLockPasswordFill color="#006769" size={18} />
            <input
              type="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
          </div>
          <div className="eyeIcon">
            <IoEyeOffSharp color="#006769" size={18} />
          </div>
        </div>
        {errors.password && (
          <p className="errorMsg">{errors.password.message}</p>
        )}

        <p onClick={() => navigate("/auth/forgot-password")}>
          Forget Password?
        </p>

        <button type="submit" className="btn">
          Login
        </button>

        <p className="or">OR</p>
        <button type="button" className="btn1">
          <img src={GoogleLogo} alt="Google Logo" />
          Continue with Google
        </button>
      </Form>

      <LastText>
        <p>
          Don't have an Account?
          <strong onClick={() => navigate("/auth/sign-up")}>Sign Up</strong>
        </p>
      </LastText>
    </Container>
  );
};

export default Login;
