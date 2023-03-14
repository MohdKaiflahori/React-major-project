/* eslint-disable max-len */
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
  const paperData = JSON.parse(getData);
  const [arr, setArr] = useState([]);
  // const [isDisable, setIsDisable] = useState(true);
  const now = moment().format('HH:mm');
  const now1 = moment('16:00', 'HH:mm').format('HH:mm');
  // console.log('now1 :', now1);

  useEffect(() => {
    const storedArr = localStorage.getItem('test');
    if (storedArr) {
      setArr(JSON.parse(storedArr));
    }
  }, []);

  const examPaper = (e) => {
    navigate(`/student/${e.target.id}`);
  };
  const addPaperDetails = (e) => {
    const paperNumber = paperData.findIndex((v) => (v.class === paperData[e.target.id - 1].class) && (v.time === paperData[e.target.id - 1].time));
    const newPaperDetails = paperData[paperNumber];
    setArr((prevArr) => {
      const updateArr = [...prevArr, newPaperDetails];
      console.log(updateArr, 'arr');
      localStorage.setItem('test', JSON.stringify(updateArr));
      return updateArr;
    });
  };
  const handleBothClick = (e) => {
    examPaper(e);
    addPaperDetails(e);
  };
  React.useEffect(() => {
    if (now >= '18:05') {
      // setIsDisable(false);
    }
  }, [now]);

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
            {paperData
              && paperData.length
              && paperData.map((row, i) => (
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
                    <Button id={i + 1} onClick={handleBothClick}>
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
