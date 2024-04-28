import React, { useState } from 'react';
import IncomeForm from '../components/revenue/IncomeForm';
import IncomeList from '../components/revenue/IncomeList';
import Sidenav from '../components/navigation/Sidenav';


const IncomePage = () => {
  const [incomes, setIncomes] = useState([]);

  const addIncome = (income) => {
    
    setIncomes([...incomes, { ...income, id: Math.random() }]);
  };

  const editIncome = (editedIncome) => {
    const updatedIncomes = incomes.map((income) =>
      income.id === editedIncome.id ? editedIncome : income
    );
    setIncomes(updatedIncomes);
  };

  const deleteIncome = (id) => {
    setIncomes(incomes.filter((income) => income.id !== id));
  };

  return (
    
   <div className='flex'>

  <Sidenav/>
     <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Income Tracker</h1>
      <IncomeForm addIncome={addIncome} />
      <IncomeList incomes={incomes} editIncome={editIncome} deleteIncome={deleteIncome} />
    </div>
    </div>
    
   
  );
};

export default IncomePage;
