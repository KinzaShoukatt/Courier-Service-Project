import React from "react";
import { AuthApiEndPoints } from "../libs/http-service/api/auth.api";
import { useNavigate } from "react-router-dom";
import { showSuccess, showError } from "../utils/toast";

const UseAuth = () => {
  const navigate = useNavigate();

  //Login
  const login = async (body) => {
    try {
      console.log(body);
      const response = await AuthApiEndPoints.login(body);
      if (response.user) {
        showSuccess(response.message || "Login Successful!");
        localStorage.setItem("role", response.user.role);
        localStorage.setItem("loginToken", response.token);
        if (response.user.role == "customer") {
          navigate("/customer/dashboard");
        }
        if (response.user.role == "admin") {
          navigate("/admin/admin-dashboard");
        }
        if (response.user.role == "agent") {
          navigate("/agent/agent-dashboard");
        }
      } else {
        showError(response.error || "Invalid email or password");
      }
      return response;
    } catch (error) {
      console.log("Login Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //google Login
  const googleLogin = async (body) => {
    try {
      console.log(body);
      const response = await AuthApiEndPoints.googleLogin({
        idToken: body.idToken,
      });
      if (response.user) {
        showSuccess(response.message || "Login Successful!");
        localStorage.setItem("role", response.user.role);
        localStorage.setItem("loginToken", response.token);
        navigate("/customer/dashboard");
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Google Login Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //signUp
  const signUp = async (body) => {
    try {
      const response = await AuthApiEndPoints.signUp(body);
      const msg = response?.message || response?.error;
      if (response?.user) {
        showSuccess(msg || "Sign Up Successful!");
        navigate("/auth/verify-otp", {
          state: { email: response.user.email, type: "email_verification" },
        });
      } else {
        showError(msg || "SignUp Failed");
      }
      return response;
    } catch (error) {
      console.error("Signup error:", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //verify OTP
  const verifyOtp = async ({ otp, type, email }) => {
    try {
      let response;
      switch (type) {
        case "email_verification":
          response = await AuthApiEndPoints.verifyOtp({ otp, type, email });
          break;
        case "resend_otp":
          response = await AuthApiEndPoints.resendOtp({ type, email });
          break;
        case "password_reset":
          response = await AuthApiEndPoints.verifyOtp({ otp, type, email });
          break;
        default:
          return { success: false, message: "Invalid OTP type" };
      }
      if (response?.message?.includes("verified") || response?.resetToken) {
        showSuccess(response.message || "OTP verified successfully!");
        if (type === "email_verification") {
          navigate("/auth/login");
        } else if (type === "password_reset") {
          navigate("/auth/reset-password", {
            state: { resetToken: response.resetToken },
          });
        } else {
          navigate("/auth/verify-otp");
        }
      } else {
        showError(response.message || "Invalid OTP, please try again");
      }
      return response;
    } catch (error) {
      console.error("Verify OTP error:", error);
      showError("Something Went wrong, please try again later!");
      return { success: false, message: "Network error" };
    }
  };

  //forgot Password
  const forgotPassword = async (body) => {
    try {
      const response = await AuthApiEndPoints.forgotPassword({
        ...body,
        type: "password_reset",
      });
      if (response?.message?.includes("OTP")) {
        showSuccess(response.message);
        navigate("/auth/verify-otp", {
          state: { email: body.email, type: "password_reset" },
        });
      } else {
        showError(response.message || "Please Enter the Registerd Email");
      }
      return response;
    } catch (error) {
      console.log("Forgot Password Error: ", error);
      return { success: false, message: "Network Error" };
    }
  };

  //resend OTP
  const resendOtp = async (body) => {
    try {
      const response = await AuthApiEndPoints.resendOtp(body);
      return response;
    } catch (error) {
      console.log("Resend Otp Password Error: ", error);
      return { success: false, message: "Network Error" };
    }
  };

  //reset Password
  const resetPassword = async (body) => {
    try {
      const response = await AuthApiEndPoints.resetPassword(body);
      if (response?.message?.includes("successfully.")) {
        showSuccess(
          response.message || "Password Reset Successfully! Now You can Login"
        );
        navigate("/auth/login");
      } else {
        showError(response.message || "Password Reset Failed!");
      }
      return response;
    } catch (error) {
      console.log("Reset Password Error: ", error);
      return { success: false, message: "Network Error" };
    }
  };

  return {
    login,
    googleLogin,
    signUp,
    verifyOtp,
    forgotPassword,
    resendOtp,
    resetPassword,
  };
};

export default UseAuth;
