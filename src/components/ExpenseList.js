import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { removeExpense, clearAllExpenses } from "../features/slice";

export default function ExpenseList() {
  const { list, filterCategory } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const filteredList =
    filterCategory === "all"
      ? list
      : list.filter((expense) => expense.category === filterCategory);

  const total = filteredList.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="list-section">
      <div className="list-header">
        <h3 className="total">Total: ₹{total.toFixed(2)}</h3>
        <button
          className="btn btn-ghost"
          onClick={() => dispatch(clearAllExpenses())}
        >
          Clear All
        </button>
      </div>

      <ul className="list">
        {filteredList.map((exp, idx) => (
          <li
            key={exp.id}
            className="list-item"
            style={{ animationDelay: `${idx * 40}ms` }}
          >
            <div className="item-main">
              <span className="amount">₹{exp.amount}</span>
              <span className="chip">{exp.category}</span>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeExpense(exp.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
