import Box from "@mui/material/Box"
import Chip from '@mui/material/Chip'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

function ViewAllButton() {
  return (
    <Box>
       <Chip label='Xem tất cả' color='primary' icon={<KeyboardDoubleArrowRightIcon/>} sx={{ cursor: 'pointer', display: {xs: 'none', md: 'flex'}}}/>
    </Box>
  )
}

export default ViewAllButton
