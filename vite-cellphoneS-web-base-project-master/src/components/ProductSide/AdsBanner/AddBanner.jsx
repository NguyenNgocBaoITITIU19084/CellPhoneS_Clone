import styled from '@emotion/styled'
import Box from '@mui/material/Box'

const AdsBannerContainer = styled(Box)({
  flex: '1',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%'
})

const ImageBanner = styled(Box)({
  width: '100%',
  minWidth: '80px',
  maxHeight: '555px',
  borderRadius: '1rem',
  cursor: 'pointer'
})

function AddBanner() {
  return (
    <>
    {/* Ads Banner Container */}
      <AdsBannerContainer sx={{ display: {lg: 'flex', md: 'flex', sm: 'none', xs: 'none'} }}>
        <ImageBanner component='img' alt='Ads banner product side' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:214:530/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F050R8WY7PZK75J36ST4CV.png'/>
        <ImageBanner component='img' alt='Ads banner product side' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:214:530/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F050ZM5Q7TATVRHDGHEMAV.jpg'/>
      </AdsBannerContainer>
    </>
  )
}

export default AddBanner
