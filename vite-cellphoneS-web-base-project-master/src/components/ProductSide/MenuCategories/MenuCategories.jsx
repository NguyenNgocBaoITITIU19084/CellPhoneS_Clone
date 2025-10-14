import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

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

function MenuCategories() {
  return (
    <>
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
    </>
  )
}

export default MenuCategories
