import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const BackwardButtonContainer = styled(Box)({
  backgroundColor: 'rgba(242,242,243,0.9)', 
  borderRadius: '50%', 
  height: '30px', 
  width: '30px', 
  cursor: 'pointer', 
  position: 'absolute', 
  left: '-15px',
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center'
  // paddingLeft: '1rem'
})

function BackwardButton() {
  return (
    <>
      <BackwardButtonContainer sx={{ display: {xs: 'none'} }}>
        <ArrowBackIosNewIcon color='black' />
      </BackwardButtonContainer>
    </>
  )
}

export default BackwardButton
