import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions && transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.type === 'Income'
                ? `Income added: $${transaction.amount}`
                : `Expense added: $${transaction.amount}`}
            </li>
          ))
        ) : (
          <li>No transactions yet.</li>
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
