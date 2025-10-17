import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const ForwardButtonContainer = styled(Box)({
  backgroundColor: 'rgba(242,242,243,0.9)', 
  borderRadius: '50%', 
  height: '30px', 
  width: '30px', 
  cursor: 'pointer', 
  position: 'absolute', 
  right: '-15px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center'
  // paddingRight: '1rem'
})


function ForwardButton() {
  return (
    <>
      <ForwardButtonContainer sx={{ display: {xs: 'none'}}}>
        <ArrowForwardIosIcon/>
      </ForwardButtonContainer>
    </>
  )
}

export default ForwardButton
