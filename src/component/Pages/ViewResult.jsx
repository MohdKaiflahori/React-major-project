/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Typography } from '@mui/material';

export default function ViewResult() {
  const result = localStorage.getItem('test');
  const resultData = JSON.parse(result);
  const data = localStorage.getItem('result');
  const resultValue = JSON.parse(data);
  // console.log(resultValue);
  const finalMarks = resultValue.reduce((acc, { marks }) => {
    acc + parseInt(marks, 10);
    console.log('mark :', marks);
  });
  console.log(finalMarks, 'marks');
  return (
    <div>
      <TableContainer component={Paper}>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            padding: '10px',
            backgroundColor: '#f6f9ff',
          }}
        >
          Result List
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sr. No</TableCell>
              <TableCell align="center">Student Name</TableCell>
              <TableCell align="center">Class</TableCell>
              <TableCell align="center">Subject</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Marks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultData
              && resultData.length
              && resultData.map((row, i) => (
                <TableRow
                  key={row.class + i}
                  sx={{
                    '&:nth-child(odd) td, &:nth-child(odd) th': {
                      border: 0,
                      backgroundColor: '#f6f9ff',
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell align="center">{`${row.class}`}</TableCell>
                  <TableCell align="center">{`${row.class}`}</TableCell>
                  <TableCell align="center">{`${row.subject}`}</TableCell>
                  <TableCell align="center">{`${row.time}`}</TableCell>
                  <TableCell align="center">{`${row.mark}`}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
