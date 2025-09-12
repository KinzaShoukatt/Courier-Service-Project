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
        {/* <Route path="/" element={<Navigate to="/auth/login" />} /> */}
        <Route path="/auth/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </AuthLayout>
  );
};

export default AuthRoutes;
