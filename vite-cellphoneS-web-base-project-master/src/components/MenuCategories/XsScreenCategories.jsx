import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"

const CATEGORIES_DUMMY = [
  {
    id: 1,
    name: 'Điện thoại',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/i/p/iphone-15-menu-0001.png'
  },
  {
    id: 2,
    name: 'Tablet',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/t/_/t_i_xu_ng_9__3.png'
  },
  {
    id: 3,
    name: 'Laptop',
    src: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/m/b/mb-laptop.png'
  },
  {
    id: 4,
    name: 'Gia dụng',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/g/i/giadung-nha-thong-minh.png'
  },
  {
    id: 5,
    name: 'Phụ kiện',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/g/i/giadung-nha-thong-minh.png'
  },
  {
    id: 6,
    name: 'Âm thanh',
    src: 'https://cdn2.cellphones.com.vn/x/media/wysiwyg/icon-am-thanh.png'
  },
  {
    id: 7,
    name: 'Đồng hồ',
    src: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/d/o/dong-ho.png'
  },
  {
    id: 8,
    name: 'Camera',
    src: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/g/o/gopro-menu.png'
  },
  {
    id: 9,
    name: 'Điện máy - Điện lạnh',
    src: 'https://cdn2.cellphones.com.vn/x/media/wysiwyg/dien-may-icon-mobi.png'
  },
  {
    id: 10,
    name: 'Thu cũ - Đổi mới',
    src: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/m/b/mb-trade-in.png'
  },
  {
    id: 11,
    name: 'PC - Màn hình',
    src: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/m/b/mb-monitor-pc.png'
  },
  {
    id: 12,
    name: 'Hàng cũ',
    src: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/m/b/mb-old.png'
  },
  {
    id: 13,
    name: 'Khuyễn mãi',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/t/_/t_i_xu_ng_-_2022-06-07t114601.808.png'
  },
  {
    id: 14,
    name: 'Tin công nghệ',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/t/_/t_i_xu_ng_-_2022-06-07t114705.508.png'
  },
]

const CategoryContainer = styled(Box)({
  width: '100%',
  maxHeight: '235px'
})

const CategoryWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: 2,
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  scrollbarWidth: 'none'
})

const Item = styled(Box)({
  minWidth: '80px',
  minHeight: '100px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 0.5,
  padding: '4px'
})

function XsScreenCategories() {
  return (
    <CategoryContainer sx={{ display: {xs: 'block', sm: 'none'}, padding: '10px' }}>
      <CategoryWrapper>
      {CATEGORIES_DUMMY.map((item) => 
        <Item key={item.id}>
          <Box sx={{height: '56px', width: '56px'}} component='img' alt='category image' src={item.src}></Box>
          <Typography sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}variant="span" component='span' textAlign='center'>{item.name}</Typography>
        </Item>
      )}
      </CategoryWrapper>
      <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'center' }}>
        <Box sx={{ width: '12px', height: '2px', backgroundColor: 'primary.main', borderRadius: '2px' }}></Box>
        <Box sx={{ width: '6px', height: '2px', backgroundColor: 'grey', borderRadius: '2px' }}></Box>
      </Box>
    </CategoryContainer>
  )
}

export default XsScreenCategories
