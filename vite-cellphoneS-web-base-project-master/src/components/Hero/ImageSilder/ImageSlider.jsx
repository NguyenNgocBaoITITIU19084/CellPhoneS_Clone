import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const CONTENTS = [
  {
    id: 1,
    title: 'Iphone 17 series',
    content: 'Mua ngay',
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/690x300_Home_iPhone_17_%20Pro_Opensale_v2.png'
  },
  {
    id: 2,
    title: 'GALAXY S25 FE',
    content: 'Mở bán quà khủng',
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/galaxy-s25-fe-home-0925.png'
  },
  {
    id: 3,
    title: 'AIRPODS PRO 3',
    content: 'Đặt trước ngay',
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/app3-home.jpg'
  },
  {
    id: 4,
    title: 'XIAOMI 15T Series',
    content: 'Ưu đãi đăng kí sớm',
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/15T_Series_Sliding_4.png'
  },
  {
    id: 5,
    title: 'Iphone Air',
    content: 'Mua ngay',
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/690x300_Home_iPhone_17_%20Air_Opensale_v2.png'
  },
  {
    id: 6,
    title: 'HONOR PAD x7',
    content: 'pin cực khủng mua ngay',
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/honor-pad-x7-home-0925.png'
  },
  {
    id: 7,
    title: 'Macbook pro m4',
    content: 'màu mới giá tốt',
    img: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/miband-home-t9.png'
  },
 
]


function ImageSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Slider arrows={false} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
       {CONTENTS.map((item) => (
        <Box component="img" src={item.img} key={item.title}></Box>
       ))}
      </Slider>
      
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
      >
        {CONTENTS.map((item) => (
          <Box key={item.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', ':hover': {backgroundColor: 'lightgray'}, maxWidth: '130px', minHeight: '70px' }}>
            <Typography variant="span" component='div' textAlign='center' fontSize='small' fontWeight='bold'>{item.title}</Typography>
            <Typography variant="span" component='div' textAlign='center' fontSize='small' fontWeight='bold'>{item.content}</Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default ImageSlider;
