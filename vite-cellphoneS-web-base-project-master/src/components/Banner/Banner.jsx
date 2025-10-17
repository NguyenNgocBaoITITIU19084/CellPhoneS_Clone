import styled from "@emotion/styled"
import Box from "@mui/material/Box"

const ContainerBox = styled(Box)({
  maxWidth: '1200px',
  height: 'max-content',
  padding: '0 10px'
})

export default function Banner() {
  return (
    <ContainerBox sx={{ margin: {lg: '30px auto', md: '70px auto', sm: 'auto', xs: 'auto'}, marginTop: {xs: '0', sm: '40px'}}}>
      <Box
        sx={{
          borderRadius: '5px',
          width: '100%', 
          height: {xs: '60px', sm: '50px'},
          objectFit: {xs: 'cover'}
        }}
        component='img' 
        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/special-b2s-dday3-d.gif" 
        alt="Image banner of Homepage"
      >
      </Box>
    </ContainerBox>
  )
}