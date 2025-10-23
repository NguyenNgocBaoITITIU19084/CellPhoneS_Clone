/* eslint-disable react/prop-types */
import Box from "@mui/material/Box"
import { ReactComponent as Phone } from '../../assets/phone.svg' 
import { ReactComponent as Laptop } from '../../assets/laptop.svg'
import { ReactComponent as Airpods } from '../../assets/airpods.svg'
import { ReactComponent as Watch } from '../../assets/watch.svg'
import { ReactComponent as Accessory } from '../../assets/accessory.svg'
import { ReactComponent as Home } from '../../assets/home.svg'
import { ReactComponent as Cpu } from '../../assets/icon_cpu.svg'
import { ReactComponent as Refund } from '../../assets/refund.svg'
import { ReactComponent as Information } from '../../assets/information.svg'
import { ReactComponent as Tech } from '../../assets/icon-cps-tech.svg'
import { ReactComponent as Tcdm } from '../../assets/icon-cps-tcdm.svg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from "@mui/material/Typography"
import List from '@mui/material/List'
import SvgIcon from "@mui/material/SvgIcon"

const categories = [
  {
    id: 1,
    names: ['Điện thoại', 'tablet'],
    icon: Phone
  },
  {
    id: 2,
    names: ['Laptop'],
    icon: Laptop
  },
  {
    id: 3,
    names: ['Âm thanh', 'Mic thu âm'],
    icon: Airpods
  },
  {
    id: 4,
    names: ['Đồng Hồ', 'Camera'],
    icon: Watch 
  },
  {
    id: 5,
    names: ['Đồ gia dụng'],
    icon: Home
  },
  {
    id: 6,
    names: ['Phụ kiện'],
    icon: Accessory
  },
  {
    id: 7,
    names: ['Tivi', 'Máy lạnh', 'Tủ lạnh'],
    icon: Cpu 
  },
  {
    id: 8,
    names: ['Thu cũ đổi mới'],
    icon: Tcdm
  },
  {
    id: 9,
    names: ['Hàng cũ'],
    icon: Refund
  },
  {
    id: 10,
    names: ['Khuyến mãi'],
    icon: Information
  },
  {
    id: 11,
    names: ['Tin Công Nghệ'],
    icon: Tech
  },
]


function MenuCategory({ onHovered, onMouseLeave}) {

  return (
    <List sx={{maxWidth: '211px'}}>
      {categories.map((category) => (
        <Box 
          key={category.id} 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 2, marginBottom: '8px', 
            justifyContent: 'space-between', 
            cursor: 'pointer', 
            '&:hover': { backgroundColor: '#f5f5f5', borderRadius: '4px'} 
          }} onMouseEnter={() => onHovered(category.names)} onMouseLeave={onMouseLeave}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5}} >
            <SvgIcon component={category.icon} inheritViewBox />
            {category.names.map((name, index) => (
              <Typography sx={{ "&:hover": {color: 'primary.main'} }} fontWeight='bold' variant="span" fontSize='small' component='span' key={name}>{name}{index === category.names.length - 1 ? '' : ', '}</Typography>
            ))}
          </Box>
            <ChevronRightIcon />
        </Box>
      ))}
      
    </List>
  )
}

export default MenuCategory
