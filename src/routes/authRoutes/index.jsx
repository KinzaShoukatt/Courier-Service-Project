import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../../auth/signUp";
import Login from "../../auth/login";
import VerifyOtp from "../../auth/otp";


import ForgotPassword from "../../auth/forgotPassword";
import ResetPassword from "../../auth/resetPassword";
import AuthLayout from "../../components/layouts/authLayout";

const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signUp" element={<SignUp />} />
        <Route path="/auth/verifyOtp" element={<VerifyOtp />} />

        <Route path="/auth/forgotPassword" element={<ForgotPassword />} />
        <Route path="/auth/resetPassword" element={<ResetPassword />} />
      </Routes>
    </AuthLayout>
  );
};

export default AuthRoutes;
