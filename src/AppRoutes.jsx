import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import AuthRoutes from './routes/authRoutes'
import MainRoutes from './routes/mainRoutes'

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
        <Route path="/auth/*" element={<AuthRoutes />}></Route>
         <Route path="/customer/*" element={<MainRoutes />}></Route> 
         <Route path="/admin/*" element={<MainRoutes />}></Route> 
         <Route path="/agent/*" element={<MainRoutes />}></Route> 

    </Routes>
    </>
  )
}

export default AppRoutes