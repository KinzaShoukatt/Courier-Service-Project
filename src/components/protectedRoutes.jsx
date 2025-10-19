import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token = localStorage.getItem("loginToken");
  return (
    token ? <Outlet/>:<Navigate to="/auth/login" />
   
  )
}

export default ProtectedRoutes