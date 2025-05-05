import { useState, useEffect } from 'react';

const useExchangeRates = (itemsPerPage = 10) => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_RATE_API_KEY}/latest/USD`
        );
        
        if (!response.ok) throw new Error('Failed to fetch rates');
        
        const data = await response.json();
        
        if (data.result === 'success') {
          const ratesArray = Object.entries(data.conversion_rates)
            .map(([currency, rate]) => ({ currency, rate }));
          
          setRates(ratesArray);
          setTotalPages(Math.ceil(ratesArray.length / itemsPerPage));
        } else {
          throw new Error(data['error-type'] || 'Currency API error');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const getPaginatedRates = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return rates.slice(startIndex, endIndex);
  };

  const convertCurrency = (amount, targetCurrency) => {
    const targetRate = rates.find(rate => rate.currency === targetCurrency)?.rate;
    return targetRate ? (amount * targetRate).toFixed(2) : null;
  };

  return {
    rates: getPaginatedRates(),
    loading,
    error,
    currentPage,
    totalPages,
    convertCurrency,
    setCurrentPage,
    allCurrencies: rates.map(rate => rate.currency),
  };
};

export default useExchangeRates;