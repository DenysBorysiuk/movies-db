import { Outlet } from 'react-router-dom';
import { LiveTvOutlined } from '@mui/icons-material';
import { AppBar, CssBaseline, Toolbar, Typography, createTheme } from '@mui/material';
import { teal } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

import { Footer, Navigation } from '@/components';

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
      <AppBar>
        <Toolbar>
          <LiveTvOutlined sx={{ mr: 2 }} />

          <Typography variant="h6" color="inherit" noWrap>
            The Movies DB
          </Typography>

          <Navigation />
        </Toolbar>
      </AppBar>

      <main>
        <Outlet />
      </main>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
