import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // This is custom blue
      main: "#0877c4",
    },
    secondary: {
      // This is yellow.
      main: "#ffcd00",
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

export default theme;