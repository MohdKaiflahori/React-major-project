import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Online Examination Portal
          </Typography>
          <img src="" alt="" />
          <Button sx={{ backgroundColor: 'white' }} onClick={handleClick}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
