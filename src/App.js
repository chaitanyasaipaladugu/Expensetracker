import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filter from "./components/Filter";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Expense Tracker</h1>
          <p>Track your spending with ease.</p>
        </header>

        <div className="grid">
          <section className="card">
            <h2 className="card-title">Add Expense</h2>
            <ExpenseForm />
          </section>

          <section className="card">
            <h2 className="card-title">Filter</h2>
            <Filter />
          </section>
        </div>

        <section className="card">
          <ExpenseList />
        </section>
      </div>
    </div>
  );
}
