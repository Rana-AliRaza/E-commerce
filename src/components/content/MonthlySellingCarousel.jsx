import React from 'react'
import { bannerImg } from '../../Data';
import { FaArrowRightLong } from 'react-icons/fa6';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productsImg } from "../../Data";
import { MdStarBorderPurple500 } from "react-icons/md";
import { TbShoppingBagPlus } from "react-icons/tb";
import { Tooltip } from "@mui/material";
import "../../styles/content.css";

import { thumbnails } from '../../Data';





const MonthlySellingCarousel = () => {
    const [productsType, setProductsType] = React.useState();

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1300 },
            items: 5
        },
        desktop: {
            breakpoint: { max:1150 , min: 770 },
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
    const prodBtn = [
        {
            id: 0,
            btnDes: "Featured",
        },
        {
            id: 1,
            btnDes: "Popular",
        },
        {
            id: 2,
            btnDes: "New added",
        },
    ];

    const productItems = [
        {
            id: 0,
            prodImgA: productsImg.product1A,
            prodImgB: productsImg.product1B,
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
            productType: "",
            branding: "Shirt",
            prodDes: "Mens Porcelain Shirt",
            newPrice: "$238.85",
            oldPrice: "$245.8",
            reviewPercentage: "70%",
        },
    ];

    return (
        <div className='monthlySelling w-full px-2    grid grid-cols-4 gap-2' style={{ background: '#F4F5F9' }}>
            <div className="sellingBanner  hidden md:block  col-span-0 md:col-span-1  relative  my-auto  items-center">
                <h2 className='text-2xl font-semibold px-4 mb-10'>
                    <span className="text-secondary mx-2">Monthly</span>
                      Best Sell
                </h2>
                
                <img src={bannerImg.banner9} className='rounded-2xl h-80' alt="monthly sale banner" />
                <div className="sellingBannerDes absolute top-36 left-4">
                    <h4 className='text-slate-400'>Woman Area </h4>
                    <h2 className='text-white w-2/3 text-xl my-2 transition duration-300 hover:translate-x-1'>Save 17% on Clothing</h2>
                    <a href="/" className=" inline-block transition-all group ">
                        <div className='flex text-slate-200' >
                            <span>Shop Now</span>
                            <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong /> </span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="products   py-10 col-span-4 md:col-span-3">
                <h2 className='text-2xl font-semibold px-4  inline md:hidden text-nowrap '>
                    <span className="text-secondary mx-2">Monthly</span>
                      Best Sell
                </h2>
                <div className="productsType  flex ">
                    <div className="productsTypeBtn mt-2 ml-auto pr-2 flex flex-wrap gap-4 lg:gap-2 xl:gap-4">
                        {prodBtn.map(({ btnDes, btnIndex }) => (
                            <button
                                key={btnIndex}
                                className="productBtn  px-4 py-1 md:px-8 md:py-3 font-semibold font-spartan rounded-md text-lg "
                            >
                                {btnDes}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="productCards pt-10  ">
                    <Carousel responsive={responsive}
                        infinite={true}
                        swipeable={false}
                        draggable={false}
                        autoPlay={true}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        keyBoardControl={true}
                    >
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
                            }) => (
                                <div
                                    key={id}
                                    className="productCardItems  mx-2 pb-4    rounded-3xl "
                                >
                                    <div className="productImg  p-4 w-full  relative">
                                        <img
                                            src={productsType ===false? prodImgA: prodImgB }
                                            className="w-80 h-40 rounded-2xl  "
                                            style={{ background: "#F1F1F1" }}
                                            alt="product A"
                                            onMouseEnter={()=>setProductsType(previousState=> !previousState)}
                                        />
                                        <span
                                            className="productLabel rounded-full px-3 py-1 text-white absolute top-6 left-6"
                                            style={{ backgroundColor: "#FF75A0" }}
                                        >
                                            {" "}
                                            {productType}{" "}
                                        </span>
                                    </div>
                                    <div className="productCardDes relative px-4">
                                        <a href="/" className="text-slate-500">
                                            {branding}
                                        </a>
                                        <h4 className="text-large font-medium">{prodDes}</h4>
                                        <div className="productRatingStars flex">
                                            <MdStarBorderPurple500 className="text-yellow-400  font-semibold" />
                                            <MdStarBorderPurple500 style={{ color: "#FFA600" }} />
                                            <MdStarBorderPurple500 style={{ color: "#FFA600" }} />
                                            <MdStarBorderPurple500 style={{ color: "#FFA600" }} />
                                            <MdStarBorderPurple500 style={{ color: "#FFA600" }} />
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
                    </Carousel>
                </div>
            </div>

        </div>
    )
}

export default MonthlySellingCarousel