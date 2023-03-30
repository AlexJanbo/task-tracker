import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#28a745',
    },
    warning: {
      main: '#ffc107',
    },
    background: {
      default: '#f8f9fa',
    },
    text: {
      primary: '#f8f9fa',
      secondary: '#343a40',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#28a745',
    },
    warning: {
      main: '#ffc107',
    },
    background: {
      default: '#343a40',
      paper: '#2c313a',
    },
    text: {
      primary: '#f8f9fa',
    },
  },
});

export { lightTheme, darkTheme };