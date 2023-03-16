import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const MainContainerStyle = styled(Box)(() => ({
  display: 'flex',
  border: '1px solid #eee',
  borderRadius: 4,
  width: '600px',
  margin: 'auto',
  flexDirection: 'column',
  padding: '30px',
}));

export const BoxStyles = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',

}));
export const LabelStyles = styled(Typography)(() => ({
  display: 'inline-block',
  width: '41%',
  margin: '10px',
  padding: '10px',
  fontSize: '18px',
}));
export const OptionStyles = styled(Typography)(() => ({
  display: 'inline-block',
  width: '43%',
  margin: '10px',
  padding: '10px',
  fontSize: '18px',
}));
