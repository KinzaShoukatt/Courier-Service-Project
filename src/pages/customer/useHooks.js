import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerApiEndPoints } from "../../libs/http-service/api/customer.api";
import { showSuccess, showError } from "../../utils/toast";

const UseCustomer = () => {
  const navigate = useNavigate();

  const parcelBookingCheckout = async (body) => {
    try {
      const response = await CustomerApiEndPoints.parcelBookingCheckout(body);
      const message = response.message || response.error;
      console.log("This is response: ", response);
      if (response.message) {
        showSuccess(response.message);
        const parcelId = response?.parcel?.parcelId;
        const totalCharges = response?.parcel?.totalCharges;
        localStorage.setItem("parcelId", response?.parcel?.parcelId);
        sessionStorage.setItem("totalCharges", response?.parcel?.totalCharges);
        navigate("/customer/payment", { state: { fromBooking: true } });
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Parcel Checkout Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // Cod confirm
  const codConfirm = async () => {
    try {
      const parcelId = localStorage.getItem("parcelId");
      if (!parcelId) {
        showError("Parcel Id not Find!");
        return { success: false, message: "Parcel ID not found!" };
      }
      const response = await CustomerApiEndPoints.codConfirm(parcelId);
      console.log(response);
      if (response?.message?.includes("successfully!")) {
        showSuccess(response.message || "Your Order is Booked Successfully!");
      } else {
        showError(response?.error || "Your Order is not Booked yet!");
      }
      return response;
    } catch (error) {
      console.log("Order Confirm Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network Error" };
    }
  };

  //invoice payment
  const bookingOrderInvoice = async (parcelId) => {
    try {
      const response = await CustomerApiEndPoints.bookingOrderInvoice(parcelId);
      console.log(response.parcelId);
      // because we returned full axios response above
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
      navigate("/customer/dashboard");
    } catch (error) {
      console.log("Invoice Error:", error);
      showError("Something went wrong while generating invoice!");
    }
  };

  //delivery Invoice
  const deliveryOrderInvoice = async (parcelId) => {
    try {
      if (!parcelId) {
        showError("Parcel Id is not Found!");
        return;
      }
      const response = await CustomerApiEndPoints.deliveryOrderInvoice(
        parcelId
      );
      // because we returned full axios response above
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } catch (error) {
      console.log("Invoice Error:", error);
      showError("Something went wrong while generating invoice!");
    }
  };

  //Stripe
  const stripePayment = async (body) => {
    try {
      const parcelId = localStorage.getItem("parcelId");
      if (!parcelId) {
        showError("Parcel Id not Find!");
        return { success: false, message: "Parcel ID not found!" };
      }
      const payload = { ...body, parcelId };
      const response = await CustomerApiEndPoints.stripeCheckout(payload);
      console.log("response", response);
      if (response?.checkoutUrl) {
        window.location.href = response.checkoutUrl;
        return;
      } else {
        showError(response?.error || "Your Order is not Booked yet!");
      }
      return response;
    } catch (error) {
      console.log("Stripe payment Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network Error" };
    }
  };

  const cancelParcel = async (body) => {
    try {
      const parcelId = localStorage.getItem("parcelId");
      if (!parcelId) {
        showError("Parcel Id not Find!");
        return { success: false, message: "Parcel ID not found!" };
      }
      const response = await CustomerApiEndPoints.cancelParcel(parcelId, body);
      console.log(response);
      if (response?.message) {
        showSuccess(response.message || "Your Order is Cancelled!");
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Order Cancel Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network Error" };
    }
  };

  // Get profile
  const getCustomerProfile = async () => {
    try {
      const response = await CustomerApiEndPoints.getProfile();
      // console.log(response);
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Profile Picture Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };
  // Get profile
  const getCustomerProfilePicture = async () => {
    try {
      const response = await CustomerApiEndPoints.getProfilePicture();
      console.log(response);
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Profile Get Error: ", error);
      // showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // update profile
  const updateCustomerProfile = async (body) => {
    try {
      const response = await CustomerApiEndPoints.updateProfile(body);
      if (response?.user) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Profile Updation Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //booked Parcel
  const customerBookedParcels = async (page = 1, limit = 10) => {
    try {
      const response = await CustomerApiEndPoints.bookedParcels(page, limit);
      if (response.parcels) {
        const trackingNumbers = response.parcels.map(
          (parcel) => parcel.trackingNumber
        );
        const parcelIds = response.parcels.map((parcel) => parcel.id);
        sessionStorage.setItem(
          "TrackingNumber",
          JSON.stringify(trackingNumbers)
        );
        sessionStorage.setItem("ParcelIds", JSON.stringify(parcelIds));

        console.log("All tracking Numbers:", trackingNumbers);
        console.log("All Parcel Ids:", parcelIds);
      } else {
        const trackingNumbers = response.parcels?.[0].trackingNumber;
        sessionStorage.setItem("TrackingNumber", trackingNumbers);
        const parcelIds = response.parcels?.[0].parcelId;
        sessionStorage.setItem("TrackingNumber", parcelIds);
      }
      if (response?.parcels) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Booked Parcels getting Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //track Parcel
  const trackParcels = async (trackingNumber) => {
    try {
      if (!trackingNumber) {
        showError("Tracking Number is not Found!");
        return;
      }
      const response = await CustomerApiEndPoints.trackParcels(trackingNumber);
      if (response?.trackingNumber) {
        // showSuccess(response.message);
        navigate("/customer/tracking", {
          state: {
            ParcelStatus: response.status,
            TrackingNumber: response.trackingNumber,
            PickupAddress: response.pickupAddress,
            DeliveryAddress: response.deliveryAddress,
            PaymentMethod: response.paymentMethod,
            DeliveryCharges: response.deliveryCharge,
            DeliveryType: response.deliveryType,
            PackageWeight: response.packageWeight,
            PackageSize: response.packageSize,
          },
        });
      } else {
        showError(response.message || response.error);
        console.log("Error", response);
      }
      return response;
    } catch (error) {
      console.log("Parcel Trcaking Error: ", error);
      showError(
        "Tracking number not found. Please check your tracking number and try again"
      );
      return { success: false, message: "Network error" };
    }
  };

  //Raise Complaint
  const raiseComplaint = async (body) => {
    try {
      const response = await CustomerApiEndPoints.raiseComplait(body);
      console.log("Response", response);
      if (response.message?.includes("successfully")) {
        showSuccess(response.message);
        navigate("/customer/dashboard");
      } else {
        showError(response.error);
      }
    } catch (error) {
      console.log("Raise Complaint Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  const countParcels = async () => {
    try {
      const response = await CustomerApiEndPoints.countParcels();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Total Parcels getting Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //customer chat Get
  const ChatGet = async () => {
    try {
      const response = await CustomerApiEndPoints.chatGet();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Chat Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //customer chat delete
  const deleteChat = async () => {
    try {
      const response = await CustomerApiEndPoints.deleteChat();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Chat Deletion Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };
  return {
    parcelBookingCheckout,
    codConfirm,
    bookingOrderInvoice,
    deliveryOrderInvoice,
    stripePayment,
    cancelParcel,
    getCustomerProfile,
    getCustomerProfilePicture,
    updateCustomerProfile,
    customerBookedParcels,
    trackParcels,
    raiseComplaint,
    countParcels,
    ChatGet,
    deleteChat,
  };
};
export default UseCustomer;
