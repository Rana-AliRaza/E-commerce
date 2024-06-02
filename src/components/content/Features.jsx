import React from 'react';
import '../../styles/content.css';

import { featuresImg } from "../../Data.jsx";

const Features = () => {

  const featureCards = [
    {
      id: 0,
      featureImg: featuresImg.feature1,
      alt: "feature Img",
      featureDes: "Free Shipping",
      desStyle: "#FDDDE4"
    },
    {
      id: 1,
      featureImg: featuresImg.feature2,
      alt: "Online Order",
      featureDes: "Online Order",
      desStyle: "#D1E8F2"
    },
    {
      id: 2,
      featureImg: featuresImg.feature3,
      alt: "feature Img",
      featureDes: "Save Money",
      desStyle: "#CDEBBC"
    },
    {
      id: 3,
      featureImg: featuresImg.feature4,
      alt: "feature Img",
      featureDes: "Promotions",
      desStyle: "#CDD4F8"
    },
    {
      id: 4,
      featureImg: featuresImg.feature5,
      alt: "feature Img",
      featureDes: "Happy Sell",
      desStyle: "#F6DBF6"
    },
    {
      id: 5,
      featureImg: featuresImg.feature6,
      alt: "feature Img",
      featureDes: "24/7 Support",
      desStyle: "#FFF2E5"
    },
  ]

  return (
    <div className=' '>
      <div className='features flex flex-wrap lg:flex-nowrap flex-1 h-full gap-4 justify-center items-center '>
      {
        featureCards.map(({id, featureImg, alt, featureDes, desStyle}) => (
         <div key={id} className="featureCards  shadow  w-full  sm:w-1/2 md:w-1/3 lg:w-1/6 lg:h-48 rounded-md transform transition-transform duration-300  hover:-translate-y-2">
            <div className="featureImg w-30 h-20 px-2 py-4 object-center mx-auto">
             <img src={featureImg} className='mx-auto' alt={alt} />
            </div>
            <div className='featureDes w-auto mx-auto my-8'>
               <h4 style={{ backgroundColor:desStyle, color:"#088178" }}  className='mt-16 py-1 px-4 rounded-sm font-bold font-spartan w-fit mx-auto    text-nowrap'>{featureDes}</h4>
            </div>
         </div>
        ))
      }

      </div>
    </div>
  )
}

export default Features