import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom>About Loan Calculator</Typography>
        <Typography paragraph>
          This application helps users calculate Equated Monthly Installments (EMI) 
          for loans with real-time currency conversion capabilities.
        </Typography>
        <Typography paragraph>
          Features include:
        </Typography>
        <ul>
          <li>EMI calculation with amortization schedule</li>
          <li>Live currency exchange rates</li>
          <li>Dark/Light theme support</li>
          <li>Responsive design</li>
        </ul>
      </Paper>
    </Container>
  );
};

export default About;