import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const ProductContainer = styled(Box)({
  maxWidth: '1200px',
  margin: 'auto',
  marginTop: '1rem',
})

const ProductWrapper = styled(Box)({
  display: 'flex',
  gap: '1rem'
})

const AdsBannerContainer = styled(Box)({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

const ImageBanner = styled(Box)({
  maxWidth: '225px',
  maxHeight: '555px',
  borderRadius: '1rem'
})

const ListProductContainer = styled(Box)({
  flex: '6'
})

const HeaderListProduct = styled(Box)({
  display: 'flex',

})

function ProductSide() {
  return (
    <ProductContainer>
      <ProductWrapper>

        {/* Ads Banner Container */}
        <AdsBannerContainer>
          <ImageBanner component='img' alt='Ads banner product side' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:214:530/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F050R8WY7PZK75J36ST4CV.png'/>
          <ImageBanner component='img' alt='Ads banner product side' src='https://cdn2.cellphones.com.vn/insecure/rs:fill:214:530/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F050ZM5Q7TATVRHDGHEMAV.jpg'/>
        </AdsBannerContainer>

        {/* List Product Menu */}
        <ListProductContainer>
          {/* Header of List Product */}
          <HeaderListProduct>
            <Box sx={{ flex: '1' }}><Typography>Điện thoại</Typography></Box>
            <Box sx={{ flex: '1' }}><Typography>Máy tính bảng</Typography></Box>
          </HeaderListProduct>

        </ListProductContainer>

      </ProductWrapper>
    </ProductContainer>
  )
}

export default ProductSide
