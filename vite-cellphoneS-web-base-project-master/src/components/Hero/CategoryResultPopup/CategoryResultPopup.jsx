/* eslint-disable react/prop-types */
import Box from "@mui/material/Box"
import styled from "@emotion/styled"
import PopupItemComponent from "./PopupItem"

const MobileBrandsDummy = [
  {
    id: 1,
    name: 'Apple',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/t/_/t_i_xu_ng_71_.png'
  },
  {
    id: 2,
    name: 'Samsung',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/t/_/t_i_xu_ng_72_.png'
  },
  {
    id: 3,
    name: 'Xiaomi',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/t/_/t_i_xu_ng_73_.png'
  },
  {
    id: 4,
    name: 'OPPO',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/t/_/t_i_xu_ng_74_.png'
  },
  {
    id: 5,
    name: 'TECNO',
    src: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/0/1/015413gpfxf4f5f3uwu6wf.png'
  },
  {
    id: 6,
    name: 'HONOR',
    src: 'https://cdn2.cellphones.com.vn/x/media/wysiwyg/HONOR.png'
  },
  {
    id: 7,
    name: 'Nubia',
    src: 'https://cdn2.cellphones.com.vn/x/media/wysiwyg/nubia_1.png'
  },
  {
    id: 8,
    name: 'Sony',
    src: 'https://cellphones.com.vn/media/catalog/product/b/r/brand-icon-sony_2.png'
  },
  {
    id: 9,
    name: 'Nokia',
    src: 'https://cdn2.cellphones.com.vn/x/media/wysiwyg/Brand/nokia_1.png'
  },
  {
    id: 10,
    name: 'Infinix',
    src: 'https://cdn2.cellphones.com.vn/x/media/wysiwyg/infinixlogo02.png'
  },
  {
    id: 11,
    name: 'Nothing',
    src: 'https://cdn2.cellphones.com.vn/x/media/wysiwyg/Group_855.png'
  },
  {
    id: 12,
    name: 'Itel',
    src: 'https://cdn2.cellphones.com.vn/x/media/wysiwyg/Brand/masstel.png'
  },
  {
    id: 13,
    name: 'Realme',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/t/_/t_i_xu_ng_76_.png'
  },
  {
    id: 14,
    name: 'Masstel',
    src: 'https://cdn2.cellphones.com.vn/x/media/wysiwyg/nanomax-111_1_.png'
  },
  {
    id: 15,
    name: 'Vivo',
    src: 'https://cdn2.cellphones.com.vn/x50,webp,q30/media/tmp/catalog/product/t/_/t_i_xu_ng_67_.png'
  },
]

const PRICE_LIMITATIONS = [
  'Dưới 2 triệu',
  'Từ 2 - 4 triệu',
  'Từ 4 - 7 triệu',
  'Từ 7 - 13 triệu',
  'Từ 13 - 20 triệu',
  'Trên 20 triệu',
]

const HOT_PHONES =[
  'iPhone 15 Pro Max',
  'iPhone 15 Pro',
  'iPhone 15 Plus',
  'iPhone 15',
  'iPhone 14 Pro Max',
  'iPhone 14 Pro',
  'iPhone 14 Plus',
  'iPhone 14',
  'Samsung Galaxy S23 Ultra',
  'Samsung Galaxy S23+',
  'Samsung Galaxy S23',
  'Xiaomi Redmi Note 12 Pro+',
  'Xiaomi Redmi Note 12 Pro',
  'Xiaomi Redmi Note 12',
]

const IPAD_BRANDS = [
  {
    id: 21,
    name: 'Apple',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/t/_/t_i_xu_ng_71_.png'
  },
  {
    id: 22,
    name: 'Samsung',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/t/_/t_i_xu_ng_72_.png'
  },
  {
    id: 23,
    name: 'Xiaomi',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/t/_/t_i_xu_ng_73_.png'
  },
  {
    id: 24,
    name: 'OPPO',
    src: 'https://cdn2.cellphones.com.vn/x/media/tmp/catalog/product/t/_/t_i_xu_ng_74_.png'
  },
  {
    id: 25,
    name: 'TECNO',
    src: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/0/1/015413gpfxf4f5f3uwu6wf.png'
  },
]

const HOT_IPADS = [
  'iPad Pro M2',
  'iPad Air 5',
  'iPad 10',
  'iPad Mini',
  'Galaxy Tab S8 Ultra',
  'Galaxy Tab S8+',
  'Galaxy Tab S8',
]

const PopupContainer = styled(Box)({
  width: '100%',
  height: '100%',
})

const PopupWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: 0.2,

})

const PopupItem = styled(Box)({
  flex: 1,
  width: '100%',
  padding: '0 1rem',
})

function CategoryResultPopup({ hoveredItem, onMouseLeave, onMouseHover}) {
  return (
    <PopupContainer onMouseEnter={() => onMouseHover(hoveredItem)} onMouseLeave={onMouseLeave}>
      <PopupWrapper>
        <PopupItem>
          <PopupItemComponent title='Hãng điện thoại' isText={false} data={MobileBrandsDummy} column={3}/>
          <PopupItemComponent title='Mức giá điện thoại' isText={true} data={PRICE_LIMITATIONS} column={2}/>
        </PopupItem>
        <PopupItem>
          <PopupItemComponent title='Điện thoại nổi bật' isText={true} data={HOT_PHONES} column="2"/>
        </PopupItem>
        <PopupItem>
          <PopupItemComponent title='Hãng Ipad' isText={false} data={IPAD_BRANDS} column={3}/>
          <PopupItemComponent title='Ipad bán chạy' isText={true} data={HOT_IPADS}/>
        </PopupItem>
      </PopupWrapper>
    </PopupContainer>
  )
}

export default CategoryResultPopup
