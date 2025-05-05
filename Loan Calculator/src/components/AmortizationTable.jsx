import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const AmortizationTable = ({ data, currency }) => {
  const formatCurrency = (value) => `${value.toFixed(2)} ${currency}`;

  return (
    <TableContainer component={Paper} sx={{ mt: 4, boxShadow: 3 }}>
      <Typography variant="h6" sx={{ px: 2, py: 2 }}>
        Amortization Schedule ({currency})
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Month</strong></TableCell>
            <TableCell><strong>Principal</strong></TableCell>
            <TableCell><strong>Interest</strong></TableCell>
            <TableCell><strong>Remaining Balance</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.month}>
              <TableCell>{row.month}</TableCell>
              <TableCell>{formatCurrency(row.principal)}</TableCell>
              <TableCell>{formatCurrency(row.interest)}</TableCell>
              <TableCell>{formatCurrency(row.balance)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AmortizationTable;
