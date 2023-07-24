import React, { FC } from 'react'
import Slider from "react-slick";
import Image from 'next/image';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import { useBreakpointValue, useMediaQuery } from '@chakra-ui/react'
import { StaticImageData } from 'next/image';

interface Imagetype {
  id: number
  image: StaticImageData
}


const Carousel: FC<Imagetype[]> = ({ images }) => {

  const imageWidth = useBreakpointValue({ base: '320px', sm: '320px', md: '300px', lg: '100%' });
  const slideNumbers = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3 })



  const contentStyle: React.CSSProperties = {
    height: '350px',
    width: '90%',
    borderRadius: '10px',
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slideNumbers,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    centerPadding: '0px',
    className: "center",
  };


  return (
    <div>
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id}>
            <Image style={contentStyle} src={item.image} alt='image' />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel