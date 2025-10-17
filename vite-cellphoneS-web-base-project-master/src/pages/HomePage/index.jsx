import Box from "@mui/material/Box"
import AppBar from "~/components/AppBoard"
import Banner from "~/components/Banner/Banner"
import Hero from "~/components/Hero/Hero"
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
    </Box>
  )
}

export default HomePage
