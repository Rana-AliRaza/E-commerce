import React from 'react';
import PathBar from '../PathBar';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img1 from "../../assets/pics/purchasedImg-1.jpg";
import { IoIosSearch } from "react-icons/io";
import { blogImg } from '../../Data';
import img2 from "../../assets/pics/blog-3.jpg";
import img3 from "../../assets/pics/blog-4.jpg";
import img4 from "../../assets/pics/blog-5.jpg";
import img5 from "../../assets/pics/blog-6.jpg";
import img6 from "../../assets/pics/banner-11.jpg";

import { Link } from "react-router-dom";

import { FaArrowRightLong } from 'react-icons/fa6';






const PurchaseGuide = () => {

  const pathElement = <>
    <span className='flex'>
      <span className='mx-2 flex items-center'>
        <MdOutlineKeyboardArrowRight />
      </span>
      Pages
      <span className='mx-2 flex items-center'>
        <MdOutlineKeyboardArrowRight />
      </span>
      Login/Register
    </span>
  </>
  return (
    <div className='purchasedGuideSection'>
      <PathBar path={pathElement} />
      <div className="purchaseGuide px-2   w-11/12 sm:w-4/5 lg:w-11/12 xl:w-10/12 lg:px-2 xl:px-4 mx-auto py-10 grid grid-cols-12 gap-4">
        <div className="contentBar col-span-12 lg:col-span-9 py-4 pr-3">
          <h4 className=' text-3xl  md:text-4xl font-medium'>Purchase Guide </h4>
          <ul className='flex gap-4  py-6  justify-start list-disc text-gray-500 border-b border-gray-300'>
            <p className='mr-2'>By John </p>
            <li className=' ml-1 mr-2'> 18 May  2024</li>
            <li className='px-2'> 8 mins read </li>
            <li className='px-2'> 29k Views</li>
          </ul>
          <div className="purchasedImg py-4 mt-4">
            <img src={img1} className='rounded-lg' alt="purchased image1" />
          </div>
          <div className="purchasedGuideDesc">
            <div className="point1">
              <h4 className='text-4xl font-semibold font-spartan   py-4'> 1. Account Registering</h4>
              <p className="w-11/12 text-gray-600"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi asperiores facere, corrupti pariatur eos praesentium molestias veritatis exercitationem alias.</p>
              <ul className='list-circle mt-3 pl-4 text-gray-600'>
                <li className='py-1'>Name (required)</li>
                <li className='py-1'>Age (required)</li>
                <li className='py-1'>Date of birth (required)</li>
                <li className='py-1'>Passport/ ID no. (required)</li>
                <li className='py-1'>Current career (required)</li>
                <li className='py-1'>Mobile phone numbers (required)</li>
                <li className='py-1'>Email address (required)</li>
                <li className='py-1'>Hobbies & interests (optional)</li>
                <li className='py-1'>Social profiles (optional)</li>
              </ul>
            </div>
            <div className="point2 mt-3">
              <h4 className='text-4xl font-semibold font-spartan   py-4'> 2. Select Product</h4>
              <p className="w-11/12 text-gray-600"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia necessitatibus repellat placeat aut enim recusandae assumenda adipisci quisquam, deserunt iure veritatis cupiditate modi aspernatur accusantium, mollitia doloribus. Velit, iste.</p>
            </div>
            <div className="point3 mt-3">
              <h4 className='text-4xl font-semibold font-spartan   py-4'>3. Confirm Order Content</h4>
              <p className="w-11/12 text-gray-600"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ut autem sed! Assumenda, nostrum non doloribus tenetur, pariatur veritatis harum natus ipsam maiores dolorem repudiandae laboriosam, cupiditate odio earum eum?</p>
            </div>
            <div className="point4 mt-3 ">
              <h4 className='text-4xl font-semibold font-spartan   py-4'>4.Transaction Completed </h4>
              <p className="w-11/12 text-gray-600"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt nam aut magnam libero aspernatur eaque praesentium? Tempore labore quis neque? Magni.</p>
            </div>
            <div className="point5">
              <h4 className='text-4xl font-semibold font-spartan   py-4'> 5. Accepted Credit Cards</h4>

              <ul className='list-circle mt-3 pl-4 text-gray-600'>
                <li className='py-1'>Visa</li>
                <li className='py-1'>Mastercards</li>
                <li className='py-1'>American Express</li>
                <li className='py-1'>Discover</li>
                <li className='py-1 list-none text-gray-700'>*Taxes are calculated by your local bank and location.</li>
              </ul>
            </div>
            <div className="point6">
              <h4 className='text-4xl font-semibold font-spartan   py-4'>6. Download and Setup</h4>

              <ul className='list-circle mt-3 pl-4 text-gray-600'>
                <li className='py-1'>Updated content on a regular basis</li>
                <li className='py-1'>Secure & hassle-free payment</li>
                <li className='py-1'>1-click checkout</li>
                <li className='py-1'>Easy access & smart user dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 col-span-12 px-3">
          <div className="input flex items-center justify-center w-full py-1 pl-5 h-11 border border-gray-300 rounded-sm">
            <input type="text" placeholder='Search...' className='  outline-none ' />
            <button className='px-3 text-gray-600'> <IoIosSearch /> </button>
          </div>
          <div className="categories">
            <h4 className='text-2xl py-4 border-b border-gray-300 my-3'> Categories </h4>
            <ul className='text-gray-600'>
              <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                <Link to="/technology" className='text-secondary'> Beauty </Link>
                <span> (3) </span>
              </li>
              <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                <Link to="/technology" className='text-secondary'> Book </Link>
                <span> (6) </span>
              </li>
              <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                <Link to="/technology" className='text-secondary'> Design </Link>
                <span> (4) </span>
              </li>
              <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                <Link to="/technology" className='text-secondary'> Fashion </Link>
                <span> (3) </span>
              </li>
              <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                <Link to="/technology" className='text-secondary'> LifeStyle</Link>
                <span> (6) </span>
              </li>
              <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                <Link to="/technology" className='text-secondary'> Travel </Link>
                <span> (2) </span>
              </li>
            </ul>
          </div>
          <div className="trending mt-4">
            <h4 className='text-xl py-2 border-b border-gray-300'> TRENDING NOW</h4>
            <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
              <img src={blogImg.blog1} className='rounded-md transform hover:scale-105 duration-300 overflow-hidden' alt="blog1" />
            </div>
            <h4 className='text-xl font-semibold text-gray-800 py-2'>The litigants on the screen are not actors</h4>
            <ul className='list-disc text-sm text-gray-500 flex'>
              <li className='list-none'>25 April</li>
              <li className='ml-8'>126k Views</li>
            </ul>
          </div>
          <div className="subTrending mt-3 grid grid-cols-2 gap-4">
            <div className='subTrending1'>
              <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                <img src={img2} className='rounded-md transform hover:scale-105 duration-300 overflow-hidden' alt="blog1" />
              </div>
              <h4 className='text-medium font-semibold text-gray-800 py-2'>Water Partners With Rag & Bone To Consume</h4>
              <ul className='list-disc text-sm text-gray-500 flex'>
                <li className='list-none text-nowrap mr-1'>25 April</li>
                <li className='ml-4'>126k Views</li>
              </ul>
            </div>
            <div className='subTrending2'>
              <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                <img src={img3} className='rounded-md transform hover:scale-105 duration-300 overflow-hidden' alt="blog3" />
              </div>
              <h4 className='text-medium font-semibold text-gray-800 py-2'>The loss is not all that surprising</h4>
              <ul className='list-disc text-sm text-gray-500 flex'>
                <li className='list-none text-nowrap mr-1'>25 April</li>
                <li className='ml-4'>126k Views</li>
              </ul>
            </div>
            <div className='subTrending3'>
              <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                <img src={img4} className='rounded-md transform hover:scale-105 duration-300 overflow-hidden' alt="blog4" />
              </div>
              <h4 className='text-medium font-semibold text-gray-800 py-2'>We got a right to pick a little fight, Bonanza</h4>
              <ul className='list-disc text-sm text-gray-500 flex'>
                <li className='list-none text-nowrap mr-1'>25 April</li>
                <li className='ml-4'>126k Views</li>
              </ul>
            </div>
            <div className='subTrending4'>
              <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                <img src={img5} className='rounded-md transform hover:scale-105 duration-300 overflow-hidden' alt="blog1" />
              </div>
              <h4 className='text-medium font-semibold text-gray-800 py-2'>My entrance exam was on a book of matches</h4>
              <ul className='list-disc text-sm text-gray-500 flex'>
                <li className='list-none text-nowrap mr-1'>25 April</li>
                <li className='ml-4'>126k Views</li>
              </ul>
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
          <div className="tags mt-8">
            <h4 className='text-xl pb-4 border-b-2 border-gray-200'>POPULAR TAGS</h4>
            <div className="flex flex-wrap mt-3 gap-2">
              <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> beautiful </button>
              </Link>
              <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> New York </button>
              </Link>
              <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> droll </button>
              </Link>
              <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> intimate </button>
              </Link>
              <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> loving </button>
              </Link>
              <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> travel </button>
              </Link>
              <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> fighting </button>
              </Link>

            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default PurchaseGuide
