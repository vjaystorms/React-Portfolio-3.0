// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Shared state for homepage UI
  const [showLinks, setShowLinks] = useState(false);
  const [showParagraphs, setShowParagraphs] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        showLinks,
        setShowLinks,
        showParagraphs,
        setShowParagraphs,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
