import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../features/slice";

export default function ExpenseForm() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0 || !category)
      return alert("Enter a valid amount and select a category");
    dispatch(addExpense({ amount: parseFloat(amount), category }));
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="row">
        <input
          className="input"
          type="number"
          min="0"
          step="0.01"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select
          className="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Expense
      </button>
    </form>
  );
}
