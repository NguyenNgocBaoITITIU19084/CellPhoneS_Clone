/* eslint-disable react/prop-types */
import Box from "@mui/material/Box"
import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"

const HeaderItem = styled(Typography)({
  fontSize: '0.875rem'
})

function PopupItemComponent({ data, title, isText = false, column = 'auto-fit' }) {
  return (
    <Box>
      <HeaderItem variant="h6">{title}</HeaderItem>
      <Box sx={{ display: 'grid', gridTemplateColumns: `${column === 'auto-fit' ? 'repeat(auto-fit, minmax(100px,1fr))' : `repeat(${column},1fr)`}` , gap: 0.5}}>
        {data?.map((item, index) => (
          <>
          {isText ? 
            <Typography 
              key={`${item}-${index}-${Date.now()}`} 
              variant="span" 
              component='span'
              sx={{ 
                width:'max-content', 
                border: '0.5px solid black', 
                padding: 1, 
                borderRadius: '0.5rem',
                fontSize: '0.7rem', 
                fontWeight: 'bold',
                cursor: 'pointer', 
                '&:hover': { backgroundColor: '#f5f5f5'} 
              }} 
            >{item}</Typography>
          : <Box 
              key={`${item.name}-${index}-${Date.now()}`} 
              component='img' 
              src={item.src}
              sx={{ 
                padding: 1, 
                height: '35px', 
                width: '80px', 
                objectFit: 'contain', 
                border: '0.2px solid black', 
                borderRadius: '0.5rem',
                '&:hover': { backgroundColor: '#f5f5f5'}  
              }} 
            />
          }
          </>
        ))}
      </Box>
    </Box>
  )
}

export default PopupItemComponent
