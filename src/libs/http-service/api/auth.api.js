
import { deleteData, getData, patchData, postData, putData } from "../methods";
import toastr from "toastr";

export const AuthApiEndPoints = {
  login: async (body) => await postData("/auth/login", body),
  signUp: async (body) => await postData("/auth/register", body),
  verifyOtp: async (body) => await postData("/auth/verify-otp", body),
  resendOtp: async (body) => await postData("/auth/send-otp", body),
  forgotPassword: async (body) => await postData("/auth/send-otp", body),
  resetPassword: async (body) => await putData("/auth/reset-password", body),
};
