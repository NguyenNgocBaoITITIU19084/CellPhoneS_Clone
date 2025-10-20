import Box from "@mui/material/Box"
import AppBar from "~/components/AppBoard"
import BottomAppBar from "~/components/AppBoard/BottomAppBar"
import Banner from "~/components/Banner/Banner"
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
          <News />
          <BottomAppBar/>
        </Box>     
    </Box>
  )
}

export default HomePage
