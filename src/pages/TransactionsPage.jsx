import React, { useState } from 'react';
import Sidenav from '../components/navigation/Sidenav';

const TransactionPage = () => {
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTransaction = (isIncome) =>
   {
   
    const newTransaction = {
      amount: parseFloat(amount),
      type: isIncome ? 'Income' : 'Expense',
    };
    setTransactions([...transactions, newTransaction]);
    // Reset the input field after adding transaction
    setAmount('');
  };

  return (
    <div className="flex">
      <Sidenav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Transaction Page</h1>
        <form onSubmit={(e) => e.preventDefault()} className="mb-8">
          <div className="flex items-center mb-4">
            <label className="mr-4">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
              className="border border-gray-300 rounded-md px-3 py-2 w-48 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={() => handleTransaction(true)}
              className="ml-4 px-4 py-2 rounded-md text-white bg-green-500 hover:bg-opacity-80 focus:outline-none"
            >
              +
            </button>
            <button
              onClick={() => handleTransaction(false)}
              className="ml-2 px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-opacity-80 focus:outline-none"
            >
              -
            </button>
          </div>
        </form>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
          <ul className="space-y-2">
            {transactions.map((transaction, index) => (
              <li
                key={index}
                className={`px-4 py-2 rounded-md text-white ${
                  transaction.type === 'Income' ? 'bg-green-500' : 'bg-blue-500'
                }`}
              >
                {transaction.type === 'Income' ? `Income added: $${transaction.amount}` : `Expense added: $${transaction.amount}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
