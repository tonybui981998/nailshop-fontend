import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/counterSlide";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
