import { BiHeart, BiShuffle } from "react-icons/bi";
import img1 from "../../assets/pics/avatar-6.jpg";
import img2 from "../../assets/pics/avatar-7.jpg";
import img3 from "../../assets/pics/avatar-8.jpg";
import img6 from "../../assets/pics/banner-11.jpg";
import { CiFilter } from "react-icons/ci";

import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";
import PathBar from "../PathBar";
import { bannerImg, productsImg, thumbnails } from "../../Data";
import ReactImageMagnify from "react-image-magnify";
import { HiMiniStar } from "react-icons/hi2";
import { IoIosStarHalf } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiShuffleAngularFill } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { Tooltip } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import MultiRangeSlider from "multi-range-slider-react";



const Fashion = () => {
  const [productsType, setProductsType] = React.useState();
  const [quantities, setQuantities] = React.useState(0);
  const [descValue, setDescValue] = React.useState(1);
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

  ];
  const [minValue, set_minValue] = React.useState(25);
  const [maxValue, set_maxValue] = React.useState(75);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
};

  const pathElement = (
    <>
      <span className="flex">
        <span className="mx-2 flex items-center">
          <MdOutlineKeyboardArrowRight />
        </span>
        Fashion
        <span className="mx-2 flex items-center">
          <MdOutlineKeyboardArrowRight />
        </span>
        Abstract Print Patchwork Dress
      </span>
    </>
  );
  return (
    <div className="fashionSection px-2  mt-auto">
      <PathBar path={pathElement} className="hidden sm:block" />
      <div className="mainLayout grid grid-cols-12  w-11/12 sm:w-4/5 lg:w-11/12 xl:w-10/12 lg:px-2 xl:px-4 mx-auto">
        <div className="py-8 col-span-12 lg:col-span-9 grid grid-cols-2 ">
          <div className="  col-span-2 md:col-span-1  w-full ">
            {
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: thumbnails.thumbnail2,
                  },
                  largeImage: {
                    src: thumbnails.thumbnail2,
                    width: 2000,
                    height: 1800,
                  },
                  enlargedImagePosition: "over",
                }}
              />
            }
          </div>
          <div className=" w-full col-span-2 md:col-span-1 productDes p-2 px-3">
            <h4 className="text-4xl w-11/12">
              {" "}
              Colorful Pattern Shirts
              <span className="block">HD450</span>
            </h4>
            <div className="flex justify-between">
              <p className="text-gray-600">
                Brands:
                <span className="text-secondary "> Bootstrap </span>
              </p>
              <div className="productRatingStars flex">
                <HiMiniStar style={{ color: "#FFA600" }} />
                <HiMiniStar style={{ color: "#FFA600" }} />
                <HiMiniStar style={{ color: "#FFA600" }} />
                <HiMiniStar style={{ color: "#FFA600" }} />
                <IoIosStarHalf style={{ color: "#FFA600" }} />
                <span className="text-sm text-slate-800 ml-1">
                  (25 reviews)
                </span>
              </div>
            </div>

            <div className="flex my-4 p-2 items-center text-gray-600 gap-4 border-b border-t border-gray-200 w-full">
              <h4>
                <span className="font-semibold text-4xl text-secondary">
                  {" "}
                  $120.00
                </span>
              </h4>
              <span className="line-through">$200.00</span>
              <p>25% Off</p>
            </div>
            <div className="pb-10 border-b border-gray-200">
              <p className="text-gray-600 my-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                earum esse aspernatur ex possimus laborum dolore tempora omnis
                vero officia illum, ducimus amet asperiores facere magni natus
                velit eum voluptatem?
              </p>
              <div className="mt-4">
                <p className=" my-2 text-gray-600">
                  <span> </span>1 Year AL Jazeera Brand Warranty
                </p>
                <p className="my-2 text-gray-600">30 Day Return Policy</p>
                <p className="my-2 text-gray-600">
                  {" "}
                  Cash on Delivery available
                </p>
              </div>
              <div className="color flex mt-4">
                <p className="text-gray-600 font-semibold"> Color </p>
                <div className="flex gap-2 pl-2">
                  <span className="w-6 h-6 bg-red-500 shadow rounded-full">
                    {" "}
                  </span>
                  <span className="w-6 h-6 bg-green-500 shadow rounded-full">
                    {" "}
                  </span>
                  <span className="w-6 h-6 bg-white-500 border border-gray-300  shadow rounded-full">
                    {" "}
                  </span>
                  <span className="w-6 h-6 bg-yellow-500 shadow rounded-full">
                    {" "}
                  </span>
                  <span className="w-6 h-6 bg-pink-500 shadow rounded-full">
                    {" "}
                  </span>
                  <span className="w-6 h-6 bg-blue-500 shadow rounded-full">
                    {" "}
                  </span>
                  <span className="w-6 h-6 bg-orange-500 shadow rounded-full">
                    {" "}
                  </span>
                </div>
              </div>
              <div className="size flex mt-4">
                <p className="text-gray-600 font-semibold"> Size </p>
                <div className="flex gap-2 pl-2">
                  <span className="px-2 border cursor-pointer border-gray-300 hover:text-white hover:bg-hoverBtn rounded-md  transform duration-500">
                    {" "}
                    S{" "}
                  </span>
                  <span className="px-2 border border-gray-300 hover:text-white hover:bg-hoverBtn  cursor-pointer rounded-md transform duration-500  ">
                    {" "}
                    M{" "}
                  </span>
                  <span className="px-2 border border-gray-300  hover:text-white hover:bg-hoverBtn  cursor-pointer rounded-md  transform duration-500  ">
                    {" "}
                    L{" "}
                  </span>
                  <span className="px-2 border border-gray-300 hover:text-white hover:bg-hoverBtn  cursor-pointer rounded-md transform duration-500   ">
                    {" "}
                    XL{" "}
                  </span>
                  <span className="px-2 border border-gray-300 hover:text-white hover:bg-hoverBtn  cursor-pointer rounded-md transform duration-500  ">
                    {" "}
                    XXL{" "}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mt-4 items-baseline">
                <div className=" mt-4 flex p-2 border border-gray-300 rounded-md w-fit">
                  <button
                    onClick={() => {
                      setQuantities(quantities === 0 ? 0 : quantities - 1);
                    }}
                  >
                    <MdOutlineKeyboardArrowDown />
                  </button>
                  <span className="mx-2"> {quantities}</span>
                  <button
                    onClick={() => {
                      setQuantities(quantities + 1);
                    }}
                  >
                    {" "}
                    <MdKeyboardArrowUp />{" "}
                  </button>
                </div>
                <button className="bg-secondary py-2 hover:bg-hoverBtnColor text-white px-8  rounded-lg ">
                  Add to Cart
                </button>
                <button className="p-3 text-gray-700 border border-gray-200 rounded-lg cursor-pointer transition-transform duration-300 translate hover:-translate-y-1 hover:bg-hoverBtnColor hover:text-white flex items-center">
                  <BiHeart />
                </button>
                <button className="p-3 text-gray-700 border border-gray-200 rounded-lg cursor-pointer transition-transform duration-300 translate hover:-translate-y-1 hover:bg-hoverBtnColor hover:text-white flex items-center">
                  <BiShuffle />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-sm">
              {" "}
              SKU:
              <span className="text-secondary"> FWM15VKT</span>
            </p>
            <p className="text-gray-600 text-sm">
              {" "}
              Tags:
              <span className="text-secondary"> Cloth, Women, Dress</span>
            </p>
            <p className="text-gray-600 text-sm">
              {" "}
              Availability
              <span className="text-green-400"> 8 Items In Stock</span>
            </p>
          </div>
          <div className="fashionDesc py-4 col-span-2">
            <div className="w-full flex gap-4  flex-wrap descBtns">
              <button
                className={` ${descValue === 1 ? "border-b-2 border-secondary" : ""
                  } pb-2 text-xl inline-block duration-300 hover:text-secondary transition-transform translate hover:-translate-y-2  `}
                onClick={() => {
                  setDescValue((previous) => (previous = 1));
                }}
              >
                DESCRIPTION
              </button>
              <button
                className={` ${descValue === 2 ? "border-b-2 border-secondary" : ""
                  } pb-2 text-xl inline-block duration-300 hover:text-secondary transition-transform translate hover:-translate-y-2  `}
                onClick={() => {
                  setDescValue((previous) => (previous = 2));
                }}
              >
                ADDITIONAL INFO
              </button>
              <button
                className={` ${descValue === 3 ? "border-b-2 border-secondary" : ""
                  } pb-2 text-xl inline-block duration-300 hover:text-secondary transition-transform translate hover:-translate-y-2  `}
                onClick={() => {
                  setDescValue((previous) => (previous = 3));
                }}
              >
                REVIEWS (3)
              </button>
            </div>
            {descValue === 1 && (
              <div className="description py-10 ">
                <p className="text-gray-600">
                  <span className="inline-block mb-2">
                    Uninhibited carnally hired played in whimpered dear gorilla
                    koala depending and much yikes off far quetzal goodness and
                    from for grimaced goodness unaccountably and meadowlark near
                    unblushingly crucial scallop tightly neurotic hungrily some
                    and dear furiously this apart.
                  </span>
                  <span>
                    Spluttered narrowly yikes left moth in yikes bowed this that
                    grizzly much hello on spoon-fed that alas rethought much
                    decently richly and wow against the frequent fluidly at
                    formidable acceptably flapped besides and much circa far
                    over the bucolically hey precarious goldfinch mastodon
                    goodness gnashed a jellyfish and one however because.
                  </span>
                </p>
                <ul className="text-gray-600 list-disc py-4 mt-4 border-b border-gray-300 pl-4">
                  <li>
                    <span className="inline-block w-1/4 my-1">
                      Type Of Packing
                    </span>
                    <span className="">Bottle</span>
                  </li>
                  <li>
                    <span className="inline-block w-1/4 my-1">Color</span>
                    <span className="">Green, Pink, Powder Blue, Purple</span>
                  </li>
                  <li>
                    <span className="inline-block w-1/4 my-1">
                      Quantity Per Case
                    </span>
                    <span className="">100ml</span>
                  </li>
                  <li>
                    <span className="inline-block w-1/4 my-1">
                      Ethyl Alcohol
                    </span>
                    <span className="">70%</span>
                  </li>
                  <li>
                    <span className="inline-block w-1/4 my-1">
                      Piece In One
                    </span>
                    <span className="">Carton</span>
                  </li>
                </ul>
                <p>
                  Laconic overheard dear woodchuck wow this outrageously taut
                  beaver hey hello far meadowlark imitatively egregiously hugged
                  that yikes minimally unanimous pouted flirtatiously as beaver
                  beheld above forward energetic across this jeepers
                  beneficently cockily less a the raucously that magic upheld
                  far so the this where crud then below after jeez enchanting
                  drunkenly more much wow callously irrespective limpet.
                </p>
                <div className="package py-2">
                  <h4 className="py-4 text-3xl   border-b border-gay-400">
                    {" "}
                    Packaging & Delivery
                  </h4>
                  <p className=" my-1 mt-4">
                    Less lion goodness that euphemistically robin expeditiously
                    bluebird smugly scratched far while thus cackled sheepishly
                    rigid after due one assenting regarding censorious while
                    occasional or this more crane went more as this less much
                    amid overhung anathematic because much held one exuberantly
                    sheep goodness so where rat wry well concomitantly.
                  </p>
                  <p className="my-1 ">
                    Scallop or far crud plain remarkably far by thus far iguana
                    lewd precociously and and less rattlesnake contrary caustic
                    wow this near alas and next and pled the yikes articulate
                    about as less cackled dalmatian in much less well jeering
                    for the thanks blindly sentimental whimpered less across
                    objectively fanciful grimaced wildly some wow and rose
                    jeepers outgrew lugubrious luridly irrationally attractively
                    dachshund.
                  </p>
                </div>
              </div>
            )}

            {descValue === 2 && (
              <div className="additionalInfo py-10 ">
                <table className="table w-full border border-collapse">
                  <tbody className="text-gray-500">
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Stand Up
                      </td>
                      <td className="py-2 px-5 border border-gray-200">
                        35″L x 24″W x 37-45″H(front to back wheel)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Folded (w/o wheels)
                      </td>
                      <td className="py-2 px-5 border border-gray-200">
                        32.5″L x 18.5″W x 16.5″H
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Folded (w/ wheels)
                      </td>
                      <td className="py-2 px-5 border border-gray-200">
                        32.5″L x 24″W x 18.5″H
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Door Pass Through
                      </td>
                      <td className="py-2 px-5 border border-gray-200">24</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Frame
                      </td>
                      <td className="py-2 px-5 border border-gray-200">
                        Aluminum
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Weight (w/o wheels)
                      </td>
                      <td className="py-2 px-5 border border-gray-200">
                        20 LBS
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Weight Capacity
                      </td>
                      <td className="py-2 px-5 border border-gray-200">
                        60 LBS
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Width
                      </td>
                      <td className="py-2 px-5 border border-gray-200">24″</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Handle height (ground to handle)
                      </td>
                      <td className="py-2 px-5 border border-gray-200">
                        37-45″
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Wheels
                      </td>
                      <td className="py-2 px-5 border border-gray-200">
                        12″ air / wide track slick tread
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Seat back height
                      </td>
                      <td className="py-2 px-5 border border-gray-200">
                        21.5″
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Head room (inside canopy)
                      </td>
                      <td className="py-2 px-5 border border-gray-200">25″</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Color
                      </td>
                      <td className="py-2 px-5 border border-gray-200">
                        Black, Blue, Red, White
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-5 w-5/12 border border-gray-200">
                        Size
                      </td>
                      <td className="py-2 px-5 border border-gray-200">M, S</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {descValue === 3 && (
              <div>
                <div className="grid grid-cols-12 py-8  questioning border-b border-text-gray-300">
                  <div className=" col-span-12 lg:col-span-8 ">
                    <h4 className="text-2xl my-4">
                      {" "}
                      Customer questions & answers
                    </h4>
                    <div className="customer1 py-4 flex flex-wrap border-b border-text-gray-300">
                      <div className="profile w-20 mr-3">
                        <img
                          src={img1}
                          className="w-20 h-20 rounded-full "
                          alt=""
                        />
                        <p className="text-black text-center"> Jacky Chan </p>
                        <p className="text-sm text-gray-500 text-center">
                          {" "}
                          since 2012
                        </p>
                      </div>
                      <div className="profileDesc mt-4">
                        <div className="productRatingStars flex">
                          <HiMiniStar style={{ color: "#FFA600" }} />
                          <HiMiniStar style={{ color: "#FFA600" }} />
                          <HiMiniStar style={{ color: "#FFA600" }} />
                          <HiMiniStar style={{ color: "#FFA600" }} />
                          <IoIosStarHalf style={{ color: "#FFA600" }} />
                        </div>
                        <p className="py-1 text-gray-600">
                          {" "}
                          Thank you very fast shipping from Poland only 3days.
                        </p>
                        <div className="flex gap-10 text-sm text-gray-600">
                          <p> December 4, 2020 at 3:12 pm</p>
                          <p className=" flex gap-2 text-secondary pointer-cursor items-center">
                            Reply
                            <FaLongArrowAltRight />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="customer2 py-4 flex flex-wrap border-b border-text-gray-300">
                      <div className="profile w-20 mr-3">
                        <img
                          src={img2}
                          className="w-20 h-20 rounded-full "
                          alt=""
                        />
                        <p className="text-black text-center"> Ana Rosie </p>
                        <p className="text-sm text-gray-500 text-center">
                          {" "}
                          Since 2008
                        </p>
                      </div>
                      <div className="profileDesc mt-4">
                        <div className="productRatingStars flex">
                          <HiMiniStar style={{ color: "#FFA600" }} />
                          <HiMiniStar style={{ color: "#FFA600" }} />
                          <HiMiniStar style={{ color: "#FFA600" }} />
                          <HiMiniStar style={{ color: "#FFA600" }} />
                          <IoIosStarHalf style={{ color: "#FFA600" }} />
                        </div>
                        <p className="py-1 text-gray-600 w-full">
                          {" "}
                          Great low price and works well.
                        </p>
                        <div className="flex justify-between gap-10 text-sm text-gray-600">
                          <p> December 4, 2020 at 3:12 pm</p>
                          <p className=" flex gap-2 text-secondary pointer-cursor items-center">
                            Reply
                            <FaLongArrowAltRight />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="customer3 py-4 flex  ">
                      <div className="profile w-24 mr-3">
                        <img
                          src={img3}
                          className="w-20 h-20 rounded-full "
                          alt=""
                        />
                        <p className="text-black text-center"> Steven Keny </p>
                        <p className="text-sm text-gray-500 text-center">
                          {" "}
                          Since 2010{" "}
                        </p>
                      </div>
                      <div className="profileDesc mt-4 ">
                        <div className="productRatingStars flex">
                          <HiMiniStar style={{ color: "#FFA600" }} />
                          <HiMiniStar style={{ color: "#FFA600" }} />
                          <HiMiniStar style={{ color: "#FFA600" }} />
                          <HiMiniStar style={{ color: "#FFA600" }} />
                          <IoIosStarHalf style={{ color: "#FFA600" }} />
                        </div>
                        <p className="py-1 text-gray-600 text-wrap">
                          {" "}
                          Authentic and Beautiful, Love these way more than ever
                          expected They are Great earphones
                        </p>
                        <div className="flex  gap-10 text-sm text-gray-600">
                          <p> December 4, 2020 at 3:12 pm</p>
                          <p className=" flex gap-2 text-secondary pointer-cursor items-center">
                            Reply
                            <FaLongArrowAltRight />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-4 px-3">
                    <h4 className="text-2xl py-2 mt-4">Customer reviews</h4>
                    <div className="productRatingStars flex py-2">
                      <HiMiniStar className="text-yellow-400  font-semibold" />
                      <HiMiniStar style={{ color: "#FFA600" }} />
                      <HiMiniStar style={{ color: "#FFA600" }} />
                      <HiMiniStar style={{ color: "#FFA600" }} />
                      <IoIosStarHalf style={{ color: "#FFA600" }} />
                      <span className="text-sm text-slate-800 ml-1">
                        4.8 out of 5
                      </span>
                    </div>
                    <div className="progressBar">
                      <div className="progressBar1 my-1 flex gap-4 lg:gap-2">
                        <span className="text-sm text-gray-500 pr-2 text-nowrap ">
                          {" "}
                          5 star{" "}
                        </span>
                        <div
                          class="flex w-full h-4 bg-gray-200  overflow-hidden dark:bg-neutral-700"
                          role="progressbar"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="flex flex-col justify-center  overflow-hidden bg-secondary text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
                            style={{ width: '50%' }}
                          >
                            50%
                          </div>
                        </div>
                      </div>
                      <div className="progressBar2 my-3 flex gap-4 lg:gap-2">
                        <span className="text-sm text-gray-500 pr-2 text-nowrap ">
                          {" "}
                          4 star{" "}
                        </span>
                        <div
                          class="flex w-full h-4 bg-gray-200  overflow-hidden dark:bg-neutral-700"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="flex flex-col justify-center  overflow-hidden bg-secondary text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
                            style={{ width: '25%' }}
                          >
                            25%
                          </div>
                        </div>
                      </div>
                      <div className="progressBar3 my-3 flex gap-4 lg:gap-2">
                        <span className="text-sm text-gray-500 pr-2 text-nowrap ">
                          {" "}
                          3 star{" "}
                        </span>
                        <div
                          class="flex w-full h-4 bg-gray-200  overflow-hidden dark:bg-neutral-700"
                          role="progressbar"
                          aria-valuenow="45"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="flex flex-col justify-center  overflow-hidden bg-secondary text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
                            style={{ width: '45%' }}
                          >
                            45%
                          </div>
                        </div>
                      </div>
                      <div className="progressBar4 my-3 flex gap-4 lg:gap-2">
                        <span className="text-sm text-gray-500 pr-2 text-nowrap ">
                          {" "}
                          2 star{" "}
                        </span>
                        <div
                          class="flex w-full h-4 bg-gray-200  overflow-hidden dark:bg-neutral-700"
                          role="progressbar"
                          aria-valuenow="65"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="flex flex-col justify-center  overflow-hidden bg-secondary text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
                            style={{ width: '65%' }}
                          >
                            65%
                          </div>
                        </div>
                      </div>
                      <div className="progressBar5 my-3 flex gap-4 lg:gap-2">
                        <span className="text-sm text-gray-500 pr-2 text-nowrap ">
                          {" "}
                          1 star{" "}
                        </span>
                        <div
                          class="flex w-full h-4 bg-gray-200  overflow-hidden dark:bg-neutral-700"
                          role="progressbar"
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            class="flex flex-col justify-center  overflow-hidden bg-secondary text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
                            style={{ width: '85%' }}
                          >
                            85%
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 py-4 text-sm">
                      How are rating calculated?
                    </p>
                  </div>
                </div>

                <div className="review col-span-12 lg:col-span-8 py-4">
                  <h4 className="text-2xl"> Add a review </h4>
                  <div className="stars text-gray-300 flex  my-2 ">
                    <HiMiniStar />
                    <HiMiniStar />
                    <HiMiniStar />
                    <HiMiniStar />
                    <HiMiniStar />
                  </div>
                  <div className="formReview">
                    <textarea placeholder="Write Comment" className=" p-4 rounded-md my-4 w-full border border-gray-300 outline-none " rows={10} />
                    <div className="grid grid-cols-2 gap-4 my-2 ">
                      <input type="text" className="border border-gray-300  rounded-md outline-none px-4 py-2" placeholder="Name" />
                      <input type="text" className="border border-gray-300  rounded-md outline-none px-4 py-2" placeholder="Email" />
                    </div>
                    <input type="text" className="border w-full  border-gray-300  rounded-md outline-none px-4 py-2" placeholder="Email" />
                    <button className="px-10 py-4 mt-4 rounded-lg transform  duration-500 hover:scale-90 text-white bg-secondary hover:bg-blue-500"> Submit Review </button>
                  </div>

                </div>

              </div>
            )}
          </div>

          <div className="productCard  col-span-2  py-10 w-full justify-between gap-2 fle  ">
            <div className="grid sm:grid-cols-2 md:grid-cols-4">
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
                    className="productCardItems  relative  "
                  >
                    <div className="productImg group  w-full  relative   p-4">
                      <div className=" rounded-2xl overflow-hidden">
                        <img
                          src={productsType === false ? prodImgA : prodImgB}
                          className=" transition-transform duration-500  hover:scale-105"
                          onMouseEnter={(id) => setProductsType((previousState) => !previousState)}


                          style={{ background: "#F1F1F1" }}
                          alt="product A"

                        />
                      </div>
                      <div className=" invisible group-hover:visible gap-4 absolute top-20 px-4 flex-wrap flex ">
                        <Tooltip
                          title="Quick View"
                          arrow
                          placement="top"
                          className=" transform transition-transform hover:scale-110 hover:-translate-y-1 bg-green-200 group hover:bg-secondary"
                        >
                          <span className="rounded-full w-6 h-6 flex items-center justify-center cartIcon hover:text-gray-100  text-secondary">
                            <IoIosSearch />
                          </span>
                        </Tooltip>
                        <Tooltip
                          title="Add to Wishlist"
                          arrow
                          placement="top"
                          className=" transform transition-transform hover:scale-110 hover:-translate-y-1 bg-green-200 group hover:bg-secondary"
                        >
                          <span className="rounded-full w-6 h-6 flex items-center justify-center cartIcon hover:text-gray-100  text-secondary">
                            <IoIosHeartEmpty />
                          </span>
                        </Tooltip>
                        <Tooltip
                          title="compare"
                          arrow
                          placement="top"
                          className=" transform transition-transform hover:scale-110 hover:-translate-y-1 bg-green-200 group hover:bg-secondary"
                        >
                          <span className="rounded-full w-6 h-6 flex items-center justify-center cartIcon hover:text-gray-100  text-secondary">
                            <PiShuffleAngularFill />
                          </span>
                        </Tooltip>

                      </div>
                      <span
                        className="productLabel rounded-full px-1.5 py-1 text-sm text-white absolute top-6 left-6"
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
                        <HiMiniStar style={{ color: "#FFA600" }} />
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

                      </div>
                    </div>
                    {/* FF75A0 */}
                  </div>
                )
              )}
            </div>
          </div>
          <div className='relative hidden md:block w-full col-span-2'>
            <div className="bannerImg w-full h-60">
              <img src={bannerImg.banner1} className='w-full h-60' alt="banner pic 4" />
            </div>
            <div className="bannerDesc  absolute bottom-8 sm:top-8 left-10 pl-">
              <h4 className=' font-semibold text-base text-slate-400 mb-2'>Repair Services</h4>
              <h1 className=' text-xl font-semibold w-2/3 my-4'>We're an Apple Authorised Services Provider</h1>
              <a href="/" className=" inline-block transition-all group mt-2">
                <div className='flex  text-md   text-secondary hover:text-green-600   rounded-md ' >
                  <span>Shop Now</span>
                  <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong /> </span>
                </div>
              </a>
            </div>

          </div>
        </div>
        <div className="lg:col-span-3 col-span-12 px-3 lg:mt-8">
          <div className="categories border border-gray-300 px-3">
            <h4 className='text-xl py-2 pt-4  border-b border-gray-300 mt-3'> Categories </h4>
            <span className=' flex w-14 border border-secondary'></span>
            <ul className='pl-4 mt-3 text-gray-600'>
              <li className='py-2 flex justify-between  items-center'>
                <a href="/technology" className='hover:text-secondary transform-translate hover:translate-x-1 duration-300'> Beauty </a>              </li>
              <li className='py-2 flex justify-between  items-center'>
                <a href="/technology" className='hover:text-secondary transform-translate hover:translate-x-1 duration-300'> Book </a>              </li>
              <li className='py-2 flex justify-between   items-center'>
                <a href="/technology" className='hover:text-secondary transform-translate hover:translate-x-1 duration-300'> Design </a>              </li>
              <li className='py-2 flex justify-between   items-center'>
                <a href="/technology" className='hover:text-secondary transform-translate hover:translate-x-1 duration-300'> Fashion </a>
              </li>
              <li className='py-2 flex justify-between   items-center'>
                <a href="/technology" className='hover:text-secondary transform-translate hover:translate-x-1 duration-300'> LifeStyle</a>
              </li>
              <li className='py-2 flex justify-between   items-center'>
                <a href="/technology" className='hover:text-secondary transform-translate hover:translate-x-1 duration-300'> Travel </a>
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
                    <IoIosStarHalf style={{ color: "#FFA600" }} />
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
                    <IoIosStarHalf style={{ color: "#FFA600" }} />
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
                    <IoIosStarHalf style={{ color: "#FFA600" }} />
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
              <a href="/" className=" inline-block transition-all group ">
                <div className='flex text-sm text-secondary' >
                  <span>Shop Now</span>
                  <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong className='text-sm' /> </span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Fashion;
