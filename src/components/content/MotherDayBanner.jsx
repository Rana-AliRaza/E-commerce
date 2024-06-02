import React from 'react'
import { bannerImg } from "../../Data";
import { FaArrowRightLong } from "react-icons/fa6";
import "../../styles/content.css";

const MotherDayBanner = () => {
  return (
    <div className='banners  '>
    <div className='  relative w-full'>
      <div className="bannerIm w-full h-auto">
          <img src={bannerImg.banner8} className='w-full h-80' alt="banner pic 4" />
      </div>
      <div className="bannerDesc  absolute top-10 left-8 lg:left-20 ">
          <h4 className='text-secondary font-semibold text-lg my-2  '>Shop Today's Deals</h4>
          <h2 className='text-2xl lg:3xl xl:text-4xl font-semibold my-2'>
            Big Sale Up to 40%
          </h2>
      </div>
      
    </div>
  </div>
  )
}

export default MotherDayBanner