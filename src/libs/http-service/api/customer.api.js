import { deleteData, getData, patchData, postData, putData } from "../methods";

export const CustomerApiEndPoints = {
  parcelBookingCheckout: async (body) =>
    await postData("parcels/prepareCheckout", body),

  codConfirm: async (parcelId, body) =>
    await patchData(`parcels/${parcelId}/confirm-cod`, body),

  bookingOrderInvoice: async (parcelId) =>
    await getData(`parcels/${parcelId}/invoice?type=BOOKING_INVOICE`, {
      responseType: "arraybuffer",
    }),

  deliveryOrderInvoice: async (parcelId) =>
    await getData(`parcels/${parcelId}/invoice?type=DELIVERY_INVOICE`, {
      responseType: "arraybuffer",
    }),

  stripeCheckout: async (body) =>
    await postData("payments/create-checkout-session", body),

  cancelParcel: async (parcelId, body) =>
    await patchData(`parcels/${parcelId}/cancel`, body),

  getProfile: async () => await getData("users/me"),
  getProfilePicture: async () => await getData("users/me/profile-picture"),

  updateProfile: async (body) => await patchData("users/me", body),

  bookedParcels: async (page = 1, limit = 10) =>
    await getData(`parcels/my?page=${page}&limit=${limit}`),

  trackParcels: async (trackingNumber) =>
    await getData(`track/${trackingNumber}`),

  raiseComplait: async (body) => await postData("/tickets", body),

  countParcels: async () => await getData("parcels/my/dashboard-stats"),

  chatGet: async () => await getData("/chats/my-history"),
  deleteChat: async () => await deleteData("/chats/my-history"),
};
