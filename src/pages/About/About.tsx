import { Container } from '@mui/material';

import { CountdownVideo, CountdownText, MapView } from '@/components';

const About = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <CountdownText />

      <CountdownVideo />

      <MapView />
    </Container>
  );
};

export default About;
