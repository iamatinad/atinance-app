import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ExpensePage from "./pages/Expense";
import IncomePage from "./pages/IncomePage";
import HistoryPage from "./pages/History";
import TransactionsPage from "./pages/TransactionsPage";
import BudgetPage from "./pages/BudgetPage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="transactions" element={<TransactionsPage/>} />
        <Route path="budget" element={<BudgetPage/>} />
        <Route path="expense" element={<ExpensePage/>} />
        <Route path="income" element={<IncomePage/>} />
        <Route path="history" element={<HistoryPage/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
