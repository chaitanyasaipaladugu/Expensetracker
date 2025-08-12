import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../features/slice";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});
