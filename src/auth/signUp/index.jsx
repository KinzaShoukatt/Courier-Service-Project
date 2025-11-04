import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, ImgDiv, Heading, Form, LastText } from "./style";
import LogoImg from "../../assets/images/logo.png";

import { FaUserEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOffSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import UseAuth from "../useHook";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const { signUp } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await signUp(data);
  };

  return (
    <>
      <Container>
        <ImgDiv>
          <img src={LogoImg} alt="" />
        </ImgDiv>
        <Heading>Create Your Account!</Heading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {errors.fullName && (
            <p className="errorMsg">{errors.fullName.message}</p>
          )}
          <div className="inputFields">
            <FaUserEdit className="icon" color="#006769" />
            <input
              type="full name"
              placeholder="Enter Your Name"
              {...register("fullName", {
                required: "Name is Required!",
                minLength: {
                  value: 3,
                  message: "Name should be atleast three characters",
                },
              })}
            />
          </div>

          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          <div className="inputFields">
            <MdEmail className="icon" color="#006769" />
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid Email!",
                },
              })}
            />
          </div>

          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
          <div className="inputFields2">
            <div className="passwordInput">
              <RiLockPasswordFill className="icon" color="#006769" />
              <input
                type={showPassword ? "text" : "password"}
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
            <div className="eyeIcon" onClick={togglePassword}>
              {showPassword ? (
                <MdRemoveRedEye
                  className="icon"
                  color="#006769"
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <IoEyeOffSharp
                  className="icon"
                  color="#006769"
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </div>

          {errors.phoneNumber && (
            <p className="errorMsg">{errors.phoneNumber.message}</p>
          )}
          <div className="inputFields">
            <FaPhone className="icon" color="#006769" />
            <input
              type="phoneNumber"
              placeholder="Enter Your Phone Number"
              {...register("phoneNumber", {
                required: "Phone Number is Required!",
                minLength: {
                  value: 11,
                  message: "Invalid Phone Number!",
                },
                maxLength: {
                  value: 11,
                  message: "Invalid Phone Number!",
                },
              })}
            />
          </div>
          <div className="inputFields3">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
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
