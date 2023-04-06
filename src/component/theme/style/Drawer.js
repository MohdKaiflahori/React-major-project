export default function Drawer() {
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
