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
  marginTop: '1rem',
})

const ProductWrapper = styled(Box)({
  display: 'flex',
  gap: '1rem'
})

const ListProductContainer = styled(Box)({
  flex: '6'
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
          <ProductCard/>

        </ListProductContainer>

      </ProductWrapper>
    </ProductContainer>
  )
}

export default ProductSide
