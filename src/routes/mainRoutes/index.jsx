import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import MainLayout from '../../components/layouts/mainLayout'

// import Home from '../../pages/customer/dashboard'
import Dashboard from '../../pages/customer/dashboard'
import UserProfile from '../../pages/customer/profile'
import ParcelBooking from '../../pages/customer/parcelBooking'
import HistoryReports from '../../pages/customer/historyReports'
const MainRoutes = () => {
  return (
    <>
    <MainLayout>
        <Routes>
            <Route path="/cutomer/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<UserProfile/>}/>
            <Route path="/parcelBooking" element={<ParcelBooking/>}/>
            <Route path="/historyReports" element={<HistoryReports/>}/>
        </Routes>
    </MainLayout>
    </>
  )
}

export default MainRoutes