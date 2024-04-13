import { Container, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: theme => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        Copyright © The Movies DB {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};
