import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [value, setValue] = useState({
    firstname: "",
    number: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState({});
  // const [isError , setIsError] = useState(false);
  const userData = localStorage.getItem("data");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValue((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      navigate("/dashboard");
    }
  }, [error, navigate, isSubmit]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(error));
    if (Object.keys(validate(error)).length === 0) {
      const arr = [];
      if (userData) {
        const oldUser = JSON.parse(userData);
        console.log(oldUser, "oldUser");
        arr.push(...oldUser);
        arr.push(value);
        clearData();
        setTimeout(() => {}, 1000);
        return localStorage.setItem("data", JSON.stringify(arr));
      }
      arr.push(value);
      clearData();
      localStorage.setItem("data", JSON.stringify(arr));
      setIsSubmit(true);
    }
  };
  const clearData = () => {
    setValue({
      firstname: "",
      number: "",
      email: "",
      password: "",
      confirm: "",
    });
  };
  const validate = () => {
    const err = {};
    if (userData) {
      const userLogin = JSON.parse(userData);
      const checkUser = userLogin.find((user) => {
        return value.email === user.email;
      });
      if (checkUser) { 
        err.email = "Email is already register";
      }
    }
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /^((\+91)?|91)?[6789][0-9]{9}/;
    if (
      !(
        value.firstname &&
        value.firstname.length > 0 &&
        value.firstname.trim()
      ) ||
      !(value.email && value.email.length > 0) ||
      !(value.number && value.email.length > 0) ||
      !(value.password && value.password.length > 0)
    ) {
      err.firstname = "Name is required";
      err.email = "Email is required";
      err.number = "Number is required";
      err.password = "Password is required";
    } else if (!emailRegex.test(value.email)) {
      err.email = "Enter a valid email";
    } else if (!numberRegex.test(value.number)) {
      err.number = "Enter a valid number";
    } else if (!(value.password.length >= 6)) {
      err.password = "Password must contain six charactor ";
    } else if (value.password !== value.confirm) {
      err.confirm = "Password and Confirm-password must be same";
    }
    return err;
  };
  const loginPage = () => {
    navigate("/");
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-required"
          label="First Name"
          type="text"
          name="firstname"
          onChange={handleChange}
          helperText={error.firstname}
        />
        <TextField
          id="outlined-required"
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          helperText={error.email}
        />
        <TextField
          required
          id="outlined-required"
          label="Number"
          type="number"
          name="number"
          onChange={handleChange}
          helperText={error.number}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          helperText={error.password}
        />
        <TextField
          id="outlined-password-input"
          label="Confirm-Password"
          type="password"
          name="confirm"
          onChange={handleChange}
          helperText={error.confirm}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <Link component="button" variant="body2" onClick={loginPage}>
        Login
      </Link>
    </Box>
  );
}
