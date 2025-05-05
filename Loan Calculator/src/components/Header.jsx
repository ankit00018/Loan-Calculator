import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, useMediaQuery, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>

        {isMobile ? (
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/rates" className="nav-link">Exchange Rates</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <ThemeToggle />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;