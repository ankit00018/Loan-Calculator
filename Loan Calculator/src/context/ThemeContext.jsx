import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? {
        // Light theme
        primary: { main: '#1976d2' },
        secondary: { main: '#9c27b0' },
        background: {
          default: '#f5f5f5',
          paper: '#ffffff',
        },
        text: {
          primary: 'rgba(0, 0, 0, 0.87)',
          secondary: 'rgba(0, 0, 0, 0.6)',
        },
      } : {
        // Dark theme
        primary: { main: '#90caf9' },
        secondary: { main: '#ce93d8' },
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
        text: {
          primary: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.7)',
        },
      }),
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            transition: 'all 0.3s ease',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            transition: 'all 0.3s ease',
          },
        },
      },
    },
  }), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};