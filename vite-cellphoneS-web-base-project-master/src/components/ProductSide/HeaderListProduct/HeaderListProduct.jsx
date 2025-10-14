import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useState } from 'react'

const HeaderListProduct = styled(Box)({
  display: 'flex',
})

const TextHeaderMenu = styled(Typography)({
  color: 'red',
  height: '60px',
  borderBottom: '1px solid gray',
  paddingTop: '10px',
  cursor: 'pointer'
})

function HeaderProduct() {
  const [activeHeader, setActiveHeader] = useState(1)

  function handleActiveHeader(identifier) {
    setActiveHeader(identifier)
  }
  return (
    <>
      {/* Header of List Product */}
      <HeaderListProduct>
        <Box sx={{ flex: '1' }}>
          <TextHeaderMenu 
            variant='h6' 
            fontWeight='bold' 
            textAlign='center'
            sx={{ backgroundImage: activeHeader === 1 ? 'linear-gradient(to top, #ed8a95, white)': '', borderBottomColor: activeHeader === 1 ? '#df3346 !important': '' }}
            onClick={() => handleActiveHeader(1)}
          >Điện thoại
          </TextHeaderMenu>
        </Box>
        <Box sx={{ flex: '1' }}>
          <TextHeaderMenu 
            variant='h6' 
            fontWeight='bold' 
            textAlign='center'
            sx={{ backgroundImage: activeHeader === 2 ? 'linear-gradient(to top, #ed8a95, white)': '', borderBottomColor: activeHeader === 2 ? '#df3346 !important': '' }}
            onClick={() => handleActiveHeader(2)}
          >Máy tính bảng
          </TextHeaderMenu>
        </Box>
      </HeaderListProduct>
    </>
  )
}

export default HeaderProduct
