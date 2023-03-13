import React from 'react';
import {
  TextField, Typography, Box, Paper, Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { OptionStyles } from './FormStyle';

export default function UserUI() {
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

  // console.log(paperDetails[0].class);
  // console.log(userDetails[1].class);
  // if (paperDetails[0].class === userDetails[1].class) {
  //   console.log("bie");
  //   // const i=0;
  //   if (paperDetails[0].questions[0].answer === value.answer) {
  //     setValue(parseInt(value.marks + 1));
  //   }else{
  //     // console.log("hi");
  //   }
  // }

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
      {paperDetails
        && paperDetails.length > 0
        && paperDetails.map((x, i) => (
          <Box key={x + Date()}>
            {/* {x.class === userDetails[].class ? ( */}
            <Paper elevation={12}>
              <Typography
                variant="h5"
                sx={{ margin: '5px', padding: '5px' }}
              >
                {`Paper no-${i + 1}`}

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
              <Typography
                variant="h5"
                sx={{ padding: '5px', margin: '5px' }}
              >
                {`Q.${i + 1}- ${x.questions[i].question}`}

              </Typography>
              {Object.keys(x.questions[i].options).map((y) => (
                <React.Fragment key={x + y}>
                  <TextField
                    type="radio"
                    name="answer"
                    value={y}
                    sx={{ padding: '10px', margin: '10px' }}
                    onChange={(e) => handleChange(e, i)}
                  />
                  <OptionStyles variant="p">
                    {x.questions[i].options[y]}
                  </OptionStyles>
                </React.Fragment>
              ))}
              <Button variant="contained" onClick={submit}>
                Submit
              </Button>
              <hr />
            </Paper>
            {/* )
              : (
                <Typography>
                  There is no paper for your class
                </Typography>
              )} */}

          </Box>
        ))}
    </>
  );
}

