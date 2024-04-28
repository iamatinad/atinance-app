import React, { useState } from "react";

const IncomeForm = ({ addIncome }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income"); 
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseURL = import.meta.env.VITE_ATINANCE_API_URL;
      const response = await fetch(`${baseURL}/api/transactions`, {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          description: description,
          amount: amount,
          type: type,
          date: date
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    if (!description || !amount || !date) return;
    addIncome({ description, amount, date });
    setTitle("");
    setDescription("");
    setAmount("");
    setDate("");
    setType("income"); 
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Add New Income</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block mb-1">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-1">
          Description:
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block mb-1">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="type" className="block mb-1">
          Type:
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 w-full"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block mb-1">
          Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Income
      </button>
    </form>
  );
};

export default IncomeForm;
