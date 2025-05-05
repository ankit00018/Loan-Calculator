import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const AmortizationTable = ({ data }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 3, overflowX: 'auto' }}>
      <Typography variant="h6" sx={{ p: 2 }}>Amortization Schedule</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell align="right">EMI</TableCell>
            <TableCell align="right">Principal</TableCell>
            <TableCell align="right">Interest</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.month}>
              <TableCell>{row.month}</TableCell>
              <TableCell align="right">{row.emi.toFixed(2)}</TableCell>
              <TableCell align="right">{row.principal.toFixed(2)}</TableCell>
              <TableCell align="right">{row.interest.toFixed(2)}</TableCell>
              <TableCell align="right">{row.balance.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AmortizationTable;