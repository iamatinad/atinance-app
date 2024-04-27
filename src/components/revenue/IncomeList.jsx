import React, { useState } from "react";

const IncomeList = ({ incomes, editIncome, deleteIncome }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedIncome, setEditedIncome] = useState(null);

  const handleEdit = (income) => {
    setEditMode(true);
    setEditedIncome(income);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedIncome(null);
  };

  const handleSubmit = (editedIncome) => {
    editIncome(editedIncome);
    setEditMode(false);
    setEditedIncome(null);
  };

  // Add additional null check for incomes prop
  if (!incomes || !Array.isArray(incomes)) {
    return <div>No incomes available.</div>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Income List</h2>
      {editMode ? (
        <IncomeEditForm
          income={editedIncome}
          onCancelEdit={handleCancelEdit}
          onSubmit={handleSubmit}
        />
      ) : (
        <ul className="divide-y divide-gray-300">
          {incomes.map((income) => (
            <li key={income.id} className="py-2">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    {income.description}
                  </h3>
                  <p className="text-gray-600">{income.date}</p>
                </div>
                <div>
                  <span className="font-semibold">${income.amount}</span>
                  <div>
                    <button
                      onClick={() => handleEdit(income)}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteIncome(income.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const IncomeEditForm = ({ income, onCancelEdit, onSubmit }) => {
  const [description, setDescription] = useState(income.description);
  const [amount, setAmount] = useState(income.amount);
  const [date, setDate] = useState(income.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...income, description, amount, date });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Edit Income</h2>
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
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          onClick={onCancelEdit}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default IncomeList;
