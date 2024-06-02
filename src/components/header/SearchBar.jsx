import React from 'react';
import "../../styles/header.css";
import { FaCaretDown } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";



const SearchBar = () => {
  return (
    <div className='searchBar text-slate-600 w-full'>
        <p> All Categories </p>
        <span> <FaCaretDown/> </span>
        <span> <HiSearch size={25}/> </span>
         <input type="text" className=" font-bold" placeholder='Search for items...'  />
    </div>
  )
}

export default SearchBar