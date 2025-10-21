import Box from "@mui/material/Box"
import AppBar from "~/components/AppBoard"
import BottomAppBar from "~/components/AppBoard/BottomAppBar"
import Banner from "~/components/Banner/Banner"
import BrandNews from "~/components/BrandNews/BrandNews"
import DiscountNews from "~/components/DiscountNews/DiscountNews"
import Footer from "~/components/Footer/Footer"
import Hero from "~/components/Hero/Hero"
import FullScreenHouseHoldMenu from "~/components/HouseHoldMenu/FullScreenHouseHoldMenu"
import XsScreenHouseHoldMenu from "~/components/HouseHoldMenu/XsScreenHouseHoldMenu"
import XsScreenAccessories from "~/components/MenuCategories/XsScreenAccessories"
import XsScreenCategories from "~/components/MenuCategories/XsScreenCategories"
import News from "~/components/News/News"
import ProductSide from "~/components/ProductSide/ProductSide"

function HomePage() {
  return (
    <Box sx={{ backgroundColor: 'white', height: '100vh', width: '100%' }}>
        <AppBar />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Hero />
          <Banner/>
          <XsScreenCategories />
          <ProductSide />
          <ProductSide />
          <ProductSide />
          <XsScreenAccessories />
          <XsScreenHouseHoldMenu/>
          <FullScreenHouseHoldMenu />
          <DiscountNews />
          <BrandNews title='Chuyên trang thương hiệu'/>
          <News />
          <Footer />
          <BottomAppBar/>
        </Box>     
    </Box>
  )
}

export default HomePage
