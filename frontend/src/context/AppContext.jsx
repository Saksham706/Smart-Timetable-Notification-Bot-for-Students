import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AppContext = createContext();

// Provide app-wide state and functions here
export const AppProvider = ({ children }) => {
  // Example: Theme state (light/dark)
  const [theme, setTheme] = useState('light');

  // Example: Current user info
  const [user, setUser] = useState({
    name: 'John Doe',
    role: 'student', // or 'teacher'
    // Add other user info as needed
  });

  // Example: Global loading state
  const [loading, setLoading] = useState(false);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Simulate fetching or updating user info (can be replaced with real API calls)
  useEffect(() => {
    // Fetch user info logic here
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
