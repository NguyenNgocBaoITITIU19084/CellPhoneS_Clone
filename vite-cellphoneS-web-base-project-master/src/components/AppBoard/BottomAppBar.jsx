import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { Typography } from "@mui/material"
import { useState } from "react"

const MENU_DATA = [
  {
    id: 1,
    name: 'Trang chủ',
    icon: <HomeOutlinedIcon/>,
    link: ''
  },
  {
    id: 2,
    name: 'Danh mục',
    icon: <MenuOutlinedIcon/>,
    link: ''
  },
  {
    id: 3,
    name: 'Cửa hàng',
    icon: <StorefrontOutlinedIcon/>,
    link: ''
  },
  {
    id: 4,
    name: 'Thông báo',
    icon: <NotificationsNoneOutlinedIcon/>,
    link: ''
  },
  {
    id: 5,
    name: 'Tài khoản',
    icon: <AccountCircleOutlinedIcon/>,
    link: ''
  },
]

const AppContainer = styled(Box)({
  width: '100%',
  minHeight: '70px',
  maxHeight: '70px',
  backgroundColor: '#ecf0f1',
  flexDirection: 'column',
  justifyContent: 'center',
  borderTopRightRadius: '1rem',
  borderTopLeftRadius: '1rem',
  position: 'fixed',
  bottom: 0
})

const AppWrapper = styled(Box)({
  padding: '0 5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 1
})

const Item = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 1
})

function BottomAppBar() {
  const [activeMenu, setActiveMenu] = useState(1)

  function handleActiveMenu(identifier) {
    setActiveMenu(identifier)
  }

  return (
    <AppContainer sx={{ display: {xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'} }}>
      <AppWrapper>
        {MENU_DATA.map((item) => 
          <Item key={item.id} onClick={() => handleActiveMenu(item.id)} sx={{ color: activeMenu === item.id ? 'primary.main' : '#95a5a6' }}>
            <Box sx={{ position: 'absolute', top: 0,height: '2px', width: '16px', backgroundColor: 'primary.main', marginBottom: '5px', display: activeMenu === item.id ? 'flex': 'none' }}></Box>
            {item.icon}
            <Typography sx={{ fontSize: '0.875rem' }} textAlign='center' fontWeight='bold'>{item.name}</Typography>
          </Item>)}
      </AppWrapper>
    </AppContainer>
  )
}

export default BottomAppBar
