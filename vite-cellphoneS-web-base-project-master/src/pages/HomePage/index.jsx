import Box from "@mui/material/Box"
import AppBar from "~/components/AppBoard"
import BottomAppBar from "~/components/AppBoard/BottomAppBar"
import Banner from "~/components/Banner/Banner"
import Hero from "~/components/Hero/Hero"
import FullScreenHouseHoldMenu from "~/components/HouseHoldMenu/FullScreenHouseHoldMenu"
import XsScreenHouseHoldMenu from "~/components/HouseHoldMenu/XsScreenHouseHoldMenu"
import XsScreenAccessories from "~/components/MenuCategories/XsScreenAccessories"
import XsScreenCategories from "~/components/MenuCategories/XsScreenCategories"
import ProductSide from "~/components/ProductSide/ProductSide"

function HomePage() {
  return (
    <Box sx={{ backgroundColor: 'white', height: '100vh', width: '100%' }}>
        <AppBar />
        <Hero />
        <Banner/>
        <XsScreenCategories />
        <ProductSide />
        <XsScreenAccessories />
        <XsScreenHouseHoldMenu/>
        <FullScreenHouseHoldMenu />
        <BottomAppBar/>
    </Box>
  )
}

export default HomePage
