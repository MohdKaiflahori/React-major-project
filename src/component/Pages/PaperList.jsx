/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

function ViewData() {
  const navigate = useNavigate();
  const getData = localStorage.getItem('paper');
  const [userData, setUserData] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  const [time, setTime] = React.useState(Date.now());
  const now = moment().format('HH:mm');
  const now1 = moment('18:00', 'HH:mm').format('HH:mm');
  console.log('now1 :', now1);

  useEffect(() => {
    if (getData) {
      setUserData(JSON.parse(getData));
    }
  }, [getData]);

  const examPaper = () => {
    navigate('/student');
  };

  React.useEffect(() => {
    userData.map((item) => {
      if ((now === item.time) || (now <= now1)) {
        setIsDisable(false);
      }
    });
  }, [now]);
  //   const updateState = useMemo(()=>)
  /* { new Date(x.time).getTime() >= time ?  */

  console.log(userData, 'userData');
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
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Subject</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData
              && userData.length
              && userData.map((row, i) => (
                <TableRow
                  key={row.class}
                  sx={{
                    '&:last-child td, &:last-child th': {
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
                    <Button onClick={examPaper} disabled={isDisable}>
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
