import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import AuthRoutes from "./routes/authRoutes";
import MainRoutes from "./routes/mainRoutes";

const AppRoutes = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/auth/*" element={<AuthRoutes />}></Route>
        <Route path="/customer/*" element={<MainRoutes />}></Route>
        <Route path="/admin/*" element={<MainRoutes />}></Route>
        <Route path="/agent/*" element={<MainRoutes />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
