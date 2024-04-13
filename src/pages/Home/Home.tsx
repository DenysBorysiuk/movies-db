import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const loggedIn = true;
  const userName = 'Diana';
  const greeting = loggedIn
    ? `${userName}, explore movies today with us!`
    : 'Explore movies today with us!';

  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 8 }}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Welcome
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {greeting}
        </Typography>

        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
          <Button component={RouterLink} to="/movies" variant="contained" color="secondary">
            Explore
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
