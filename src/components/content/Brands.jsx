import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { brands } from '../../Data';


const Brands = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 1023, min: 771 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 768, min: 480 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 478, min: 0 },
          items: 1
        }
      };
      const brandsList =
      [
        {
         id: 1,
         brandImg: brands.brand1,
         alt: "brand1"
       },
        {
         id: 2,
         brandImg: brands.brand2,
         alt: "brand2"
       },
        {
         id: 3,
         brandImg: brands.brand3,
         alt: "brand3"
       },
        {
         id: 4,
         brandImg: brands.brand4,
         alt: "brand4"
       },
        {
         id: 5,
         brandImg: brands.brand5,
         alt: "brand5"
       },
        {
         id: 6,
         brandImg: brands.brand6,
         alt: "brand6"
       }
      ]

  return (
    <div className='rotatingBrands py-10 '>
        <Carousel 
        responsive={responsive}
        infinite={true}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
        >
          {
            brandsList.map(({id, brandImg, alt})=>(
              <div key={id} className='opacity-40 hover:opacity-100 transition duration-500'>
                 <img src={brandImg} alt={alt} />
              </div>
            ))
          }
        </Carousel>
    </div>
  )
}

export default Brands