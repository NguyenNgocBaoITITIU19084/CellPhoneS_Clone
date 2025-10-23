import { useState } from "react"

import styled from "@emotion/styled"
import Box from "@mui/material/Box"

import ImageSlider from "./ImageSilder/ImageSlider"
import MenuCategory from "./MenuCategory"
import CategoryResultPopup from "./CategoryResultPopup/CategoryResultPopup"

const HeroContainer = styled(Box)(({ theme }) => ({
  maxHeight: theme.cell_phone.heroHeight,
  width: '100%',
  margin: '0 auto',
}))

const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: theme.cell_phone.heroMaxContent,
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '15px',
  padding: '10px'
}))

const ContentBox = styled(Box)`
  box-shadow: -11px 11px 29px -7px rgba(0,0,0,0.71);
  -webkit-box-shadow: -11px 11px 29px -7px rgba(0,0,0,0.71);
  -moz-box-shadow: -11px 11px 29px -7px rgba(0,0,0,0.71);
  border-radius: 15px;
`


function Hero() {
  const [hoveredItem, setHoveredItem] =  useState('');
  let leaveTimeout = null

  function showHoverItem(identifier) {
    clearTimeout(leaveTimeout)
    setHoveredItem(identifier)
  }

  function handleMouseLeaveItem(){
    leaveTimeout = setTimeout(() => {
      setHoveredItem('')
    }, 300);
    // clearTimeout(leaveTimeout)
  }

  return (
    <HeroContainer sx={{ mt: {lg: '100px', md: '70px', sm: '50px', xs: '70px'} }}>
      <HeroContent>

            <ContentBox sx={{display: {lg: 'block', md: 'none', sm: 'none' ,xs: 'none'}, color: 'black', flex: 1, padding: '10px', height: 'max-content', maxWidth: '231px'}}>
              <MenuCategory onHovered={showHoverItem} onMouseLeave={handleMouseLeaveItem}/>
            </ContentBox>
            {!hoveredItem &&
              <ContentBox sx={{ color: 'black', flex: 3, width: {lg: '60%', md: '70%', sm: '80%' ,xs: '90%'}, height: 'max-content'}}>
                <ImageSlider />
              </ContentBox>
            }
            {!hoveredItem &&
              <Box sx={{ flex: 1, display: {lg: 'flex', md: 'flex', xs: 'none'}, flexDirection: 'column', gap: 1 , justifyContent: 'space-between'}}>

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
            }
            {hoveredItem && 
              <ContentBox sx={{ flex: 4 }}>
                <CategoryResultPopup hoveredItem={hoveredItem} onMouseLeave={handleMouseLeaveItem} onMouseHover={showHoverItem}/>
              </ContentBox>
            }

      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
