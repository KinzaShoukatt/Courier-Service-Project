import React from "react";
import { AdminApiEndPoints } from "../../libs/http-service/api/admin.api";
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../../utils/toast";

const UseAdmin = () => {
  const navigate = useNavigate();

  // all users
  const AllUsers = async () => {
    try {
      const response = await AdminApiEndPoints.allUsers();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Users Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // all Customers
  const allCustomersGet = async (page = 1, limit = 10) => {
    try {
      const response = await AdminApiEndPoints.allCustomers(page, limit);
      if (response && Array.isArray(response.users)) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Users Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };
  // all Guest Customers
  const allGuestCustomersGet = async (page = 1, limit = 10) => {
    try {
      const response = await AdminApiEndPoints.allGuestCustomer(page, limit);
      if (response && Array.isArray(response.users)) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Users Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // all Agents
  const allAgentsGet = async (page = 1, limit = 10) => {
    try {
      const response = await AdminApiEndPoints.allAgent(page, limit);
      if (Array.isArray(response?.agents) && response.agents.length > 0) {
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
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Users Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // all restrict user
  const allRestrictedUsersGet = async (page = 1, limit = 10) => {
    try {
      const response = await AdminApiEndPoints.allRestrictedUsers(page, limit);
      if (response && Array.isArray(response.users)) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Users Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  const createUser = async (body) => {
    try {
      const response = await AdminApiEndPoints.createUser(body);
      if (response.message?.includes("successfully.")) {
        showSuccess(response.message);
        // navigate("/admin/user-management");
      } else {
        showError(response.error);
      }
    } catch (error) {
      console.log("User Created Error", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // updateUser
  const updateUser = async (id, body) => {
    try {
      // const userId = localStorage.getItem("id");
      const response = await AdminApiEndPoints.updateUser(id, body);
      if (response.message?.includes("updated")) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
    } catch (error) {
      console.log("User Updation Error", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await AdminApiEndPoints.deleteUser(id);
      if (response) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
    } catch (error) {
      console.log("User Deletion Error", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //block user
  const blockUser = async (id, body) => {
    try {
      // const userId = localStorage.getItem("id");
      const response = await AdminApiEndPoints.blockUser(id, body);
      if (response.message?.includes("blocked")) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
    } catch (error) {
      console.log("User Block Error", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //suspend User
  const suspendUser = async (id, body) => {
    try {
      // const userId = localStorage.getItem("id");
      const response = await AdminApiEndPoints.suspendUser(id, body);
      if (response.message?.includes("suspended")) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
    } catch (error) {
      console.log("User Suspend Error", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //unblock user
  const unBlockUser = async (id, body) => {
    try {
      // const userId = localStorage.getItem("id");
      const response = await AdminApiEndPoints.unBlockUser(id, body);
      if (response.message?.includes("blocked")) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
    } catch (error) {
      console.log("User Block Error", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //unsuspend User
  const unSuspendUser = async (id, body) => {
    try {
      // const userId = localStorage.getItem("id");
      const response = await AdminApiEndPoints.unSuspendUser(id, body);
      if (response.message?.includes("suspended")) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
    } catch (error) {
      console.log("User Suspend Error", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //Manual Orde Creation
  const manualOrderPrepare = async (body) => {
    try {
      const response = await AdminApiEndPoints.manualOrderPrepare(body);
      const message = response.message || response.error;
      if (response?.parcelId) {
        // showSuccess(message);
        const parcelId = response?.parcelId;
        const totalCharges = response?.totalCharges;
        localStorage.setItem("parcelId", response?.parcelId);
        sessionStorage.setItem("totalCharges", response?.totalCharges);

        if (body.customer) {
          localStorage.setItem("customerInfo", JSON.stringify(body.customer));
        }
      } else {
        showError(message);
      }
      return response;
    } catch (error) {
      console.log("Parcel Checkout Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // Cod confirm
  const cashPayment = async (body) => {
    try {
      const parcelId = localStorage.getItem("parcelId");
      const customerInfo = JSON.parse(localStorage.getItem("customerInfo"));
      if (!parcelId) {
        showError("Parcel Id not Find!");
        return { success: false, message: "Parcel ID not found!" };
      }
      if (!customerInfo) {
        showError("Customer information not found!");
        return { success: false, message: "Customer info missing!" };
      }
      const body = {
        customerData: {
          fullName: customerInfo.fullName,
          email: customerInfo.email,
          phoneNumber: customerInfo.phoneNumber,
        },
      };
      const response = await AdminApiEndPoints.cashpayment(parcelId, body);
      console.log(response);
      if (response.message.includes("confirmed")) {
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
      const response = await AdminApiEndPoints.bookingOrderInvoice(parcelId);
      console.log(response.parcelId);
      // because we returned full axios response above
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
      // navigate("/customer/dashboard")
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
      const response = await AdminApiEndPoints.deliveryOrderInvoice(parcelId);
      console.log("Response of Delivery invoice", response);
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
      const customerInfo = JSON.parse(localStorage.getItem("customerInfo"));
      if (!parcelId) {
        showError("Parcel Id not Find!");
        return { success: false, message: "Parcel ID not found!" };
      }
      if (!customerInfo) {
        showError("Customer information not found!");
        return { success: false, message: "Customer info missing!" };
      }
      const body = {
        customerData: {
          fullName: customerInfo.fullName,
          email: customerInfo.email,
          phoneNumber: customerInfo.phoneNumber,
        },
      };
      const response = await AdminApiEndPoints.stripeCheckout(parcelId, body);
      console.log("response", response);

      if (response.message?.includes("sent")) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Order Confirm Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network Error" };
    }
  };

  // Cancel Parcel
  const cancelParcel = async (parcelId, body = {}) => {
    try {
      if (!parcelId) {
        showError("Parcel Id not found!");
        return { success: false, message: "Parcel ID not found!" };
      }
      const response = await AdminApiEndPoints.cancelParcel(parcelId, body);
      console.log(response);
      if (response?.message) {
        showSuccess(response.message || "Your Order is Cancelled!");
      } else {
        showError(response.error || "Failed to cancel order");
      }
      return response;
    } catch (error) {
      console.log("Order Cancel Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network Error" };
    }
  };

  //Reshedule Order
  const resheduleParcel = async (parcelId, body = {}) => {
    try {
      if (!parcelId) {
        showError("Parcel Id not found!");
        return { success: false, message: "Parcel ID not found!" };
      }
      const response = await AdminApiEndPoints.resheduleParcel(parcelId, body);
      console.log(response);
      if (response?.message) {
        showSuccess(response.message || "Your Order is Resheduled!");
      } else {
        showError(response.error || "Failed to Resheduled order");
      }
      return response;
    } catch (error) {
      console.log("Order Resheduled Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network Error" };
    }
  };

  // //Cancel Parcel
  // const cancelParcel = async (body) => {
  //     try {
  //       const parcelId = localStorage.getItem("parcelId");
  //       if (!parcelId) {
  //         showError("Parcel Id not Find!");
  //         return { success: false, message: "Parcel ID not found!" };
  //       }
  //       const response = await AdminApiEndPoints.cancelParcel(parcelId, body);
  //       console.log(response);
  //       if (response?.message) {
  //         showSuccess(response.message || "Your Order is Cancelled!");
  //       } else {
  //         showError(response.error);
  //       }
  //       return response;
  //     } catch (error) {
  //       console.log("Order Cancel Error: ", error);
  //       showError("Something went wrong, please try again!");
  //       return { success: false, message: "Network Error" };
  //     }
  //   };

  // order placed
  const orderPlacedGet = async (page = 1, limit = 10) => {
    try {
      const response = await AdminApiEndPoints.orderPlaced(page, limit);
      if (response.parcels.length > 0) {
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
      }
      if (response.parcels) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Orders Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // Assign Parcel
  const assignParcel = async (parcelId, body) => {
    try {
      const response = await AdminApiEndPoints.assignOrder(parcelId, body);
      console.log("backened response: ", response);
      const message = response?.message || response?.error;
      if (message.includes("assigned")) {
        showSuccess(response.message || "Your Order is Assigned!");
        console.log(response);
      } else {
        showError(message);
      }
      return response;
    } catch (error) {
      console.log("Order Cancel Error: ", error);
      showError("Something went wrong, please try again!", error);
      return { success: false, message: "Network Error" };
    }
  };

  // assigned/ scheduled orders get
  const orderScheduledGet = async (page = 1, limit = 10) => {
    try {
      const response = await AdminApiEndPoints.orderAssigned(page, limit);
      if (Array.isArray(response?.parcels) && response.parcels.length > 0) {
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

        // showSuccess(response.message || "Scheduled orders loaded");
        return { parcels: response.parcels, pagination: response.pagination };
      } else {
        // showError(response.error || "No scheduled orders found");
        return { parcels: [], pagination: response.pagination };
      }
    } catch (error) {
      console.log("Orders Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //cancelled orders get
  const orderCancelledGet = async (page = 1, limit = 10) => {
    try {
      const response = await AdminApiEndPoints.orderCancelled(page, limit);
      if (Array.isArray(response?.parcels) && response.parcels.length > 0) {
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
        // showSuccess(response.message || "Cancelled orders loaded");
        return { parcels: response.parcels, pagination: response.pagination };
      } else {
        showError(response.error || "No Cancelled orders found");
        return { parcels: [] };
      }
    } catch (error) {
      console.log("Orders Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //active orders get
  const activeOrdersGet = async (page = 1, limit = 10) => {
    try {
      const response = await AdminApiEndPoints.activeOrders(page, limit);
      if (response.parcels.length > 0) {
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
      if (response.parcels) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Orders Get Error: ", error);
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
      const response = await AdminApiEndPoints.trackParcels(trackingNumber);
      console.log("API Response", response);
      const message = response?.message || response?.error;
      console.log("this is message", message);

      if (response?.trackingNumber) {
        showSuccess(response.message);
        navigate("/admin/tracking", {
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
        showError(message);
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

  //count agents
  const countAgents = async () => {
    try {
      const response = await AdminApiEndPoints.countAgents();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Total Agents getting Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //count parcels
  const countParcels = async () => {
    try {
      const response = await AdminApiEndPoints.countParcels();
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

  //count revenue
  const countRevenue = async () => {
    try {
      const response = await AdminApiEndPoints.countRevenue();
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

  // all orders
  const allOrdersGet = async (
    page = 1,
    limit = 10,
    fullName,
    paymentStatus,
    id
  ) => {
    try {
      const response = await AdminApiEndPoints.allParcels(
        page,
        limit,
        fullName,
        paymentStatus,
        id
      );
      if (response.parcels.length > 0) {
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
      }
      if (response.parcels) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Orders Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //  payment Status update
  const changePaymentStatus = async (id, body) => {
    try {
      const response = await AdminApiEndPoints.changePaymentStatus(id, body);
      if (response.message?.includes("confirmed")) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
    } catch (error) {
      console.log("Payment Status Updation Error", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //count revenue
  const invoiceReportsGet = async (page = 1, limit = 10) => {
    try {
      const response = await AdminApiEndPoints.invoiceReports(page, limit);
      if (response && Array.isArray(response.report)) {
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

  //zone and price gets
  const allZonePrices = async () => {
    try {
      const response = await AdminApiEndPoints.allZonePrices();
      if (Array.isArray(response.pricingRules)) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Orders Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //zone amd price update
  const zonePricesUpdate = async (id, body) => {
    try {
      const response = await AdminApiEndPoints.zonePricesUpdate(id, body);
      if (response.message.includes("successfully")) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Price Updation Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // weight base price add
  const weightBasePrices = async (body) => {
    try {
      const response = await AdminApiEndPoints.weightBasePrices(body);
      if (response) {
        showSuccess(response.message);
      } else {
        showError(response.message);
      }
      return response;
    } catch (error) {
      console.log("Weight Base Pricing Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // weight base price get
  const weightBasePricesGet = async () => {
    try {
      const response = await AdminApiEndPoints.weightBasePricesGet();
      if (response.message.includes("Successfully")) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Weight Based Price Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //Delete price
  const deletePrice = async (id) => {
    try {
      const response = await AdminApiEndPoints.weightBasePricesDelete(id);
      console.log(response);
      if (response.message.includes("successfully")) {
        showSuccess(response.message || "Price is Deleted!");
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("price Deleting Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network Error" };
    }
  };

  //  weight base update
  const weightBasePricesUpdate = async (id, body) => {
    try {
      const response = await AdminApiEndPoints.weightBasePricesUpdate(id, body);
      if (response.message?.includes("Successfully")) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
    } catch (error) {
      console.log("Price Updation Error", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //agent commision gets
  const agentCommisionGet = async () => {
    try {
      const response = await AdminApiEndPoints.agentCommisionGet();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Orders Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // Agent commission update
  const agentCommisionUpdate = async (body) => {
    try {
      const response = await AdminApiEndPoints.agentCommisionUpdate(body);
      const message = response?.message || response?.error;
      if (message.includes("successfully")) {
        showSuccess(message);
      } else {
        showError(message);
      }
      return response;
    } catch (error) {
      console.error("Agent Commission Update Error:", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // complaints get
  const complaintsGet = async () => {
    try {
      const response = await AdminApiEndPoints.complaints();
      if (response.message.includes("successfully")) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("complaintsGet Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // complaints status update
  const complaintsStatusUpdation = async (id, body) => {
    try {
      const response = await AdminApiEndPoints.complaintsStatusUpdation(
        id,
        body
      );
      // console.log(response);
      const message = response.message || response.error;
      if (message.includes("updated")) {
        showSuccess(message);
      } else {
        showError(message);
      }
      return response;
    } catch (error) {
      console.log("complaint Status Updation Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // static Pages get
  const staticPages = async () => {
    try {
      const response = await AdminApiEndPoints.staticPages();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("static Pages Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // about Page update
  const updateAboutPage = async (body) => {
    try {
      const response = await AdminApiEndPoints.updateAboutPage(body);
      if (response) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("static Pages Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // conatct Page update
  const updateContactPage = async (body) => {
    try {
      const response = await AdminApiEndPoints.updateContactPage(body);
      if (response) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("static Pages Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // terms Page update
  const updateTermsPage = async (id, body) => {
    console.log(id);

    try {
      const response = await AdminApiEndPoints.updateTermsPage(id, body);
      if (response) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("static Pages Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // delete terms
  const deleteTerms = async (id) => {
    console.log(id);

    try {
      const response = await AdminApiEndPoints.deleteTerms(id);
      if (response) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("static Pages Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // add terms
  const addterm = async (body) => {
    try {
      const response = await AdminApiEndPoints.addterm(body);
      if (response) {
        showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("static Pages Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //daily booking graph
  const dailyBookings = async () => {
    try {
      const response = await AdminApiEndPoints.dailyBookings();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.message);
        console.log("Error", response);
      }
      return response;
    } catch (error) {
      console.log("Daily Bookings Get Error: ", error);
      showError("Something went wrong, please try again!", error.error);
      return { success: false, message: "Network error" };
    }
  };

  //monthly booking graph
  const monthlyBookings = async () => {
    try {
      const response = await AdminApiEndPoints.monthlyBookings();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.message);
        console.log("Error", response);
      }
      return response;
    } catch (error) {
      console.log("Monthly Bookings Get Error: ", error);
      showError("Something went wrong, please try again!", error.error);
      return { success: false, message: "Network error" };
    }
  };

  //yearly booking graph
  const yearlyBookings = async () => {
    try {
      const response = await AdminApiEndPoints.yearlyBookings();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.message);
        console.log("Error", response);
      }
      return response;
    } catch (error) {
      console.log("Yearly Bookings Get Error: ", error);
      showError("Something went wrong, please try again!", error.error);
      return { success: false, message: "Network error" };
    }
  };

  //daily delivered parcels graph
  const dailyDeliveredparcels = async () => {
    try {
      const response = await AdminApiEndPoints.dailyDeliveredparcels();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.message);
        console.log("Error", response);
      }
      return response;
    } catch (error) {
      console.log("Daily Delivered parcels Get Error: ", error);
      showError("Something went wrong, please try again!", error.error);
      return { success: false, message: "Network error" };
    }
  };

  //monthly delivered parcels graph
  const monthlyDeliveredparcels = async () => {
    try {
      const response = await AdminApiEndPoints.monthlyDeliveredparcels();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.message);
        console.log("Error", response);
      }
      return response;
    } catch (error) {
      console.log("Monthly Delivered parcels Get Error: ", error);
      showError("Something went wrong, please try again!", error.error);
      return { success: false, message: "Network error" };
    }
  };

  //yearly delivered parcels graph
  const yearlyDeliveredparcels = async () => {
    try {
      const response = await AdminApiEndPoints.yearlyDeliveredparcels();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.message);
        console.log("Error", response);
      }
      return response;
    } catch (error) {
      console.log("yearly Delivered Parcels Get Error: ", error);
      showError("Something went wrong, please try again!", error.error);
      return { success: false, message: "Network error" };
    }
  };

  //daily Revenue graph
  const dailyRevenue = async () => {
    try {
      const response = await AdminApiEndPoints.dailyRevenue();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.message);
        console.log("Error", response);
      }
      return response;
    } catch (error) {
      console.log("Daily Revenue Get Error: ", error);
      showError("Something went wrong, please try again!", error.error);
      return { success: false, message: "Network error" };
    }
  };

  //monthly Revenue parcels graph
  const monthlyRevenue = async () => {
    try {
      const response = await AdminApiEndPoints.monthlyRevenue();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.message);
        console.log("Error", response);
      }
      return response;
    } catch (error) {
      console.log("Monthly Revenue Get Error: ", error);
      showError("Something went wrong, please try again!", error.error);
      return { success: false, message: "Network error" };
    }
  };

  //yearly Revenue parcels graph
  const yearlyRevenue = async () => {
    try {
      const response = await AdminApiEndPoints.yearlyRevenue();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.message);
        console.log("Error", response);
      }
      return response;
    } catch (error) {
      console.log("yearly Revenue Get Error: ", error);
      showError("Something went wrong, please try again!", error.error);
      return { success: false, message: "Network error" };
    }
  };

  const ChatGet = async (id) => {
    try {
      const response = await AdminApiEndPoints.chatGet(id);
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
      const response = await AdminApiEndPoints.deleteChat();
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

  // all Customers room
  const customersRoom = async () => {
    try {
      const response = await AdminApiEndPoints.customersRoom();
      if (Array.isArray(response)) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Users Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // all Customers room
  const chatRead = async (customerId) => {
    try {
      const response = await AdminApiEndPoints.chatRead(customerId);
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.error);
      }
      return response;
    } catch (error) {
      console.log("Users Get Error: ", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };
  return {
    AllUsers,
    allCustomersGet,
    allGuestCustomersGet,
    allAgentsGet,
    allRestrictedUsersGet,
    createUser,
    updateUser,
    deleteUser,
    blockUser,
    suspendUser,
    unBlockUser,
    unSuspendUser,
    manualOrderPrepare,
    cashPayment,
    bookingOrderInvoice,
    deliveryOrderInvoice,
    bookingOrderInvoice,
    stripePayment,
    cancelParcel,
    resheduleParcel,
    orderPlacedGet,
    assignParcel,
    orderScheduledGet,
    orderCancelledGet,
    activeOrdersGet,
    trackParcels,

    countAgents,
    countParcels,
    countRevenue,
    allOrdersGet,
    changePaymentStatus,
    invoiceReportsGet,
    allZonePrices,
    zonePricesUpdate,

    weightBasePrices,
    weightBasePricesGet,
    deletePrice,
    weightBasePricesUpdate,
    agentCommisionGet,
    complaintsGet,
    complaintsStatusUpdation,
    agentCommisionUpdate,

    staticPages,
    updateAboutPage,
    updateContactPage,
    updateTermsPage,
    deleteTerms,
    addterm,
    dailyBookings,
    monthlyBookings,
    yearlyBookings,
    dailyDeliveredparcels,
    monthlyDeliveredparcels,
    yearlyDeliveredparcels,
    dailyRevenue,
    monthlyRevenue,
    yearlyRevenue,

    ChatGet,
    deleteChat,
    customersRoom,
    chatRead,
  };
};

export default UseAdmin;
