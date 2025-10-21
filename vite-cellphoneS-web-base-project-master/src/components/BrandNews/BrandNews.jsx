/* eslint-disable react/prop-types */
import Box from "@mui/material/Box"
import styled from "@emotion/styled"
import Title from "../Title/Title"

const BrandNewsContainer = styled(Box)({
  width: '100%'
})

const BrandNewsWrapper = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto',
})


const BRANDS_DUMMY = [
  {
    id: 1,
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/apple-chinh-hang-home.jpg'
  },
  {
    id: 2,
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/gian-hang-samsung-home.png'
  },
  {
    id: 3,
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/SIS%20asus.png'
  },
  {
    id: 4,
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/xiaomi.png'
  },
]

function BrandNews({title}) {
  return (
    <BrandNewsContainer>
      <BrandNewsWrapper>
        <Title title={title} isViewAll={false}/>
        <Box sx={{ display: 'grid', gap: {xs: '0.2rem', md: '0.5rem'}, gridTemplateColumns: {xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)', md: 'repeat(4, 1fr)',lg: 'repeat(4, 1fr)'}, padding: '0 10px'}}>
            {BRANDS_DUMMY.map((item) =>        
              <Box key={item.id} component='img' alt='' src={item.src} sx={{ height: {xs: '75px', sm: '80px', md: '100px',lg: '150px'}, width: {xs: '170px', sm: '180px', md: '230px', lg: '280px'}, borderRadius: {xs: '0.2rem', lg: '0.5rem'} }}></Box>
            )}
        </Box>
      </BrandNewsWrapper>
    </BrandNewsContainer>
  )
}

export default BrandNews
