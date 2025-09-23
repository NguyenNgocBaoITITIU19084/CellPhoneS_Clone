
import styled from "@emotion/styled"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Typography } from "@mui/material"
import Badge from "@mui/material/Badge"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#F9415D',
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: '500',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}`,
  },
}))

const StyledTextField = styled(TextField)({
  backgroundColor: 'white',
  borderRadius: '8px',
  width: '400px',
  '.MuiInputLabel-root': {
    color: 'black',
  },
  '.MuiFilledInput-root': {
    color: 'black',
  },
  '.MuiSvgIcon-root': {
    color: 'black',
  },
  '.MuiFilledInput-input': {
    padding: '8px',
  },
  '.MuiFilledInput-inputAdornedStart': {
    
  }
})

function AppBar() {
  return (
    <Box sx={{ width: '100%', margin: '0 auto', backgroundColor: 'primary.main' }}>
      <Box></Box>
      <Box 
        sx={{ 
          maxWidth: (theme) => `${theme.cell_phone.maxWidthContent}`, 
          height: (theme) => `${theme.cell_phone.appBarHeight}`, 
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
            
            <Typography variant='h5' sx={{fontWeight: '500'}}>CellPhoneS</Typography>
            <StyledButton variant="contained" startIcon={<DashboardCustomizeIcon/>} endIcon={<ExpandMoreIcon/>} sx={{ minWidth: '155px'}}>Danh mục</StyledButton>
            <StyledButton variant="contained" startIcon={<AddLocationAltIcon/>} endIcon={<ExpandMoreIcon/>} sx={{ minWidth: '170px'}}>Hồ Chí Minh</StyledButton>
            <StyledTextField id="filled-basic" variant="filled" size="small"  type="text"
              sx={{ minWidth: '350px'}}
              InputProps={{ 
                disableUnderline: true, 
                startAdornment: (<InputAdornment position="start"><SearchIcon sx={{ marginBottom: '17px'}}/></InputAdornment>),
                endAdornment: ( <InputAdornment position="end"><CloseIcon /></InputAdornment>),
                placeholder: 'Bạn muốn gì hôm nay?',
              }}
            />
            <StyledButton variant="contained" endIcon={<Badge badgeContent={4} color="warning"><ShoppingCartOutlinedIcon/></Badge>} sx={{minWidth: '130px'}}>Giỏ Hàng</StyledButton>
            <StyledButton variant="contained" endIcon={<AccountCircleOutlinedIcon/>} sx={{minWidth: '130px'}}>Đăng Nhập</StyledButton>

          </Box>
      </Box>
    </Box>
  )
}

export default AppBar
