import React from 'react';
import { productsImg } from "../../Data";
import { MdStarBorderPurple500 } from 'react-icons/md';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const MultiCarousel2 = () => {
    const productItemss = [
        {
            id: 0,
            prodImgA: productsImg.product1A,
            productType: "Hot",
            productTypeCol: "#FF75A0",
            prodDes: "Colorful Pattern Shirts",
            newPrice: "$238.85",
            oldPrice: "$245.8",
        },
        {
            id: 1,
            prodImgA: productsImg.product2A,
            productType: "New",
            prodDes: " Plain Color  Pocket Shirts",
            newPrice: "$138.85",
            oldPrice: "$225.8",
        },
        {
            id: 2,
            prodImgA: productsImg.product3A,
            productType: "Best Sell",
            productTypeCol: "#99BBAD",
            branding: "Shirts",
            prodDes: "Vintage Floral Oil Shirts",
            newPrice: "$338.85",
            oldPrice: "$445.8",
        },
        {
            id: 3,
            prodImgA: productsImg.product4A,
            productType: "Sale",
            productTypeCol: "#A1CAE2",
            prodDes: "Colorful Hawaiian Shirts",
            newPrice: "$133.85",
            oldPrice: "$235.8",
        },
        {
            id: 4,
            prodImgA: productsImg.product5A,
            productType: "-30%",
            productTypeCol: "#99BBAD",
            prodDes: "Flowers Sleeve Lapel  Shirt",
            newPrice: "$28.85",
            oldPrice: "$45.8",
        },
        {
            id: 5,
            prodImgA: productsImg.product6A,
            productType: "-22%",
            productTypeCol: "#A1CAE2",
            prodDes: "Ethnic  Floral Casual Shirts",
            newPrice: "$238.85",
            oldPrice: "$245.8",
        },
        {
            id: 6,
            prodImgA: productsImg.product1A,
            productType: "New",
            productTypeCol: "#FF75A0",
            prodDes: "Colorful Pattern Shirts",
            newPrice: "$238.85",
            oldPrice: "$245.8",
        },
        {
            id: 7,
            prodImgA: productsImg.product8A,
            productType: "",
            productTypeCol: "#FF75A0",
            prodDes: "Mens Porcelain Shirt",
            newPrice: "$238.85",
            oldPrice: "$245.8",
        },
    ];



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1023, min: 771 },
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
    return (
        <div className='multiCarousel2 py-10'>
            <h4 className='text-2xl font-semibold mb-2'>
                <span className='text-secondary '>New</span> {"  "}
                Arrivals
            </h4>
            <Carousel responsive={responsive}
                infinite={true}
                swipeable={false}
                draggable={false}
                autoPlay={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                keyBoardControl={true}
            
            >
                {
                    productItemss.map(({ id, prodImgA, productType, productTypeCol, prodDes, newPrice, oldPrice }) => (
                        <div
                            key={id}
                            className="multiCarouselItem2     className='mx-auto'"
                        >
                            <div className="productImg  p-4 w-full  relative">
                                <img
                                    src={prodImgA}
                                    className="w-80 h-60 rounded-2xl  "
                                    style={{ background: "#F1F1F1" }}
                                    alt="product A"
                                />
                                <span
                                    className="productLabel rounded-full px-2 py-1 text-sm text-white absolute top-6 left-6"
                                    style={{ backgroundColor: productTypeCol}}
                                >
                                    {" "}
                                    {productType}{" "}
                                </span>
                            </div>
                            <div className="productCardDes relative px-4">

                                <h4 className="text-large font-medium font-semibold">{prodDes}</h4>
                                <div className="productRatingStars flex justify-center my-1">
                                    <MdStarBorderPurple500 className="text-yellow-400  font-semibold" />
                                    <MdStarBorderPurple500 style={{ color: "#FFA600" }} />
                                    <MdStarBorderPurple500 style={{ color: "#FFA600" }} />
                                    <MdStarBorderPurple500 style={{ color: "#FFA600" }} />
                                    <MdStarBorderPurple500 style={{ color: "#FFA600" }} />

                                </div>
                                <div className=" productRates flex gap-4">
                                    <h4 className="font-semibold text-lg text-secondary">
                                        {newPrice}
                                    </h4>
                                    <span className="line-through text-slate-500">
                                        {oldPrice}
                                    </span>

                                </div>
                            </div>
                            {/* FF75A0 */}
                        </div>))
                }

            </Carousel>

        </div>
    )
}

export default MultiCarousel2