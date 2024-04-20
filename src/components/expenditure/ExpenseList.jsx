import React, { useState } from 'react';

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedExpense, setEditedExpense] = useState(null);

  const handleEdit = (expense) => {
    setEditMode(true);
    setEditedExpense(expense);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedExpense(null);
  };

  const handleSubmit = (editedExpense) => {
    editExpense(editedExpense);
    setEditMode(false);
    setEditedExpense(null);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Expense List</h2>
      {editMode ? (
        <ExpenseEditForm expense={editedExpense} onCancelEdit={handleCancelEdit} onSubmit={handleSubmit} />
      ) : (
        <ul className="divide-y divide-gray-300">
          {expenses.map((expense) => (
            <li key={expense.id} className="py-2">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{expense.description}</h3>
                  <p className="text-gray-600">{expense.date}</p>
                </div>
                <div>
                  <span className="font-semibold">${expense.amount}</span>
                  <div>
                    <button
                      onClick={() => handleEdit(expense)}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteExpense(expense.id)}
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

const ExpenseEditForm = ({ expense, onCancelEdit, onSubmit }) => {
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);
  const [date, setDate] = useState(expense.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...expense, description, amount, date });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Edit Expense</h2>
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
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        <button onClick={onCancelEdit} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseList;
