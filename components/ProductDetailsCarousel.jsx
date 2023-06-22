import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
  return (
    <div className='text-white text-xl w-auto 2xs:w-[500px] max-w-[1360px] mx-auto sticky top-[50px]'>
        <Carousel
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            thumbWidth={58}
            className={`productCarousel`}
        >
            <img src="/p1.png" alt="imagen de producto 1" />
            <img src="/p2.png" alt="imagen de producto 2" />
            <img src="/p3.png" alt="imagen de producto 3" />
            <img src="/p4.png" alt="imagen de producto 4" />
            <img src="/p5.png" alt="imagen de producto 5" />
            <img src="/p6.png" alt="imagen de producto 6" />
            <img src="/p7.png" alt="imagen de producto 7" />
        </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel