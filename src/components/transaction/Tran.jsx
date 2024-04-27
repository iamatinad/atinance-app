import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Transaction List</h2>
      <ul className="divide-y divide-gray-300">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="py-2">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-semibold">{transaction.title}</h3>
                <p className="text-gray-600">{transaction.date}</p>
              </div>
              <div>
                <span className={transaction.amount >= 0 ? 'text-green-500' : 'text-blue-500'}>
                  ${Math.abs(transaction.amount)}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
