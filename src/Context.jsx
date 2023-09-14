import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const getIntialDarkTheme = () => {
  const preferDarkTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const storedTheme = localStorage.getItem('darkTheme');

  return storedTheme || preferDarkTheme;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getIntialDarkTheme());
  const [searchTerm, setSearchTerm] = useState('laptop');

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
