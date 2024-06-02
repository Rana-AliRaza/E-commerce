import React, { useState } from "react";
import "../../styles/content.css";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { thumbnails } from '../../Data';


import { productsImg } from "../../Data";

import { MdStarBorderPurple500 } from "react-icons/md";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { PiShuffleAngularFill } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

import { Tooltip } from "@mui/material";

const Products = () => {
  const [productsType, setProductsType] = useState();

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
  ];
  return (
    <div className="products    py-10 ">
      <div className="productsType w-full flex ">
        <div className="productsTypeBtn flex flex-wrap gap-4">
          {prodBtn.map(({ btnDes, btnIndex }) => (
            <button
              key={btnIndex}
              className="productBtn  px-4 py-1 md:px-8 md:py-3 font-semibold font-spartan rounded-md text-lg  hover:-translate-y-2"
              >

              {btnDes}

            </button>
          ))}
        </div>

        <div className="productMoreLink ml-auto hidden  lg:block">
          <Link
            className="flex font-semibold transition-all group"
            to="/"
            style={{ color: "#088178" }}
          >
            <span>View More</span>
            <span className="flex items-center  transition-transform duration-300 group-hover:translate-x-2">
              {" "}
              <RiArrowRightDoubleLine />
            </span>
          </Link>
        </div>
      </div>

      <div className="productCards py-10 grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   ">
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
                <div className=" rounded-2xl overflow-hidden" >
                  <Link to="/shop">
                  <img 
                    src={productsType === false?  prodImgA : prodImgB  }
                  className="w-80 h-60  transition-transform duration-500  hover:scale-105"
                  onMouseEnter={ (id)=> setProductsType((previousState)=> !previousState)}


                  style={{ background: "#F1F1F1" }}
                  alt="product A"
                  />

                  </Link>
                </div>
                <div className="flex invisible group-hover:visible gap-4 absolute w-auto mx-10  md:mx-4 lg:mx-6 flex-wrap justify-center top-32 ">
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
      </div>
    </div>
  );
};

export default Products;
