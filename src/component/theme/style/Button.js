export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '5px 20px',
          border: `1px solid ${theme.palette.common.blue}`,
          backgroundColor: 'transparent',
          color: theme.palette.common.blue,
          '&.MuiButton-contained': {
            backgroundColor: theme.palette.error.light,
            border: `1px solid ${theme.palette.error.light}`,
            color: theme.palette.common.white,
            width: '210px',
          },
        },
      },
    },
  };
}
