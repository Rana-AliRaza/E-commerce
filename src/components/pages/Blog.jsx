import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import PathBar from "../PathBar";
import { blogImg } from "../../Data";
import img1 from "../../assets/pics/blogs/blog-2.jpg"
import img2 from "../../assets/pics/blog-3.jpg";
import img3 from "../../assets/pics/blog-4.jpg";
import img4 from "../../assets/pics/blog-5.jpg";
import img5 from "../../assets/pics/blog-6.jpg";
import img6 from "../../assets/pics/banner-11.jpg";
import img7 from "../../assets/pics/blog-3-1.jpg";
import img8 from "../../assets/pics/blog-4-1.jpg";
import img9 from "../../assets/pics/blog-8.jpg";
import img10 from "../../assets/pics/blog-9.jpg";

import { IoIosSearch } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaBookmarkSolid } from "react-icons/lia";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { BiMessageDetail } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuClock8 } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { RiArrowRightDoubleLine } from "react-icons/ri";

import { Link } from "react-router-dom";





const Blog = () => {
  const pathElement = (
    <>
      <span className="flex">
        <span className="mx-2 flex items-center">
          <MdOutlineKeyboardArrowRight />
        </span>
        Blog
        <span className="mx-2 flex items-center">
          <MdOutlineKeyboardArrowRight />
        </span>
        Technology
      </span>
    </>
  );
  return (
    <div className="blogSection">
      <PathBar path={pathElement} />
      <div className="purchaseGuide px-2 my-12   w-11/12 sm:w-4/5 lg:w-11/12 xl:w-10/12 lg:px-2 xl:px-4 mx-auto  grid grid-cols-12 gap-4">
        <div className="contentBar col-span-12 lg:col-span-9  px-3">
          <h4 className=" text-4xl  md:text-6xl text-secondary  font-semibold">
            Our Blog{" "}
          </h4>
          <ul className="flex gap-4  py-6 text-sm  justify-start list-disc text-gray-700 ">
            <p className="mr-2">32 Sub Categories </p>
            <li className=" ml-1  mr-2"> 1020k Article</li>
            <li className="px-2"> 480 Authors </li>
            <li className="px-2"> 29M Views</li>
          </ul>
          <div className="mainBlog border border-text-gray-300">
            <div className="purchasedImg rounded-sm py-4 mt-4 overflow-hidden relative">
              <img
                src={img5}
                className="rounded-sm duration-300 hover:scale-105 translate "
                alt="purchased image1"
              />
              <div className="bookmarks w-8 h-8 flex items-center justify-center rounded-md absolute bottom-4 right-5 bg-black ">
                <LiaBookmarkSolid className="text-gray-200 font-semibold" />
              </div>
            </div>
            <div className="entryContent p-8 rounded-sm ">
              <div className="entryMeta justify-between flex flex-1 text-gray-600">
                <Link
                  to="/blog"
                  className="flex gap-2 text-sm items-center text-secondary "
                >
                  <FaRegCircle className="w-2" />
                  MOBILE PHONE
                </Link>
                <div className="flex">
                  <span className="flex gap-2 text-sm items-center mx-2">
                    <MdOutlineRemoveRedEye className="ml-2" />
                    23k
                  </span>
                  <span className="flex gap-2 text-sm items-center mx-2">
                    <BiMessageDetail className="ml-2" />
                    17k
                  </span>
                  <span className="flex gap-2 text-sm items-center mx-2">
                    <GoShareAndroid className="ml-2" />
                    18k
                  </span>
                </div>
              </div>
              <h4 className="text-4xl py-3">
                {" "}
                Barcelona: marathan; south korean pulls away for a grueling
                surprise
              </h4>
              <p className="text-gray-500 text-sm my-2">
                {" "}
                These people envy me for having a lifestyle they don’t have, but
                the truth is, sometimes I envy their lifestyle instead.
                Struggling to sell one multi-million dollar home currently.
              </p>
              <div className="flex justify-between ">
                <p className="text-gray-500 text-sm ">
                  By Azimeto 12/07/2022 09:35 EST 8 mins read
                  <br />
                  Updated 18/08/2022 07:12 EST
                </p>
                <button className="py-2 px-5 flex bg-secondary transform duration-300 hover:bg-hoverBtn rounded-sm text-white items-center ">
                  Read more
                  <FaLongArrowAltRight className="ml-2 " />
                </button>
              </div>
            </div>
          </div>

          <div className="subBlog gap-4 mt-4 grid grid-cols-1 lg:grid-cols-2  ">
            <div className="subBlog1 transform translate hover:-translate-y-1 duration-300 px-3 border border-text-gray-300">
              <div className="purchasedImg rounded-sm pb-4 mt-4 overflow-hidden relative">
                <img
                  src={img1}
                  className="rounded-sm duration-300 hover:scale-105 translate "
                  alt="purchased image1"
                />
                <div className="bookmarks w-6 h-4 flex items-center justify-center rounded-sm absolute top-4 left-10 bg-black ">
                   <span className="py-2 px-4 ml-2 text-sm text-white bg-secondary rounded-md"> Politics </span>
                </div>
              </div>
              <div className="entryContent p-5 rounded-sm ">

                <h4 className="text-2xl py-1 text-secondary">
                  {" "}
                  The litigants on the screen are not actors
                </h4>
                <p className="text-gray-500 text-sm my-2  ">
                  {" "}
                    These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.
                </p>
                <div className="flex mt-4 text-gray-600 text-sm justify-between">
                  <div className="flex">
                   <span className="flex items-center text-sm">
                   <LuClock8/>
                   25 April 2024
                   </span>
                   <span className="flex items-center text-sm mx-2">
                   <GoDotFill className="text-gray-400"/>
                     126k Views
                   </span>
                  </div>
                  <p className="flex items-center text-sm gap-2 text-secondary ml-auto hover:shadow hover:text-hoverBtnColor">
                    Read more
                    <FaArrowRightLong/>
                  </p>
                </div>
                
              </div>
            </div>
            <div className="subBlog2 transform translate hover:-translate-y-1 duration-300 px-3 border border-text-gray-300">
              <div className="purchasedImg rounded-sm pb-4 mt-4 overflow-hidden relative">
                <img
                  src={img9}
                  className="rounded-sm duration-300 hover:scale-105 translate "
                  alt="purchased image1"
                />
                <div className="bookmarks w-6 h-4 flex items-center justify-center rounded-sm absolute top-4 left-10 bg-black ">
                   <span className="py-2 px-4 ml-2 text-sm text-white bg-secondary rounded-md"> Global </span>
                </div>
              </div>
              <div className="entryContent p-5 rounded-sm ">

                <h4 className="text-2xl py-1 hover:text-secondary">
                  {" "}
                  Essential Qualities of Highly Successful Music
                </h4>
                <p className="text-gray-600 text-sm my-2  ">
                  {" "}
                   Graduating from a top accelerator or incubator can be as career-defining for a startup founder as an elite university diploma. The intensive programmes, which
                </p>
                <div className="flex mt-4 text-gray-600 text-sm justify-between">
                  <div className="flex">
                   <span className="flex items-center text-sm">
                   <LuClock8/>
                   25 April 2024
                   </span>
                   <span className="flex items-center text-sm mx-2">
                   <GoDotFill className="text-gray-400"/>
                     126k Views
                   </span>
                  </div>
                  <p className="flex items-center text-sm gap-2 text-secondary ml-auto hover:shadow hover:text-hoverBtnColor">
                    Read more
                    <FaArrowRightLong/>
                  </p>
                </div>
                
              </div>
            </div>
            <div className="subBlog3 transform translate hover:-translate-y-1 duration-300 px-3 border border-text-gray-300">
              <div className="purchasedImg rounded-sm pb-4 mt-4 overflow-hidden relative">
                <img
                  src={img7}
                  className="rounded-sm duration-300 hover:scale-105 translate "
                  alt="blog image1"
                />
                <div className="bookmarks w-6 h-4 flex items-center justify-center rounded-sm absolute top-4 left-10 bg-black ">
                   <span className="py-2 px-4 ml-2 text-sm text-white bg-secondary rounded-md"> Sport </span>
                </div>
              </div>
              <div className="entryContent p-5 rounded-sm ">

                <h4 className="text-2xl py-1">
                  {" "}
                   9 Things I Love About Shaving My Head                </h4>
                <p className="text-gray-600 text-sm my-2  ">
                  {" "}
                    At the Emmys, broadcast scripted shows created by people of color gained ground relative to those pitched by White show creators, while broadcast scripted shows.                </p>
                <div className="flex mt-4 text-gray-600 text-sm justify-between">
                  <div className="flex">
                   <span className="flex items-center text-sm">
                   <LuClock8/>
                   25 April 2024
                   </span>
                   <span className="flex items-center text-sm mx-2">
                   <GoDotFill className="text-gray-400"/>
                     126k Views
                   </span>
                  </div>
                  <p className="flex items-center text-sm gap-2 text-secondary ml-auto hover:shadow hover:text-hoverBtnColor">
                    Read more
                    <FaArrowRightLong/>
                  </p>
                </div>
                
              </div>
            </div>
            <div className="subBlog4 transform translate hover:-translate-y-1 duration-300 px-3 border border-text-gray-300">
              <div className="purchasedImg rounded-sm pb-4 mt-4 overflow-hidden relative">
                <img
                  src={img8}
                  className="rounded-sm duration-300 hover:scale-105 translate "
                  alt="purchased image1"
                />
                <div className="bookmarks w-6 h-4 flex items-center justify-center rounded-sm absolute top-4 left-10 bg-black ">
                   <span className="py-2 px-4 ml-2 text-sm text-white bg-secondary rounded-md"> Technology </span>
                </div>
              </div>
              <div className="entryContent p-5 rounded-sm ">

                <h4 className="text-2xl py-1">
                  {" "}
                   Why Teamwork Really Makes The Dream Work                </h4>
                <p className="text-gray-500 text-sm my-2 text-2xl ">
                  {" "}
                   We live in a world where disruption and dynamism reign supreme and businesses must be ready to adapt to the many unpredictable changes that come with this.                </p>
                <div className="flex mt-4 text-gray-600 text-sm justify-between">
                  <div className="flex">
                   <span className="flex items-center text-sm">
                   <LuClock8/>
                   25 April 2024
                   </span>
                   <span className="flex items-center text-sm mx-2">
                   <GoDotFill className="text-gray-400"/>
                     126k Views
                   </span>
                  </div>
                  <p className="flex items-center text-sm gap-2 text-secondary ml-auto hover:shadow hover:text-hoverBtnColor">
                    Read more
                    <FaArrowRightLong/>
                  </p>
                </div>
                
              </div>
            </div>
            <div className="subBlog5 transform translate hover:-translate-y-1 duration-300 px-3 border border-text-gray-300">
              <div className="purchasedImg rounded-sm pb-4 mt-4 overflow-hidden relative">
                <img
                  src={img4}
                  className="rounded-sm duration-300 hover:scale-105 translate "
                  alt="purchased image1"
                />
                <div className="bookmarks w-6 h-4 flex items-center justify-center rounded-sm absolute top-4 left-10 bg-black ">
                   <span className="py-2 px-4 ml-2 text-sm text-white bg-secondary rounded-md"> Watch </span>
                </div>
              </div>
              <div className="entryContent p-5 rounded-sm ">

                <h4 className="text-2xl py-1">
                  {" "}
                   The World Caters to Average People
                </h4>
                <p className="text-gray-500 text-sm my-2 text-2xl ">
                  {" "}
                   These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell oney.                </p>
                <div className="flex mt-4 text-gray-600 text-sm justify-between">
                  <div className="flex">
                   <span className="flex items-center text-sm">
                   <LuClock8/>
                   25 April 2024
                   </span>
                   <span className="flex items-center text-sm mx-2">
                   <GoDotFill className="text-gray-400"/>
                     126k Views
                   </span>
                  </div>
                  <p className="flex items-center text-sm gap-2 text-secondary ml-auto hover:shadow hover:text-hoverBtnColor">
                    Read more
                    <FaArrowRightLong/>
                  </p>
                </div>
                
              </div>
            </div>
            <div className="subBlog6 transform translate hover:-translate-y-1 duration-300 px-3 border border-text-gray-300">
              <div className="purchasedImg rounded-sm pb-4 mt-4 overflow-hidden relative">
                <img
                  src={img10}
                  className="rounded-sm duration-300 hover:scale-105 translate "
                  alt="purchased image1"
                />
                <div className="bookmarks w-6 h-4 flex items-center justify-center rounded-sm absolute top-4 left-10 bg-black ">
                   <span className="py-2 px-4 ml-2 text-sm text-white bg-secondary rounded-md"> Politic </span>
                </div>
              </div>
              <div className="entryContent p-5 rounded-sm ">

                <h4 className="text-2xl py-1">
                  {" "}
                  Essential Qualities of Highly Successful Music
                </h4>
                <p className="text-gray-500 text-sm my-2 text-2xl ">
                  {" "}
                   Graduating from a top accelerator or incubator can be as career-defining for a startup founder as an elite university diploma. The intensive programmes, which...                </p>
                <div className="flex mt-4 text-gray-600 text-sm justify-between">
                  <div className="flex">
                   <span className="flex items-center text-sm">
                   <LuClock8/>
                   25 April 2024
                   </span>
                   <span className="flex items-center text-sm mx-2">
                   <GoDotFill className="text-gray-400"/>
                     126k Views
                   </span>
                  </div>
                  <p className="flex items-center text-sm gap-2 text-secondary ml-auto hover:shadow hover:text-hoverBtnColor">
                    Read more
                    <FaArrowRightLong/>
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="pagesNo mt-4 py-2">
                        <Link to="/blog">
                            <span className='p-2 bg-secondary font-semibold rounded-md text-white'> 01 </span>
                        </Link>
                        <span className='p-2 mx-1 text-gray-600 hover:bg-secondary hover:font-semibold rounded-md hover:text-white'> 02 </span>
                        <span className='p-2 mx-1 text-gray-600 hover:bg-secondary hover:font-semibold rounded-md hover:text-white'> 03 </span>
                        <span className='p-2 mx-1 text-gray-600 hover:bg-secondary hover:font-semibold rounded-md hover:text-white'> ... </span>
                        <span className='p-2 mx-1 text-gray-600 hover:bg-secondary hover:font-semibold rounded-md hover:text-white'> 16 </span>
                        <span className='p-2 inline mx-1 text-gray-600 hover:bg-secondary rounded-s-md rounded-e-full hover:font-semibold rounded-md hover:text-white'>
                            <RiArrowRightDoubleLine className='w-4 h-4 inline' />
                        </span>
                    </div>
        </div>
        <div className="lg:col-span-3 col-span-12 px-3">
          <div className="input flex items-center justify-center w-full py-1  h-11 border border-gray-300 rounded-sm">
            <input
              type="text"
              placeholder="Search..."
              className="  outline-none "
            />
            <button className="px-3 text-gray-600">
              {" "}
              <IoIosSearch />{" "}
            </button>
          </div>
          <div className="categories">
            <h4 className="text-2xl py-4 border-b border-gray-300 my-3">
              {" "}
              Categories{" "}
            </h4>
            <ul className="text-gray-600">
              <li className="py-2 flex justify-between border-b border-dotted border-gray-300  items-center">
                <Link to="/technology" className="text-secondary">
                  {" "}
                  Beauty{" "}
                </Link>
                <span> (3) </span>
              </li>
              <li className="py-2 flex justify-between border-b border-dotted border-gray-300  items-center">
                <Link to="/technology" className="text-secondary">
                  {" "}
                  Book{" "}
                </Link>
                <span> (6) </span>
              </li>
              <li className="py-2 flex justify-between border-b border-dotted border-gray-300  items-center">
                <Link to="/technology" className="text-secondary">
                  {" "}
                  Design{" "}
                </Link>
                <span> (4) </span>
              </li>
              <li className="py-2 flex justify-between border-b border-dotted border-gray-300  items-center">
                <Link to="/technology" className="text-secondary">
                  {" "}
                  Fashion{" "}
                </Link>
                <span> (3) </span>
              </li>
              <li className="py-2 flex justify-between border-b border-dotted border-gray-300  items-center">
                <Link to="/technology" className="text-secondary">
                  {" "}
                  LifeStyle
                </Link>
                <span> (6) </span>
              </li>
              <li className="py-2 flex justify-between border-b border-dotted border-gray-300  items-center">
                <Link to="/technology" className="text-secondary">
                  {" "}
                  Travel{" "}
                </Link>
                <span> (2) </span>
              </li>
            </ul>
          </div>
          <div className="trending mt-4">
            <h4 className="text-xl py-2 border-b border-gray-300">
              {" "}
              TRENDING NOW
            </h4>
            <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
              <img
                src={blogImg.blog1}
                className="rounded-md transform hover:scale-105 duration-300 overflow-hidden"
                alt="blog1"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 py-2">
              The litigants on the screen are not actors
            </h4>
            <ul className="list-disc text-sm text-gray-500 flex">
              <li className="list-none">25 April</li>
              <li className="ml-8">126k Views</li>
            </ul>
          </div>
          <div className="subTrending mt-3 grid grid-cols-2 gap-4">
            <div className="subTrending1">
              <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                <img
                  src={img2}
                  className="rounded-md transform hover:scale-105 duration-300 overflow-hidden"
                  alt="blog1"
                />
              </div>
              <h4 className="text-medium font-semibold text-gray-800 py-2">
                Water Partners With Rag & Bone To Consume
              </h4>
              <ul className="list-disc text-sm text-gray-500 flex">
                <li className="list-none text-nowrap mr-1">25 April</li>
                <li className="ml-4">126k Views</li>
              </ul>
            </div>
            <div className="subTrending2">
              <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                <img
                  src={img3}
                  className="rounded-md transform hover:scale-105 duration-300 overflow-hidden"
                  alt="blog3"
                />
              </div>
              <h4 className="text-medium font-semibold text-gray-800 py-2">
                The loss is not all that surprising
              </h4>
              <ul className="list-disc text-sm text-gray-500 flex">
                <li className="list-none text-nowrap mr-1">25 April</li>
                <li className="ml-4">126k Views</li>
              </ul>
            </div>
            <div className="subTrending3">
              <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                <img
                  src={img4}
                  className="rounded-md transform hover:scale-105 duration-300 overflow-hidden"
                  alt="blog4"
                />
              </div>
              <h4 className="text-medium font-semibold text-gray-800 py-2">
                We got a right to pick a little fight, Bonanza
              </h4>
              <ul className="list-disc text-sm text-gray-500 flex">
                <li className="list-none text-nowrap mr-1">25 April</li>
                <li className="ml-4">126k Views</li>
              </ul>
            </div>
            <div className="subTrending4">
              <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                <img
                  src={img5}
                  className="rounded-md transform hover:scale-105 duration-300 overflow-hidden"
                  alt="blog1"
                />
              </div>
              <h4 className="text-medium font-semibold text-gray-800 py-2">
                My entrance exam was on a book of matches
              </h4>
              <ul className="list-disc text-sm text-gray-500 flex">
                <li className="list-none text-nowrap mr-1">25 April</li>
                <li className="ml-4">126k Views</li>
              </ul>
            </div>
          </div>

          <div className="purchaseBanner hidden lg:block w-full mt-8 relative">
            <img
              src={img6}
              className="rounded-sm  px-2 w-full"
              alt="monthly sale banner"
            />
            <div className="sellingBannerDes absolute top-16 left-4">
              <h4 className="text-slate-600">Woman Zone </h4>
              <h2 className=" text-black w-2/3 text-xl my-2 transition duration-300 hover:translate-x-1">
                Save 17% on Clothing
              </h2>
              <Link to="/" className=" inline-block transition-all group ">
                <div className="flex text-sm text-secondary">
                  <span>Shop Now</span>
                  <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2">
                    {" "}
                    <FaArrowRightLong className="text-sm" />{" "}
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="tags mt-8">
            <h4 className="text-xl pb-4 border-b-2 border-gray-200">
              POPULAR TAGS
            </h4>
            <div className="flex flex-wrap mt-3 gap-2">
              <Link
                to="/technology"
                className="rounded-md border flex items-center justify-center border-gray-300"
              >
                <button className="py-2 px-4 border-none"> beautiful </button>
              </Link>
              <Link
                to="/technology"
                className="rounded-md border flex items-center justify-center border-gray-300"
              >
                <button className="py-2 px-4 border-none"> New York </button>
              </Link>
              <Link
                to="/technology"
                className="rounded-md border flex items-center justify-center border-gray-300"
              >
                <button className="py-2 px-4 border-none"> droll </button>
              </Link>
              <Link
                to="/technology"
                className="rounded-md border flex items-center justify-center border-gray-300"
              >
                <button className="py-2 px-4 border-none"> intimate </button>
              </Link>
              <Link
                to="/technology"
                className="rounded-md border flex items-center justify-center border-gray-300"
              >
                <button className="py-2 px-4 border-none"> loving </button>
              </Link>
              <Link
                to="/technology"
                className="rounded-md border flex items-center justify-center border-gray-300"
              >
                <button className="py-2 px-4 border-none"> travel </button>
              </Link>
              <Link
                to="/technology"
                className="rounded-md border flex items-center justify-center border-gray-300"
              >
                <button className="py-2 px-4 border-none"> fighting </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
