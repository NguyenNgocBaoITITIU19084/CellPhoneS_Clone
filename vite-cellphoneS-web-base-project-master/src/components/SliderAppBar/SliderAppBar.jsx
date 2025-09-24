import styled from "@emotion/styled"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import StorefrontIcon from '@mui/icons-material/Storefront'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'

const StyledContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: theme.cell_phone.sliderAppBarHeight,
  maxWidth: theme.cell_phone.sliderAppBarMaxContent,
  margin: '0 auto',
}))

const StyledIconBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 1,
  paddingX: '4px'
})

const MarqueeContent = styled(Stack)`
  overflow: hidden;
  white-space: nowrap;
  animation: marquee 10s linear infinite;

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
`;


function SliderAppBar() {

  return (
    <StyledContentBox>
      <Stack direction="row" spacing={2} sx={{ height: '100%', alignItems: 'flex-end', gap: 2, justifyContent: 'space-between', paddingX: 2 }}>
        <MarqueeContent direction="row" spacing={2} sx={{ height: '100%', alignItems: 'flex-end', gap: 1 }}>
          <StyledIconBox>
            <CachedOutlinedIcon fontSize="small"/>
            <Typography variant="span" component='span' fontSize='small' fontWeight='bold'>Thu cũ giá ngon - Lên đời tiết kiệm</Typography>
          </StyledIconBox>
          <StyledIconBox>
            <LocalShippingOutlinedIcon fontSize="small"/>
            <Typography variant="span" component='span' fontSize='small' fontWeight='bold'>Giao nhanh - Miễn phí cho đơn 300k</Typography>
          </StyledIconBox>
          <StyledIconBox>
            <GppGoodOutlinedIcon fontSize="small"/>
            <Typography variant="span" component='span' fontSize='small' fontWeight='bold'>Sản phẩm chính hãng - xuất VAT đầy đủ</Typography>
          </StyledIconBox>   
        </MarqueeContent>
        <Stack  direction='row' spacing={1} sx={{ height: '100%', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <StyledIconBox>
            <StorefrontIcon fontSize="small"/>
            <Typography variant="span" component='span' fontSize='small' fontWeight='bold'>Cửa Hàng Gần Bạn</Typography>
          </StyledIconBox>
          <StyledIconBox>
            <InsertDriveFileOutlinedIcon fontSize="small"/>
            <Typography variant="span" component='span' fontSize='small' fontWeight='bold'>Tra Cứu Đơn Hàng</Typography>
          </StyledIconBox>
          <StyledIconBox>
            <PhoneInTalkOutlinedIcon fontSize="small"/>
            <Typography variant="span" component='span' fontSize='small' fontWeight='bold'>1800 2097</Typography>
          </StyledIconBox>
        </Stack>
      </Stack>
    </StyledContentBox>
  )
}

export default SliderAppBar
