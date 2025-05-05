import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Button, TextField, Grid, Paper, Typography, Switch, FormControlLabel } from '@mui/material';
import AmortizationTable from '../components/AmortizationTable';
import useEMI from '../hooks/useEMI';
import CurrencyConverter from '../components/CurrencyConverter';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(12);
  const { calculateEMI, amortizationSchedule } = useEMI();

  const handleCalculate = () => {
    calculateEMI(principal, rate, tenure);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: theme.palette.background.default }}>
      <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          EMI Calculator
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Loan Amount"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Interest Rate (%)"
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Loan Tenure (months)"
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleCalculate}
          style={{ marginTop: '1rem' }}
        >
          Calculate EMI
        </Button>

        {amortizationSchedule.length > 0 && (
          <>
            <Typography variant="h6" style={{ margin: '2rem 0 1rem' }}>
              Monthly EMI: {amortizationSchedule[0].emi.toFixed(2)}
            </Typography>
            <CurrencyConverter amount={amortizationSchedule[0].emi} />
            <AmortizationTable data={amortizationSchedule} />
          </>
        )}
      </Paper>
    </div>
  );
};

export default Home;