import React from "react";
import { AuthApiEndPoints } from "../libs/http-service/api/auth.api";

const UseAuth = () => {
  const login = async (body) => {
    try {
      const response = await AuthApiEndPoints.login(body);
      console.log(response.message);
      return response;
    } catch (error) {
      console.log("Login Error: ", error);
      return { success: false, message: "Network error" };
    }
  };

  const signUp = async (body) => {
    try {
      const response = await AuthApiEndPoints.signUp(body);
      console.log(response.message);
      return response;
    } catch (error) {
      console.error("Signup error:", error);
      return { success: false, message: "Network error" };
    }
  };

  const verifyOtp = async (body) => {
    try{
      const response = await AuthApiEndPoints.verifyOtp(body);
    console.log(response.message);
    return response;
    } catch (error) {
      console.log("OTP Verification Error: ", error);
      return {success: false, message: "Network Error"}
    }
  };

  const forgotPassword = async (body) => {
    try{
      const response = await AuthApiEndPoints.forgotPassword(body);
      return response;
    }
    catch(error) {
       console.log("Forgot Password Error: ", error);
      return {success: false, message: "Network Error"}
    }
  }
  
  const resetPassword = async (body) => {
    try{
      const response = await AuthApiEndPoints.resetPassword(body);
      return response;
    }
    catch(error) {
       console.log("Forgot Password Error: ", error);
      return {success: false, message: "Network Error"}
    }
  }

  return {
    login,
    signUp,
    verifyOtp,
    forgotPassword,
    resetPassword,
  };
};

export default UseAuth;
