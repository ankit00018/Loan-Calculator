import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <CircularProgress />
      <Typography variant="body1" sx={{ mt: 2 }}>Loading...</Typography>
    </Box>
  );
};

export default Loading;