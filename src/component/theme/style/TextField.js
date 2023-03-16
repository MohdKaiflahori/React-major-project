export default function TextField(theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: `${theme.palette.info.light}!important`,
          },
          '& .MuiInputBase-input': {
            margin: '2px',
          },
        },
      },
    },
  };
}
