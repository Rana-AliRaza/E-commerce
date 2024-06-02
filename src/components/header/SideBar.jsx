import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { Badge } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { FaChevronDown } from "react-icons/fa";
import "../../styles/bottomNavLinks.css";
import menuIcon from "../../assets/pics/menuIcon.png";
import { images } from "../../Data";
import facebookIcon from "../../assets/pics/icons/icon-facebook.svg";
import instagramIcon from "../../assets/pics/icons/icon-instagram.svg";
import pinterestIcon from "../../assets/pics/icons/icon-pinterest.svg";
import twitterIcon from "../../assets/pics/icons/icon-twitter.svg";
import youtubeIcon from "../../assets/pics/icons/icon-youtube.svg";
import SearchBar from "./SearchBar";
import { Carousel } from "react-responsive-carousel";






const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    position: "relative",
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
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
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState({
    home: false,
    shop: false,
    shopItem: false,
    megaMenu: false,
    blog: false,
    pages: false,
    language: false
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleMenu = (menu) => {
    setMenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed"  open={open}
      sx={{ backgroundColor: "white", boxShadow:"none", borderBottom:"1px solid #949494"}}>
        <Toolbar>
          <div className="flex justify-between w-full">
            <div className="navLogo">
              <Link to="/">
                <img src={images.navLogo} width={120} height={33} alt="Logo" />
              </Link>
            </div>
            <div className="navSearchBar mx-auto hidden lg:block lg:grid-cols-7">
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
                  <div className="flex text-black">
                    <p key={id}> {prom} </p>
                    <button style={{ color: "#088178", }} className="mx-1"> {btn} </button>
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="navElements ml-auto">
              <ul className="navLinks w-full flex justify-end">
                <li className="navLink">
                  <Link to="/favourite">
                    <Badge color="secondary" badgeContent={4} sx={{ color: "black" }}>
                      <FavoriteBorderIcon />
                    </Badge>
                  </Link>
                </li>
                <li className="navLink relative">
                  <Link to="/cart">
                    <Badge color="secondary" badgeContent={2} sx={{ color: "black" }}>
                      <ShoppingBagOutlinedIcon />
                    </Badge>
                  </Link>
                  <div className="cartDes hidden group-hover:block w-72 absolute right-0 opacity-100 bg-white rounded-md top-4 mt-2 border border-gray-300 py-8 px-4">
                    <div className="cartItems border-b-2 border-gray-200">
                      <div className="cartItem1 pb-4 flex">
                        <div className="cartImgs w-20">
                          <img src="thumbnail3.png" alt="cart item" />
                        </div>
                        <div className="cartDes mx-2">
                          <h4 className="text-secondary">Daisy Casual Bag</h4>
                          <p>1 X $800.00</p>
                        </div>
                        <button className="flex items-start ml-auto mx-2 font-bold">X</button>
                      </div>
                      <div className="cartItem2 pb-4 flex">
                        <div className="cartImgs w-20">
                          <img src="thumbnail2.png" alt="cart item" />
                        </div>
                        <div className="cartDes mx-2">
                          <h4 className="text-secondary">Corduroy Shirts</h4>
                          <p>1 X $3200.00</p>
                        </div>
                        <button className="flex items-start ml-auto mx-2 font-bold">X</button>
                      </div>
                    </div>
                    <div className="totalAmount">
                      <div className="amount flex justify-between py-2 text-xl">
                        <span className="font-bold text-gray-400">Total</span>
                        <span className="font-bold text-secondary">4000.00</span>
                      </div>
                      <div className="cartBtns my-2 flex justify-between">
                        <button className="rounded-md border-2 border-secondary text-gray-600 hover:bg-secondary px-4 hover:text-white py-2">View cart</button>
                        <button className="rounded-md border-2 border-secondary bg-secondary px-4 text-gray-200 py-2">Checkout</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <IconButton
            
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }), color: "black" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div className="sidHeader py-3 px-5 flex justify-between h-14">
          <div className="logo w-20 h-6">
            <img src={images.navLogo} alt="logo" />
          </div>
          <IconButton sx={{ padding: "2px" }} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <div className="content py-8 px-5">
          <div className="input searchBar flex items-center justify-center w-full py-1 pl-5 h-11 border border-secondary rounded-md">
            <input
              type="text"
              placeholder="Search for Items..."
              className="outline-none rounded-md w-full"
            />
            <button className="px-3 text-gray-600">
              <IoIosSearch />
            </button>
          </div>
          <ul className="bottomNavbarLinks flex-cols items-center gap-4">
            <li className="my-2">
              <Link to="/" className="flex text-nowrap">
                <img src={menuIcon} alt="menuIcon" />
                <span className="flex items-center" style={{ color: "#088178" }}>Brows Collection</span>
              </Link>
            </li>
            <li className="bottomNlinks">
              <ul className="flex-col text-slate-700 mx-auto gap-4 mt-2">
                <li className="navDropLink border-b border-gray-300 py-2 w-full">
                   <button onClick={() => toggleMenu("home")} className="flex   justify-between items-center gap-x-10 ">
                     <div >
                       <Link to="/">Home</Link></div>
                     <div className=" pl-12 w-4 ">
                     <FaChevronDown className={` ${menuOpen.home? "": "rotate-180"} font-thin `} />
                     </div>
                   </button>
                  <div>
                    <div
                     className={`bg-white   w-full p-4 font-medium text-base transform duration-500   text-gray-700 ${
                      menuOpen.home ? "block" : "hidden"
                    }`}>
                      <li>
                       <Link to="/" className="w-full">Home 1</Link>
                      </li>
                      <li>
                      <Link to="/">Home 2</Link>
                      </li>
                      <li>
                      <Link to="/">Home 3</Link>
                      </li>

                    </div>
                  </div>
                </li>
                <li className="navDropLink border-b border-gray-300 py-2 w-full">
                   <button onClick={() => toggleMenu("shop")} className="flex   justify-between items-center gap-x-10 ">
                     <div >
                       <Link to="/">shop</Link></div>
                     <div className="ml-2 pl-12 w-4 ">
                     <FaChevronDown className={` ${menuOpen.shop? "": "rotate-180"} font-thin `} />
                     </div>
                   </button>
                  <div>
                  <div  className={`bg-white text-sm text-nowrap   w-full py-2 font-medium  transform duration-500   text-gray-700 ${
                      menuOpen.shop ? "block" : "hidden"
                    }`}>
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
                                <li className=" " >
                                  <div className="flex">
                                  <Link to="/shop">
                                    Single Product
                                  </Link>
                                    <div  onClick={() => toggleMenu("shopItem")} className={`${menuOpen.shopItem?"rotate-180 ":"rotate-none "} `} style={{paddingLeft:"50px" }}><FaChevronDown /></div>
                                  </div>
                                    <div className={`mt-4  flex-col justify-start ${menuOpen.shopItem? "block":"hidden"}`}>
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
                  </div>
                </li>
                <li className="navDropLink border-b border-gray-300 py-2 w-full">
                   <button onClick={() => toggleMenu("megaMenu")} className="flex   justify-between items-center gap-x-10 ">
                     <div className="text-nowrap" >
                       <Link to="/" >Mega Menu</Link></div>
                     <div className=" pl-2 w-4 ">
                     <FaChevronDown className={` ${menuOpen.megaMenu? "": "rotate-180"} font-thin `} />
                     </div>
                   </button>
                  <div>
                    <div
                     className={`bg-white text-sm   w-full p-4 font-medium my-1 transform duration-500   text-gray-700 ${
                      menuOpen.megaMenu ? "block" : "hidden"
                    }`}>
                      <li>
                       <Link to="/" className="w-full">Women's Fashion</Link>
                      </li>
                      <li>
                      <Link to="/">Men's Fashion</Link>
                      </li>
                      <li>
                      <Link to="/">Technology</Link>
                      </li>

                    </div>
                  </div>
                </li>
                <li className="navDropLink border-b border-gray-300 py-2 w-full">
                   <button onClick={() => toggleMenu("blog")} className="flex   justify-between items-center gap-x-10 ">
                     <div className="text-nowrap" >
                       <Link to="/" >Blog</Link></div>
                     <div className=" pl-16 w-4 ">
                     <FaChevronDown className={` ${menuOpen.blog? "": "rotate-180"} font-thin `} />
                     </div>
                   </button>
                  <div >
                    <div
                     className={`bg-white text-sm    w-full p-4 font-medium my-1 transform duration-500   text-gray-700 ${
                      menuOpen.blog ? "block" : "hidden"
                    }`}>
                      <li className="py-1">
                       <Link to="/blog" className="w-full">Blog Category Grid</Link>
                      </li>
                      <li className="py-1">
                        <Link to="/blog">Blog Category List</Link>
                      </li>
                      <li className="py-1">
                       <Link to="/blog">Blog Category Big</Link>
                      </li>
                      <li className="py-1">
                       <Link to="/blog">Blog Category Wide</Link>
                      </li>
                      <li className="py-1">
                       <Link to="/blog">Blog Product  Layout</Link>
                      </li>

                    </div>
                  </div>
                </li>
                <li className="navDropLink border-b border-gray-300 py-2 w-full">
                   <button onClick={() => toggleMenu("pages")} className="flex   justify-between items-center gap-x-10 ">
                     <div className="text-nowrap" >
                       <span  >pages</span>
                     </div>
                     <div className=" pl-12 w-4 ">
                     <FaChevronDown className={` ${menuOpen.pages? "": "rotate-180"} font-thin `} />
                     </div>
                   </button>
                  <div >
                    <div
                     className={`bg-white text-sm    w-full p-4 font-medium my-1 transform duration-500   text-gray-700 ${
                      menuOpen.pages ? "block" : "hidden"
                    }`}>
                      <li className="py-1">
                       <Link to="/about" className="w-full">About Us</Link>
                      </li>
                      <li className="py-1">
                        <Link to="/contact">Contact </Link>
                      </li>
                      <li className="py-1">
                       <Link to="/account">My Account</Link>
                      </li>
                      <li className="py-1">
                       <Link to="/register">Login/Register</Link>
                      </li>
                      <li className="py-1">
                       <Link to="/purchaseGuide">Purchase Guide </Link>
                      </li>
                      <li className="py-1">
                       <Link to="/privacy">Privacy Policy </Link>
                      </li>
                      <li className="py-1">
                       <Link to="/terms">Terms Of Services</Link>
                      </li>
                      <li className="py-1">
                       <Link to="/*">404 Page </Link>
                      </li>

                    </div>
                  </div>
                </li>
                <li className="navDropLink border-b border-gray-300 py-2 w-full">
                   <button onClick={() => toggleMenu("language")} className="flex   justify-between items-center gap-x-10 ">
                     <div className="text-nowrap" >
                       <Link to="/" >Language</Link></div>
                     <div className=" pl-6 w-4 ">
                     <FaChevronDown className={` ${menuOpen.language? "": "rotate-180"} font-thin `} />
                     </div>
                   </button>
                  <div >
                    <div
                     className={`bg-white text-sm    w-full p-4 font-medium my-1 transform duration-500   text-gray-700 ${
                      menuOpen.language ? "block" : "hidden"
                    }`}>
                      <li className="py-1">
                       <Link to="/blog" className="w-full">English</Link>
                      </li>
                      <li className="py-1">
                        <Link to="/blog">French</Link>
                      </li>
                      <li className="py-1">
                       <Link to="/blog">German</Link>
                      </li>
                      <li className="py-1">
                       <Link to="/blog">Spanish</Link>
                      </li>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="mt-12 pl-4 text-secondary hover:text-gray-600 my-2 text-sm">
               <Link to="/contact"> Our location</Link>
            </li>
            <li className=" text-secondary pl-4 hover:text-gray-600 my-2 text-sm">
               <Link to="/contact"> Log In /Sign Up</Link>
            </li>
            <li className=" text-secondary pl-4 hover:text-gray-600 my-2 text-sm">
               <Link to="/contact"> (+01) - 2345 - 6789 </Link>
            </li>

            <li className="mt-12 pl-4 pb-20">
              <h4 className="text-gray-400 text-lg"> Follow Us </h4>
              <div className="socialIcons flex text-gray-600 gap-1 mt-2">
                <span>
                  <img src={facebookIcon} className="w-5 h-5  text-gray-600" alt="sj" />
                </span>
                 <span>
                  <img src={twitterIcon} className="w-5 h-5  text-gray-600" alt="dj" />
                </span>
                <span>
                  <img src={instagramIcon} className="w-5 h-5  text-gray-600" alt="facebook" />
                </span>
                <span>
                  <img src={pinterestIcon} className="w-5 h-5  text-gray-600" alt="facebook" />
                </span>
                <span>
                  <img src={youtubeIcon} className="w-5 h-5  text-gray-600" alt="facebook" />
                </span>
                
              </div>
            </li>



          </ul>
        </div>
      </Drawer>
    </Box>
  );
}
