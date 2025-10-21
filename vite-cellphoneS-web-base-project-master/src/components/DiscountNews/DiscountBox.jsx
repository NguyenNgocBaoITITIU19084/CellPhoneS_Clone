/* eslint-disable react/prop-types */
import styled from "@emotion/styled"
import Box from "@mui/material/Box"

import Title from "../Title/Title"

const DiscountWrapper = styled(Box)({})

const DiscountItem = styled(Box)({})

function DiscountBox({DISCOUNT_DUMMY, title}) {
  return (
   <DiscountWrapper>
        <Title title={title} isViewAll={false}/>
        <Box sx={{ display: 'grid', gap: {xs: '0.2rem', md: '0.5rem'}, gridTemplateColumns: 'repeat(2, 1fr)', padding: '0 10px'}}>
            {DISCOUNT_DUMMY.map((item) => 
              <DiscountItem key={item.id}>
                <Box component='img' alt='' src={item.src} sx={{ height: {xs: '75px', sm: '80px', md: '100px', lg: '150px'}, width: {xs: '170px', sm: '180px', md:'230px', lg: '280px'}, borderRadius: {xs: '0.2rem', lg: '0.5rem'} }}></Box>
              </DiscountItem>
            )}
        </Box>
    </DiscountWrapper>
  )
}

export default DiscountBox
