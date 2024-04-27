import React, { useState } from 'react';
import Sidenav from '../components/navigation/Sidenav';

const BudgetPage = () => {
  const [budgetName, setBudgetName] = useState('');
  const [budgetLimit, setBudgetLimit] = useState('');
  const [budgetDate, setBudgetDate] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [remainingBudget, setRemainingBudget] = useState(0);

  const handleNameChange = (event) => {
    setBudgetName(event.target.value);
  };

  const handleLimitChange = (event) => {
    setBudgetLimit(event.target.value);
  };

  const handleDateChange = (event) => {
    setBudgetDate(event.target.value);
  };

  const handleSetBudget = () => {
    // Validate inputs
    if (!budgetName || !budgetLimit || !budgetDate) {
      alert('Please fill in all fields');
      return;
    }
    // Convert limit to number
    const limit = parseFloat(budgetLimit);
    if (isNaN(limit) || limit <= 0) {
      alert('Please enter a valid budget limit');
      return;
    }
    // Convert date to date object
    const date = new Date(budgetDate);
    if (isNaN(date.getTime())) {
      alert('Please enter a valid date');
      return;
    }
    // Set budget
    setRemainingBudget(limit);
    alert('Budget set successfully!');
  };

  return (
    <div className="flex">
      <Sidenav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Budget Page</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Set Budget</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              value={budgetName}
              onChange={handleNameChange}
              placeholder="Budget Name"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <input
              type="number"
              value={budgetLimit}
              onChange={handleLimitChange}
              placeholder="Budget Limit"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <input
              type="date"
              value={budgetDate}
              onChange={handleDateChange}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSetBudget}
              className="px-6 py-3 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
            >
              Set Budget
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Transactions</h2>
          <ul className="space-y-2">
            {transactions.map((transaction, index) => (
              <li
                key={index}
                className={`px-4 py-2 rounded-md text-white ${
                  transaction.type === 'Income' ? 'bg-green-500' : 'bg-blue-500'
                }`}
              >
                {transaction.type === 'Income'
                  ? `Income added: $${transaction.amount}`
                  : `Expense added: $${transaction.amount}`}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Remaining Budget</h2>
          <p className="text-xl">Remaining Budget: ${remainingBudget.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetPage;
