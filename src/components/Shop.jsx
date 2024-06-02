import React, { useState } from 'react';
import PathBar from './PathBar';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCheck } from "react-icons/md";
import { TbSortDescending2 } from "react-icons/tb";
import { CiGrid41 } from "react-icons/ci";
import { HiMiniStar } from "react-icons/hi2";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { PiShuffleAngularFill } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { productsImg } from "../Data";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import MultiRangeSlider from "multi-range-slider-react";
import { CiFilter } from "react-icons/ci";
import { RiStarHalfLine } from "react-icons/ri";
import img6 from "../assets/pics/banner-11.jpg";
import { FaArrowRightLong } from 'react-icons/fa6';

import { Tooltip } from "@mui/material";
import { thumbnails } from '../Data.jsx';
import { Link } from "react-router-dom";


const Shop = () => {
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);

    const [productsType, setProductsType] = React.useState();
    const [showBtn, setShowBtn] = React.useState(true);
    const [featureBtn, setFeatureBtn] = React.useState(true);
    const pathElement = <>
        <span className='flex'>
            <span className='mx-2 flex items-center'>
                <MdOutlineKeyboardArrowRight />
            </span>
            Shop

        </span>
    </>
    const productItems = [
        {
            id: 0,
            prodImgA: productsImg.product1A,
            prodImgB: productsImg.product1B,
            newItems: thumbnails.thumbnail1,
            productType: "Hot",
            branding: "Clothing",
            prodDes: "Colorful Pattern Shirts",
            newPrice: "$238.85",
            oldPrice: "$245.8",
            reviewPercentage: "90%",
        },
        {
            id: 1,
            prodImgA: productsImg.product2A,
            prodImgB: productsImg.product2B,
            newItems: thumbnails.thumbnail2,
            productType: "New",
            branding: "Clothing",
            prodDes: " Plain Color  Pocket Shirts",
            newPrice: "$138.85",
            oldPrice: "$225.8",
            reviewPercentage: "50%",
        },
        {
            id: 2,
            prodImgA: productsImg.product3A,
            prodImgB: productsImg.product3B,
            newItems: thumbnails.thumbnail3,
            productType: "Best Sell",
            branding: "Shirts",
            prodDes: "Vintage Floral Oil Shirts",
            newPrice: "$338.85",
            oldPrice: "$445.8",
            reviewPercentage: "95%",
        },
        {
            id: 3,
            prodImgA: productsImg.product4A,
            prodImgB: productsImg.product4B,
            newItems: thumbnails.thumbnail4,
            productType: "Sale",
            branding: "Clothing",
            prodDes: "Colorful Hawaiian Shirts",
            newPrice: "$133.85",
            oldPrice: "$235.8",
            reviewPercentage: "70%",
        },
        {
            id: 4,
            prodImgA: productsImg.product5A,
            prodImgB: productsImg.product5B,
            newItems: thumbnails.thumbnail5,
            productType: "-30%",
            branding: "Shirt",
            prodDes: "Flowers Sleeve Lapel  Shirt",
            newPrice: "$28.85",
            oldPrice: "$45.8",
            reviewPercentage: "70%",
        },
        {
            id: 5,
            prodImgA: productsImg.product6A,
            prodImgB: productsImg.product6B,
            newItems: thumbnails.thumbnail6,
            productType: "-22%",
            branding: "Shirts",
            prodDes: "Ethnic  Floral Casual Shirts",
            newPrice: "$238.85",
            oldPrice: "$245.8",
            reviewPercentage: "70%",
        },
        {
            id: 6,
            prodImgA: productsImg.product1A,
            prodImgB: productsImg.product2B,
            newItems: thumbnails.thumbnail7,
            productType: "New",
            branding: "Shoes",
            prodDes: "Colorful Pattern Shirts",
            newPrice: "$238.85",
            oldPrice: "$245.8",
            reviewPercentage: "90%",
        },
        {
            id: 7,
            prodImgA: productsImg.product8A,
            prodImgB: productsImg.product8B,
            newItems: thumbnails.thumbnail8,
            productType: "",
            branding: "Shirt",
            prodDes: "Mens Porcelain Shirt",
            newPrice: "$238.85",
            oldPrice: "$245.8",
            reviewPercentage: "70%",
        },
        {
            id: 8,
            prodImgA: productsImg.product1A,
            prodImgB: productsImg.product2B,
            newItems: thumbnails.thumbnail7,
            productType: "New",
            branding: "Shoes",
            prodDes: "Colorful Pattern Shirts",
            newPrice: "$238.85",
            oldPrice: "$245.8",
            reviewPercentage: "90%",
        },
        {
            id: 9,
            prodImgA: productsImg.product4A,
            prodImgB: productsImg.product4B,
            newItems: thumbnails.thumbnail4,
            productType: "Sale",
            branding: "Clothing",
            prodDes: "Colorful Hawaiian Shirts",
            newPrice: "$133.85",
            oldPrice: "$235.8",
            reviewPercentage: "70%",
        },
        {
            id: 10,
            prodImgA: productsImg.product1A,
            prodImgB: productsImg.product1B,
            newItems: thumbnails.thumbnail1,
            productType: "Hot",
            branding: "Clothing",
            prodDes: "Colorful Pattern Shirts",
            newPrice: "$238.85",
            oldPrice: "$245.8",
            reviewPercentage: "90%",
        },
        {
            id: 11,
            prodImgA: productsImg.product5A,
            prodImgB: productsImg.product5B,
            newItems: thumbnails.thumbnail5,
            productType: "-30%",
            branding: "Shirt",
            prodDes: "Flowers Sleeve Lapel  Shirt",
            newPrice: "$28.85",
            oldPrice: "$45.8",
            reviewPercentage: "70%",
        },
    ];
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    return (
        <div className='shopSection px-2    w-11/12 sm:w-4/5 lg:w-11/12 xl:w-10/12 lg:px-2 xl:px-4 mx-auto'>
            <PathBar path={pathElement} />
            <div className="shop  py-10 grid grid-cols-12 gap-4">
                <div className="contentBar col-span-12 lg:col-span-9 py-4 pr-3 ">
                    <div className="productFilter flex flex-wrap m-2 justify-between">
                        <h4>
                            We found
                            <span className='text-secondary text-xl font-semibold '> 688 </span>
                            items for You!
                        </h4>
                        <div className="filterBtns  gap-2 flex text-gray-500">
                            <div className="showBtn">
                                <button onClick={() => setShowBtn(!showBtn)} className='flex items-center justify-center py-2 px-4 gap-2 border border-gray-200 rounded-full' style={{ background: "#F7F8F9" }}>
                                    <span>
                                        <CiGrid41 />
                                    </span>
                                    <span className=''> Show: </span>
                                    <IoIosArrowDown />
                                </button>
                                <div className={`${showBtn ? " hidden" : "block"} bg-white shadow-md rounded-lg  py-4 text-gray-600 w-full pl-2 mt-1  top-2`}  >
                                    <li className='flex group hover:bg-secondary p-2' >
                                        <span className='text-secondary group-hover:text-white '> <MdOutlineCheck /> </span>
                                        <span className='group-hover:text-white group-hover:font-semibold mx-2'> 50</span>
                                    </li>
                                    <li className='flex group hover:bg-secondary pl-4 p-2' >
                                        <span className='group-hover:text-white group-hover:font-semibold mx-2'> 100</span>
                                    </li>
                                    <li className='flex group hover:bg-secondary p-2 pl-4' >
                                        <span className='group-hover:text-white group-hover:font-semibold mx-2'> 150 </span>
                                    </li>
                                    <li className='flex group hover:bg-secondary p-2 pl-4' >
                                        <span className='group-hover:text-white group-hover:font-semibold mx-2'> 200 </span>
                                    </li>
                                    <li className='flex group hover:bg-secondary p-2 pl-4' >
                                        <span className='group-hover:text-white group-hover:font-semibold mx-2'> All </span>
                                    </li>
                                </div>
                            </div>
                            <div className="featureBtn ">
                                <button onClick={() => setFeatureBtn(!featureBtn)} className='flex items-center justify-center py-2 px-4 gap-2 border border-gray-200 rounded-full' style={{ background: "#F7F8F9" }}>
                                    <span>
                                        <TbSortDescending2 />
                                    </span>
                                    <span className=''> Sort by: Featured </span>
                                    <IoIosArrowDown />
                                </button>
                                <div className={`${featureBtn ? " hidden" : "block"} bg-white shadow-md rounded-lg  py-4 text-gray-600 w-full pl-2 mt-1  top-2`}  >
                                    <li className='flex group hover:bg-secondary p-2' >
                                        <span className='text-secondary group-hover:text-white '> <MdOutlineCheck /> </span>
                                        <span className='group-hover:text-white group-hover:font-semibold mx-2'> Featured</span>
                                    </li>
                                    <li className='flex group hover:bg-secondary pl-4 p-2' >
                                        <span className='group-hover:text-white group-hover:font-semibold mx-2'> Price: Low to High</span>
                                    </li>
                                    <li className='flex group hover:bg-secondary p-2 pl-4' >
                                        <span className='group-hover:text-white group-hover:font-semibold mx-2'> Price: Hight to Low </span>
                                    </li>
                                    <li className='flex group hover:bg-secondary p-2 pl-4' >
                                        <span className='group-hover:text-white group-hover:font-semibold mx-2'> Release Date </span>
                                    </li>
                                    <li className='flex group hover:bg-secondary p-2 pl-4' >
                                        <span className='group-hover:text-white group-hover:font-semibold mx-2'> Avg. Rating </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productCards py-10 grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3    ">
                        {productItems.map(
                            ({
                                id,
                                prodImgA,
                                prodImgB,
                                productType,
                                branding,
                                prodDes,
                                newPrice,
                                oldPrice,
                                reviewPercentage,
                                newItems
                            }) => (
                                <div
                                    key={id}
                                    className="productCardItems  relative    h-96 p-2    rounded-3xl "
                                >
                                    <div className="productImg group  w-full  relative   p-4">
                                        <div className=" rounded-2xl overflow-hidden">
                                            <img
                                                src={productsType === false ? prodImgA : prodImgB}
                                                className="w-80 h-60  transition-transform duration-500  hover:scale-105"
                                                onMouseEnter={(id) => setProductsType((previousState) => !previousState)}


                                                style={{ background: "#F1F1F1" }}
                                                alt="product A"

                                            />
                                        </div>
                                        <div className="flex flex-wrap invisible group-hover:visible gap-4 absolute top-28 left-10">
                                            <Tooltip
                                                title="Quick View"
                                                arrow
                                                placement="top"
                                                className=" transform transition-transform hover:scale-110 hover:-translate-y-1 bg-green-200 group hover:bg-secondary"
                                            >
                                                <span className="rounded-full p-3 cartIcon hover:text-gray-100  text-secondary">
                                                    <IoIosSearch />
                                                </span>
                                            </Tooltip>
                                            <Tooltip
                                                title="Add to Wishlist"
                                                arrow
                                                placement="top"
                                                className=" transform transition-transform hover:scale-110 hover:-translate-y-1 bg-green-200 group hover:bg-secondary"
                                            >
                                                <span className="rounded-full p-3 cartIcon hover:text-gray-100  text-secondary">
                                                    <IoIosHeartEmpty />
                                                </span>
                                            </Tooltip>
                                            <Tooltip
                                                title="compare"
                                                arrow
                                                placement="top"
                                                className=" transform transition-transform hover:scale-110 hover:-translate-y-1 bg-green-200 group hover:bg-secondary"
                                            >
                                                <span className="rounded-full p-3 cartIcon hover:text-gray-100  text-secondary">
                                                    <PiShuffleAngularFill />
                                                </span>
                                            </Tooltip>

                                        </div>
                                        <span
                                            className="productLabel rounded-full px-3 py-1 text-white absolute top-6 left-6"
                                            style={{ backgroundColor: "#FF75A0" }}
                                        >
                                            {" "}
                                            {productType}{" "}
                                        </span>
                                    </div>
                                    <div className="productCardDes relative px-4">
                                        <Link to="/" className="text-slate-500">
                                            {branding}
                                        </Link>
                                        <h4 className="text-large font-medium">{prodDes}</h4>
                                        <div className="productRatingStars flex">
                                            <HiMiniStar className="text-yellow-400  font-semibold" />
                                            <HiMiniStar style={{ color: "#FFA600" }} />
                                            <HiMiniStar style={{ color: "#FFA600" }} />
                                            <HiMiniStar style={{ color: "#FFA600" }} />
                                            <HiMiniStar style={{ color: "#FFA600" }} />
                                            <span className="text-sm text-slate-800 ml-1">
                                                {reviewPercentage}
                                            </span>
                                        </div>
                                        <div className=" productRates flex gap-4">
                                            <h4 className="font-semibold text-lg text-secondary">
                                                {newPrice}
                                            </h4>
                                            <span className="line-through text-slate-500">
                                                {oldPrice}
                                            </span>
                                            <Tooltip
                                                title="Add to Cart"
                                                arrow
                                                placement="top"
                                                className=" transform transition-transform hover:-translate-y-1"
                                            >
                                                <span className="rounded-full p-3 cartIcon  ">
                                                    <TbShoppingBagPlus />
                                                </span>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    {/* FF75A0 */}
                                </div>
                            )
                        )}
                    </div>
                    <div className="pagesNo">
                        <Link to="/shop">
                            <span className='p-2 bg-secondary font-semibold rounded-md text-white'> 01 </span>
                        </Link>
                        <span className='p-2 mx-1 text-gray-600 hover:bg-secondary hover:font-semibold rounded-md hover:text-white'> 02 </span>
                        <span className='p-2 mx-1 text-gray-600 hover:bg-secondary hover:font-semibold rounded-md hover:text-white'> 03 </span>
                        <span className='p-2 mx-1 text-gray-600 hover:bg-secondary hover:font-semibold rounded-md hover:text-white'> ... </span>
                        <span className='p-2 mx-1 text-gray-600 hover:bg-secondary hover:font-semibold rounded-md hover:text-white'> 16 </span>
                        <span className='p-2 inline mx-1 text-gray-600 hover:bg-secondary rounded-s-md rounded-e-full hover:font-semibold rounded-md hover:text-white'>
                            <RiArrowRightDoubleLine className='w-4 h-4 inline' />
                        </span>
                    </div>
                </div>
                <div className="lg:col-span-3 col-span-12 px-3 lg:mt-8">
                    <div className="categories border border-gray-300 px-3">
                        <h4 className='text-xl py-2 pt-4  border-b border-gray-300 mt-3'> Categories </h4>
                        <span className=' flex w-14 border border-secondary'></span>
                        <ul className='pl-4 mt-3 text-gray-600'>
                            <li className='py-2 flex justify-between  items-center'>
                                <Link to="/technology" className='hover:text-secondary transform-translate hover:translate-x-1 duration-300'> Beauty </Link>              </li>
                            <li className='py-2 flex justify-between  items-center'>
                                <Link to="/technology" className='hover:text-secondary transform-translate hover:translate-x-1 duration-300'> Book </Link>              </li>
                            <li className='py-2 flex justify-between   items-center'>
                                <Link to="/technology" className='hover:text-secondary transform-translate hover:translate-x-1 duration-300'> Design </Link>              </li>
                            <li className='py-2 flex justify-between   items-center'>
                                <Link to="/technology" className='hover:text-secondary transform-translate hover:translate-x-1 duration-300'> Fashion </Link>
                            </li>
                            <li className='py-2 flex justify-between   items-center'>
                                <Link to="/technology" className='hover:text-secondary transform-translate hover:translate-x-1 duration-300'> LifeStyle</Link>
                            </li>
                            <li className='py-2 flex justify-between   items-center'>
                                <Link to="/technology" className='hover:text-secondary transform-translate hover:translate-x-1 duration-300'> Travel </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="price mt-4 py-2 border border-gray-300 px-3">
                        <h4 className='text-xl py-2   border-b border-gray-300 mt-3'> FILL BY PRICE </h4>
                        <div className="">
                            <MultiRangeSlider
                                min={16}
                                max={400}
                                label={false}
                                ruler={false}
                                barRightColor='#088178'
                                barInnerColor='black'
                                barLeftColor='#088178'
                                thumbLeftColor='#088178'
                                thumbRightColor='#088178'
                                minValue={minValue}
                                maxValue={maxValue}
                                onInput={(e) => {
                                    handleInput(e);
                                }}
                                style={{ boxShadow: "none", border: "none", height: "2px" }}
                            />
                            <h4> <span className="block text-gray-600"> Range: </span>
                                <span className='text-gray-800'>${minValue} -  ${maxValue}</span>
                            </h4>
                            <div className="color mt-4">
                                <h4 className='font-semibold pb-3  text-gray-600 text-lg'> Color </h4>
                                <p className='py-1'>
                                    <input type="checkbox" className='w-4 h-4' name="red" />
                                    <label htmlFor="red" className='text-gray-600 pl-2 '>Red(56)</label>
                                </p>
                                <p className='py-1'>
                                    <input type="checkbox" className='w-4 h-4' name="green" />
                                    <label htmlFor="green" className='text-gray-600 pl-2'>Green(78)</label>
                                </p>
                                <p className='py-1'>
                                    <input type="checkbox" className='w-4 h-4' name="blue" />
                                    <label htmlFor="blue" className='text-gray-600 pl-2'>blue(54)</label>
                                </p>

                                <h4 className='font-semibold py-3 mt-2  text-gray-600 text-lg'> Item Condition </h4>
                                <p className='py-1'>
                                    <input type="checkbox" className='w-4 h-4' name="red" />
                                    <label htmlFor="red" className='text-gray-600 pl-2 '>Red(56)</label>
                                </p>
                                <p className='py-1'>
                                    <input type="checkbox" className='w-4 h-4' name="green" />
                                    <label htmlFor="green" className='text-gray-600 pl-2'>Green(78)</label>
                                </p>
                                <p className='py-1'>
                                    <input type="checkbox" className='w-4 h-4' name="blue" />
                                    <label htmlFor="blue" className='text-gray-600 pl-2'>blue(54)</label>
                                </p>
                            </div>
                            <button className="flex items-baseline my-4 mt-4 bg-secondary duration-300 gap-2 px-8 py-2 text-white rounded-md hover:bg-hoverBtnColor translate hover:translate-x-1">
                                <CiFilter className='text-white font-semibold' />
                                <span>
                                    Filter
                                </span>
                            </button>

                        </div>
                    </div>
                    <div className="products mt-4 p-4 border border-gray-300 w-full">
                        <h4 className='py-3 text-black font-medium  border-b  border-gray-300'>NEW PRODUCTS</h4>
                        <div className="productsItems p-2 py-2">
                            <div className="product1 py-2 flex gap-2">
                                <div className="productImg rounded-md w-20 h-20">
                                    <img src={thumbnails.thumbnail1} alt="thumbnails " />
                                </div>
                                <div>
                                    <h4 className='text-base text-secondary '> Chen Cardigan </h4>
                                    <p className='text-gray-600'> $99.50</p>
                                    <div className="productRatingStars flex">
                                        <HiMiniStar style={{ color: "#FFA600" }} />
                                        <HiMiniStar style={{ color: "#FFA600" }} />
                                        <HiMiniStar style={{ color: "#FFA600" }} />
                                        <HiMiniStar style={{ color: "#FFA600" }} />
                                        <RiStarHalfLine style={{ color: "#FFA600" }} />
                                        <span className="text-sm text-slate-800 ml-1">

                                        </span>
                                    </div>                                </div>
                            </div>
                            <div className="product2 py-2 flex gap-2">
                                <div className="productImg rounded-md w-20 h-20">
                                    <img src={thumbnails.thumbnail2} alt="thumbnails " />
                                </div>
                                <div>
                                    <h4 className='text-base text-secondary '> Chen Sweater </h4>
                                    <p className='text-gray-600'> $89.50</p>
                                    <div className="productRatingStars flex">
                                        <HiMiniStar style={{ color: "#FFA600" }} />
                                        <HiMiniStar style={{ color: "#FFA600" }} />
                                        <HiMiniStar style={{ color: "#FFA600" }} />
                                        <HiMiniStar style={{ color: "#FFA600" }} />
                                        <RiStarHalfLine style={{ color: "#FFA600" }} />
                                        <span className="text-sm text-slate-800 ml-1">

                                        </span>
                                    </div>                                </div>
                            </div>
                            <div className="product1 py-3 flex gap-2">
                                <div className="productImg rounded-md w-20 h-20">
                                    <img src={thumbnails.thumbnail1} alt="thumbnails " />
                                </div>
                                <div>
                                    <h4 className='text-base text-secondary '> Color jacket </h4>
                                    <p className='text-gray-600'> $25</p>
                                    <div className="productRatingStars flex">
                                        <HiMiniStar style={{ color: "#FFA600" }} />
                                        <HiMiniStar style={{ color: "#FFA600" }} />
                                        <HiMiniStar style={{ color: "#FFA600" }} />
                                        <HiMiniStar style={{ color: "#FFA600" }} />
                                        <RiStarHalfLine style={{ color: "#FFA600" }} />
                                        <span className="text-sm text-slate-800 ml-1">

                                        </span>
                                    </div>                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="purchaseBanner hidden lg:block w-full mt-8 relative">
                        <img src={img6} className='rounded-sm  px-2 w-full' alt="monthly sale banner" />
                        <div className="sellingBannerDes absolute top-16 left-4">
                            <h4 className='text-slate-600'>Woman Zone </h4>
                            <h2 className=' text-black w-2/3 text-xl my-2 transition duration-300 hover:translate-x-1'>Save 17% on Clothing</h2>
                            <Link to="/" className=" inline-block transition-all group ">
                                <div className='flex text-sm text-secondary' >
                                    <span>Shop Now</span>
                                    <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong className='text-sm' /> </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Shop