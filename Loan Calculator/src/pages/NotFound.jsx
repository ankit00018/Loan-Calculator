import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Paper } from '@mui/material';

const NotFound = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '3rem', textAlign: 'center' }}>
        <Typography variant="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" paragraph>
          Page Not Found
        </Typography>
        <Typography variant="body1" paragraph>
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          size="large"
        >
          Go to Homepage
        </Button>
      </Paper>
    </Container>
  );
};

export default NotFound;