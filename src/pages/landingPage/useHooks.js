import { useNavigate } from "react-router-dom";
import { LandingPageApiEndPoints } from "../../libs/http-service/api/landingPage.api";
import { showSuccess, showError } from "../../utils/toast";

const UseLandingpage = () => {
  const navigate = useNavigate();

  //track Parcel
  const trackParcels = async (trackingNumber) => {
    try {
      if (!trackingNumber) {
        showError("Tracking Number is not Found!");
        return;
      }
      const response = await LandingPageApiEndPoints.trackParcels(
        trackingNumber
      );
      if (response?.trackingNumber) {
        // showSuccess(response.message);
        navigate("/", {
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
      showError("Something went wrong, please try again!", error.error);
      return { success: false, message: "Network error" };
    }
  };

  // static Pages get
  const staticPages = async () => {
    try {
      const response = await LandingPageApiEndPoints.getStaticpages();
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

  return {
    trackParcels,
    staticPages,
  };
};
export default UseLandingpage;
