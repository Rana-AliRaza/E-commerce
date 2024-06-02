import React from 'react';
import { bannerImg, blogImg } from '../../Data';
import { FaArrowRightLong } from 'react-icons/fa6';


const BlogBanner = () => {
    return (
        <div className='blogBanners py-10'>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 ">

                <div className="blogs grid-rows-1 md:grid-rows-2  gap-4">
                    <h2 className='text-2xl font-semibold my-4'>
                        <span className='text-secondary mx-2'>From</span>
                        blog
                    </h2>

                    <div className="blog1 grid  grid-cols-3 gap-2 py-2">
                        <div className="flex col-span-1">
                            <img src={blogImg.blog2} alt="blogImage 1" />
                        </div>
                        <div className="blogDes1  col-span-3 md:col-span-2">
                            <a href="/">
                                <h4 className='text-secondary px-4 pb-2 font-semibold'>Fashion</h4>
                                <p className='px-2'> Qualcomm is developing a Nintendo Switch-like console, report says</p>
                            </a>
                            <div className='flex text-slate-500 gap-2 mt-6'>
                                <p>14 April 2022 </p>
                                <ul className='list-disc pl-6'>
                                    <li> 12M Views</li>
                                </ul>
                                <a href="/" className='text-secondary ml-auto px-2'>Read More</a>
                            </div>
                        </div>

                    </div>

                    <div className="blog2 grid  grid-cols-3 gap-2 py-2">
                        <div className="flex col-span-1">
                            <img src={blogImg.blog1} alt="blogImage 1" />
                        </div>
                        <div className="blogDes1 col-span-3 md:col-span-2">
                            <a href="/">
                                <h4 className='text-secondary px-4 pb-2 font-semibold'>Healthy</h4>
                                <p className='px-2'> Not even the coronavirus can derail 5G's global momentum.</p>
                            </a>
                            <div className='flex text-slate-500 gap-2 mt-6'>
                                <p>14 April 2022 </p>
                                <ul className='list-disc pl-6'>
                                    <li> 12M Views</li>
                                </ul>
                                <a href="/" className='text-secondary ml-auto px-2'>Read More</a>
                            </div>
                        </div>

                    </div>


                </div>

                <div className="blogBanner grid  grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="blogBanner1 relative">

                        <div className="flex">
                            <img src={bannerImg.banner5}  alt="blog Banner 5" />
                        </div>
                        <div className="bannerDesc  absolute lg:top-16  top-6 left-6 px-4">
                            <h4 className=' font-semibold text-base text-slate-400 '>Accessories</h4>
                            <h1 className=' text-xl font-semibold w-2/3 my-2'>Save 17% on Autumn Hat</h1>
                            <a href="/" className=" inline-block transition-all group ">
                                <div className='flex  text-md   text-secondary hover:text-green-600   rounded-md ' >
                                    <span>Shop Now</span>
                                    <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong /> </span>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div className="blogBanner2 flex flex-col gap-4">

                        <div className="blogBanner2A relative ">

                            <div className="flex">
                                <img src={bannerImg.banner6} alt="blog Banner 5" />
                            </div>
                            <div className="bannerDesc  absolute lg:top-6  top-4 left-2 px-2">
                                <h4 className=' font-semibold text-base text-slate-400 '>Big Offer</h4>
                                <h1 className=' text-lg font-semibold w-2/3 my-1'>Save 20% on Women's </h1>
                                <a href="/" className=" inline-block transition-all group ">
                                    <div className='flex    text-secondary hover:text-green-600   rounded-md ' >
                                        <span>Shop Now</span>
                                        <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong /> </span>
                                    </div>
                                </a>
                            </div>

                        </div>

                       <div className="blogBanner2B relative">

                        <div className="flex">
                            <img src={bannerImg.banner7} alt="blog Banner 5" />
                        </div>
                        <div className="bannerDesc  absolute lg:top-6  left-10 top-4 right-0 ml-32  ">
                            <h4 className=' font-semibold text-base text-slate-400 '>smart Offer</h4>
                            <h1 className=' text-xl font-semibold w-3/5  my-2'>Save 20% on Eardrop</h1>
                            <a href="/" className=" inline-block transition-all group ">
                                <div className='flex  text-md   text-secondary hover:text-green-600   rounded-md ' >
                                    <span>Shop Now</span>
                                    <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong /> </span>
                                </div>
                            </a>
                        </div>

                       </div>

                    </div>

                </div>



            </div>
            
        </div>
    )
}

export default BlogBanner