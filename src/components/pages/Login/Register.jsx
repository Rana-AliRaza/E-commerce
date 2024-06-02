import React from 'react'
import PathBar from '../../PathBar';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoBook } from "react-icons/go";



const Register = () => {
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
    <div className='loginSection '>
        <PathBar path={pathElement} />
        <div className='w-full lg:w-11/12 lg:px-2 xl:px-4 mx-auto'>
          <div className=" py-40 px-20 grid grid-cols-1 gap-4 lg:grid-cols-2 ">
            <div className="loginCard h-fit  w-full lg:w-4/5 py-10 pb-20 px-2  sm:px-4 lg:px-4  rounded-lg border border-gray-300 ">
                <h4 className='text-4xl font-semibold my-4'> Login</h4>
               <input type="text" className="pl-5 w-full py-2 bg-white rounded-md outline-none border border-gray-300 mb-4" placeholder='Your Email' />
               <input type="password" className="pl-5 w-full block border border-gray-300 py-2 bg-white rounded-md outline-none mb-4" placeholder='Password' />
               <div className="flex justify-between">
                <span>
                 <input type="checkbox" className='text-xl' name='checkMe' id='checkMe'/>
                 <label htmlFor="checkMe" className='text-lg text-gray-400 font-semibold'> Remember me </label>
                </span>
               <a href="/register"  className='text-lg  text-gray-400 font-semibold'> Forgot password?</a>
               </div>
               <div className="viewMoreBtn mt-6 flex justify-start">
            <button className='px-12 py-4 font-semibold text-white bg-secondary transition-translate hover:-translate-y-1 hover:bg-hoverBtnColor duration-300 rounded-md  '> Log in </button>
          </div>
            </div>
            <div className="registerCard w-full py-10 pb-20 px-2  sm:px-4 lg:px-8 xl:px-12  rounded-lg border border-gray-300 ">
                <h4 className='text-4xl font-semibold my-4'> Create an Account</h4>
                <p className='py-10 text-lg text-gray-600'> Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
               <input type="text" className="pl-5 w-full py-2 bg-white rounded-md outline-none border border-gray-300 mb-4" placeholder='Username' />
               <input type="text" className="pl-5 w-full py-2 bg-white rounded-md outline-none border border-gray-300 mb-4" placeholder=' Email' />
               <input type="password" className="pl-5 w-full block border border-gray-300 py-2 bg-white rounded-md outline-none mb-4" placeholder='Password' />
               <input type="password" className="pl-5 w-full block border border-gray-300 py-2 bg-white rounded-md outline-none mb-4" placeholder='Confirm Password' />
               <div className="flex justify-between">
                <span>
                 <input type="checkbox" className='text-xl' name='checkMe' id='checkMe'/>
                 <label htmlFor="checkMe" className='text-lg text-gray-400 font-semibold'> I agree to terms & Policy.</label>
                </span>
               <a href="/register"  className=' flex items-baseline'>
                <span className='text-gray-400'> <GoBook/></span>
                <span className='text-secondary ml-2 text-lg'>Learn more</span> 
               </a>
               </div>
            <div className="loginBtn mt-6 flex justify-start">
             <button className='px-6 py-4 text-xl  text-white bg-secondary transition-translate hover:-translate-y-1 hover:bg-hoverBtnColor duration-300 rounded-md  '> 
               Submit & Register
             </button>
           </div>

          <div className="registerDevider w-full flex items-center py-10">
          <div className="flex  flex-grow border-b-2 border-gray-200 ">
          </div>
          <span className='mx-2 text-gray-400 text-xl'> OR </span>
          <div className="flex flex-grow border-b-2 border-gray-200">
          </div>
        </div>

         <div className="loginBtns flex flex-wrap gap-4 justify-center py-4">
             <button className='px-6 py-4 text-xl  text-white bg-blue-500 transition-translate hover:-translate-y-1  duration-300 rounded-md  '> 
               Login With Facebook
             </button>
             <button className='px-6 py-4 text-xl  text-white bg-red-500 transition-translate hover:-translate-y-1  duration-300 rounded-md  '> 
               Login With Google
             </button>
         </div>

         <p className='mx-auto text-center mt-10 text-xl text-gray-400'> 
            Already have an account? 
            <span className='text-secondary'> Sign in now</span>
         </p>


            </div>


          </div>

        </div>
        


    </div>
  )
}

export default Register