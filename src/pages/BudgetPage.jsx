import React, { useState } from 'react';
import Sidenav from '../components/navigation/Sidenav';

const BudgetPage = () => {
  const [budgetTitle, setBudgetTitle] = useState('');
  const [budgetDescription, setBudgetDescription] = useState('');
  const [budgetLimit, setBudgetLimit] = useState('');
  const [budgetDate, setBudgetDate] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [remainingBudget, setRemainingBudget] = useState(0);

  const handleTitleChange = (event) => {
    setBudgetTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setBudgetDescription(event.target.value);
  };

  const handleLimitChange = (event) => {
    setBudgetLimit(event.target.value);
  };

  const handleDateChange = (event) => {
    setBudgetDate(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseURL = import.meta.env.VITE_ATINANCE_API_URL;
      const response = await fetch(`${baseURL}/api/budgets`, {
        method: 'POST',
        body: JSON.stringify({
          title: budgetTitle,
          description: budgetDescription,
          limit: budgetLimit,
          date: budgetDate
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      if (response.ok) {
        // Update remaining budget after setting the budget limit
        const newBudgetLimit = parseFloat(budgetLimit);
        const updatedRemainingBudget = remainingBudget + newBudgetLimit;
        setRemainingBudget(updatedRemainingBudget);

        // Reset form fields
        setBudgetTitle('');
        setBudgetDescription('');
        setBudgetLimit('');
        setBudgetDate('');
      } else {
        console.error('Failed to submit budget:', response.statusText);
        alert('Failed to submit budget. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting budget:', error);
      alert('An error occurred while submitting the budget. Please try again.');
    }
  };

  return (
    <div className="flex">
      <Sidenav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Budget Page</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Set Budget</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                value={budgetTitle}
                onChange={handleTitleChange}
                placeholder="Budget Title"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                value={budgetDescription}
                onChange={handleDescriptionChange}
                placeholder="Budget Description"
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
                type="submit"
                className="px-6 py-3 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
              >
                Set Budget
              </button>
            </div>
          </form>
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
