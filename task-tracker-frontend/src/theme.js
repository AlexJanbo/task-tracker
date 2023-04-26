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
      paper: '#FFF'
    },
    text: {
      primary: '#000000',
      secondary: '#343a40',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#10083f',
    },
    secondary: {
      main: '#28a745',
    },
    warning: {
      main: '#ffc107',
    },
    background: {
      default: '#4c4E52',
      paper: '#68695E',
    },
    text: {
      primary: '#F8F9Fa',
      secondary: '#343a40'
    },
  },
});

export { lightTheme, darkTheme };