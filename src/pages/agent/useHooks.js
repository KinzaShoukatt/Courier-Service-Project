import { AgentApiEndPoints } from "../../libs/http-service/api/agent.api";
import { showError, showSuccess } from "../../utils/toast";

const UseAgent = () => {
  const allAssignedParcels = async () => {
    try {
      const response = await AgentApiEndPoints.allAssignedParcels();
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.showError);
      }
      return response;
    } catch (error) {
      console.log("Assigned Deliveries Get Error:", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //accept parcel
  const acceptParcel = async (id, body) => {
    try {
      const response = await AgentApiEndPoints.acceptParcel(id, body);
      if (response) {
        showSuccess(response.message);
      } else {
        showError(response.showError);
      }
      return response;
    } catch (error) {
      console.log("Assigned Deliveries Get Error:", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //reject parcel
  const rejectParcel = async (id, body) => {
    try {
      const response = await AgentApiEndPoints.rejectParcel(id, body);
      if (response) {
        showSuccess(response.message);
      } else {
        showError(response.showError);
      }
      return response;
    } catch (error) {
      console.log("Reject parcel Error:", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //accept orders
  const allAcceptParcels = async (page = 1, limit = 10) => {
    try {
      const response = await AgentApiEndPoints.allAcceptParcels(page, limit);
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.showError);
      }
      return response;
    } catch (error) {
      console.log("Assigned Deliveries Get Error:", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // all deliver orders
  const alldeliveredParcels = async (page = 1, limit = 10) => {
    try {
      const response = await AgentApiEndPoints.alldeliveredParcels(page, limit);
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.showError);
      }
      return response;
    } catch (error) {
      console.log("Assigned Deliveries Get Error:", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  // all earning
  const allEarningsGet = async (page = 1, limit = 10) => {
    try {
      const response = await AgentApiEndPoints.allEarnings(page, limit);
      if (response) {
        // showSuccess(response.message);
      } else {
        showError(response.showError);
      }
      return response;
    } catch (error) {
      console.log("Assigned Deliveries Get Error:", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  //change parcel staus
  const changeParcelStatus = async (id, body) => {
    try {
      const response = await AgentApiEndPoints.changeParcelStatus(id, body);
      if (response) {
        showSuccess(response.message);
      } else {
        showError(response.showError);
      }
      return response;
    } catch (error) {
      console.log("Assigned Deliveries Get Error:", error);
      showError("Something went wrong, please try again!");
      return { success: false, message: "Network error" };
    }
  };

  const countAgentCommision = async () => {
    try {
      const response = await AgentApiEndPoints.countAgentCommision();
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

  return {
    allAssignedParcels,
    acceptParcel,
    rejectParcel,
    allAcceptParcels,
    alldeliveredParcels,
    allEarningsGet,
    changeParcelStatus,
    countAgentCommision,
  };
};
export default UseAgent;
