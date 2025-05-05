import React from 'react';
import { Typography, Button, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h2" color="error" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="h5" paragraph>
          Something went wrong!
        </Typography>
        <Typography paragraph>
          We're working on fixing the issue. Please try again later.
        </Typography>
        <Button variant="contained" component={Link} to="/">
          Return to Home
        </Button>
      </Paper>
    </Container>
  );
};

export default ErrorPage;