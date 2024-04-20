import React, { useState, useEffect } from "react";
import ExpenseForm from "../components/expenditure/ExpenseForm";
import ExpenseList from "../components/expenditure/ExpenseList";
import Sidenav from "../components/navigation/Sidenav";

const ExpensePage = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Math.random() }]);
  };

  const editExpense = (editedExpense) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === editedExpense.id ? editedExpense : expense
    );
    setExpenses(updatedExpenses);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="flex">
      <Sidenav />

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList
          expenses={expenses}
          editExpense={editExpense}
          deleteExpense={deleteExpense}
        />
      </div>
    </div>
  );
};

export default ExpensePage;
