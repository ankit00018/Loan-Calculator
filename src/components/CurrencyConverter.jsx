import React, { useState, useEffect } from 'react';
import { Select, MenuItem, Typography, Grid } from '@mui/material';
import { useCurrency } from '../context/CurrencyContext';
import useExchangeRates from '../hooks/useExchangeRates';

const CurrencyConverter = ({ amount }) => {
  const { currency, updateCurrency } = useCurrency();
  const { allCurrencies, convertCurrency } = useExchangeRates();
  const [convertedAmount, setConvertedAmount] = useState(() => {
    // Initialize with properly formatted amount
    return typeof amount === 'number' ? amount : 0;
  });

  useEffect(() => {
    if (typeof amount === 'number' && currency) {
      const converted = convertCurrency(amount, currency);
      // Ensure we always have a valid number
      const safeConverted = typeof converted === 'number' ? converted : amount;
      setConvertedAmount(safeConverted);
    }
  }, [amount, currency, convertCurrency]);

  // Format the amount safely
  const formattedAmount = typeof convertedAmount === 'number' 
    ? convertedAmount.toFixed(2) 
    : '0.00';

  return (
    <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
      <Grid item>
        <Typography variant="body1">
          Converted Amount: {formattedAmount} {currency}
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