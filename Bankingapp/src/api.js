import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// This is a mock API call. In a real app, this would hit your actual backend.
export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts?_limit=5`); // mock data
    // Transform the mock data to fit the transaction structure
    return response.data.map(tx => ({
      id: tx.id,
      date: "2025-08-17", // Using a static date for example
      description: tx.title.substring(0, 30) + '...', // Shorten the long text
      amount: Math.floor(Math.random() * 5000 - 2500) // Random amount
    }));
  } catch (error) {
    console.error("Failed to fetch transactions:", error);
    return []; // Return empty array on error
  }
};