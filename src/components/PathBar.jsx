import React from 'react';


const PathBar = ({ path }) => {
  return (
    <div className='h-16 px-4  w-full flex  items-center  border-t border-gray-300 mt-2 lg:mt-20' style={{ background: "#F7F8F9" }}>
      <div className='w-full lg:w-11/12 lg:px-2 xl:px-4 mx-auto'>
        <h4 className='flex text-gray-500'>
          <a href="/">
            <span className='text-secondary'>Home</span>
          </a>
          {path}

        </h4>
      </div>
    </div>
  )
}

export default PathBar