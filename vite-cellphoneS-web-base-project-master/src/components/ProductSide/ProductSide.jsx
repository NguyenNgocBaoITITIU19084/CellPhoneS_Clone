import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Chip from '@mui/material/Chip'
import { useState } from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star'

const CategoriesDataDummy = [
  {
    id: 1,
    title: 'Điện thoại chơi game',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/dien-thoai-gaming-icon-cate.png'
  },
  {
    id: 2,
    title: 'Điện thoại 5G',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/dien-thoai-pin-trau-icon-cate.png'
  },
  {
    id: 3,
    title: 'Điện thoại chụp ảnh đẹp',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/dien-thoai-5g-icon-cate.png'
  },
  {
    id: 4,
    title: 'Điện thoại gập',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/dien-thoai-gap-icon-cate.png'
  },
  {
    id: 5,
    title: 'Điện thoại AI',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/dien-thoai-ai-icon-cate.png'
  },
  {
    id: 6,
    title: 'Điện thoại phổ thông',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/dien-thoai-pho-thong-icon-cate.png'
  },
  {
    id: 7,
    title: 'Điện thoại phổ thông',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/dien-thoai-pho-thong-icon-cate.png'
  },
  {
    id: 8,
    title: 'Điện thoại phổ thông',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/dien-thoai-pho-thong-icon-cate.png'
  },
  {
    id: 9,
    title: 'Điện thoại phổ thông',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/dien-thoai-pho-thong-icon-cate.png'
  },
]

const MobileBrands = [
  {
    id: 1,
    name: 'Apple',
    src: ''
  },
  {
    id: 2,
    name: 'Samsung',
    src: ''
  },
  {
    id: 3,
    name: 'Xiaomi',
    src: ''
  },
  {
    id: 4,
    name: 'OPPO',
    src: ''
  },
  {
    id: 5,
    name: 'TECNO',
    src: ''
  },
  {
    id: 6,
    name: 'HONOR',
    src: ''
  },
  {
    id: 7,
    name: 'Nubia',
    src: ''
  },
  {
    id: 8,
    name: 'Sony',
    src: ''
  },
  {
    id: 9,
    name: 'Nokia',
    src: ''
  },
  {
    id: 10,
    name: 'Infinix',
    src: ''
  },
  {
    id: 11,
    name: 'Nothing',
    src: ''
  },
  {
    id: 12,
    name: 'Itel',
    src: ''
  },
  {
    id: 13,
    name: 'Realme',
    src: ''
  },
  {
    id: 14,
    name: 'Masstel',
    src: ''
  },
  {
    id: 15,
    name: 'Vivo',
    src: ''
  },
]

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

const TextHeaderMenu = styled(Typography)({
  color: 'red',
  height: '60px',
  borderBottom: '1px solid gray',
  paddingTop: '10px'
})

const MenuCategoriesContainer = styled(Box)({
  height: '64px',
  marginTop: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
  maxWidth: '980px',
  overflow: 'auto',
  '::-webkit-scrollbar': { display: 'none'}
})

const CategoryItemBox = styled(Box)({
  minWidth: '160px',
  minHeight: '60px',
  maxHeight: '60px',
  backgroundColor: 'rgb(242, 242, 243)',
  borderRadius: '0.5rem',
  padding: '4px',
  display: 'flex',
  marginLeft: '0.5rem'
})

const CategoryImage = styled(Box)({
  height: '48px',
  width: '48px'
})

