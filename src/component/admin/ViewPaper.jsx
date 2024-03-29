/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import {
  Box, Paper, TextField, Typography,
} from '@mui/material';
import React from 'react';
import { LabelStyles } from '../FormStyle';

export default function ViewPaper() {
  const paperData = localStorage.getItem('paper');
  const data = JSON.parse(paperData);

  return (
    <>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        View All Exam Paper Here
      </Typography>
      {data
        && data.length > 0
        && data.map((x, i) => {
          console.log();
          return (
            <Box key={x.key}>
              <Paper elevation={12}>
                <Typography variant="h5" sx={{ margin: '5px', padding: '5px' }}>
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

                {x.questions.map((y, j) => (
                  <>
                    <Typography
                      key={j}
                      variant="h5"
                      sx={{ padding: '5px', margin: '5px' }}
                    >
                      Q.
                      {j + 1}-{y.question}
                    </Typography>
                    {Object.keys(y.options).map((z, k) => (
                      <React.Fragment key={k}>
                        <TextField
                          type="radio"
                          name="answer"
                          disabled
                          sx={{ padding: '10px', margin: '10px' }}
                        />
                        <LabelStyles variant="p">{y.options[z]}</LabelStyles>
                      </React.Fragment>
                    ))}
                    <Typography
                      sx={{ padding: '5px', margin: '5px' }}
                    >{`The Answer is  : ${y.answer}`}
                    </Typography>
                  </>
                ))}
                <hr />
              </Paper>
            </Box>
          );
        })}
    </>
  );
}
