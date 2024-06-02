import React from 'react'
import { bannerImg } from "../../Data";
import { FaArrowRightLong } from "react-icons/fa6";
import "../../styles/content.css";



const Banner = () => {

  return (
    <div className='banners  '>
      <div className='  relative'>
        <div className="bannerIm w-full h-auto">
            <img src={bannerImg.banner4} alt="banner pic 4" />
        </div>
        <div className="bannerDesc hidden md:block absolute top-10 left-8 lg:left-20 w-5/12">
            <h4 className='text-secondary font-semibold text-lg  lg:my-1 xl:my-2'>Repair Services</h4>
            <h1 className='text-2xl lg:3xl xl:text-4xl font-semibold my-2'>We're an Apple Authorised Services Provider</h1>
            <a href="/" className=" inline-block transition-all group ">
            <div className='flex mt-4 px-3 text-md lg:py-1 xl:py-2   text-white rounded-md bannerBtn' >
              <span>Learn More</span>
              <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong/> </span>
            </div>
            </a>
        </div>
        
      </div>
    </div>
  )
}

export default Banner