import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  useMediaQuery, 
  IconButton, 
  Menu, 
  MenuItem, 
  Box, 
  Divider,
  styled
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CalculateIcon from '@mui/icons-material/Calculate';
import ThemeToggle from './ThemeToggle';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  margin: theme.spacing(0, 2),
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  transition: 'all 0.3s ease',
  '&.active': {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.action.selected,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  }
}));

const Header = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="sticky"
      color="default"
      sx={{ 
        bgcolor: 'background.paper',
        boxShadow: 1,
        color: 'text.primary',
        transition: 'all 0.3s ease',
        borderBottom: 1,
        borderColor: 'divider'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CalculateIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography 
            variant="h6" 
            component="div"
            sx={{ 
              fontWeight: 700,
              letterSpacing: 0.5,
              color: 'text.primary'
            }}
          >
            Loan Calculator
          </Typography>
  
        </Box>

        {isMobile ? (
          <>
            <IconButton 
              color="inherit"
              onClick={handleMenuOpen}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  minWidth: 200,
                  boxShadow: 3,
                  mt: 1
                }
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <StyledNavLink to="/">Home</StyledNavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <StyledNavLink to="/rates">Exchange Rates</StyledNavLink>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <StyledNavLink to="/about">About</StyledNavLink>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ThemeToggle />
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/rates">Exchange Rates</StyledNavLink>
            <StyledNavLink to="/about">About</StyledNavLink>
            <StyledNavLink to="/error">Error Page</StyledNavLink>

            <ThemeToggle sx={{ ml: 2 }} />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;