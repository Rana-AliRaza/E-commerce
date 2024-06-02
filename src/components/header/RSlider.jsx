import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import { images } from '../../Data.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../styles/header.css';

import headerimg1 from "../../assets/pics/heroBtns.png";
import headerimg2 from "../../assets/pics/heroBtn1.png";
import headerimg3 from "../../assets/pics/heroBtn2.png";


import slider1 from '../../assets/pics/slider-1.png';
import slider2 from '../../assets/pics/slider-2.png';
import slider3 from '../../assets/pics/slider-3.png';
import { Link } from 'react-router-dom';

const RSlider = () => {

    const sliderImages = [
        {
            id: 1,
            sliderImg: slider1,
            alt: "slider1",
            title: "Upcoming Offer",
            heading: "Supper value deals",
            mainHeading: "On all products",
            description: "Save moe with coupons & up to 20% off",
            btn: headerimg1,
            btnStyle: "#088178"
        },
        {
            id: 2,
            sliderImg: slider2,
            alt: "slider2",
            title: "Hot promotions",
            heading: "Fashion Trending",
            mainHeading: "Great Collection",
            description: "Save moe with coupons & up to 20% off",
            btn: headerimg2,
            btnStyle: "#D77F7A"
        },
        {
            id: 3,
            sliderImg: slider3,
            alt: "slider3",
            title: "Trade-in Offer",
            heading: "Supper Deals From",
            mainHeading: "Manufacturer",
            description: "Clothing, Shoes, Bags, Wallets...",
            btn: headerimg3,
            btnStyle: "#63A2C1"
        },
    ]

    return (
       
            <Carousel
               showThumbs={false}
               showIndicators={true}
               autoPlay
               infinite={true}
               interval={2000}
               showStatus={false}
               showArrows={true}
               stopOnHover={true}
                >
              {
                sliderImages.map(({ id, sliderImg, alt, title, heading, mainHeading, description, btn, btnStyle }) => (
                 <div className='carousel flex  flex-wrap   grid-rows-2 md:grid-rows-1 grid-cols-12 gap-2' key={id} >
                    <div className="carouselData text-center md:text-start   w-full mt-20 md:mt-40 md:w-1/3  font-Lato my-auto">
                       <h4 className='text-1xl lg:text-2xl '>{title}</h4>
                       <h2 className='text-3xl lg:text-4xl font-bold my-2'  >{heading}</h2>
                       <h1 className='text-4xl lg:text-6xl font-bold my-2' style={{color:btnStyle}}>{mainHeading}</h1>
                       <p className="  font-spartan text-1xl my-2"> {description}</p>
                        <Link to="/" className='inline-block'>
                          <img src={btn} className='w-50 h-20' alt="header buy Btn" />
                        </Link>
                    </div>
                      <div className='sliderImg    md:mt-40 w-full  md:w-3/5 ml-auto'>
                       <img src={sliderImg} alt={alt} key={id} />
                      </div>
                 </div>

                ))
              }
            </Carousel>
    );
}

export default RSlider;
