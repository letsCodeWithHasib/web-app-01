import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // Retrieve isDark from localStorage and ensure it's a boolean
  const storedTheme = localStorage.getItem("isDark");
  const [isDark, setIsDark] = useState(storedTheme === "true");

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem("isDark", newValue); // Store the updated value
      return newValue; // Return the updated value to set the state
    });
  };

  // Optional: Sync the theme with localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("isDark");
    if (storedTheme !== null) {
      setIsDark(storedTheme === "true"); // Ensure the correct boolean value
    }
  }, []);

  const context = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
