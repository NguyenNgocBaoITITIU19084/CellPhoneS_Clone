import styled from "@emotion/styled"
import Box from "@mui/material/Box"

const ContainerBox = styled(Box)({
  maxWidth: '1200px',
  margin: 'auto',
  maxHeight: '75px',
  marginTop: '20px',
  width: '1200px', 
  height: '75px'
})

export default function Banner() {
  return (
    <ContainerBox>
      <Box
        sx={{
          borderRadius: '5px'
        }}
        component='img' 
        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:90/plain/https://dashboard.cellphones.com.vn/storage/special-b2s-dday3-d.gif" 
        alt="Image banner of Homepage"
      >
      </Box>
    </ContainerBox>
  )
}