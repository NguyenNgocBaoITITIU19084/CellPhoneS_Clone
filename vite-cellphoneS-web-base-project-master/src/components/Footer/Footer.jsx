import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'

const PAYMENT_METHODS = [
  {
    id: 1,
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/apple-pay-og.png',
    name: "applepay",
  },
  {
    id: 2,
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/payment/vnpay-logo.png',
    name: "vnpay",
  },
  {
    id: 3,
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/momo_1.png',
    name: "momo",
  },
  {
    id: 4,
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/payment/onepay-logo.png',
    name: "onepay",
  },
  {
    id: 5,
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/payment/mpos-logo.png',
    name: "pospay",
  },
  {
    id: 6,
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/payment/kredivo-logo.png',
    name: "kredivo",
  },
  {
    id: 7,
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/payment/zalopay-logo.png',
    name: "zalopay",
  },
  {
    id: 8,
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/payment/alepay-logo.png',
    name: "alepay",
  },
  {
    id: 9,
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/fundiin.png',
    name: "fundiin",
  },
]

const SOCIAL_MEDIA = [
  {
    id: 1,
    name: "youtube",
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/social/cellphones-youtube.png'
  },
  {
    id: 2,
    name: "facebook",
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/social/cellphones-facebook.png'
  },
  {
    id: 3,
    name: "instagram",
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/social/cellphones-instagram.png'
  },
  {
    id: 4,
    name: "titok",
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/social/cellphones-tiktok.png'
  },
  {
    id: 5,
    name: "zalo",
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/logo/social/cellphones-tiktok.png'
  },
]

const FooterContainer = styled(Box)({
  width: '100%',
  backgroundColor: 'rgb(247, 247, 248)'
})

const FooterWrapper = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  padding: '10px',
})

const FooterItemWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 1
})

const FooterItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '10px',
  gap: 2
})

const HeaderFooter = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 'bold',
})

const Text = styled(Typography)({
  fontSize: '1rem',
})


