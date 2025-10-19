import { deleteData, getData, patchData, postData } from "../methods";

export const AdminApiEndPoints = {
  allUsers: async () => await getData("/admin/users"),
  allCustomers: async (page = 1, limit = 10) =>
    await getData(`/admin/users?type=customer&page=${page}&limit=${limit}`),

  allGuestCustomer: async (page = 1, limit = 10) =>
    await getData(`/admin/users?type=guest&page=${page}&limit=${limit}`),

  allAgent: async (page = 1, limit = 10) =>
    await getData(`/admin/users?type=agent&page=${page}&limit=${limit}`),

  allRestrictedUsers: async (page = 1, limit = 10) =>
    await getData(`/admin/users?type=restricted&page=${page}&limit=${limit}`),

  createUser: async (body) => await postData("/admin/users", body),

  updateUser: async (id, body) => await patchData(`/admin/users/${id}`, body),

  deleteUser: async (id) => await deleteData(`admin/users/${id}`),

  blockUser: async (id, body) =>
    await patchData(`/admin/users/${id}/block`, body),

  suspendUser: async (id, body) =>
    await patchData(`/admin/users/${id}/suspend`, body),

  unBlockUser: async (id, body) =>
    await patchData(`/admin/users/${id}/unblock`, body),

  unSuspendUser: async (id, body) =>
    await patchData(`/admin/users/${id}/unsuspend`, body),

  manualOrderPrepare: async (body) =>
    await postData("/admin/manual-orders/prepare", body),

  cashpayment: async (parcelId, body) =>
    await patchData(`admin/manual-orders/${parcelId}/confirm-cash`, body),

  bookingOrderInvoice: async (parcelId) =>
    await getData(`parcels/${parcelId}/invoice?type=BOOKING_INVOICE`, {
      responseType: "arraybuffer",
    }),

  deliveryOrderInvoice: async (parcelId) =>
    await getData(`parcels/${parcelId}/invoice?type=DELIVERY_INVOICE`, {
      responseType: "arraybuffer",
    }),

  stripeCheckout: async (parcelId, body) =>
    await postData(`admin/manual-orders/${parcelId}/send-link`, body),

  cancelParcel: async (parcelId, body) =>
    await patchData(`admin/parcels/${parcelId}/cancel`, body),

  resheduleParcel: async (parcelId, body) =>
    await patchData(`admin/parcels/${parcelId}/reschedule`, body),

  orderPlaced: async (page = 1, limit = 10) =>
    await getData(
      `/admin/parcels?type=order_placed&page=${page}&limit=${limit}`
    ),
  orderAssigned: async (page = 1, limit = 10) =>
    await getData(`/admin/parcels?type=scheduled&page=${page}&limit=${limit}`),
  orderCancelled: async (page = 1, limit = 10) =>
    await getData(`/admin/parcels?type=cancelled&page=${page}&limit=${limit}`),

  assignOrder: async (parcelId, body) =>
    await patchData(`/admin/parcels/${parcelId}/assign`, body),

  activeOrders: async (page = 1, limit = 10) =>
    await getData(`/admin/parcels?type=active&page=${page}&limit=${limit}`),

  trackParcels: async (trackingNumber) =>
    await getData(`track/${trackingNumber}`),

  countAgents: async () => await getData("/admin/stats/agents"),

  countParcels: async () => await getData("admin/stats/global"),

  countRevenue: async () => await getData("/reporting/stats/revenue"),

  allParcels: async (page = 1, limit = 10, fullName, paymentStatus, id) => {
    const search = [fullName, paymentStatus, id].filter(Boolean).join(" ");
    return await getData(
      `/admin/parcels?page=${page}&limit=${limit}&search=${encodeURIComponent(
        search
      )}`
    );
  },

  changePaymentStatus: async (id, body) =>
    await patchData(`/admin/parcels/${id}/confirm-cod-payment`, body),

  invoiceReports: async () =>
    await getData("/reporting/reports/delivered-parcels"),

  allZonePrices: async () => await getData("/admin/pricing"),
  zonePricesUpdate: async (id, body) =>
    await patchData(`/admin/pricing/${id} `, body),

  weightBasePrices: async (body) => await postData("/admin/weight-slabs", body),
  weightBasePricesGet: async () => await getData("/admin/weight-slabs"),

  weightBasePricesDelete: async (id) =>
    await deleteData(`/admin/weight-slabs/${id}`),

  weightBasePricesUpdate: async (id, body) =>
    await patchData(`/admin/weight-slabs/${id}`, body),

  agentCommisionGet: async () =>
    await getData("/admin/pricing/commission/agent"),

  agentCommisionUpdate: async (body) =>
    await patchData("/admin/pricing/commission/agent", body),

  complaints: async () => await getData("/admin/tickets"),
  complaintsStatusUpdation: async (id, body) =>
    await patchData(`/admin/tickets/${id}`, body),

  staticPages: async () => await getData("/admin/pages"),

  updateAboutPage: async (body) =>
    await patchData("/admin/pages/about-us", body),

  updateContactPage: async (body) =>
    await patchData("/admin/pages/contact-us", body),

  updateTermsPage: async (id, body) =>
    await patchData(`/admin/pages/terms-and-conditions/sections/${id}`, body),

  deleteTerms: async (id) =>
    await deleteData(`/admin/pages/terms-and-conditions/sections/${id}`),

  addterm: async (body) =>
    await postData("/admin/pages/terms-and-conditions/sections", body),

  dailyBookings: async () =>
    await getData(`/reporting/stats/bookings?period=daily`),
  monthlyBookings: async () =>
    await getData(`/reporting/stats/bookings?period=monthly`),
  yearlyBookings: async () =>
    await getData(`/reporting/stats/bookings?period=yearly`),

  dailyDeliveredparcels: async () =>
    await getData(`/reporting/stats/delivered?period=daily`),
  monthlyDeliveredparcels: async () =>
    await getData(`/reporting/stats/delivered?period=monthly`),
  yearlyDeliveredparcels: async () =>
    await getData(`/reporting/stats/delivered?period=yearly&2020`),

  dailyRevenue: async () =>
    await getData(`/reporting/stats/revenue-graph?period=daily`),
  monthlyRevenue: async () =>
    await getData(`/reporting/stats/revenue-graph?period=monthly`),
  yearlyRevenue: async () =>
    await getData(`/reporting/stats/revenue-graph?period=yearly`),

  customersRoom: async () => await getData("/chats/sessions"),

  chatRead: async (customerId) =>
    await patchData(`chats/sessions/${customerId}/mark-as-read`),
  chatGet: async (id) => await getData(`/chats/history/${id}`),
  deleteChat: async () => await deleteData("/chats/my-history"),
};
