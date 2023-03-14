/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  TextField, Typography, Box, Paper, Button,
} from '@mui/material';
import { OptionStyles } from './FormStyle';

export default function UserUI() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const paperData = localStorage.getItem('paper');
  const userData = localStorage.getItem('data');
  const result = localStorage.getItem('result');
  const paperDetails = JSON.parse(paperData);
  const userDetails = JSON.parse(userData);
  const [value, setValue] = React.useState({
    answer: '',
    marks: '',
  });
  const navigate = useNavigate();
  const handleChange = (e, i) => {
    setValue((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const test = paperDetails.filter((v) => (v.class === paperDetails[id - 1].class) && (v.time === paperDetails[id - 1].time));
  // const paperNumber = paperDetails.findIndex((v) => (v.class === paperDetails[id - 1].class) && (v.time === paperDetails[id - 1].time));
  // console.log('test :', test);

  const submit = (e, i) => {
    e.preventDefault();
    navigate('/thankPage');
    if (paperDetails[0].questions[0].answer === value.answer) {
      setValue(parseInt(value.marks + 1, 10));
      console.log('hi');
    } else {
      setValue(parseInt(value.marks + 0, 10));
      console.log('bie');
    }
    console.log(value);
    const arr = [];
    if (result) {
      const oldResult = JSON.parse(result);
      console.log(oldResult, 'oldResult');
      arr.push(...oldResult);
      arr.push(value);
      return localStorage.setItem('result', JSON.stringify(arr));
    }
    arr.push(value);
    localStorage.setItem('result', JSON.stringify(arr));
  };

  return (
    <>
      {test
        && test.length > 0
        && test.map((x, i) => {
          console.log();
          return (
            <Box key={x.key}>
              <Paper elevation={12}>
                <Typography
                  variant="h3"
                  sx={{
                    margin: '5px', padding: '5px', display: 'flex', justifyContent: 'center',
                  }}
                >
                  Paper
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: '18px', margin: '5px', padding: '5px' }}
                >
                  {`Class - ${x.class}`}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: '18px', margin: '5px', padding: '5px' }}
                >
                  {`Subject - ${x.subject}`}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    width: '70%',
                    fontSize: '18px',
                    margin: '5px',
                    padding: '5px',
                  }}
                >
                  {`Time - ${x.time}`}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '18px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    margin: '5px',
                  }}
                >
                  {`Duration - ${x.duration}`}
                </Typography>

                {x.questions.map((y, j) => (
                  <>
                    <Typography
                      key={j}
                      variant="h5"
                      sx={{ padding: '5px', margin: '5px' }}
                    >
                      Q.
                      {j + 1}
                      -
                      {y.question}
                    </Typography>
                    {Object.values(y.options).map((z, k) => (
                      <React.Fragment key={k}>
                        <TextField
                          type="radio"
                          name="answer"
                          sx={{ padding: '10px', margin: '10px' }}
                        />
                        <OptionStyles variant="p">{z}</OptionStyles>
                      </React.Fragment>
                    ))}

                  </>
                ))}
                <Button variant="contained" onClick={submit}>Submit</Button>
                <hr />
              </Paper>
            </Box>
          );
        })}
    </>
  );
}

