import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./ProductSlice";
const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
export default store;
