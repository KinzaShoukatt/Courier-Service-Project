import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AuthRoutes from './routes/authRoutes'
import MainRoutes from './routes/mainRoutes'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/*" element={<AuthRoutes />}></Route>
         <Route path="/customer/*" element={<MainRoutes />}></Route> 
    </Routes>
    </>
  )
}

export default AppRoutes