import React from "react";
import "../../styles/header.css";
import { images, thumbnails } from "../../Data.jsx";
import { Badge } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
// import Rslider from "./RSlider.jsx";
import { RxMobile } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { Carousel } from "react-responsive-carousel";
// import DropBtn from "./DropBtn.jsx";
import { VscAccount } from "react-icons/vsc";
import SearchBar from "./SearchBar.jsx";
import BottomNavLinks from "./BottomNavLinks.jsx";
import flag1 from "../../assets/pics/flag2.png";
import flag2 from "../../assets/pics/flag3.png";
import flag3 from "../../assets/pics/ingland_flag.png";
import { TfiWorld } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";

import { Link } from "react-router-dom";

import SideBar from "./SideBar.jsx";


const Header = () => {
  const topNavbarPromotions = [
    {
      id: 1,
      prom: "Get Great Devices upto 50% off ",
      btn: "Detail now",
    },
    {
      id: 2,
      prom: "Super value Deals - Save more with coupons ",
      btn: "",
    },
    {
      id: 3,
      prom: "Trendy 25silvery, save up 35% off today ",
      btn: "Shop now",
    },
  ];

  return (
    <div className="main ">
      <div className="topNavbar     hidden lg:block">
        <div className="topNavbarContent    lg:w-11/12 lg:px-2 xl:px-4 mx-auto">
          <ul className=" topNavbarItems flex justify-betweenS">
            <li className="flex topNavbarItem1 mr-auto ">
              <span className="flex items-center mx-2 ">
                <RxMobile />
              </span>
              <Link to="/"> (+01) - 2345 - 6789</Link>
            </li>
            <li className="flex  mr-auto relative group">
              <span className="flex items-center mx-2">
                <CiLocationOn />
              </span>
              <Link to="/"> Our location </Link>

            </li>

            <li className="mx-auto ">
              <Carousel
                showThumbs={false}
                showIndicators={false}
                autoPlay
                infinite
                infiniteLoop
                interval={2000}
                showStatus={false}
                axis="vertical"
                showArrows="false"
              >
                {topNavbarPromotions.map(({ id, prom, btn }) => (
                  <div className="flex">
                    <p key={id}> {prom} </p>
                    <button style={{ color: "#088178" }} className="mx-1"> {btn} </button>
                  </div>
                ))}
              </Carousel>
            </li>
            <li className="ml-auto relative group">
              <Link to="/">
                <button className='flex items-center relative navDropBtn'>
                  <TfiWorld />
                  <span className='mx-1'>
                    English
                  </span>
                  <FaAngleDown />
                </button>
              </Link>
              <div className=" hidden group-hover:block absolute top-2 mt-4 px-8 shadow rounded-sm  p-4 bg-white">
                <li className="flex justify-center items-center ">
                  <img src={flag1} alt="" />
                  <span className="mx-2">Francais</span>
                </li>
                <li className="flex justify-center items-center my-2" >
                  <img src={flag2} alt="" />
                  <span className="mx-2">Deutcch</span>
                </li>
                <li className="flex justify-center items-center ">
                  <img src={flag3} alt="" />
                  <span className="mx-2">PyycckN</span>
                </li>
              </div>

            </li>
            <li className=" mx-2">
              <Link to="/register" className="flex items-center gap-x-2 ml-auto ">
                <VscAccount /> login/ signUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar border-none border lg:border-navbarBorder  ">
        <div className="BNavbarItems grid grid-rows-2 p-2  xl:px-4 w-11/12 mx-auto">
          <div className="grid-rows-1   grid-col-2 lg:grid-col-3 gap-8 lg:gap:4 flex justify-between">

            <div className="navLogo grid-cols-5 lg:grid-cols-3">
              <Link to="/">
                <img src={images.navLogo} width={120} height={33} alt="" />
              </Link>
            </div>

            <div className="navSearchBar hidden lg:block lg:grid-cols-7">
              <SearchBar className=" w-full" />
            </div>
            <div className="mx-auto hidden md:block lg:hidden">
              <Carousel
                showThumbs={false}
                showIndicators={false}
                autoPlay
                infinite
                infiniteLoop
                interval={2000}
                showStatus={false}
                axis="vertical"
                showArrows="false"
              >
                {topNavbarPromotions.map(({ id, prom, btn }) => (
                  <div className="flex">
                    <p key={id}> {prom} </p>
                    <button style={{ color: "#088178", }} className="mx-1"> {btn} </button>
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="navElements grid-cols-7 lg:grid-cols-4 ">
              <ul className="navLinks w-full flex justify-between">
                <li className="navLink">
                  <Link to="/favourite">
                    <Badge
                      color="secondary"
                      badgeContent={4}
                      sx={{ color: "black" }}
                    >
                      <FavoriteBorderIcon />
                    </Badge>
                  </Link>
                </li>
                <li className="navLink relative group">
                  <Link to="/cart" >
                    <Badge
                      color="secondary"
                      badgeContent={2}
                      sx={{ color: "black" }}
                    >
                      <ShoppingBagOutlinedIcon />
                    </Badge>
                  </Link>
                  <div className="cartDes hidden group-hover:block  w-72 absolute  right-0 opacity-100 bg-white rounded-md  top-4 mt-2   border border-gray-300 py-8 px-4">
                    <div className="cartItems border-b-2 border-gray-200">
                      <div className="cartItem1 pb-4 flex">
                        <div className="cartImgs w-20">
                          <img src={thumbnails.thumbnail3} alt="cart item" />
                        </div>
                        <div className="cartDes mx-2 ">
                          <h4 className="text-secondary">Daisy Casual Bag </h4>
                          <p> 1 X $800.00</p>
                        </div>
                        <button className="flex items-start ml-auto mx-2 font-bold">
                          X
                        </button>
                      </div>
                      <div className="cartItem2  pb-4 flex">
                        <div className="cartImgs w-20">
                          <img src={thumbnails.thumbnail2} alt="cart item" />
                        </div>
                        <div className="cartDes mx-2 ">
                          <h4 className="text-secondary"> Corduroy  Shirts </h4>
                          <p> 1 X $3200.00</p>
                        </div>
                        <button className="flex items-start ml-auto mx-2 font-bold">
                          X
                        </button>
                      </div>
                    </div>
                    <div className="totalAmount ">
                      <div className="amount flex justify-between py-2 text-xl">
                        <span className="font-bold text-gray-400"> Total</span>
                        <span className="font-bold text-secondary"> 4000.00</span>
                      </div>
                      <div className="cartBtns my-2 flex justify-between">
                        <button className="rounded-md border-2 border-secondary text-gray-600 hover:bg-secondary px-4 hover:text-white  py-2 "> View cart </button>
                        <button className="rounded-md border-2 border-secondary  bg-secondary px-4 text-gray-200  py-2 "> Checkout  </button>
                      </div>

                    </div>
                  </div>
                </li>
                {/* <li className="navLink hidden">
                  <Link to="/">
                    <MenuIcon />
                  </Link>
                </li> */}
              </ul>
            </div>

          </div>

          <div className="navLinksB grid  ">
            <BottomNavLinks />
          </div>

        </div>
      </div>
      <div className="navbarr block lg:hidden ">
        <SideBar/>
      </div>


    </div>
  );
};

export default Header;
