/* eslint-disable consistent-return */
/* eslint-disable max-len */
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  TextField, Typography, Box, Paper, Button,
} from '@mui/material';
import { OptionStyles } from '../FormStyle';

export default function UserUI() {
  const { id } = useParams();
  const paperData = localStorage.getItem('paper');
  const result = localStorage.getItem('result');
  const paperDetails = JSON.parse(paperData);
  const loggedUser = localStorage.getItem('loggedUser');
  const curUser = JSON.parse(loggedUser);
  const [value, setValue] = React.useState([{
    answer: '',
    marks: '',
  }]);
  const navigate = useNavigate();
  const handleChange = (e, i) => {
    const [key, eventtriggeredon] = e.target.name.split('.');
    console.log('key', key);
    const form = JSON.parse(JSON.stringify(value));
    if (!form[i]) {
      form[i] = {
        answer: '',
        marks: '',
      };
    }
    form[i][key] = e.target.value ? eventtriggeredon : '';
    setValue(form);
  };
  const test = paperDetails.filter((v) => (v.class === paperDetails[id - 1].class) && (v.time === paperDetails[id - 1].time));

  let results = [];
  if (localStorage.getItem('student')) {
    results = JSON.parse(localStorage.getItem('student'));
  }
  const currentResult = {
    student: curUser[0].firstname,
    class: test[0].class,
    subject: test[0].subject,
    time: test[0].time,
  };
  const existingResultIndex = results.find((result) => result.student === currentResult.student
    && result.class === currentResult.class
    && result.subject === currentResult.subject
    && result.time === currentResult.time);

  if (!existingResultIndex) {
    // currentResult doesn't exist in results, so add it
    results.push(currentResult);
    localStorage.setItem('student', JSON.stringify(results));
  }
  const submit = () => {
    navigate('/thankPage');
    const [{ questions }] = test;
    const form = JSON.parse(JSON.stringify(value));
    questions.forEach((x, i) => {
      if (x.answer === form[i].answer) {
        form[i].marks = 1;
      } else {
        form[i].marks = 0;
      }
    });
    setValue(form);
    const arr = [];
    if (result) {
      const oldResult = JSON.parse(result);
      arr.push(...oldResult);
      arr.push(form);
      return localStorage.setItem('result', JSON.stringify(arr));
    }
    arr.push(form);
    localStorage.setItem('result', JSON.stringify(arr));
  };

  return (
    <>
      {test
        && test.length > 0
        && test.map((x, i) => {
          console.log();
          return (
            <Box key={x.key + i}>
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
                  <React.Fragment key={y.key || y.question}>
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
                    {Object.keys(y.options).map((z, k) => (
                      <React.Fragment key={k.toString() + j.toString() + z}>
                        <TextField
                          sx={{ padding: '10px', margin: '10px' }}
                          type="radio"
                          name={`answer.${z}.${j}`}
                          value={z}
                          onChange={(e) => handleChange(e, j)}
                        />
                        <OptionStyles variant="p">{y.options[z]}</OptionStyles>
                      </React.Fragment>
                    ))}

                  </React.Fragment>
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

