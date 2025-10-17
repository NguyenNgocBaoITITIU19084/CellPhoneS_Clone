import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import BackwardButton from '~/components/Buttons/BackwardButton'
import ForwardButton from '~/components/Buttons/ForwardButton'

const MobileBrandsDummy = [
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

const MobileBrandsContainer = styled(Box)({
  maxHeight: '35px',
  // maxWidth: '1200px',
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const MobileBransWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  // maxWidth: '850px',
  overflowX: 'auto',
  '::-webkit-scrollbar': { display: 'none'}
})

const BrandItem = styled(Chip)({
  fontWeight: 'bold',
  marginLeft: '0.5rem',
  padding: '6px 12px',
  fontSize: '0.875rem'
})

function MobileBrands() {
  return (
    <>
      <MobileBrandsContainer>
        <Box sx={{ position: 'relative' }}>
          <MobileBransWrapper sx={{ maxWidth: {xs: '350px', sm: '690px'}}}>
            <BackwardButton/>
            {MobileBrandsDummy.map((brand) => <BrandItem key={brand.id} label={brand.name} variant='outlined'  />)}
            <ForwardButton/>
          </MobileBransWrapper>
        </Box>
        <Chip label='Xem tất cả' color='primary' icon={<KeyboardDoubleArrowRightIcon/>} sx={{ cursor: 'pointer', display: {xs: 'none', md: 'flex'}}}/>
      </MobileBrandsContainer>
    </>
  )
}

export default MobileBrands
