import React from 'react';
import Sidenav from '../components/navigation/Sidenav';
import TransactionList from '../components/TransactionList'; // Import the TransactionList component

const HistoryPage = ({ transactions }) => {
  return (
    <div className="flex">
      <Sidenav />
      <div>
        <h1>Transaction History</h1>
        {transactions ? (
          <TransactionList transactions={transactions} />
        ) : (
          <p>No transactions available.</p>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
