import React from 'react';
import "../../styles/content.css";
import { bannerImg } from "../../Data";
import CalculateTime from './CalculateTime';
import { FaArrowRightLong } from "react-icons/fa6";
import "../../styles/content.css";



const DealBanner = () => {

   //  const endDate = targetTimeBanner1;
   return (
      <div className='dealBanners py-10 '>
         <div className="dealBannerItems grid  grid-cols-1 lg:grid-cols-2 gap-4  ">

            <div className='dealBanner1 overflow-y-hidden    relative'>
               <div className="dealBannerImg ">
                  <img src={bannerImg.dealBanner1} alt="deal banner" />
               </div>
               <div className="dealBannerDes   md:space-y-4 lg:space-y-0 xl:space-y-2 absolute top-12 md:top-6 lg:top-12 left-5 lg:left-6">
                  <h1 className='text-secondary text-3xl xl:text-3xl lg:text-2xl font-semibold' >Men Clothing</h1>
                  <p className='text-lg font-normal text-slate-600 font-spartan'>Formal dressing</p>
                  <h4 className='text-2xl lg:text-xl xl:text-2xl text-slate-500'>Try something new on vocation</h4>
                  <div className='flex '>
                     <span className='text-red-500 mx-2'>$178.00</span>
                     <span className='text-slate-700'>$256.99</span>
                  </div>
                  <p className='text-slate-800 font-semibold pt-2'>Hurry Up! Offer End In:</p>
                  <div className="timeEnds">
                     <CalculateTime endDate="2024-10-31T23:59:59" />
                  </div>
                  <a href="/" className=" inline-block transition-all group ">
                  <div className='flex mt-4 px-3 text-md lg:py-1 xl:py-2   rounded-md text-secondary  group-hover dealEndBtn'  >
                     <span>Shop Now</span>
                     <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong /> </span>
                  </div>
                  </a>
               </div>
            </div>

            <div className='dealBanner2  overflow-y-hidden   relative'>
               <div className="dealBannerImg">
                  <img src={bannerImg.dealBanner2} alt="deal banner" />
               </div>
               <div className="dealBannerDes   md:space-y-4 lg:space-y-0 xl:space-y-2 absolute top-12 md:top-6 lg:top-12 left-5 lg:left-6">
                  <h1 className='text-secondary text-3xl xl:text-3xl lg:text-2xl font-semibold' >Men Clothing</h1>
                  <p className='text-lg font-normal text-slate-400 font-spartan'>Office dressing</p>
                  <h4 className='text-2xl lg:text-xl xl:text-2xl text-slate-500'>Try something new on vocation</h4>
                  <div className='flex '>
                     <span className='text-red-600 font-semibold mx-2'>$178.00</span>
                     <span className='text-slate-400'>$256.99</span>
                  </div>
                  <p className='text-slate-800 font-semibold pt-2'>Hurry Up! Offer End In:</p>
                  <div className="timeEnds">
                     <CalculateTime endDate="2024-12-31T23:59:59" />
                  </div>

                  <a href="/" className=" inline-block transition-all group ">
                  <div className='flex mt-4 px-3 text-md lg:py-1 xl:py-2   rounded-md text-secondary  group-hover dealEndBtn'  >
                     <span>Shop Now</span>
                     <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong /> </span>
                  </div>
                  </a>

               </div>
            </div>
         </div>

      </div>
   )
}

export default DealBanner