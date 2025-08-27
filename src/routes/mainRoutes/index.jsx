import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import MainLayout from '../../components/layouts/mainLayout'

import Dashboard from '../../pages/customer/dashboard'
import UserProfile from '../../pages/customer/profile'
import ParcelBooking from '../../pages/customer/parcelBooking'
import HistoryReports from '../../pages/customer/historyReports'
import Payment from '../../pages/customer/payment'
import Support from '../../pages/customer/support'
import ParcelTracking from '../../pages/customer/parcelTracking'
const MainRoutes = () => {
  return (
    <>
    <MainLayout>
        <Routes>
            <Route path="/customer/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<UserProfile/>}/>
            <Route path="/parcelBooking" element={<ParcelBooking/>}/>
            <Route path="/historyReports" element={<HistoryReports/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/tracking" element={<ParcelTracking/>}/>

            <Route path="/support" element={<Support/>}/>
        </Routes>
    </MainLayout>
    </>
  )
}

export default MainRoutes