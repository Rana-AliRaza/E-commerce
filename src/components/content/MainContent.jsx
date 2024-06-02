import React from 'react';
import Features from './Features';
import Products from './Products';
import Banner from './Banner';
import MultiCarousel from './MultiCarousel';
import MultiBanner from "./MutliBanner";
import MultiCarousel2 from './MultiCarousel2';
import DealBanner from './DealBanner';
import Brands from './Brands';
import MonthlySellingCarousel from './MonthlySellingCarousel';
import BlogBanner from './BlogBanner';
import MotherDayBanner from './MotherDayBanner';
import OverviewProducts from './OverviewProducts';
import Footer from '../footer/Footer';


const MainContent = () => {
  return (
    <div className=''>
     <div className='content p-2  xl:px-4 w-full sm:w-11/12  mx-auto py-10'>
      <Features />
      <Products/>
      <Banner/>
      <MultiCarousel/>
      <MultiBanner/>
      <MultiCarousel2/>
      <DealBanner/>
      <Brands/>
      <MonthlySellingCarousel/>
      <BlogBanner/>
      <MotherDayBanner/>
      <OverviewProducts/>
     </div>
     
      
    </div>
  )
}

export default MainContent