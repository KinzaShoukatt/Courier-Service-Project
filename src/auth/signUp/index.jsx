import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, ImgDiv, Heading, Form, LastText } from "./style";
import LogoImg from "../../assets/images/logo.png";

import { FaUserEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import UseAuth from "../useHook";

import { showSuccess, showError } from "../../utils/toast";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signUp(data);
      if (response?.user) {
        showSuccess(response.message || "Sign Up Successful!");
        navigate("/auth/verify-otp", { state: { email: response.user.email } });
      } else {
        showError(response.message || "SignUp Failed");
      }
    } catch (error) {
      console.error(error);
      showError("Something went wrong, please try again!");
    }
  };

  return (
    <>
      <Container>
        <ImgDiv>
          <img src={LogoImg} alt="" />
        </ImgDiv>
        <Heading>Create Your Account!</Heading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {errors.name && <p className="errorMsg">{errors.name.message}</p>}
          <div className="inputFields">
            <FaUserEdit color="#006769" size={18} />
            <input
              type="full name"
              placeholder="Enter Your Name"
              {...register("fullName", {
                required: "Name is Required",
                minLength: {
                  value: 3,
                  message: "Name should be atleast three characters",
                },
              })}
            />
          </div>

          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          <div className="inputFields">
            <MdEmail color="#006769" size={18} />
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid Email",
                },
              })}
            />
          </div>

          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
          <div className="inputFields2">
            <div className="passwordInput">
              <RiLockPasswordFill color="#006769" size={18} />
              <input
                type="password"
                placeholder="Enter Your Password"
                {...register("password", {
                  required: "Password is Required!",
                  minLength: {
                    value: 6,
                    message:
                      "Password should contain atleast 6 characters long!",
                  },
                })}
              />
            </div>
            <div className="eyeIcon">
              <IoEyeOffSharp color="#006769" size={18} />
            </div>
          </div>

          {errors.tel && <p className="errorMsg">{errors.tel.message}</p>}
          <div className="inputFields">
            <FaPhone color="#006769" size={16} />
            <input
              type="phoneNumber"
              placeholder="Enter Your Phone Number"
              {...register("phoneNumber", {
                required: "Phone Number is Required",
                minLength: {
                  value: 11,
                  message: "Invalid Phone Number",
                },
                maxLength: {
                  value: 11,
                  message: "Invalid Phone Number",
                },
              })}
            />
          </div>

          <button type="submit" className="btn">
            Sign Up
          </button>
        </Form>
        <LastText>
          <p>
            Already have an Account?
            <strong onClick={() => navigate("/auth/login")}>Login</strong>
          </p>
        </LastText>
      </Container>
    </>
  );
};

export default SignUp;
