import { LiveTvOutlined } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material';

import { Navigation } from '@/components';
import { AuthBar } from '@/components';

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <LiveTvOutlined sx={{ mr: 2 }} />

        <Typography variant="h6" color="inherit" noWrap>
          The Movies DB
        </Typography>

        <Navigation />

        <AuthBar />
      </Toolbar>
    </AppBar>
  );
};
