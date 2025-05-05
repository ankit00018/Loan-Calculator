import React, { useContext,useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import AmortizationTable from "../components/AmortizationTable";
import useEMI from "../hooks/useEMI";
import CurrencyConverter from "../components/CurrencyConverter";
import { useCurrency } from '../context/CurrencyContext';
import { ThemeContext } from '../context/ThemeContext';



const Home = () => {
  const theme = useTheme();
  const { mode } = useContext(ThemeContext); // Add this line
  const { currency } = useCurrency();
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(12);
  const { calculateEMI, amortizationSchedule } = useEMI();

  // Recalculate when currency changes
  useEffect(() => {
    if (amortizationSchedule.length > 0) {
      calculateEMI(principal, rate, tenure);
    }
  }, [currency]);

  const handleCalculate = () => {
    calculateEMI(principal, rate, tenure);
  };

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
         Current currency: {currency}
      <Paper
        elevation={3}
        sx={{
          padding: "2rem",
          backgroundColor: theme.palette.background.paper,
        }}
      >
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
          style={{ marginTop: "1rem" }}
        >
          Calculate EMI
        </Button>

        {amortizationSchedule.length > 0 && (
          <>
            <Typography variant="h6" style={{ margin: "2rem 0 1rem" }}>
              Monthly EMI:{" "}
              {typeof amortizationSchedule[0].emi === "number"
                ? amortizationSchedule[0].emi.toFixed(2)
                : "N/A"}
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
