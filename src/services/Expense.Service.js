const addExpenseTransaction = async (expenseData) => {
    try {
      const response = await fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
      });
      if (!response.ok) {
        throw new Error('Failed to add expense transaction');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  const getAllExpenseTransactions = async () => {
    try {
      const response = await fetch('/api/transactions');
      if (!response.ok) {
        throw new Error('Failed to fetch expense transactions');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  const deleteExpenseTransaction = async (transactionId) => {
    try {
      const response = await fetch(`/api/transactions/${transactionId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete expense transaction');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export { addExpenseTransaction, getAllExpenseTransactions, deleteExpenseTransaction };
  