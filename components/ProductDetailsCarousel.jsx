import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
  return (
    <div className='text-white text-xl w-full 2xs:w-[500px] max-w-[1360px] mx-auto sticky top-[50px]'>
        <Carousel
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            thumbWidth={58}
            className={`productCarousel`}
        >
            <img src="/p1-air-jordan-1-mid-se-craft.webp" alt="imagen de producto 1" />
            <img src="/p2-air-jordan-1-mid-se-craft.webp" alt="imagen de producto 2" />
            <img src="/p3-air-jordan-1-mid-se-craft.jpeg" alt="imagen de producto 3" />
            <img src="/p4-air-jordan-1-mid-se-craft.webp" alt="imagen de producto 4" />
        </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel