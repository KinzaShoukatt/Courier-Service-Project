import toastr from "toastr";
import "toastr/build/toastr.min.css";

export const showSuccess = (message, tittle = "Success") => {
    toastr.success(message, tittle);
}

export const showError = (message, tittle = "Error") => {
    toastr.error(message, tittle);
}

export const showInfo = (message, title = "Info") => {
  toastr.info(message, title);
};

export const showWarning = (message, title = "Warning") => {
  toastr.warning(message, title);
};