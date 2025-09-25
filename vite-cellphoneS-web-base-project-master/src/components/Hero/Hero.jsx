import styled from "@emotion/styled"
import Box from "@mui/material/Box"

import Typography from "@mui/material/Typography"
import List from '@mui/material/List'
import SvgIcon from "@mui/material/SvgIcon"

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
import ImageSlider from "./ImageSilder/ImageSlider"

const HeroContainer = styled(Box)(({ theme }) => ({
  height: theme.cell_phone.heroHeight,
  width: '100%',
  margin: '0 auto',
  marginTop: '10px',
}))

const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: theme.cell_phone.heroMaxContent,
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '15px'
}))

const ContentBox = styled(Box)`
  box-shadow: -11px 11px 29px -7px rgba(0,0,0,0.71);
  -webkit-box-shadow: -11px 11px 29px -7px rgba(0,0,0,0.71);
  -moz-box-shadow: -11px 11px 29px -7px rgba(0,0,0,0.71);
  border-radius: 15px;
`

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


function Hero() {
  return (
    <HeroContainer>
      <HeroContent>

            <ContentBox sx={{ color: 'black', flex: 1, padding: '10px'}}>
              <List>
                {categories.map((category) => (
                  <Box key={category.id} sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: '8px', justifyContent: 'space-between', cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5', borderRadius: '4px'} }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <SvgIcon component={category.icon} inheritViewBox />
                      {category.names.map((name, index) => (
                        <Typography variant="span" fontSize='small' component='span' key={name}>{name}{index === category.names.length - 1 ? '' : ', '}</Typography>
                      ))}
                    </Box>
                      <ChevronRightIcon />
                  </Box>
                ))}
                
              </List>
            </ContentBox>
  
            <ContentBox sx={{ color: 'black', flex: 3}}>
              <ImageSlider />
            </ContentBox>

            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 , justifyContent: 'space-between'}}>

              <ContentBox sx={{ color: 'black', flex: 1}}>
                <Box component='img' sx={{ height: '100%', width: '100%', objectFit: 'fill', borderRadius: '8px'}} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/s25-0925-1.png" />
               </ContentBox>
     
              <ContentBox sx={{ color: 'black', flex: 1}}>
                <Box component='img' sx={{ height: '100%', width: '100%', objectFit: 'fill', borderRadius: '8px'}} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/Camp-laptop-T9_Right-banner-1.png" />
              </ContentBox>
     
              <ContentBox sx={{ color: 'black', flex: 1}}>
                <Box component='img' sx={{ height: '100%', width: '100%', objectFit: 'fill', borderRadius: '8px'}} src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/watch11-right.png" />
              </ContentBox>
            </Box>


      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