function Footer() {
  return (
    <FooterContainer marginBottom={9}>
      <FooterWrapper sx={{ gridTemplateColumns: {xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(4, 1fr)'} }}>
        <FooterItemWrapper>

          <FooterItem>
            <HeaderFooter variant="h6">Tổng đài hỗ trợ miễn phí</HeaderFooter>
            <Text variant="span">
              Mua hàng - bảo hành 1800.2097 (7h30 - 22h00)
            </Text>
            <Text variant="span">
              Khiếu nại 1800.2063 (8h00 - 21h30)
            </Text>
          </FooterItem>

          <FooterItem>
            <HeaderFooter variant="h6">Phương thức thanh toán</HeaderFooter>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0.2 }}>
              {PAYMENT_METHODS.map((method) => (
                <Box key={method.id} component="img" src={method.img} alt={method.name} sx={{ height: '30px', width: '46px' }}/>
              ))}
            </Box>
          </FooterItem>

          <FooterItem>
            <HeaderFooter variant="h6">ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</HeaderFooter>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.2, backgroundColor: '#ecf0f1', padding: '0 5px' }}>
              <Typography variant="span" sx={{ color: 'primary.main', fontSize: '0.8rem', fontWeight: 'bold' }}>Nhận ngay voucher 10%</Typography>
              <Typography variant="span" sx={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <TextField id="filled-search" label="Nhập email của bạn" type="search" variant="filled"/>
              <TextField id="filled-search" label="Số điện thoại của bạn" type="search" variant="filled"/>
            </Box>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} sx={{ fontSize: '0.875rem'}} label="Tôi đồng ý với các điều khoản của CellphoneS" />
            </FormGroup>
            <Button variant="contained" size="small">Đăng kí ngay</Button>
          </FooterItem>
        </FooterItemWrapper>

        <FooterItemWrapper>
          <FooterItem>
            <HeaderFooter variant="h6">Thông tin về chính sách</HeaderFooter>
            <Text variant="span">Mua hàng và thanh toán Online</Text>
            <Text variant="span">Mua hàng trả góp Online</Text>
            <Text variant="span">Mua hàng trả góp bằng thẻ tín dụng</Text>
            <Text variant="span">Chính sách giao hàng</Text>
            <Text variant="span">Chính sách đổi trả</Text>
            <Text variant="span">Tra điểm Smember</Text>
            <Text variant="span">Xem ưu đãi Smember</Text>
            <Text variant="span">Tra thông tin bảo hành</Text>
            <Text variant="span">Tra cứu hoá đơn điện tử</Text>
            <Text variant="span">Thông tin hoá đơn mua hàng</Text>
            <Text variant="span">Trung tâm bảo hành chính hãng</Text>
            <Text variant="span">Quy định về việc sao lưu dữ liệu</Text>
            <Text variant="span">Chính sách khui hộp sản phẩm Apple</Text>
            <Text variant="span">VAT Refund</Text>
          </FooterItem>
        </FooterItemWrapper>

        <FooterItemWrapper>
          <FooterItem>
            <HeaderFooter variant="h6">Dịch vụ và thông tin khác</HeaderFooter>
            <Text variant="span">Khách hàng doanh nghiệp (B2B)</Text>
            <Text variant="span">Ưu đãi thanh toán</Text>
            <Text variant="span">Quy chế hoạt động</Text>
            <Text variant="span">Chính sách bảo mật thông tin cá nhân</Text>
            <Text variant="span">Chính sách Bảo hành</Text>
            <Text variant="span">Liên hệ hợp tác kinh doanh</Text>
            <Text variant="span">Tuyển dụng</Text>
            <Text variant="span">Dịch vụ bảo hành mở rộng</Text>
          </FooterItem>
          <FooterItem>
            <HeaderFooter variant="h6">Mua sắm dễ dàng – Ưu đãi ngập tràn cùng app CellphoneS</HeaderFooter>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
              <Box sx={{ height: '100px', width: '100px' }} component="img" src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/QR_appGeneral.jpg" alt="appstore" />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ height: '47px', width: '160px' }} component="img" src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadANDROID.png" alt="googleplay" />
                <Box sx={{ height: '47px', width: '160px' }} component="img" src="https://cdn2.cellphones.com.vn/200x,webp/media/wysiwyg/downloadiOS.png" alt="appgallery" />
              </Box>
            </Box>
          </FooterItem>
        </FooterItemWrapper>

        <FooterItemWrapper>
          <FooterItem>
            <HeaderFooter variant="h6">Kết nối với CellphoneS</HeaderFooter>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0.2 }}>
              {SOCIAL_MEDIA.map((media) => (
                <Box key={media.id} component="img" src={media.src} alt={media.name} />
              ))}
            </Box>
          </FooterItem>
          <FooterItem>
            <HeaderFooter variant="h6">Website thành viên</HeaderFooter>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Text variant="span">Hệ thống bảo hành và chăm sóc Điện thoại - Máy tính</Text>
              <Box sx={{height: '30px', width: '150px'}} component='img' alt='' src='https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/dienthoaivui.png'></Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Text variant="span">Trung tâm bảo hành uỷ quyền Apple</Text>
              <Box sx={{height: '30px', width: '80px'}} component='img' alt='' src='https://cdn2.cellphones.com.vn/x/media/wysiwyg/Logo_CareS_1.png'></Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Text variant="span">Kênh thông tin giải trí công nghệ cho giới trẻ</Text>
              <Box sx={{ height: '30px', width: '73px' }} component='img' alt='' src='https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/schanel.png'></Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Text variant="span">Trang thông tin công nghệ mới nhất</Text>
              <Box sx={{ height: '30px', width: '103px' }} component='img' alt='' src='https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/sforum.png'></Box>
            </Box>
          </FooterItem>
        </FooterItemWrapper>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
