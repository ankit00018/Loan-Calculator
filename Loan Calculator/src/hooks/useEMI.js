import { useState } from 'react';

const useEMI = () => {
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  const calculateEMI = (principal, annualRate, tenureMonths) => {
    const monthlyRate = annualRate / 1200;
    const emi = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);

    const schedule = [];
    let balance = principal;

    for (let month = 1; month <= tenureMonths; month++) {
      const interest = balance * monthlyRate;
      const principalComponent = emi - interest;
      balance -= principalComponent;

      schedule.push({
        month,
        emi: emi.toFixed(2),
        principal: principalComponent.toFixed(2),
        interest: interest.toFixed(2),
        balance: Math.abs(balance.toFixed(2)),
      });
    }

    setAmortizationSchedule(schedule);
  };

  return { calculateEMI, amortizationSchedule };
};

export default useEMI;