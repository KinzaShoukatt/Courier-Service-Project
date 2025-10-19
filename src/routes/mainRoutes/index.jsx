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

import AdminDashboard from '../../pages/admin/dashboard'
import UserManagement from '../../pages/admin/userManagement'
import OrderManagement from '../../pages/admin/orderManagement'
import PricingManagement from '../../pages/admin/pricingManagement'
import AgentManagement from '../../pages/admin/agentManagement'
import ZoneManagement from '../../pages/admin/zoneManagement'
import Billing from '../../pages/admin/billing'
import AgentDashboard from '../../pages/agent/dashboard'
import HistoryAndEarnings from '../../pages/agent/history'
import AIChatboox from '../../pages/customer/aiChatbot'
import CMSAndSetting from '../../pages/admin/cms&Setting'
import RaiseComplaint from '../../pages/customer/raiseComplaint'
import ManualOrderCreation from '../../pages/admin/manualOrderCreation'
import AdminSupport from '../../pages/admin/support'
import Complaint from '../../pages/admin/complaint'
import ProtectedRoutes from '../../components/protectedRoutes'

const MainRoutes = () => {
  return (
    <>
    <MainLayout>
      <Routes>
      
        <Route element={<ProtectedRoutes/>}>
            <Route path="/customer/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/parcel-booking" element={<ParcelBooking/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/tracking" element={<ParcelTracking/>}/>
            <Route path="/history-and-reports" element={<HistoryReports/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/raise-complaint" element={<RaiseComplaint/>}/>
            <Route path="/ai-chat" element={<AIChatboox/>}/>
            <Route path="/profile" element={<UserProfile/>}/>
        </Route>
        
        <Route element={<ProtectedRoutes/>}>
          <Route path="/admin/" element={< Navigate to="/admin-dashboard" />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/order-management" element={<OrderManagement />} />
           <Route path="/tracking" element={<ParcelTracking/>}/>
          <Route path="/manual-order-creation" element={<ManualOrderCreation />} />
          <Route path="/zone-management" element={<ZoneManagement />} />
          <Route path="/pricing-management" element={<PricingManagement />} />
          <Route path="/payment-management" element={<Billing />} />
          <Route path="/agent-management" element={<AgentManagement />} />
          <Route path="/support-admin" element={<AdminSupport />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/cms-&-setting" element={<CMSAndSetting />} /> 
        </Route>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/agent/' element={<Navigate to="/agent-dashboard"/>}></Route>
          <Route path='/agent-dashboard' element={<AgentDashboard/>}></Route>
          <Route path='/history-and-earnings' element={<HistoryAndEarnings/>}></Route>
        </Route>

      
        </Routes>
    </MainLayout>
    </>
  )
}

export default MainRoutes