import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline, createTheme } from '@mui/material';
import { teal } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

import { Footer, Header } from '@/components';
import { AuthContext, AuthInfo, anonymousUser } from '@/context/AuthContext';

const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: '#96000f',
    },
  },
});

export const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<AuthInfo>({ user: anonymousUser });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <AuthContext.Provider value={user}>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default App;
