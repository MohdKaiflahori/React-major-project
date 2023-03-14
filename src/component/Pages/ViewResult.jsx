import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper, Typography, Button } from '@mui/material';

export default function ViewResult() {
  const result = localStorage.getItem('result');
  const resultData = JSON.parse(result);
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
          All Paper list
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sr. No</TableCell>
              <TableCell align="right">Student Name</TableCell>
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Subject</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Marks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultData
              && resultData.length
              && resultData.map((row, i) => (
                <TableRow
                  key={row.class}
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
                  <TableCell align="right">{`${row.name}`}</TableCell>
                  <TableCell align="right">{`${row.class}`}</TableCell>
                  <TableCell align="right">{`${row.subject}`}</TableCell>
                  <TableCell align="right">{`${row.time}`}</TableCell>
                  <TableCell align="right">
                    <Button>
                      Start
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
