import { useContext } from 'react';
import { Button, Typography } from '@mui/material';

import { AuthContext, anonymousUser } from '@/context/AuthContext';

export const AuthBar = () => {
  const { user } = useContext(AuthContext);
  const loggedIn = user != anonymousUser;

  if (loggedIn) {
    return (
      <>
        <Typography sx={{ ml: 'auto' }}>Hello, {user.name}!</Typography>
        <Button color="inherit" sx={{ ml: 2 }} variant="outlined">
          Log out
        </Button>
      </>
    );
  }

  return (
    <Button color="inherit" sx={{ ml: 'auto' }} variant="outlined">
      Log in
    </Button>
  );
};
