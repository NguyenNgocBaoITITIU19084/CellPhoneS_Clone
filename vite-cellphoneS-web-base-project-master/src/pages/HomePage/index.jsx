import Box from "@mui/material/Box"
import AppBar from "~/components/AppBoard"
import Hero from "~/components/Hero/Hero"

function HomePage() {
  return (
    <Box sx={{ backgroundColor: 'white', height: '100vh', width: '100%' }}>
        <AppBar />
        <Hero />
    </Box>
  )
}

export default HomePage
