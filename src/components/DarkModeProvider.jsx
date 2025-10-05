// Create this file: src/components/DarkModeProvider.jsx
import { useEffect } from 'react';

const DarkModeProvider = ({ children }) => {
  useEffect(() => {
    // Load dark mode preference from localStorage on mount
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return children;
};

export default DarkModeProvider;