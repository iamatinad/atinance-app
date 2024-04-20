import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !date) return;
    addExpense({ description, amount, date });
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Add New Expense</h2>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-1">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block mb-1">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block mb-1">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
