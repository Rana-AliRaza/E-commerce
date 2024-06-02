import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { thumbnails } from '../../Data';
import "../../styles/content.css";

const MultiCarousel = () => {

  const thumbnailImg = [
    {
      id: 1,
      thumbImg: thumbnails.thumbnail1,
      alt: "thumbnail image",
      type: "bags",
    },
    {
      id: 2,
      thumbImg: thumbnails.thumbnail2,
      alt: "thumbnail image",
      type: "Shirt",
    },
    {
      id: 3,
      thumbImg: thumbnails.thumbnail3,
      alt: "thumbnail images",
      type: "bags",
    },
    {
      id: 4,
      thumbImg: thumbnails.thumbnail4,
      alt: "thumbnail images",
      type: "Pillowcase",
    },
    {
      id: 5,
      thumbImg: thumbnails.thumbnail5,
      alt: "thumbnail images",
      type: "bags",
    },
    {
      id: 6,
      thumbImg: thumbnails.thumbnail6,
      alt: "thumbnail images",
      type: "Scarf Cap",
    },
    {
      id: 7,
      thumbImg: thumbnails.thumbnail7,
      alt: "thumbnail images",
      type: "T-Shirt",
    },
    {
      id: 8,
      thumbImg: thumbnails.thumbnail8,
      alt: "thumbnail images",
      type: "T-Shirt",
    },
    {
      id: 9,
      thumbImg: thumbnails.thumbnail9,
      alt: "thumbnail images",
      type: "Shoes",
    },
  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1023, min: 771 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 768, min: 480 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 478, min: 0 },
      items: 1
    }
  };
  return (
    <div className=" py-10">

      <Carousel responsive={responsive} 
        infinite={true}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
        >
        {
          thumbnailImg.map(({ id, thumbImg, alt, type }) => (
            <div key={id} className="multiCarouselItem p-2 m-2 rounded-2xl  ">
              <div className="multiCarouselImg p-2">
                <img src={thumbImg} className="rounded-xl " alt={alt} />
              </div>
              <h4 className='text-lg font-semibold text-slate-500 mx-auto my-4 w-fit'> {type} </h4>
            </div>
          ))
        }
      </Carousel>

    </div>
  )
}

export default MultiCarousel