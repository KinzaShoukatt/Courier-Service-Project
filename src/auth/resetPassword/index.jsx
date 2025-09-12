import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, ImgDiv, Heading, Form, LastText } from "./style";
import LogoImg from "../../assets/images/logo.png";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOffSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import UseAuth from "../useHook";
import { showError, showSuccess } from "../../utils/toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { resetPassword } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    if(data.password !== data.confirmPassword) {
      showError("Passwords do not match!")
      return;
    }
    try {
      const response = await resetPassword(data);
      if (response.success) {
        showSuccess(response.message || "Password Reset Successfully!");
        navigate("/auth/login");
      } else {
        showError(response.message || "Password Reset Failed!");
      }
    } catch (error) {
      console.error(error);
      showError("Something went wrong, please try again!");
    }
  };

  return (
    <Container>
      <ImgDiv>
        <img src={LogoImg} alt="" />
      </ImgDiv>
      <Heading>Create New Password!</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        {errors.password && <p>{errors.password.message}</p>}
        <div className="inputFields2">
          <div className="passwordInput">
            <RiLockPasswordFill color="#006769" size={18} />
            <input
              type="password"
              placeholder="Confirm Your Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => 
                  value === watch("password") || "Passwords do not match",
              })}
            />
          </div>
          <div className="eyeIcon">
            <IoEyeOffSharp color="#006769" size={18} />
          </div>
        </div>
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button className="btn">Confirm</button>
      </Form>
    </Container>
  );
};

export default ResetPassword;
