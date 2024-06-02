import React from 'react'
import PathBar from '../PathBar';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img1 from "../../assets/pics/blog-10.jpg";
import { IoIosSearch } from "react-icons/io";
import { blogImg } from '../../Data';
import img2 from "../../assets/pics/blog-3.jpg";
import img3 from "../../assets/pics/blog-4.jpg";
import img4 from "../../assets/pics/blog-5.jpg";
import img5 from "../../assets/pics/blog-6.jpg";
import img6 from "../../assets/pics/banner-11.jpg";

import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from "react-router-dom";




const Terms = () => {
    const pathElement = <>
    <span className='flex'>
        <span className='mx-2 flex items-center'>
            <MdOutlineKeyboardArrowRight />
        </span>
        Pages
        <span className='mx-2 flex items-center'>
            <MdOutlineKeyboardArrowRight />
        </span>
        Terms Of Service
    </span>
</>
  return (
    <div className='termsSection '>
       <PathBar path={pathElement} />
       <div className="purchaseGuide px-2   w-11/12 sm:w-4/5 lg:w-11/12 xl:w-10/12 lg:px-2 xl:px-4 mx-auto py-10 grid grid-cols-12 gap-4">
        <div className="contentBar col-span-12 lg:col-span-9 py-4 pr-3">
          <h4 className=' text-3xl  md:text-4xl font-medium'>Terms of Service  </h4>
          <ul className='flex gap-4  py-6  justify-start list-disc text-gray-500 border-b border-gray-300'>
            <p className='mr-2'>By John </p>
            <li className=' ml-1 mr-2'> 18 May  2024</li>
            <li className='px-2'> 8 mins read </li>
            <li className='px-2'> 96k Views</li>
          </ul>
          <div className="purchasedImg py-4 mt-4">
            <img src={img1} className='rounded-lg' alt="purchased image1" />
          </div>
          <div className="termsDesc text-gray-600 mt-3">
            <p className='py-2'>
               Please read these Terms of Service (“Terms”, “Terms of Service”) carefully before using the https://Evara.com website (the “Service”) operated by Evara (“us”, “we”, or “our”).
            </p>
            <p className='py-2'>
               Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
            </p>
            <p className='py-2'>
               By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>
          </div>
          <div className="purchasedGuideDesc">
            <div className="">
              <h4 className='text-3xl  font-spartan   py-4'> Rights & restrictions</h4>
              <ul className='list-decimal  pl-4 text-gray-600'>
                <li className='py-1'>Members must be at least 18 years of age.</li>
                <li className='py-1'>Members are granted a time-limited, non-exclusive, revocable, nontransferable, and non-sublicensable right to access that portion of the online course corresponding to the purchase.</li>
                <li className='py-1'>The portion of the online course corresponding to the purchase will be available to the Member as long as the course is maintained by the Company, which will be a minimum of one year after Member’s purchase.</li>
                <li className='py-1'>The videos in the course are provided as a video stream and are not downloadable.</li>
                <li className='py-1'>By agreeing to grant such access, the Company does not obligate itself to maintain the course, or to maintain it in its present form.
                </li>
              </ul>
              <h4 className='text-3xl  font-spartan   py-4'> Links To Other Web Sites </h4>
              <p className='py-2'>
                 Our Service may contain links to third-party web sites or services that are not owned or controlled by Evara.
              </p>
              <p className='py-1'>
                Evara has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Evara shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </p>
              <p className='py-1'>
                We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
              </p>
              <h4 className='text-3xl  font-spartan   py-4 mt-2'> Termination</h4>
                <p className='py-1'>
                  We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className='py-1'>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                </p>

              <h4 className='text-3xl  font-spartan   py-4 mt-2'> Governing Law</h4>
              <p className='py-1'>
                 These Terms shall be governed and construed in accordance with the laws of Viet Nam, without regard to its conflict of law provisions.
              </p>
              <p className='py-1'>
                 Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
              </p>

              <h4 className='text-3xl  font-spartan   py-4 mt-2'> Changes</h4>
              <p className='py-1'>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className='py-1'>
                 By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
              <h4 className='text-3xl  font-spartan   py-4 mt-2'> Changes</h4>
              <p className='py-1'>
                 By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>











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
                <Link href="/technology" className='text-secondary'> Beauty </Link>
                <span> (3) </span>
              </li>
              <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                <Link href="/technology" className='text-secondary'> Book </Link>
                <span> (6) </span>
              </li>
              <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                <Link href="/technology" className='text-secondary'> Design </Link>
                <span> (4) </span>
              </li>
              <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                <Link href="/technology" className='text-secondary'> Fashion </Link>
                <span> (3) </span>
              </li>
              <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                <Link href="/technology" className='text-secondary'> LifeStyle</Link>
                <span> (6) </span>
              </li>
              <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                <Link href="/technology" className='text-secondary'> Travel </Link>
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
              <Link href="/" className=" inline-block transition-all group ">
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
              <Link href="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> beautiful </button>
              </Link>
              <Link href="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> New York </button>
              </Link>
              <Link href="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> droll </button>
              </Link>
              <Link href="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> intimate </button>
              </Link>
              <Link href="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> loving </button>
              </Link>
              <Link href="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> travel </button>
              </Link>
              <Link href="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                <button className='py-2 px-4 border-none'> fighting </button>
              </Link>

            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Terms