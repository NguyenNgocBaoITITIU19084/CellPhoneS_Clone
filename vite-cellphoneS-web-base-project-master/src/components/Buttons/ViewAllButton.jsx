import Box from "@mui/material/Box"
import Chip from '@mui/material/Chip'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

function ViewAllButton({...props}) {
  return (
    <Box>
       <Chip label='Xem tất cả' color='primary' icon={<KeyboardDoubleArrowRightIcon/>} {...props}/>
    </Box>
  )
}

export default ViewAllButton
