import React, { useState } from 'react';
import {
  Box, Button, Paper, TextField, Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import { BoxStyles, MainContainerStyle } from './FormStyle';

const defaultValue = {
  class: '',
  subject: '',
  time: '',
  duration: '',
  questions: [
    {
      key: Date.now(),
      question: '',
      options: {
        a: '',
        b: '',
        c: '',
        d: '',
      },
      answer: '',
    },
  ],
};
export default function AddPaper() {
  const [formData, setFormData] = useState(defaultValue);
  const [error, setError] = useState({});
  const paperData = localStorage.getItem('paper');

  const handleChange = (e, i) => {
    e.preventDefault();
    if (i !== undefined) {
      const { name } = e.target;
      const prev = JSON.parse(JSON.stringify(formData));
      console.log('prev', prev, i);
      if (!prev.questions[i]) prev.questions[i] = {};
      const nameArr = name.split('.');
      if (['a', 'b', 'c', 'd'].includes(nameArr[1])) {
        if (nameArr[0] === 'option') {
          prev.questions[i].options[nameArr[1]] = e.target.value;
        } else {
          prev.questions[i].answer = nameArr[1];
        }
      } else {
        prev.questions[i][name] = e.target.value;
      }
      return setFormData(prev);
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // const validate = () => {
  //   const err = {};

  //   if (
  //     !(formData.class && formData.class.length > 0)
  //     || !(formData.duration && formData.duration.length > 0)
  //     || !(formData.time && formData.time.length > 0)
  //     || !(formData.subject && formData.subject.length > 0)
  //   ) {
  //     err.class = 'Class is required';
  //     err.duration = 'Duration is required';
  //     err.time = 'Time is required';
  //     err.subject = 'Subject is required';
  //   }
  //   return err;
  // };
  const add = () => {
    console.log(formData);
    const _clone = { ...formData };
    _clone.questions.push({ ...defaultValue.questions[0], key: Date.now() });
    setFormData(_clone);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // setError(validate());
    console.log(formData);
    // if (Object.keys(validate()).length === 0) {
    const arr = [];
    if (paperData) {
      const oldPaper = JSON.parse(paperData);
      console.log(oldPaper, 'oldPaper');
      arr.push(...oldPaper);
      arr.push(formData);
      clearData();
      return localStorage.setItem('paper', JSON.stringify(arr));
    }
    arr.push(formData);
    clearData();
    localStorage.setItem('paper', JSON.stringify(arr));
  };
  // };

  const clearData = () => {
    setFormData(defaultValue);
  };

  return (
    <>
      <BoxStyles>
        <Paper elevation={10} sx={{ width: '100%' }}>
          <Typography
            variant="h3"
            sx={{ textAlign: 'center', padding: '10px' }}
          >
            Question Paper
          </Typography>
          <MainContainerStyle component="form" sx={{ gap: '15px' }}>
            <TextField
              id="outlined-basic"
              label="Class"
              name="class"
              variant="outlined"
              onChange={handleChange}
              helperText={error.class}
            />
            <TextField
              id="outlined-basic"
              label="Subject"
              name="subject"
              variant="outlined"
              onChange={handleChange}
              helperText={error.subject}
            />
            <TextField
              id="outlined-basic"
              label="Time"
              variant="outlined"
              type="time"
              onChange={handleChange}
              name="time"
              helperText={error.time}
            />
            <TextField
              id="outlined-basic"
              label="Duration"
              name="duration"
              variant="outlined"
              onChange={handleChange}
              helperText={error.duration}
            />
          </MainContainerStyle>
          <MainContainerStyle>
            {formData.questions.map((x, i) => (
              <React.Fragment key={x + Date()}>
                <Box key={x.key} sx={{ gap: '10px' }}>
                  <TextField
                    sx={{ display: 'block' }}
                    id={`question-${i + 1}`}
                    type="text"
                    fullWidth
                    name="question"
                    // label={`Question-${i + 1}`}
                    onChange={(e) => handleChange(e, i)}
                  />
                </Box>
                <Box>
                  {Object.keys(x.options).map((y, j) => (
                    <React.Fragment key={x.key + y}>
                      <TextField
                        type="radio"
                        onChange={(e) => handleChange(e, i)}
                        name={`answer.${y}`}
                        sx={{ width: '18px', margin: '6px', marginTop: '20px' }}
                      />
                      <TextField
                        type="text"
                        name={`option.${y}`}
                        onChange={(e) => handleChange(e, i)}
                        sx={{ width: '215px', margin: '10px' }}
                      />
                    </React.Fragment>
                  ))}
                </Box>
              </React.Fragment>
            ))}
          </MainContainerStyle>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              padding: '10px',
              gap: '722px',
            }}
          >
            <Button variant="contained" type="submit" onClick={onSubmit}>
              Done
            </Button>
            <Button variant="outlined" onClick={add} sx={{ width: '210px' }}>
              Add Question
            </Button>
          </Stack>
        </Paper>
      </BoxStyles>
    </>
  );
}
