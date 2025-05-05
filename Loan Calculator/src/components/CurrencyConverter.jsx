import React, { useContext } from 'react';
import { Typography, Select, MenuItem, Grid } from '@mui/material';
import { useCurrency } from '../contexts/CurrencyContext';
import useExchangeRates from '../hooks/useExchangeRates';

const CurrencyConverter = ({ amount }) => {
  const { currency, updateCurrency } = useCurrency();
  const { allCurrencies } = useExchangeRates();

  return (
    <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
      <Grid item>
        <Typography variant="body1">
          Converted Amount: {amount} {currency}
        </Typography>
      </Grid>
      <Grid item>
        <Select
          value={currency}
          onChange={(e) => updateCurrency(e.target.value)}
          size="small"
        >
          {allCurrencies?.map((curr) => (
            <MenuItem key={curr} value={curr}>{curr}</MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};

export default CurrencyConverter;