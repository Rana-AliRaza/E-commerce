import React from 'react';
import { bannerImg, thumbnails } from "../../Data";
import { FaArrowRightLong } from 'react-icons/fa6';
import "../../styles/content.css";

const OverviewProducts = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">

             <div className="overviewBanner">
             <div className='relative w-full'>
                    <div className="bannerImg w-full h-fit">
                        <img src={bannerImg.banner10} className='h-fit' alt="banner pic 4" />
                    </div>
                    <div className="bannerDesc  absolute top-12  left-4 px-2">
                        <h4 className=' font-semibold text-base text-slate-400 '>Repair Services</h4>
                        <h1 className=' text-xl font-semibold w-2/3 my-2'>We're an Apple Authorised Services Provider</h1>
                        <a href="/" className=" inline-block transition-all group ">
                            <div className='flex  text-md   text-secondary hover:text-green-600   rounded-md ' >
                                <span>Shop Now</span>
                                <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong /> </span>
                            </div>
                        </a>
                    </div>

                </div>
             </div>

            <div className="dealOutlets ">
                <h4 className=' font-semibold text-xl dealsHeading text-slate-800 mb-2'>
                    Deals & Outlets
                    <span className='w-12 dealsOutletBorder  block'> </span>
                </h4>

                <div className="dealsProducts grid grid-cols-1 md:grid-cols-3  pt-4">
                    <div className="dealProductImg lg:col-span-1">
                        <img src={thumbnails.thumbnail1} className='rounded-md' alt="" />
                    </div>
                    <div className="dealsProductsDes col-span-2 pl-6 text-slate-700">
                        <h4>Brown handi Bag</h4>
                         <p>hand bag</p>
                         <div className=' mt-4'>
                            <span className='text-secondary text-xl'> $238.8</span>
                            <span className='line-through mx-2 text-slate-500'> $245.8</span>
                         </div>
                    </div>


                </div>
                <div className="dealsProducts grid grid-cols-1 md:grid-cols-3  py-2">
                    <div className="dealProductImg lg:col-span-1">
                        <img src={thumbnails.thumbnail2} className='rounded-md' alt="" />
                    </div>
                    <div className="dealsProductsDes col-span-2 pl-6 text-slate-700">
                        <h4>Vintage Floral Print </h4>
                         <p>T-Shirt</p>
                         <div className=' mt-4'>
                            <span className='text-secondary text-xl'> $238.8</span>
                            <span className='line-through mx-2 text-slate-500'> $245.8</span>
                         </div>
                    </div>


                </div>
                <div className="dealsProducts grid grid-cols-1 md:grid-cols-3  py-2">
                    <div className="dealProductImg lg:col-span-1">
                        <img src={thumbnails.thumbnail3} className='rounded-md' alt="" />
                    </div>
                    <div className="dealsProductsDes col-span-2 pl-6 text-slate-700">
                        <h4>Brown handi Bag</h4>
                         <p>hand bag</p>
                         <div className=' mt-4'>
                            <span className='text-secondary text-xl'> $238.8</span>
                            <span className='line-through mx-2 text-slate-500'> $245.8</span>
                         </div>
                    </div>


                </div>
            </div>

            <div className="dealOutlets ">
                <h4 className=' font-semibold text-xl dealsHeading text-slate-800 mb-2'>
                    Top Selling
                    <span className='w-12 dealsOutletBorder  block'> </span>
                </h4>

                <div className="dealsProducts grid grid-cols-1 md:grid-cols-3  pt-4">
                    <div className="dealProductImg lg:col-span-1">
                        <img src={thumbnails.thumbnail4} className='rounded-md' alt="" />
                    </div>
                    <div className="dealsProductsDes col-span-2 pl-6 text-slate-700">
                        <h4>Brown handi Bag</h4>
                         <p>hand bag</p>
                         <div className=' mt-4'>
                            <span className='text-secondary text-xl'> $238.8</span>
                            <span className='line-through mx-2 text-slate-500'> $245.8</span>
                         </div>
                    </div>


                </div>
                <div className="dealsProducts grid grid-cols-1 md:grid-cols-3  py-2">
                    <div className="dealProductImg lg:col-span-1">
                        <img src={thumbnails.thumbnail5} className='rounded-md' alt="" />
                    </div>
                    <div className="dealsProductsDes col-span-2 pl-6 text-slate-700">
                        <h4>Vintage Floral Print </h4>
                         <p>T-Shirt</p>
                         <div className=' mt-4'>
                            <span className='text-secondary text-xl'> $238.8</span>
                            <span className='line-through mx-2 text-slate-500'> $245.8</span>
                         </div>
                    </div>


                </div>
                <div className="dealsProducts grid grid-cols-1 md:grid-cols-3  py-2">
                    <div className="dealProductImg lg:col-span-1">
                        <img src={thumbnails.thumbnail6} className='rounded-md' alt="" />
                    </div>
                    <div className="dealsProductsDes col-span-2 pl-6 text-slate-700">
                        <h4>Brown hand Bag</h4>
                         <p>hand bag</p>
                         <div className=' mt-4'>
                            <span className='text-secondary text-xl'> $238.8</span>
                            <span className='line-through mx-2 text-slate-500'> $245.8</span>
                         </div>
                    </div>


                </div>
            </div>

            <div className="dealOutlets ">
                <h4 className=' font-semibold text-xl dealsHeading text-slate-800 mb-2'>
                    Hot  Releases
                    <span className='w-12 dealsOutletBorder  block'> </span>
                </h4>

                <div className="dealsProducts grid grid-cols-1 md:grid-cols-3  pt-4">
                    <div className="dealProductImg lg:col-span-1">
                        <img src={thumbnails.thumbnail7} className='rounded-md' alt="" />
                    </div>
                    <div className="dealsProductsDes col-span-2 pl-6 text-slate-700">
                        <h4>Mens Porcelain </h4>
                         <p>Shirt</p>
                         <div className=' mt-4'>
                            <span className='text-secondary text-xl'> $224.8</span>
                            <span className='line-through mx-2 text-slate-500'> $240.6</span>
                         </div>
                    </div>


                </div>
                <div className="dealsProducts grid grid-cols-1 md:grid-cols-3  py-2">
                    <div className="dealProductImg lg:col-span-1">
                        <img src={thumbnails.thumbnail8} className='rounded-md' alt="" />
                    </div>
                    <div className="dealsProductsDes col-span-2 pl-6 text-slate-700">
                        <h4>Floral Print Casual   </h4>
                         <p>Dress</p>
                         <div className=' mt-4'>
                            <span className='text-secondary text-xl'> $248.8</span>
                            <span className='line-through mx-2 text-slate-500'> $255.3</span>
                         </div>
                    </div>


                </div>
                <div className="dealsProducts grid grid-cols-1 md:grid-cols-3  py-2">
                    <div className="dealProductImg lg:col-span-1">
                        <img src={thumbnails.thumbnail9} className='rounded-md' alt="" />
                    </div>
                    <div className="dealsProductsDes col-span-2 pl-6 text-slate-700">
                        <h4>Brown handi Bag</h4>
                         <p>hand bag</p>
                         <div className=' mt-4'>
                            <span className='text-secondary text-xl'> $238.8</span>
                            <span className='line-through mx-2 text-slate-500'> $245.8</span>
                         </div>
                    </div>


                </div>
            </div>

        </div>
    </div>
  )
}

export default OverviewProducts