import React from 'react'
import FooterMail from './FooterMail';
import { appsImg, icons } from '../../Data';
import "../../styles/footer.css";
import paymentWay from "../../assets/pics/payment-method.png";

import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <div className=''>
      <FooterMail />

      <div className="footerBottomPart p-2 px-2  xl:px-4 w-full sm:w-11/12  mx-auto">
        <div className="footerPart py-10 grid grid-cols-6 gap-2">

          <div className="footerAddress col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2">
            <div className="footerLogo py-2">
              <img src={icons.logoIcon} className="h-8" alt="Logo" />
            </div>
            <h4 className=" text-slate-500 font-medium my-2">Contact</h4>
            <p className='text-slate-800 py-2'>
              <span className='font-semibold text-slate-700 text-lg'>Address: </span>
              562 Wellington Road, Street 32, San Francisco
            </p>

            <p className='text-slate-800 py-1'>
              <span className='font-semibold text-slate-700 text-lg '>Address: </span>
              +01 2222 365 /(+91) 01 2345 6789

            </p>

            <p className='text-slate-800 py-2'>
              <span className='font-semibold text-slate-700 text-lg'>Hours: </span>
              10:00 - 18:00, Mon - Sat
            </p>

            <div className="socialIcons">
              <p className='text-lg text-slate-500'>Follow Us</p>
              <div className="icons flex  gap-2 py-2">
                <img src={icons.facebookIcon} className='w-5 text-slate-500' alt="facebook icon" />
                <img src={icons.twitterIcon} className='w-5 text-slate-500' alt=" twitter icon" />
                <img src={icons.instagramIcon} className='w-5 text-slate-500' alt=" instagram icon" />
                <img src={icons.pinterestIcon} className='w-5 text-slate-500' alt="Pinterest icon" />
                <img src={icons.youtubeIcon} className='w-5 text-slate-500' alt="youtube Icon" />
              </div>

            </div>
          </div>

          <div className="footerAbout col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-1 ">
            <h4 className=" text-slate-800 font-semibold text-xl my-2">About</h4>
            <div className="aboutLinks  my-2">
              <Link to="/about" className='text-slate-600   block duration-300 transition-transform hover:translate-x-1 hover:text-secondary'>
                About Us
              </Link>

              <Link to="/purchaseGuide" className='text-slate-600  block duration-300 transition-transform hover:translate-x-1 hover:text-secondary my-3'>
                Delivery Information
              </Link>
              <Link to="/privacy" className='my-3 text-slate-600  block duration-300 transition-transform hover:translate-x-1 hover:text-secondary'>
                Privacy Policy
              </Link>
              <Link to="/terms" className='my-3 text-slate-600  block duration-300 transition-transform hover:translate-x-1 hover:text-secondary'>
                Terms & Condition
              </Link>
              <Link to="/contact" className='my-3 text-slate-600  block duration-300 transition-transform hover:translate-x-1 hover:text-secondary'>
                Contact Us
              </Link>
              <Link to="/privacy" className='my-3 text-slate-600  block duration-300 transition-transform hover:translate-x-1 hover:text-secondary'>
                Support  Center
              </Link>
            </div>
          </div>

          <div className="footerMyAccount col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-1">
            <h4 className=" text-slate-800 font-semibold text-xl my-2">My Account</h4>
            <div className="aboutLinks  my-2">
              <Link to="/" className='text-slate-600   block duration-300 transition-transform hover:translate-x-1 hover:text-secondary'>
                Sign In
              </Link>

              <Link to="/" className='text-slate-600  block duration-300 transition-transform hover:translate-x-1 hover:text-secondary my-3'>
                View Cart
              </Link>
              <Link to="/" className='my-3 text-slate-600  block duration-300 transition-transform hover:translate-x-1 hover:text-secondary'>
                My Wishlist
              </Link>
              <Link to="/" className='my-3 text-slate-600  block duration-300 transition-transform hover:translate-x-1 hover:text-secondary'>
                Track My Order
              </Link>
              <Link to="/" className='my-3 text-slate-600  block duration-300 transition-transform hover:translate-x-1 hover:text-secondary'>
                Help
              </Link>
              <Link to="/" className='my-3 text-slate-600  block duration-300 transition-transform hover:translate-x-1 hover:text-secondary'>
                Order
              </Link>
            </div>
          </div>

          <div className="footerApps   col-span-6 sm:col-span-3   md:col-span-3 lg:col-span-2">
            <h4 className=" text-slate-800 font-semibold text-xl my-2">Install Apps</h4>
            <p className="text-sm pt-8">From App Store or Google Play </p>
             <div className="footerApps mt-6   md:flex xl:block gap-4">
              <Link to="/" className='block py-2'>
                <img src={appsImg.appStore} className='appsImg block transition-transform hover:-translate-y-1 ' alt="App store imag" />
              </Link>
              <Link to="/" className='block py-2'>
                <img src={appsImg.googlePlay} className='appsImg block  transition-transform hover:-translate-y-1' alt="App store imag" />
              </Link>
             </div>
             <div className="footerPayments py-4">
              <p>Secured Payments Gateways</p>
              
                <div className='paymentWays my-4'>
                  <img src={paymentWay} className='w-56' alt="Payment ways images" />
                </div>
             </div>

          </div>


        </div>

         <div className='block lg:flex justify-between py-4 text-slate-700'>
          <p>2022
            <span className='text-secondary mx-2'>Evara</span>
            -HTML Ecommerce Template
          </p>
          <p >Designed by Ali Raza. All right reserved</p>
         </div>
      </div>
    </div>
  )
}

export default Footer