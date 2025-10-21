import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import DiscountBox from "./DiscountBox"


const DISCOUNT_DUMMY = [
  {
    id: 1,
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/uu-dai-laptop-hssv-b2s-dday3.png',
  },
  {
    id: 2,
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/laptop-hssv-b2s-dday3.png',
  },
  {
    id: 3,
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/ipad-hssv-b2s-dday3.png',
  },
  {
    id: 4,
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/samsung-home-update-1.png',
  },
]

const PAYMENT_DUMMY = [
  {
    id: 1,
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/hsbcccccccccccc.jpg'
  },
  {
    id: 2,
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/uobbbbbb.jpg'
  },
  {
    id: 3,
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/vibbbbbbbbbbbb.jpg'
  },
  {
    id: 4,
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/nmananana.jpg'
  },
]


const DiscountContainer = styled(Box)({
  width: '100%',
})

const DiscountWrapper = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto',
})

function DiscountNews() {
  return (
    <DiscountContainer>
      <DiscountWrapper sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, gap: 1, justifyContent: 'space-evenly' }}>
        <DiscountBox DISCOUNT_DUMMY={DISCOUNT_DUMMY} title='Ưu đãi sinh viên'/>
        <DiscountBox DISCOUNT_DUMMY={PAYMENT_DUMMY} title='Ưu đãi thanh toán'/>
        {/* <DiscountBox DISCOUNT_DUMMY={BRANDS_DUMMY} title='Chuyên trang thương hiệu'/> */}
      </DiscountWrapper>
    </DiscountContainer>
  )
}

export default DiscountNews
