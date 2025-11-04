import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profilePic: null,
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfilePic: (state, action) => {
      state.profilePic = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    resetUser: () => initialState,
  },
});

export const { setProfilePic, setUserName, resetUser } = userSlice.actions;
export default userSlice.reducer;
