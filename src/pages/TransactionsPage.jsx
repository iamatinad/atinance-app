import React, { useState, useEffect } from 'react';
import TransactionList from '../components/transaction/TransactionsList'; 
import { getAllTransactions } from '../services/Transaction.Service'; 
import Sidenav from '../components/navigation/Sidenav';


const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch all transactions from backend when component mounts
    fetchAllTransactions();
  }, []);

  const fetchAllTransactions = async () => {
    try {
      const allTransactions = await getAllTransactions();
      setTransactions(allTransactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  return (
    <div className='flex'>
        <Sidenav/>
        <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <TransactionList transactions={transactions} />
    </div>
    </div>
    
  );
};

export default TransactionsPage;
