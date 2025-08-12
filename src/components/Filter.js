import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterCategory } from "../features/slice";

export default function Filter() {
  const filterCategory = useSelector((state) => state.expenses.filterCategory);
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <select
        className="select"
        value={filterCategory}
        onChange={(e) => dispatch(setFilterCategory(e.target.value))}
        aria-label="Filter by category"
      >
        <option value="all">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}
