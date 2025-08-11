import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  filterCategory: "all",
};
const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.list.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    removeExpense: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    clearAllExpenses: (state) => {
      state.list = [];
    },
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
  },
});

export const {
  addExpense,
  removeExpense,
  clearAllExpenses,
  setFilterCategory,
} = expenseSlice.actions;

export default expenseSlice.reducer;
