import { Outlet } from 'react-router-dom';
import { CssBaseline, createTheme } from '@mui/material';
import { teal } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

import { Footer, Header } from '@/components';

const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: '#96000f',
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
