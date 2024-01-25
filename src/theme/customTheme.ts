// createTheme func overwrites the mui default values we want to change
// ThemeOptions interface gives us type safety we need while creating mui theme
import { createTheme, ThemeOptions } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    background: {
      // paper: '#151515',
      paper: '#1E2A47',
      // default: 'rgba(0,0,0,0.96)',
      default: '#141D2F',
    },
  },
});
