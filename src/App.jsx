import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ExpensePage from "./pages/Expense";
import IncomePage from "./pages/IncomePage";
import HistoryPage from "./pages/History";
import TransactionsPage from "./pages/TransactionsPage";
import BudgetPage from "./pages/BudgetPage";
import DashboardPage from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import { UserProvider } from './components/context/Usercontext';
import SettingsPage from "./pages/SettingsPage";





function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<DashboardPage/>} />
        <Route path="transactions" element={<TransactionsPage/>} />
        <Route path="budget" element={<BudgetPage/>} />
        <Route path="expense" element={<ExpensePage/>} />
        <Route path="income" element={<IncomePage/>} />
        <Route path="history" element={<HistoryPage/>} />
        <Route path="profile" element={<ProfilePage/>} />
        <Route path="settings" element={<SettingsPage/>} />
        
        
        
        
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
