import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star'

const ProductCardsContainer = styled(Box)({
  width: '100%',
  marginTop: '0.5rem'
})

const ProductCardsWrapper = styled(Box)({})

const MortgagePayment = styled(Typography)({
  color: 'rgb(30,71,138)',
  backgroundColor: 'rgb(219, 232, 254)',
  padding: '2px',
  borderRadius: '2px',
  width: 'max-content',
  position: 'absolute',
  top: '-2px',
  right: '0'
})

const DiscountText = styled(Typography)({
  color: 'white',
  padding: '2px',
  borderRadius: '2px',
  width: 'max-content',
  position: 'absolute',
  top: '-2px',
  left: '0'
})

const ProductDetailContainer = styled(Box)({
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'space-between',
 gap: '0.2rem'
})

const ProductStatus = styled(Box)({
  backgroundColor: 'rgb(223, 249, 232)', 
  color: 'rgb(27, 76, 47)', 
  padding: '4px 8px',
  borderRadius: '2px',
  width: 'max-content'
})

const PriceContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'flex-start', 
  gap: 1
})

const SmemberDiscount = styled(Typography)({
  color: 'rgb(30, 71, 138)',
  backgroundColor: 'rgb(219, 232, 254)',
  padding: '2px',
  borderRadius: '2px'
})

function ProductCard() {
  return (
    <>
      <ProductCardsContainer>
            <ProductCardsWrapper>
              <Card sx={{ maxWidth: 225, maxHeight: '465px', padding: '10px 4px', position: 'relative'}}>
                <Box sx={{ marginBottom: '10px'}}>
                  <MortgagePayment fontSize='small'>Trả góp 0%</MortgagePayment>
                  <DiscountText fontSize='small' backgroundColor='primary.main'>Giảm 13%</DiscountText>
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
                  <ProductDetailContainer>
                    <ProductStatus variant='span' fontSize='small'>Hàng mới về</ProductStatus>
                    <PriceContainer >
                      <Typography fontWeight='bold' color='primary.main'>31.990.000đ</Typography>
                      <Typography fontSize='small' sx={{ textDecorationLine: 'line-through' }}>31.990.000đ</Typography>
                    </PriceContainer>
                    <SmemberDiscount fontSize='small'>Smember giảm đến 320.000đ</SmemberDiscount>
                    <Typography variant='span' component='div' fontSize='small' sx={{ backgroundColor: 'rgb(242,242,243)', padding: '4px'}}>
                      Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng
                    </Typography>
                  </ProductDetailContainer>
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
    </>
  )
}

export default ProductCard
