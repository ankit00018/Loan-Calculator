import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box } from '@mui/material';
import useExchangeRates from '../hooks/useExchangeRates';
import Loading from '../components/Loading';

const ExchangeRates = () => {
  const { rates, loading, error, currentPage, totalPages, setCurrentPage } = useExchangeRates();

  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Typography variant="h4" gutterBottom>Exchange Rates</Typography>
      
      {loading ? <Loading /> : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Currency</TableCell>
                  <TableCell align="right">Rate (USD base)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rates.map((rate) => (
                  <TableRow key={rate.currency}>
                    <TableCell>{rate.currency}</TableCell>
                    <TableCell align="right">{rate.rate.toFixed(4)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            mt: 3
          }}>
            <Button 
              variant="outlined"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              sx={{ minWidth: 100 }}
            >
              Previous
            </Button>
            <Typography variant="body1">
              Page {currentPage} of {totalPages}
            </Typography>
            <Button
              variant="outlined"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              sx={{ minWidth: 100 }}
            >
              Next
            </Button>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default ExchangeRates;