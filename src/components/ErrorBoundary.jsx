import React, { Component } from 'react';
import { Button, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error Boundary caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Paper elevation={3} style={{ padding: '2rem', margin: '2rem', textAlign: 'center' }}>
          <Typography variant="h4" color="error" gutterBottom>
            Something went wrong!
          </Typography>
          <Typography variant="body1" paragraph>
            {this.state.error?.toString()}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleReset}
            style={{ marginRight: '1rem' }}
          >
            Try Again
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/"
          >
            Return Home
          </Button>
        </Paper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;