
import { useState } from "react"

import styled from "@emotion/styled"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
import CloseIcon from '@mui/icons-material/Close'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Badge from "@mui/material/Badge"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import InputAdornment from '@mui/material/InputAdornment'
import SvgIcon from "@mui/material/SvgIcon"
import TextField from '@mui/material/TextField'
import Typography from "@mui/material/Typography"

import { ReactComponent as LogoIcon } from '../../assets/image.svg'
import { ReactComponent as Slogo } from '../../assets/SLogo.svg'
import SliderAppBar from "../SliderAppBar/SliderAppBar"

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.main}`,
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: '500',
  padding: '8px',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}`,
  },
}))

const StyledButtonForXS = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.main}`,
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: '500',
  padding: '8px 8px',
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
  const [search, setSearch] = useState('')

  function handleRemoveSearch() {
    setSearch('')
  }

  return (
    <Box sx={{ width: '100%', margin: '0 auto', backgroundColor: 'primary.main', position: 'fixed', top: 0, zIndex: 10 }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SliderAppBar />
      </Box>
      <Box 
        sx={{ 
          maxWidth: (theme) => `${theme.cell_phone.maxWidthContent}`, 
          minHeight: (theme) => `${theme.cell_phone.appBarHeight}`, 
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingX: 2, justifyContent: 'space-between'}}>
            <SvgIcon component={LogoIcon} inheritViewBox sx={{ width: '170px', maxWidth: '170px', cursor: 'pointer', display: {xs: 'none', lg: 'block'} }}/>
            <SvgIcon component={Slogo} inheritViewBox sx={{ width: '40px', maxWidth: '40px', height: '45px', cursor: 'pointer', display: {xs: 'block', lg: 'none'} }}/>
            <StyledButton variant="contained" startIcon={<DashboardCustomizeIcon/>} endIcon={<ExpandMoreIcon/>} sx={{ minWidth: '155px', display: {xs: 'none', md: 'flex' ,lg: 'flex'}}}>Danh mục</StyledButton>
            <StyledButton variant="contained" startIcon={<AddLocationAltIcon/>} endIcon={<ExpandMoreIcon />} sx={{ maxWidth: '170px', minWidth: '155px', display: {xs: 'none', md: 'flex' ,lg: 'flex'}}}>Ho Chi Minh</StyledButton>
            

            <StyledTextField id="filled-basic" variant="filled" size="small"  type="text" onChange={(e) => setSearch(e.target.value)} value={search}
              sx={{ maxWidth: {md: '200px', lg: '350px'}, minWidth: '120px'}}
              InputProps={{ 
                disableUnderline: true, 
                startAdornment: (<InputAdornment position="start"><SearchIcon sx={{ marginBottom: '17px'}}/></InputAdornment>),
                endAdornment: ( <InputAdornment position="end">{search &&<CloseIcon onClick={handleRemoveSearch} sx={{ cursor: 'pointer' }}/>}</InputAdornment>),
                placeholder: 'Bạn muốn gì hôm nay?',
              }}
            />
            {/* For XS screen */}
            <StyledButtonForXS variant="contained" startIcon={<AddLocationAltIcon/>} sx={{ maxWidth: '115px', minWidth: '115px', display: {xs: 'flex', md: 'none', lg: 'none'}}}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', lineHeight: '12px' }}>
                <Typography variant='span' component='span' sx={{ textTransform: 'none', fontSize: '10px' }}>Xem Giá Tại</Typography>
                <Typography variant='span' component='span' sx={{ textTransform: 'none', fontSize: '10px' }}>Hồ Chí Minh</Typography>
              </Box>
            </StyledButtonForXS>


            <StyledButton variant="contained" endIcon={<Badge badgeContent={4} color="warning"><ShoppingCartOutlinedIcon/></Badge>} sx={{minWidth: '130px', display: {xs: 'none', md: 'flex', lg: 'flex'}}}>Giỏ Hàng</StyledButton>
            {/* cart button for xs screen */}
            <Box sx={{ display: { xs: 'flex', md: 'none', lg: 'none' }}}>
              <Badge badgeContent={4} color="warning"><ShoppingCartOutlinedIcon fontSize="medium"/></Badge>
            </Box>
            <StyledButton variant="contained" endIcon={<AccountCircleOutlinedIcon/>} sx={{minWidth: '130px', display: { xs: 'none', md: 'flex', lg: 'flex' }}}>Đăng Nhập</StyledButton>

          </Box>
      </Box>
    </Box>
  )
}

export default AppBar
