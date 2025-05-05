import { useState, useEffect } from 'react';
import { fetchExchangeRates } from '../api/exchangeRateAPI';

const useExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRates = async () => {
      try {
        const ratesData = await fetchExchangeRates();
        setRates(ratesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadRates();
  }, []);

  const convertCurrency = (amount, targetCurrency) => {
    if (!rates[targetCurrency]) return null;
    return amount * rates[targetCurrency];
  };

  return {
    rates,
    loading,
    error,
    allCurrencies: Object.keys(rates),
    convertCurrency
  };
};

export default useExchangeRates;