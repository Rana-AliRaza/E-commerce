import React from 'react';
import { bannerImg } from "../../Data";
import { FaArrowRightLong } from 'react-icons/fa6';

const MutliBanner = () => {

    const multiBanner = [
        {
            id: 1,
            bannerImgs1: bannerImg.banner1,
            alt1: "banner Images",
            promotionType1: "Smart Offer",
            promotionTitle: "Save 20% on Woman Bag",

        },
        {
            id: 2,
            bannerImgs2: bannerImg.banner2,
            alt2: "banner Images",
            promotionType2: "Sale off",
            promotionTitle2: " Great Summer Collection",

        },
        {
            id: 3,
            bannerImgs3: bannerImg.banner3,
            alt2: "banner Images",
            promotionType3: "New Arrivals",
            promotionTitle3: "Shop Today's Deals & Offers",

        },
    ]
    return (
        <div className='mulitBanner py-10'>
            <div className='banners  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>

                <div className='relative w-full'>
                    <div className="bannerImg w-full h-fit">
                        <img src={bannerImg.banner1} className='h-fit' alt="banner pic 4" />
                    </div>
                    <div className="bannerDesc  absolute top-8  sm:top-4 left-4 px-4">
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

                <div className='relative w-full'>
                    <div className="bannerImg w-full h-fit">
                        <img src={bannerImg.banner2} className='h-fit' alt="banner pic 4" />
                    </div>
                    <div className="bannerDesc  absolute top-8  sm:top-4 left-4 px-4">
                        <h4 className=' font-semibold text-base text-slate-400 '>Sale off</h4>
                        <h1 className=' text-xl font-semibold w-2/3 my-2'>Great Sumer Collection</h1>
                        <a href="/" className=" inline-block transition-all group ">
                            <div className='flex  text-md   text-secondary hover:text-green-600   rounded-md ' >
                                <span>Shop Now</span>
                                <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong /> </span>
                            </div>
                        </a>
                    </div>

                </div>
                
                <div className='relative w-full block md:hidden lg:block'>
                    <div className="bannerImg w-full h-fit">
                        <img src={bannerImg.banner3} className='h-fit' alt="banner pic 4" />
                    </div>
                    <div className="bannerDesc  absolute top-8  sm:top-4 left-4 px-4">
                        <h4 className=' font-semibold text-base text-slate-400 '>New Arrivals</h4>
                        <h1 className=' text-xl font-semibold w-2/3 my-2'>Shop Today's Deals & Offers</h1>
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
    )
}

export default MutliBanner