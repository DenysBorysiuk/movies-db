import { Container } from '@mui/material';

import { CountdownVideo, CountdownText } from '@/components';

const About = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <CountdownText />

      <CountdownVideo />
    </Container>
  );
};

export default About;
