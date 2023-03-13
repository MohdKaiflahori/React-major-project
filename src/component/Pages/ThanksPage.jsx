import { Paper, Typography } from '@mui/material';
import React from 'react';

export default function ThanksPage() {
  return (
    <>
      <Paper
        elevation={15}
        sx={{ height: '70vh' }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', padding: '30px', margin: '30px' }}
        >
          Thank you!!
          <Typography variant="span" sx={{ display: 'block' }}>
            Your submission has been received
          </Typography>
        </Typography>
      </Paper>
    </>
  );
}
