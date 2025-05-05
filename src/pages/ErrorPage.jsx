import { Link } from 'react-router-dom';
import { Button, Container, Typography, Paper } from '@mui/material';

const ErrorPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom color="error">
          Something Went Wrong!
        </Typography>
        <Typography paragraph>
          We're sorry, but an unexpected error occurred.
        </Typography>
        <Button 
          variant="contained" 
          component={Link} 
          to="/"
          sx={{ mr: 2 }}
        >
          Return Home
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </Paper>
    </Container>
  );
};

export default ErrorPage;