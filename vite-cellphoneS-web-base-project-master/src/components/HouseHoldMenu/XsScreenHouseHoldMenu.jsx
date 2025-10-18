import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import ViewAllButton from "../Buttons/ViewAllButton"
import MenuSelectedHeader from '../MenuSelectedHeader/MenuSelectedHeader'
import { useState } from "react"

const HOUSEHOLD_MENU = [
  {
    id: '1',
    title: 'gia dụng nhà bếp',
    products: [
      {
        id: 'p1',
        name: 'Nồi chiên không dàu',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80HXHTJZD2DC95EQ6CBFW.png'
      },
      {
        id: 'p2',
        name: 'Nồi cơm điện',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80JCQYAN5DM1JZN7RPP9Y.png'
      },
      {
        id: 'p3',
        name: 'Máy làm sữa hạt',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80JHWHB0CQC5V0V05602E.png'
      },
      {
        id: 'p4',
        name: 'Máy ép trái cây',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80JMVPPP54Q5B60ST0BB2.png'
      },
      {
        id: 'p5',
        name: 'Máy xay sinh tố',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80JXDDJJDDQ35P0SQMV1X.png'
      },
      {
        id: 'p6',
        name: 'Lò vi sóng',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80JXDDJJDDQ35P0SQMV1X.png'
      },
    ]
  },
  {
    id: '2',
    title: 'thiết bị gia đình',
    products: [
      {
        id: 'p7',
        name: 'Robot hút bụi',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80JXDDJJDDQ35P0SQMV1X.png'
      },
      {
        id: 'p8',
        name: 'Máy bụi cầm tay',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80K09Q5AB2ZNH9WKHNTEK.png'
      },
      {
        id: 'p9',
        name: 'Máy lọc không khí',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80K34KYTE7Y63NCD7JMBB.png'
      },
      {
        id: 'p10',
        name: 'Quạt',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80KFTPM75JGSB5T6PJ2CH.png'
      },
      {
        id: 'p11',
        name: 'Máy chiếu',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80KFTPM75JGSB5T6PJ2CH.png'
      },
      {
        id: 'p12',
        name: 'Bàn ủi',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80KFTPM75JGSB5T6PJ2CH.png'
      },
    ]
  },
  {
    id: '3',
    title: 'sức khỏe - làm đẹp',
    products: [
      {
        id: 'p13',
        name: 'Cân sức khỏe',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80KFTPM75JGSB5T6PJ2CH.png'
      },
      {
        id: 'p14',
        name: 'Máy sấy tóc',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F8MEMRGVRQAHSFV2YTBCXE.png'
      },
      {
        id: 'p15',
        name: 'Máy massage',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80KJQXNVZYBH3M9RKMZKZ.png'
      },
      {
        id: 'p16',
        name: 'Máy tăm nước',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80KP203YTAAZGCM8770NA.png'
      },
      {
        id: 'p17',
        name: 'Bàn chải điện',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:90/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80KSC13GNN09Z83ZKM8M0.png'
      },
      {
        id: 'p18',
        name: 'Máy cạo râu',
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:150:150/q:50/plain/https://media-asset.cellphones.com.vn/page_configs/01K6F80KXT0BFCBN1HQ8BHPGCX.png'
      },
    ]
  },
]

const LIST_TITLE = [
  {
    id: 1,
    title: 'gia dụng nhà bếp',  
  },
  {
    id: 2,
    title: 'thiết bị gia đình',
  },
  {
    id: 3,
    title: 'sức khỏe - làm đẹp',
  },
]

const HouseholdContainer = styled(Box)({
  width: '100%'
})

const HouseholdWrapper = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto',
})

const HouseholdHeader = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 1
})

const HouseholdBody = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 2,
  padding: 1,
  marginTop: 1
})

const HouseholdItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgb(247, 247, 248)',
  justifyContent: 'center',
  alignItems: 'center', 
  padding: '4px',
  borderRadius: '1rem'
})

function XsScreenHouseHoldMenu() {
  const [identifier, setIdentifier] = useState(1)

  function handleGetIdentifier(value) {
    setIdentifier(value)
  }

  return (
    <HouseholdContainer sx={{ display: {xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none'} }}>
      <HouseholdWrapper>
        <HouseholdHeader>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ fontSize: {xs: '0.875rem', md: '1rem', lg: '1.5rem'}, fontWeight: 'bold', padding: '0 5px'}}>Đồ gia dụng</Typography>
            <ViewAllButton  sx={{ cursor: 'pointer'}} size='small'/>
          </Box>
          <MenuSelectedHeader listTitle={LIST_TITLE} handleGetIdentifier={handleGetIdentifier}/>
        </HouseholdHeader>
        <HouseholdBody>
        {HOUSEHOLD_MENU[identifier - 1].products.map(item => 
          <HouseholdItem key={item.id}>
            <Box component='img' alt={item.name} src={item.src} sx={{height: '72px', width: '72px'}}></Box>
            <Typography sx={{ fontSize: {xs: '0.875rem', md: '1rem'} }} textAlign='center'>{item.name}</Typography>
          </HouseholdItem>)}
        </HouseholdBody>
      </HouseholdWrapper>
    </HouseholdContainer>
  )
}

export default XsScreenHouseHoldMenu
