import "toastr/build/toastr.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

export const showSuccess = (message, title = "Success") => {
  toast.success(`${title}: ${message}`, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    style: {
      background: "white",
      fontWeight: "500",
      borderRadius: "7px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      fontFamily: "regular",
    },
    progressClassName: "toast-progress-custom",
  });
};

export const showError = (message, title = "Error") => {
  toast.error(`${title}: ${message}`, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "colored",
    style: {
      fontFamily: "regular",
      background: "#DC3545",
    },
    progressClassName: "toast-progress-error",
  });
};

export const showInfo = (message, title = "Info") => {
  toast.info(`${title}: ${message}`, {
    position: "top-right",
    autoClose: 1500,
    theme: "colored",
  });
};

export const showWarning = (message, title = "Warning") => {
  toast.warn(`${title}: ${message}`, {
    position: "top-right",
    autoClose: 1500,
    theme: "colored",
  });
};
