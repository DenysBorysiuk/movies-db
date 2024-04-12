import { Outlet } from 'react-router-dom';
import { LiveTvOutlined } from '@mui/icons-material';
import { AppBar, CssBaseline, Toolbar, Typography, createTheme } from '@mui/material';
import { teal } from '@mui/material/colors';

import { Navigation } from '@/components/Navigation';
import { ThemeProvider } from '@emotion/react';

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
    </ThemeProvider>
  );
};

export default App;
