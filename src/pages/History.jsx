import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import Sidenav from "../components/navigation/Sidenav";

const HistoryPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_ATINANCE_API_URL}/api/transactions`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  const csvData = transactions.map(({ title, description, amount, date }) => ({
    Title: title,
    Description: description,
    Amount: amount,
    Date: date
  }));

  return (
    <div className="flex">
      <Sidenav />
      <div className="ml-20 p-6">
        <h1 className="text-2xl font-semibold mb-4">Transaction History</h1>
        <div className="flex justify-end mb-4">
          <CSVLink data={csvData} filename={"transactions.csv"} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Export to CSV
          </CSVLink>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item) => (
              <tr key={item._id}>
                <td className="border px-4 py-2">{item.title}</td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-4 py-2">{item.amount}</td>
                <td className="border px-4 py-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;
