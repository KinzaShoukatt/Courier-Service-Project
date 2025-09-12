import { ROLES } from "./roles.enum"
import { siteRoutes } from "./siteRoutes"

export const roleBasedRoutes = {
   [ROLES.ADMIN]: [
    siteRoutes.landingPage,
    siteRoutes.login,
    siteRoutes.adminDashboard,
    siteRoutes.userManagement,
    siteRoutes.orderManagement,
    siteRoutes.manualOrderCreation,
    siteRoutes.zoneManagement,
    siteRoutes.pricingManagement,
    siteRoutes.billing,
    siteRoutes.agentManagement,
    siteRoutes.adminDashboard,
    siteRoutes.complaint,
    siteRoutes.cmsAndSetting,
   ],

   [ROLES.CUSTOMER]: [
    siteRoutes.landingPage,
    siteRoutes.login,
    siteRoutes.signUp,
    siteRoutes.otpVerification,
    siteRoutes.forgotPassword,
    siteRoutes.resetPassword,
    siteRoutes.customerDashboard,
    siteRoutes.parcelBooking,
    siteRoutes.payment,
    siteRoutes.ParcelTracking,
    siteRoutes.historyReports,
    siteRoutes.support,
    siteRoutes.raiseComplaint,
    siteRoutes.aiChatboox,
    siteRoutes.userProfile
   ]

}