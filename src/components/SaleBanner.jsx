import React from 'react';
import "../styles/header.css";
import banner from "../assets/pics/promoBannerr.jpg";
import CalculateTime from './content/CalculateTime';
import { FaArrowRightLong } from 'react-icons/fa6';

const SaleBanner = () => {
  return (
    <div className='border promoBanner mx-auto mt-28' style={{ width: "900px", height: "500px"}} >
         {/* <div className="banner relative p-2 ">
            <div className="bannerImg px-20 ">
              <img src={banner} className=' w-[60%] h-[60%]' alt="banner" />
            </div>
            <div className="bannerDes">
              <h2 className='text-secondary text-4xl'> Deal of the Day</h2>
              <p>Limited quantities</p>
              <h4 className='my-4'>Summer Collection New 
                <span className='block'>Morden Design</span> </h4>
               
            </div>
            
         </div> */}
            <div className='dealBanner1     relative'>
               <div className="dealBannerImg " style={{ height:"500px"}} >
                  <img src={banner} className=' h-full w-full rounded-lg'  alt="deal banner" />
               </div>
               <div className="dealBannerDes   md:space-y-4 lg:space-y-0 xl:space-y-2 absolute top-12 md:top-6 lg:top-12 left-5 lg:left-6">
                  <h1 className='text-secondary text-3xl xl:text-3xl lg:text-2xl font-semibold' >Deal of the Day</h1>
                  <p className='text-lg font-normal text-slate-600 font-spartan'>Limited quantities</p>
                  <h4 className='text-2xl lg:text-xl xl:text-2xl text-slate-500'>Summer Collection 
                  <span className='block'>New Mordern Design</span></h4>
                  <div className='flex '>
                     <span className='text-red-500 mx-2'>$139.00</span>
                     <span className='text-slate-700'>$160.99</span>
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
        
    </div>
  )
}

export default SaleBanner