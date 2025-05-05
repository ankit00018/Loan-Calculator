import { useContext,useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import useExchangeRates from './useExchangeRates';

const useEMI = () => {
  const { currency } = useCurrency();
  const { convertCurrency } = useExchangeRates();
  const [schedule, setSchedule] = useState([]);

  const calculateEMI = (principal, annualRate, tenureMonths) => {
    const monthlyRate = annualRate / 1200;
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / 
                (Math.pow(1 + monthlyRate, tenureMonths) - 1);

    const newSchedule = [];
    let balance = principal;

    for (let month = 1; month <= tenureMonths; month++) {
      const interest = balance * monthlyRate;
      const principalComp = emi - interest;
      balance -= principalComp;

      newSchedule.push({
        month,
        emi: convertCurrency(emi, currency) || emi.toFixed(2),
        principal: convertCurrency(principalComp, currency) || principalComp.toFixed(2),
        interest: convertCurrency(interest, currency) || interest.toFixed(2),
        balance: convertCurrency(Math.abs(balance), currency) || Math.abs(balance).toFixed(2)
      });
    }

    setSchedule(newSchedule);
  };

  return { calculateEMI, amortizationSchedule: schedule };
};

export default useEMI;