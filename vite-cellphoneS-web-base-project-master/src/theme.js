import { experimental_extendTheme as extendTheme} from '@mui/material/styles';

const theme = extendTheme({
  cell_phone: {
    appBarHeight: '72px',
    maxWidthContent: '1200px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#D70018',
        },
      },
    },
    dark: {
     palette: {
        primary: {
          main: '#D70018',
        },
      },
    },
  },
});

export default theme