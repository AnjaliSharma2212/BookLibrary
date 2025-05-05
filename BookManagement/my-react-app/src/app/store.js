import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/bookSlice";
const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
export default store;
