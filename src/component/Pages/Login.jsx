/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import {
  TextField, Button, Link, Paper, Typography, Grid,
} from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { MainContainerStyle, BoxStyles } from './FormStyle';

export default function Login() {
  console.log(process.env);
  const userData = localStorage.getItem('data');
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setValue((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  function login(e) {
    e.preventDefault();
    const { email } = value;
    const { password } = value;
    console.log('email :', email);
    console.log('password :', password);
    if (
      process.env.REACT_APP_USER === email
      && process.env.REACT_APP_PASSWORD === password
    ) {
      navigate('/dashboard');
    } else if (userData) {
      const userLogin = JSON.parse(userData);
      const checkUser = userLogin.find(
        (user) => email === user.email && password === user.password,
      );
      if (checkUser) {
        navigate('/paperList');
      } else {
        alert('Your email and password are incorrect');
      }
    } else {
      alert('You are not register');
    }
  }
  const signUpPage = () => {
    navigate('/signup');
  };
  return (
    <BoxStyles sx={{ height: '100vh' }}>
      <Paper elevation={10}>
        <Grid>
          <MainContainerStyle component="form" sx={{ gap: '20px' }}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Login Page
            </Typography>
            <TextField
              required
              fullWidth
              id="outlined-disabled"
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <Stack
              sx={{ display: 'flex', gap: '115px', flexDirection: 'row-reverse' }}
            >
              <Button variant="contained" onClick={login}>
                Login
              </Button>
              <Button
                variant="body2"
                sx={{ width: '39%' }}
                onClick={signUpPage}
              >
                SignUp
              </Button>
            </Stack>
          </MainContainerStyle>
        </Grid>
      </Paper>
    </BoxStyles>
  );
}
