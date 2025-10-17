import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import AddBanner from './AdsBanner/AddBanner'
import HeaderProduct from './HeaderListProduct/HeaderListProduct'
import MenuCategories from './MenuCategories/MenuCategories'
import MobileBrands from './MobileBrands/MobileBrands'
import ProductCard from '../ProductCard/ProductCard'

const ProductContainer = styled(Box)({
  maxWidth: '1200px',
  margin: 'auto',
  width: '100%',
  padding: 1
})

const ProductWrapper = styled(Box)({
  display: {xs: 'block', sm: 'flex'},
  gap: '1rem'
})

const ListProductContainer = styled(Box)({
  flex: '6', 
  display: 'flex',
  flexDirection: 'column'
})

const ProductGridContainer = styled(Box)({
  display: 'grid',
  // gridTemplateColumns: 'repeat(4, 1fr)'
})

function ProductSide() {

  return (
    <ProductContainer>
      <ProductWrapper>

        {/* Ads Banner Container */}
        <AddBanner/>

        {/* List Product Menu */}
        <ListProductContainer>
          {/* Header of List Product */}
          <HeaderProduct/>

          {/* Menu Categories Container */}
          <MenuCategories/>

          {/* List Mobile Brands Container */}
          <MobileBrands/>

          {/* Product Cards Container */}
          <ProductGridContainer sx={{ gridTemplateColumns: {xs: 'repeat(2, 1fr)'}, margin: '0 auto', gap: 1, padding: '10px' }}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </ProductGridContainer>

        </ListProductContainer>

      </ProductWrapper>
    </ProductContainer>
  )
}

export default ProductSide
