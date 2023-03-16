/* eslint-disable consistent-return */
import React, { useState } from 'react';
import {
  TextField, Button, Typography, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import { MainContainerStyle, BoxStyles } from './FormStyle';

export default function Registration() {
  const [value, setValue] = useState({
    firstname: '',
    number: '',
    email: '',
    password: '',
    confirm: '',
    class: '',
  });
  const [error, setError] = useState({});
  const userData = localStorage.getItem('data');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValue((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(error));
    if (Object.keys(validate(error)).length === 0) {
      const arr = [];
      if (userData) {
        const oldUser = JSON.parse(userData);
        console.log(oldUser, 'oldUser');
        arr.push(...oldUser);
        arr.push(value);
        clearData();
        localStorage.setItem('data', JSON.stringify(arr));
        navigate('/login');
      }
      arr.push(value);
      clearData();
      localStorage.setItem('data', JSON.stringify(arr));
      navigate('/login');
    }
  };
  const clearData = () => {
    setValue({
      firstname: '',
      number: '',
      email: '',
      password: '',
      confirm: '',
      class: '',
    });
  };
  const validate = () => {
    const err = {};
    if (userData) {
      const userLogin = JSON.parse(userData);
      const checkUser = userLogin.find((user) => value.email === user.email);
      if (checkUser) {
        err.email = 'Email is already register';
      }
    }
    const emailRegex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /^((\+91)?|91)?[6789][0-9]{9}/;
    if (
      !(
        value.firstname
        && value.firstname.length > 0
        && value.firstname.trim()
      )
      || !(value.email && value.email.length > 0)
      || !(value.number && value.email.length > 0)
      || !(value.password && value.password.length > 0)
      || !(value.class && value.class.length > 0)
    ) {
      err.firstname = 'Name is required';
      err.email = 'Email is required';
      err.number = 'Number is required';
      err.password = 'Password is required';
      err.class = 'Class is required';
    } else if (!emailRegex.test(value.email)) {
      err.email = 'Enter a valid email';
    } else if (!numberRegex.test(value.number)) {
      err.number = 'Enter a valid number';
    } else if (!(value.password.length >= 6)) {
      err.password = 'Password must contain six charactor ';
    } else if (value.password !== value.confirm) {
      err.confirm = 'Password and Confirm-password must be same';
    }
    return err;
  };
  const loginPage = () => {
    navigate('/login');
  };
  return (
    <BoxStyles>
      <Paper elevation={10}>
        <MainContainerStyle component="form">
          <Typography variant="h2" padding={3} textAlign="center">
            Registration form
          </Typography>
          <TextField
            id="outlined-required"
            fullWidth
            label="First Name"
            type="text"
            name="firstname"
            onChange={handleChange}
            helperText={error.firstname}
            margin="normal"
          />
          {/* {error.firstname && ( <p>{error.firstname}</p> )} */}
          <TextField
            id="outlined-required"
            fullWidth
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
            helperText={error.email}
            margin="normal"
          />
          <TextField
            required
            id="outlined-required"
            fullWidth
            label="Number"
            type="number"
            name="number"
            onChange={handleChange}
            helperText={error.number}
            margin="normal"
          />
          <TextField
            id="outlined-required"
            fullWidth
            label="Class"
            type="text"
            name="class"
            onChange={handleChange}
            helperText={error.class}
            margin="normal"
          />
          <TextField
            id="outlined-password-input"
            fullWidth
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
            helperText={error.password}
            margin="normal"
          />
          <TextField
            id="outlined-password-input"
            fullWidth
            label="Confirm-Password"
            type="password"
            name="confirm"
            onChange={handleChange}
            helperText={error.confirm}
            margin="normal"
          />
          <Stack
            sx={{ display: 'flex', gap: '115px', flexDirection: 'row-reverse' }}
          >
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
            <Button
              variant="outlined"
              sx={{ width: '210px' }}
              onClick={loginPage}
              type="submit"
            >
              Login
            </Button>
          </Stack>
        </MainContainerStyle>
      </Paper>
    </BoxStyles>
  );
}
