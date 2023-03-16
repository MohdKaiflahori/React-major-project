/* eslint-disable max-len */
/* eslint-disable array-callback-return */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ViewData() {
  const navigate = useNavigate();
  const getData = localStorage.getItem('paper');
  const paperData = JSON.parse(getData);
  const addPaperDetails = (e) => {
    navigate(`/student/${e.target.id}`);
  };
  const loggedUser = localStorage.getItem('loggedUser');
  const curUser = JSON.parse(loggedUser);
  const paperlist = paperData.filter((list) => list.class === curUser[0].class);
  return (
    <div>
      <TableContainer component={Paper} sx={{ minWidth: 650 }}>
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
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Subject</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paperlist
              && paperlist.length > 0
              && paperlist.map((row, i) => (
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
                  <TableCell align="right">{`${row.class}`}</TableCell>
                  <TableCell align="right">{`${row.subject}`}</TableCell>
                  <TableCell align="right">{`${row.time}`}</TableCell>
                  <TableCell align="right">
                    <Button id={i + 1} onClick={addPaperDetails}>
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

export default ViewData;
