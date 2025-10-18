import styled from "@emotion/styled"
import Chip from "@mui/material/Chip"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

const ACCESSORY_DUMMY = [
  {
    id: 1,
    name: 'Phụ Kiện Apple',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FA9G05VYEFVX2VCHYZY1R7.png'
  },
  {
    id: 2,
    name: 'Cáp sạc',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FA9GEB6TV510FK9GJPJK4N.png'
  },
  {
    id: 3,
    name: 'Pin dự phòng',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FA9GHJ4RRYBDS2Y2WEKRZV.png'
  },
  {
    id: 4,
    name: 'Ốp lưng - bao da',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FA9GMV76QGJDAPAAJ9M26V.png'
  },
  {
    id: 5,
    name: 'Dán màn hình',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FA9GSARTJ2C2XKJSJZB85Z.png'
  },
  {
    id: 6,
    name: 'Thẻ nhớ, usb',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FA9GX3JKD0AHHSWBBK44TP.png'
  },
  {
    id: 7,
    name: 'Gaming gear - Play Station',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FA9H0DYE4E1791SFPXEMY7.png'
  },
  {
    id: 8,
    name: 'Sim 4G - 5G',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FA9H3ZX03AZB1CNX48DG80.png'
  },
  {
    id: 9,
    name: 'Thiết bị mạng',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FA9H7Y53763DEK7J2A2TKP.png'
  },
  {
    id: 10,
    name: 'Camera',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FA9HBE3PQPJEBJNS1ZZDZQ.png'
  },
  {
    id: 11,
    name: 'Gimbal',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FAG655JQDK9DBG3DW9ARDT.png'
  },
  {
    id: 12,
    name: 'Flycam',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FAG6G9DFQVSS6CYZA2YAFQ.png'
  },
  {
    id: 13,
    name: 'Máy ảnh',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FAG6KJ98DW8KHNXKFWARYF.png'
  },
  {
    id: 14,
    name: 'Bàn phím, chuột',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FAG6Q4JA1NNV2BFRPWFDGY.png'
  },
  {
    id: 15,
    name: 'Balo, túi sách',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FAG6T4966NR0Z7ZSFXW5WD.png'
  },
  {
    id: 16,
    name: 'Hub chuyển đổi',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FAG6WZJ9RRA8H9VTQP9CHS.png'
  },
  {
    id: 17,
    name: 'Phụ kiện điện thoại',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FAG6ZTGEC28FWZRJX0TBWS.png'
  },
  {
    id: 18,
    name: 'Phụ kiện laptop',
    src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6FAG6ZTGEC28FWZRJX0TBWS.png'
  },
]

const AccessoryContainer = styled(Box)({
  padding: '8px',
  width: '100%',
})

const AccessoryWrapper = styled(Box)({
  margin: 'auto',
  maxWidth: '1200px'
})

const HeaderAccessory = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 0.5
})

const BodyAccessory = styled(Box)({
  display: 'grid',
  // gridTemplateColumns: 'repeat(3, 1fr)'

})

const ItemAccessory = styled(Box)({
  display: 'flex',
  minWidth: '100px',
  minHeight: '72px', 
  padding: 1,
  border: '0.5px solid #ecf0f1'
})

Box
function XsScreenAccessories() {
  return (
    <AccessoryContainer>
      <AccessoryWrapper>
        <HeaderAccessory>
          <Typography sx={{ fontSize: {xs: '0.875rem', md: '1rem', lg: '1.5rem'}, padding: '0 8px' }} fontWeight='bold'>Sắm thêm phụ kiện chất lượng</Typography>
          <Chip label='Xem tất cả' color='primary' icon={<KeyboardDoubleArrowRightIcon/>} sx={{ cursor: 'pointer', display: {xs: 'flex', md: 'flex'}}} size="small"/>   
        </HeaderAccessory>
        <BodyAccessory sx={{ gridTemplateColumns: {xs: 'repeat(3, 1fr)', sm: 'repeat(6, 1fr)'} }}>
          {ACCESSORY_DUMMY.map((item) => 
            <ItemAccessory key={item.id}>
              <Box component='img' alt={item.name} src={item.src} sx={{height: '70px', width: '70px', objectFit: 'contain'}}></Box>
              <Typography sx={{ fontSize: '0.7rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontWeight: 'bold' }}>{item.name}</Typography>
            </ItemAccessory>
          )}
        </BodyAccessory>
      </AccessoryWrapper>
    </AccessoryContainer>
  )
}

export default XsScreenAccessories
