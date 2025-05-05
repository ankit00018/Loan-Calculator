import { useState, useEffect } from 'react';
import { fetchExchangeRates } from '../api/exchangeRateAPI';

const useExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const totalPages = Math.ceil(Object.keys(rates).length / itemsPerPage);

  return {
    rates,
    loading,
    error,
    allCurrencies: Object.keys(rates),
    convertCurrency,
    currentPage,
    setCurrentPage,
    totalPages,
    itemsPerPage
  };
};

export default useExchangeRates;
