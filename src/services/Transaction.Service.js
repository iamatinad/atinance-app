// transactionService.js

const BASE_URL = '/api/transactions';

// Function to register a new transaction
export const addTransaction = async (transactionData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactionData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};

// Function to fetch all transactions for a user
export const getAllTransactions = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

// Function to delete a single transaction by ID
export const deleteTransaction = async (transactionId) => {
  try {
    const response = await fetch(`${BASE_URL}/${transactionId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
};
