import { experimental_extendTheme as extendTheme} from '@mui/material/styles';

const theme = extendTheme({
  cell_phone: {
    appBarHeight: '72px',
    maxWidthContent: '1200px',
    sliderAppBarHeight: '26px',
    sliderAppBarMaxContent: '1400px',
    heroHeight: '380px',
    heroMaxContent: '1200px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#D70018',
          secondary: '#4A4A4A'
        },
        secondary: {
          main: '#F9415D'
        },
      },
    },
    dark: {
     palette: {
        primary: {
          main: '#D70018',
          secondary: '#4A4A4A'
        },
        secondary: {
          main: '#F9415D'
        }
      },
    },
  },
});

export default theme