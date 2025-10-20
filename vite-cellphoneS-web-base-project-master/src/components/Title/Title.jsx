/* eslint-disable react/prop-types */
import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ViewAllButton from "../Buttons/ViewAllButton"

const TitleContainer = styled(Box)({
  width: '100%'
})

const TitleWrapper = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10px',
  gap: 1
})

function Title({title, isViewAll = false, sizeViewAll = 'small'}) {
  return (
    <TitleContainer>
      <TitleWrapper>
        <Typography variant="h6" sx={{ fontSize: {xs: '0.875rem', md: '1rem', lg: '1.5rem'}, fontWeight: 'bold'}}>{title}</Typography>
        {isViewAll && <ViewAllButton size={sizeViewAll}/>}
      </TitleWrapper>
    </TitleContainer>
  )
}

export default Title
