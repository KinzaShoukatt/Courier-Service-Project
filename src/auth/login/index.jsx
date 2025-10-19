import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Container, ImgDiv, Heading, Form, LastText } from "./style";
import LogoImg from "../../assets/images/logo.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOffSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import UseAuth from "../useHook";
import { GoogleLogin } from "@react-oauth/google";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const { login, googleLogin } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await login(data);
  };

  const handleGoogleLogin = async (response) => {
    const idToken = response.credential;
    await googleLogin({ idToken });
    navigate("/customer/dashboard");
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
              type={showPassword ? "text" : "password"}
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

        <p onClick={() => navigate("/auth/forgot-password")}>
          Forget Password?
        </p>

        <button type="submit" className="btn">
          Login
        </button>

        <p className="or">OR</p>
        <div className="googleLogin">
          <GoogleLogin
            className="googleLoginn"
            onSuccess={handleGoogleLogin}
            onError={() => console.log("Login Failed")}
            width="100%"
            size="large"
            shape="rectangular"
            theme="outline"
          />
        </div>
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
