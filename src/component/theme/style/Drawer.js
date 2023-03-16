export default function Drawer(theme) {
  return {
    MuiDrawer: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            backgroundColor: 'mediumturquoise',
          },
        },
      },
    },
  };
}
