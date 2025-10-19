import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Container, ImgDiv, Heading, Form, LastText } from "./style";
import LogoImg from "../../assets/images/logo.png";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOffSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { useForm } from "react-hook-form";
import UseAuth from "../useHook";
import { showError } from "../../utils/toast";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const { resetPassword } = UseAuth();
  const location = useLocation();
  const { resetToken } = location.state || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      showError("Passwords do not match!");
      return;
    }
    if (!resetToken) {
      return alert("Reset token missing. Please try again.");
    }
    await resetPassword({
      resetToken,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
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
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
          </div>
          <div className="eyeIcon" onClick={togglePassword}>
            {showPassword ? (
              <MdRemoveRedEye
                color="#006769"
                size={18}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <IoEyeOffSharp
                color="#006769"
                size={18}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </div>
        {errors.password && (
          <p className="errorMsg">{errors.password.message}</p>
        )}
        <div className="inputFields2">
          <div className="passwordInput">
            <RiLockPasswordFill color="#006769" size={18} />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Your Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required!",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match!",
              })}
            />
          </div>
          <div className="eyeIcon" onClick={toggleConfirmPassword}>
            {showConfirmPassword ? (
              <MdRemoveRedEye
                color="#006769"
                size={18}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <IoEyeOffSharp
                color="#006769"
                size={18}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </div>
        {errors.confirmPassword && (
          <p className="errorMsg">{errors.confirmPassword.message}</p>
        )}
        <button className="btn">Confirm</button>
      </Form>
    </Container>
  );
};

export default ResetPassword;
