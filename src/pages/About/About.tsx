import { Container } from '@mui/material';

import { CountdownVideo, CountdownText, MapView } from '@/components';

export const About = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <CountdownText />

      <CountdownVideo />

      <MapView />
    </Container>
  );
};
