/* eslint-disable react/prop-types */
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useState } from 'react'

const HeaderListProduct = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: 1,
  width: '100%'
})

const TextHeaderMenu = styled(Typography)({
  color: 'red',

  borderBottom: '1px solid gray',
  paddingTop: {sm: '10px'},
  cursor: 'pointer'
})

// eslint-disable-next-line react/prop-types
function HeaderProduct({ listTitle, handleGetIdentifier }) {
  const [activeHeader, setActiveHeader] = useState()

  function handleActiveHeader(identifier) {
    console.log(identifier);
    
    setActiveHeader(identifier)
    handleGetIdentifier(identifier)
  }
  return (
    <>
      {/* Header of List Product */}
      <HeaderListProduct>
        {listTitle?.map(title => 
          <Box sx={{ flex: '1' }} key={title.id}>
            <TextHeaderMenu 
              variant='span' 
              fontWeight='bold' 
              textAlign='center'
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: {xs: '40px', sm: '50px', md: '40px', lg: '50px'},
                fontSize: '0.875rem',
                backgroundImage: activeHeader === title.id ? 'linear-gradient(to top, #ed8a95, white)': '',
                borderBottomColor: activeHeader === title.id ? '#df3346 !important': '',
                textTransform: 'capitalize',
                padding: '5px'
              }}
              onClick={() => handleActiveHeader(title.id)}
              >{title.title}
            </TextHeaderMenu>
          </Box>
        )}
      </HeaderListProduct>
    </>
  )
}

export default HeaderProduct
