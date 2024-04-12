import { Link as RouterLink } from 'react-router-dom';

import data from '@/data/common.json';
import { Link, List, ListItem } from '@mui/material';

export const Navigation = () => {
  return (
    <nav>
      <List sx={{ display: 'flex', alignItems: 'center' }}>
        {data.navLinks.map(({ path, label }) => (
          <ListItem key={path} disablePadding>
            <Link
              component={RouterLink}
              to={path}
              variant="button"
              color="inherit"
              sx={{ my: 1, mx: 1.5 }}
            >
              {label}
            </Link>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
