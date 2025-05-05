import { Link } from 'react-router-dom';
import { Button, Container, Typography, Paper } from '@mui/material';

const NotFound = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h1" gutterBottom>404</Typography>
        <Typography variant="h4" paragraph>
          Page Not Found
        </Typography>
        <Typography paragraph>
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button 
          variant="contained" 
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