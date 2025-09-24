import { experimental_extendTheme as extendTheme} from '@mui/material/styles';

const theme = extendTheme({
  cell_phone: {
    appBarHeight: '72px',
    maxWidthContent: '1200px',
    sliderAppBarHeight: '26px',
    sliderAppBarMaxContent: '1400px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#D70018',
        },
        secondary: {
          main: '#F9415D'
        }
      },
    },
    dark: {
     palette: {
        primary: {
          main: '#D70018',
        },
        secondary: {
          main: '#F9415D'
        }
      },
    },
  },
});

export default theme