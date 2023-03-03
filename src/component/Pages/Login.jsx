import React, { useState } from "react";
import { Box, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  console.log(process.env)
  const userData = localStorage.getItem("data");
  const [value, setValue] = useState({
    email: "",
    password: "",
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
    const email = value.email;
    const password = value.password;
    console.log("email :", email);
    console.log("password :", password);
    if (process.env.REACT_APP_USER === email && process.env.REACT_APP_PASSWORD === password) {
      navigate("/dashboard");
    } else if (userData) {
      const userLogin = JSON.parse(userData);
      const checkUser = userLogin.find((user) => {
        return email === user.email && password === user.password;
      });
      if (checkUser) {
        navigate("/user");
      } else {
        alert("Your email and password are incorrect");
      }
    } else {
      alert("You are not register");
    }
  }
  const signUpPage = () => {
    navigate("/signup");
  };
  return (
    <>
      <Box component="form">
        <TextField
          required
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
        <Button variant="contained" onClick={login}>
          Login
        </Button>
      </Box>
      <Link component="button" variant="body2" onClick={signUpPage}>
        SignUp
      </Link>
    </>
  );
}
