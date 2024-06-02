import React from 'react';
import { TfiWorld } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import '../../styles/header.css';
import flag1 from "../../assets/pics/ingland_flag.png";
import flag2 from "../../assets/pics/flag2.png";
import flag3 from "../../assets/pics/flag3.png";
import { Link } from 'react-router-dom';



const DropBtn = () => {
  return (
    <div >
        <button className='flex items-center relative navDropBtn'>
              <TfiWorld/>
              <span className='mx-1'>
                  English
              </span>
              <FaAngleDown/>
        </button>
        <ul className='p-4 bg-slate-50 navDropList'>
            <li className='flex gap-2 m-2'>
              <img src={flag1} alt="flag"></img>
             <Link to="/">  Francais </Link>
            </li>
            <li className='flex gap-2 m-2'>
              <img src={flag2} alt="flag"></img>
              <Link to="/">  Deutch </Link>
            </li>
            <li className='flex gap-2 m-2'>
              <img src={flag3} alt="flag"></img>
              <Link to="/"> PyycckNN </Link>
            </li>
        </ul>
    </div>
  )
}

export default DropBtn