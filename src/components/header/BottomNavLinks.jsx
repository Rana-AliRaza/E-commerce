import React from "react";
import menuIcon from "../../assets/pics/menuIcon.png";
import { FaChevronDown } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import "../../styles/bottomNavLinks.css";
import menuBanner from "../../assets/pics/menu-banner.jpg";
import { Link } from "react-router-dom";
const BottomNavLinks = () => {
    return (
        <div className=" hidden lg:block z-10">
            <ul className="grid-rows-1 bottomNavbarLinks   flex items-center gap-6 ">
                <li className="grid-cols-3">
                    <Link to="/" type="button " className=" flex text-nowrap">
                        <img src={menuIcon} alt="menuIcon" />
                        <span className=" flex items-center" style={{ color: "#088178" }}>
                            Brows Collection
                        </span>
                    </Link>
                </li>
                <li className="bottomNlinks ">
                    <ul className="flex   text-slate-700 mx-auto gap-4">
                        <li className=" navDropLink group relative">
                            <Link to="/" className=" ">
                                <span className="flex items-center gap-1">
                                    <span>Home</span>
                                    <FaChevronDown />
                                </span>
                            </Link>
                            <div className="  bg-white invisible group-hover:visible  shadow-md p-4 font-medium text-base       absolute text-gray-700">
                                <li className="my-1 " >
                                    <Link to="/" className="hover:text-secondary">Home1</Link>
                                </li>
                                <li className="my-1">
                                    <Link to="/" className="hover:text-secondary">Home2</Link>
                                </li>
                                <li className="my-1">
                                    <Link to="/" className="hover:text-secondary">Home3</Link>
                                </li>
                                <li className="my-1">
                                    <Link to="/" className="hover:text-secondary">Home4</Link>
                                </li>
                            </div>
                        </li>

                        <li>
                            <Link to="/about">
                                <span className="flex items-center gap-1">
                                    <span>About</span>
                                </span>
                            </Link>

                        </li>
                        <li className=" group relative  text-base font-medium">
                            <Link to="/shop">
                                <span className="flex items-center gap-1 ">
                                    <span>Shop</span>
                                    <FaChevronDown />
                                </span>
                            </Link>
                            <div className="p-2 invisible group-hover:visible absolute bg-white px-4 text-black w-fit text-nowrap cursor-pointer rounded-md shadow-md">
                                <li className="my-2">
                                    <Link to="/shop">
                                      Shop Grid - Right Sidebar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shop">
                                      Shop Grid - Left Sidebar
                                    </Link>
                                </li>
                                <li className="my-2">
                                  <Link to="/shop">
                                    Shop Grid - Right Sidebar
                                  </Link>
                                </li>
                                <li>
                                <Link to="/shop">
                                    Shop Grid - Left Sidebar
                                  </Link>
                                </li>
                                <li className="my-2">
                                  <Link to="/shop">
                                    Shop - Wide
                                  </Link>
                                </li>
                                <li className="relative group  flex shadow-md">
                                  <Link to="/shop">
                                    Single Product
                                  </Link>
                                    <span className=""><FaChevronDown /></span>
                                    <div className="absolute   left-36 p-2 px-4 py-4 rounded-sm cursor-pointer  hidden group-hover:block text-black bg-white">
                                        <li className="my-2"><Link to="/shop"> Product - Left Sidebar</Link></li>
                                        <li><Link to="/shop"> Product - Right Sidebar</Link></li>
                                        <li className="my-2"> <Link to="/shop">Product - no Sidebar</Link> </li>
                                    </div>
                                </li>
                                <li className="my-2"> <Link to="/shop">Shop - filter</Link></li>
                                <li> <Link to="/shop">Shop - whishList</Link></li>
                                <li className="my-2"> <Link to="/shop">Shop - Checkout</Link></li>
                                <li> <Link to="/shop">Shop - Cart</Link></li>
                                <li className="my-2"> <Link to="/shop">Shop - Compare</Link></li>


                            </div>
                        </li>
                        <li className="relative group">
                            <Link to="/">
                                <span className="flex items-center gap-1">
                                    <span className="text-nowrap">Mega menu</span>
                                    <FaChevronDown />
                                </span>
                            </Link>
                            <div className=" invisible absolute  mx-auto group-hover:visible  w-[900px] -left-80 py-4 shadow-md  bg-white" >
                                <div className="megaMenuLayout text-nowrap grid  grid-cols-4 p-2 px-4    text-gray-700">
                                    <div className="womenFashion text-gray-700">
                                        <Link to="/" className="my-2 text-2xl text-secondary"> <h4>Women's Fashion</h4>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Dresses</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Blouses & Shirts</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Hoodies & Sweat Shirts</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Wedding Dresses</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Prom Dresses</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Cosplay Costumes</p>  </Link>
                                    </div>
                                    <div className="menFashion">
                                        <Link to="/" className="my-2 text-2xl text-secondary"> <h4>Men's Fashion</h4>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Jackets</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Casual Faux Leather</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Genius Leather</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Casual Pants</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Sweat Pants</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Harem Pants</p>  </Link>
                                    </div>
                                    <div className="menFashion">
                                        <Link to="/" className="my-2 text-2xl text-secondary"> <h4>Technology</h4>  </Link>

                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Gaming Laptops</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>UltraSlim Laptops</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Tablets</p>  </Link>
                                        <Link to="/" className="my-2 hover:text-secondary" > <p>Laptop Accessories</p>  </Link>
                                        <Link to="/" className="  hover:text-secondary" > <p > Tablet Accessories</p>  </Link>
                                    </div>
                                    <div className="megaMenuBanner">
                                        <img src={menuBanner} alt="menu Banner" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="group relative ">
                            <Link to="/">
                                <span className="flex items-center gap-1">
                                    <span>
                                        <Link to="/blog">
                                           Blog
                                        </Link>
                                    </span>
                                    <FaChevronDown />
                                </span>
                            </Link>
                            <div className="absolute invisible group-hover:visible shadow-md bg-white text-gray-700 w-fit text-nowrap  p-4 rounded-sm   ">
                                <Link to="/"> <li className="my-2"><Link to="/blog">Blog Category Grid</Link></li>
                                </Link>
                                <Link to="/"> <li className="my-2"><Link to="/blog">Blog Category List</Link></li>
                                </Link>
                                <Link to="/">  <li className="my-2"><Link to="/blog">Blog Category Big</Link></li>
                                </Link>
                                <Link to="/">   <li className="my-2"><Link to="/blog">Blog Category Wide</Link></li>
                                </Link>
                                <Link to="/">  <li className="my-2"><Link to="/blog">Blog Category Wide</Link></li>
                                </Link>
                                <Link to="/"> 
                                 <li className="relative group flex gap-2">
                                    <Link to="/blog">Single Post 
                                      <span className=" ml-2 inline-block my-auto">  <FaChevronDown /> </span>
                                    </Link>
                                    <div className="hidden group-hover:block absolute -right-20 text-gray-700 p-4 rounded-sm shadow-sm bg-white ">
                                        <Link to="/blog"> 
                                         <li className="hover:text-secondary my-2"> Left Sidebar</li>
                                        </Link>
                                        <Link to="/blog"> 
                                         <li className="hover:text-secondary mb-2"> Right Sidebar</li>
                                        </Link>
                                        <Link to="/blog"> 
                                         <li className="hover:text-secondary"> no Sidebar</li>
                                        </Link>
                                    </div>

                                 </li>
                                 </Link>
                            </div>
                        </li>
                        <li className="relative group">
                            <Link to="/">
                                <span className="flex items-center gap-1">
                                    <span>Pages</span>
                                    <FaChevronDown />
                                </span>
                            </Link>
                            <div className="invisible text-gray-700 h-auto absolute group-hover:visible p-4 rounded-md shadow-md text-nowrap bg-white">
                                <Link to="/about">
                                  <li className="my-2  hover:text-secondary"> About Us </li>
                                </Link>
                                <Link to="/contact">
                                  <li className="my-2  hover:text-secondary"> Contacts</li>
                                </Link>
                                <Link to="/account">
                                  <li className="my-2  hover:text-secondary"> My Accounts </li>
                                </Link>
                                <Link to="/register">
                                  <li className="my-2  hover:text-secondary"> login/register </li>
                                </Link>
                                <Link to="/privacy">
                                  <li className="my-2  hover:text-secondary"> Privacy Policy </li>
                                </Link>
                                <Link to="/terms">
                                  <li className="my-2  hover:text-secondary"> Terms of Service</li>
                                </Link>
                                <Link to="/jhjhh">
                                  <li className="my-2  hover:text-secondary"> 404 page </li>
                                </Link>

                            </div>
                        </li>
                        <li>
                            <Link to="/contact">
                                <span className="flex items-center gap-1">
                                    <span>Contact</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="flex justify-center ml-auto">
                    <Link to="/">
                        <FaHeadset />
                        <span>Hotline</span>
                        <span style={{ color: "#088178" }}>1900 - 888 </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default BottomNavLinks;

//   <ul>
//   <li>
//     <img src={menuIcon} alt="menu Icon" />
//     <span style={{ color: "#04696c" }}>Brows Categories</span>
//   </li>
// </ul>
