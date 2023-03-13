import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import ComponentsOverrides from './style';
import palette from './palette';

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      shape: { borderRadius: 6 },
      palette,
    }),
    [],
  );
  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
ThemeProvider.propTypes = {
  children: PropTypes.node,
};
