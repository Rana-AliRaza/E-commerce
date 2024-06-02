import React from 'react';
import img from "../../assets/pics/404.png";
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className='errorSection h-full'>
      <div className='purchaseGuide px-2   w-11/12 sm:w-4/5 lg:w-11/12 xl:w-10/12 lg:px-2 xl:px-4 mx-auto py-10 '>
        <div className='items-center flex flex-col h- container max-w-screen-lg'>
          <div className="img transform hover:-translate-y-2 duration-300">
            <img src={img} alt="error pic" />
          </div>
          <h4 className='text-4xl py-4'>Page Not Found</h4>
          <p className="py-2 w-3/5 px-4 mx-auto text-center text-gray-600">
            The link you clicked may be broken or the page may have been removed.visit the
            <span> 
              <Link to="/" className='text-secondary mx-2'>
                Homepage
              </Link>
            </span>
            or
            <span>
              <Link to="/contact" className='text-secondary mx-2'>
                Contact us
              </Link>
            </span>
            about the problem
          </p> 

          <input type="text" placeholder='search ' className='pl-5 py-2 w-4/5 lg:w-2/5 rounded-md transform duration-300 my-4 hover:-translate-y-2  outline-none border border-gray-300' />
          <button className='px-8 py-3 hover:bg-hoverBtnColor mt-4 duration-300 transform hover:-translate-y-2 bg-secondary rounded-md'>
            <Link to="/" className='text-white font-semibold'>
              Back to Home Page
            </Link> 
          </button>
        </div>

      </div>
      </div>
  )
}

export default Error