const BackwardButton = styled(Box)({
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

const ForwardButton = styled(Box)({
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

const MobileBrandsContainer = styled(Box)({
  maxHeight: '35px',
  maxWidth: '1200px',
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const MobileBransWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '850px',
  overflowX: 'auto',
  '::-webkit-scrollbar': { display: 'none'}
})

const BrandItem = styled(Chip)({
  fontWeight: 'bold',
  marginLeft: '0.5rem',
  padding: '6px 12px',
  fontSize: '0.875rem'
})

const ProductCardsContainer = styled(Box)({
  width: '100%',
  marginTop: '0.5rem'
})

const ProductCardsWrapper = styled(Box)({

})

function ProductSide() {
  const [activeHeader, setActiveHeader] = useState(1)

  function handleActiveHeader(identifier) {
    setActiveHeader(identifier)
  }

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

          {/* Menu Categories Container */}
          <Box sx={{ position: 'relative' }}>
            <MenuCategoriesContainer>
              <BackwardButton>
                <ArrowBackIosNewIcon color='black' />
              </BackwardButton>
              {CategoriesDataDummy.map((category) => 
                <CategoryItemBox key={category.id}>
                  <CategoryImage component='img' alt={category.title} src={category.src}/>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='span' fontWeight='bold'>{category.title}</Typography>
                  </Box>
                </CategoryItemBox>
              )}
              <ForwardButton>
                <ArrowForwardIosIcon/>
              </ForwardButton>
            </MenuCategoriesContainer>
          </Box>

          {/* List Mobile Brands Container */}
          <MobileBrandsContainer>
            <Box sx={{ position: 'relative' }}>
              <MobileBransWrapper>
                <BackwardButton>
                  <ArrowBackIosNewIcon color='black' />
                </BackwardButton>
                {MobileBrands.map((brand) => <BrandItem key={brand.id} label={brand.name} variant='outlined'  />)}
                <ForwardButton>
                  <ArrowForwardIosIcon/>
                </ForwardButton>
              </MobileBransWrapper>
            </Box>
            <Chip label='Xem tất cả' color='primary' icon={<KeyboardDoubleArrowRightIcon sx={{ cursor: 'pointer' }} />}/>
          </MobileBrandsContainer>

          {/* Product Cards Container */}
          <ProductCardsContainer>
            <ProductCardsWrapper>
              <Card sx={{ maxWidth: 225, maxHeight: '465px', padding: '10px 4px', position: 'relative'}}>
                <Box sx={{ marginBottom: '10px'}}>
                  <Typography fontSize='small' color='rgb(30, 71, 138)' backgroundColor='rgb(219, 232, 254)' padding='2px' borderRadius='2px' width='max-content' position='absolute' right='0' top='-2px'>Trả góp 0%</Typography>
                  <Typography fontSize='small' color='white' backgroundColor='primary.main' padding='2px' borderRadius='2px' width='max-content' position='absolute' left='0' top='-2px'>Giảm 13%</Typography>
                </Box>
                <CardMedia
                  sx={{ height: '200px', width: '200px' }}
                  image='https://cdn2.cellphones.com.vn/insecure/rs:fill:300:300/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_air-3_2.jpg'
                  title='iphone Air'
                />
                <CardContent sx={{ padding: '5px'}}>
                  <Typography gutterBottom variant='span' fontWeight='bold' fontSize='medium'>
                    Iphone Air 256GB | Chính Hãng
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' ,justifyContent: 'space-between', gap: '0.2rem' }}>
                    <Typography sx={{ backgroundColor: 'rgb(223, 249, 232)', color: 'rgb(27, 76, 47)', padding: '4px 8px', borderRadius: '2px', width: 'max-content' }} variant='span' fontSize='small'>Hàng mới về</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 1}}>
                      <Typography fontWeight='bold' color='primary.main'>31.990.000đ</Typography>
                      <Typography fontSize='small' sx={{ textDecorationLine: 'line-through' }}>31.990.000đ</Typography>
                    </Box>
                    <Typography fontSize='small' color='rgb(30, 71, 138)' backgroundColor='rgb(219, 232, 254)' padding='2px' borderRadius='2px'>Smember giảm đến 320.000đ</Typography>
                    <Typography variant='span' component='div' fontSize='small' sx={{ backgroundColor: 'rgb(242,242,243)', padding: '4px'}}>
                      Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0}}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <StarIcon sx={{ color: 'primary.main' }}/>
                    <Typography fontWeight='bold' color='primary.main'>5</Typography>
                  </Box>
                  <Button size='small' startIcon={<FavoriteBorderIcon/>} >Yêu Thích</Button>
                </CardActions>
              </Card>
            </ProductCardsWrapper>
          </ProductCardsContainer>

        </ListProductContainer>

      </ProductWrapper>
    </ProductContainer>
  )
}

export default ProductSide
