import React from 'react';
import "../../styles/footer.css";
import { icons } from '../../Data';


const FooterMail = () => {
  return (
    <div className='footerMail w-full py-10 flex items-center  '  >
        <div className=' p-2  xl:px-4 w-full sm:w-11/12  mx-auto'>

          <div className=" grid  grid-cols-2 sm:grid-cols-4 gap-2 ">

            <div className="emails flex flex-wrap justify-center col-span-2 lg:col-span-1 ">
             <div className='footerMailImg flex items-center'> 
              <img src={icons.emailIcon} className=' text-red-500 w-10' alt="Email Icon" />
             </div>
             <h4 className="text-xl w-1/2 px-2 font-semibold leading-tight">Sign up to 
               <span className='sm:inline-block block my-0 py-0'> Newsletter  </span>
             </h4>
            </div>

            <div className="emailDesc col-span-2 lg:col-span-2 w-fit mx-auto">
              <h4 className='font-medium'> ...and receive $25 coupon for first shopping.</h4>
            </div>

            </div>

            <div className="inputEmails flex col-span-4 lg:col-span-2">
               <input type="email" placeholder='Enter your email' className='inputEmail px-4 py-2 my-2 lg:px-3 lg:py-1 w-11/12' />
               <button className=' px-4 py-2 my-2 lg:px-3 lg:py-1   flex emailSubcribeBtn'>Subcribe</button>
            </div>





        </div>
    </div >
  )
}

export default FooterMail