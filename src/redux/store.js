import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import profileReducer from "../redux/features/profile/profileSlice";
import menuReducer from "../redux/features/menu/menuSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    menu: menuReducer,
  },
});
