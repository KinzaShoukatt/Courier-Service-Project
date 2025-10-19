import { postData, putData } from "../methods";

export const AuthApiEndPoints = {
  login: async (body) => await postData("/auth/login", body),
  googleLogin: async (body) => await postData("/auth/google-login", body),
  signUp: async (body) => await postData("/auth/register", body),
  verifyOtp: async (body) => await postData("/auth/verify-otp", body),
  resendOtp: async (body) => await postData("/auth/send-otp", body),
  forgotPassword: async (body) => await postData("/auth/send-otp", body),
  resetPassword: async (body) => await putData("/auth/reset-password", body),
};
