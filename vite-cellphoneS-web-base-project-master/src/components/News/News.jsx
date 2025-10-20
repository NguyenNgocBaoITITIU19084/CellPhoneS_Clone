import Box from "@mui/material/Box"
import Title from "../Title/Title"
import styled from "@emotion/styled"
import { Typography } from "@mui/material"

const NEWS_DUMMY = [
  {
    id: 1,
    title: 'Top 4 laptop dành cho sinh viên 2024 dưới 20 triệu đồng',
    src: 'https://cdn-media.sforum.vn/storage/app/media/thongvo/top-4-laptop-gaming-cu-duoi-20-trieu/top-4-laptop-gaming-cu-duoi-20-trieu-cover.jpg'
  },
  {
    id: 2,
    title: 'Dung lượng pin khủng và tốc độ sạc của các dòng điện thoại Samsung',
    src: 'https://cdn-media.sforum.vn/storage/app/media/haianh/pin-va-sac-realme-gt-8-pro-duoc-xac-nhan-thumb.jpg'
  },
  {
    id: 3,
    title: 'Đánh giá chi tiết Samsung Galaxy S23 Ultra: đỉnh cao của công nghệ smartphone',
    src: 'https://cdn-media.sforum.vn/storage/app/media/thanhnam/danh-gia-pin-honor-magic-v5/img-20251003-173949.jpg'
  },
  {
    id: 4,
    title: 'Trên tay màn hình cong Samsung Odyssey Ark: trải nghiệm đỉnh cao cho game thủ',
    src: 'https://cdn-media.sforum.vn/storage/app/media/thanhhieu/philips-evnia-27m2n3800/tren-tay-philips-evnia-27m2n3800-cover.jpg'
  },
]

const NewsContainer = styled(Box)({
  width: '100%',
})

const NewsWrapper = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto',
})

const NewsItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgb(247, 247, 248)',
  cursor: 'pointer',
  borderRadius: '1rem'
})

const ImgNews = styled(Box)({
  objectFit: 'contain',
  borderRadius: '1rem'
})

function maxLengthText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

function News() {
  return (
    <NewsContainer>
      <NewsWrapper>
        <Title title='Tin tức' isViewAll={true}/>
        <Box sx={{ display: 'grid', gridTemplateColumns: {xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)'}, gap: 1, padding: 0.5 }}>
          {NEWS_DUMMY.map(item => 
            <NewsItem key={item.id}>
              <ImgNews component='img' alt={item.id} src={item.src} sx={{ height: {xs: '100px', md: '120px', lg: '150px'} }}></ImgNews>
              <Typography sx={{ fontSize: {xs: '0.875rem'}, fontWeight: 'bold', padding: '0.5rem' }}>{maxLengthText(item.title, 41)}</Typography>
            </NewsItem>
          )}
        </Box>
      </NewsWrapper>
    </NewsContainer>
  )
}

export default News
