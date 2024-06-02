import React from 'react'
import PathBar from '../PathBar';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// images
import aboutImg from "../../assets/pics/about-1.png";
import member1 from "../../assets/pics/avatar-1.jpg";
import member2 from "../../assets/pics/avatar-2.jpg";
import member3 from "../../assets/pics/avatar-3.jpg";
import member4 from "../../assets/pics/avatar-4.jpg";
import member5 from "../../assets/pics/avatar-5.jpg";
import  company1 from "../../assets/pics/company-1.jpg";
import  company2 from "../../assets/pics/company-2.jpg";
import  company3 from "../../assets/pics/company-3.jpg";
//social Icons
import facebook from "../../assets/pics/svg/icon-facebook.svg";
import twitter from "../../assets/pics/svg/icon-twitter.svg";
import instagram from "../../assets/pics/svg/icon-instagram.svg";
import pinterest from "../../assets/pics/svg/icon-pinterest.svg";
import Brands from '../content/Brands';
import { Link } from "react-router-dom";

const About = () => {
  const memberProfiles = [
    {
      id: 1,
      profile: member1,
      name: "Patric Adams",
      role: "CEO & Co-Founder"
    },
    {
      id: 2,
      profile: member2,
      name: "Dilan Specter",
      role: "Head Engineer"
    },
    {
      id: 3,
      profile: member3,
      name: "Tomas Baker",
      role: "Senior Planner"
    },
    {
      id: 4,
      profile: member4,
      name: "Norton Mendos",
      role: "Project Manager"
    },
  ]
  const clientReviews = [
    {
      id: 1,
      pic: member1,
      clientName: "J.Bezos",
      role: "Adobe Jsc",
      desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."'
    },
    {
      id: 2,
      pic: member2,
      clientName: "B.Gates",
      role: "Adobe Jsc",
      desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."'
    },
    {
      id: 3,
      pic: member3,
      clientName: "B. Mayers",
      role: "Adobe Jsc",
      desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."'
    },
    {
      id: 4,
      pic: member4,
      clientName: "J.Bezos",
      role: "Adobe Jsc",
      desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."'
    },
    {
      id: 5,
      pic: member5,
      clientName: "B. Gates",
      role: "Adobe Jsc",
      desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."'
    },
    {
      id: 6,
      pic: member1,
      clientName: "B.Meyers",
      role: "Adobe Jsc",
      desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt voluptatum dicta reprehenderit accusamus voluptatibus voluptas."'
    },
  ]
  const branches = [
    {
      id: 1,
      pic: company1,
      title: "New York, USA",
      subtitle:"27 Division St, New York",
      location: "NY 10002, USA"
    },
    {
      id: 2,
      pic: company2,
      title: "Paris, France",
      subtitle:"22 Rue des Carmes ",
      location: "75005 Paris"
    },
    {
      id: 3,
      pic: company3,
      title: "Jakarta, Indonesia",
      subtitle:"2476 Raya Yogyakarta,",
      location: "89090 Indonesia"
    }
  ]
  const aboutPath = <>
    <span className='flex'>
      <span className='mx-2 flex items-center'>
        <MdOutlineKeyboardArrowRight />
      </span>
      <Link to="/shop" className='hover:text-secondary'>
        Pages
      </Link>
      <span className='mx-2 flex items-center'>
        <MdOutlineKeyboardArrowRight />
      </span>
      <Link to="/cart" className='hover:text-secondary'>
        About Us
      </Link>
    </span>
  </>
  return (
    <div>
      <PathBar path={aboutPath} />

      <div className='aboutSection py-6  w-full lg:w-11/12 lg:px-2 xl:px-4 mx-auto'>
        <div className="aboutCompany">
          <h4 className='text-secondary text-xl font-medium px-2'> OUR COMPANY </h4>
          <div className="company flex mt-2  flex-wrap p-2">
            <div className="companyDes mt-2 px-2 w-full lg:w-1/2">
              <h2 className='text-3xl lg:text-4xl xl:text-5xl font-medium mb-4 pb-4'> We are Building the Destination For Getting Things Done</h2>
              <p className='my-1  text-gray-600'> Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices purus dolor erat bibendum sapien metus.</p>
              <p className="text-gray-600"> Tempus ultricies augue luctus et ut suscipit. Morbi arcu, ultrices purus dolor erat bibendum sapien metus. Sit mi, pharetra, morbi arcu id. Pellentesque dapibus nibh augue senectus.</p>
            </div>
            <div className="companyImg px-2 w-full lg:w-1/2  my-4">
              <img src={aboutImg} alt="aboutImg" />
            </div>

          </div>
        </div>
        <div className="aboutMembers">
          <h4 className='text-xl px-2 text-secondary my-4'> OUR TEAM</h4>
          <div className="memberDes flex flex-wrap ">
            <div className="des w-full sm:w-1/2 px-2">
              <h4 className='text-4xl '> Top teams of experts</h4>
              <p className='text-gray-500'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio perferendis sequi mollitia quis autem ea cupiditate possimus!</p>
            </div>
            <div className="desBtn   mt-4 sm:mt-1 px-2 sm:mt-1 lg:p-2 text-start sm:text-end w-full sm:w-1/2">
              <button className='text-semibold text-lg hover:text-semibold text-secondary px-4 py-3 border  border-secondary rounded-md  shadow hover:shadow-secondary transition hover:-translate-y-1 '> All Members </button>
            </div>
          </div>
          <div className="memberProfiles px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">

            {
              memberProfiles.map(({ id, profile, name, role }) => (
                <div className='member1' key={id}>
                  <div className='member1Img flex justify-center'>
                    <img src={profile} className='rounded-lg  transition-translate duration-300 hover:-translate-y-2' alt="member profile" />
                  </div>
                  <p className='text-xl font-medium text-center mt-2'> {name}</p>
                  <p className='text-xl text-secondary text-center'>{role}</p>
                  <div className="socialIcons flex  py-2 justify-center ">
                    <Link to="/about">
                      <img src={facebook} className='mx-1 block w-5 opacity-60 hover:opacity-90   ' alt=" facebook icon" />
                    </Link>
                    <Link to="/about">
                      <img src={twitter} className='mx-1 block w-5 opacity-60 hover:opacity-90   ' alt=" twitter icon" />
                    </Link>
                    <Link to="/about">
                      <img src={instagram} className='mx-1 block w-5 opacity-60 hover:opacity-90   ' alt=" instagram icon" />
                    </Link>
                    <Link to="/about">
                      <img src={pinterest} className='mx-1 block w-5 opacity-60 hover:opacity-90   ' alt=" pinterest icon" />
                    </Link>
                  </div>
                </div>
                ))
            }
          </div>

        </div>
        <div className="corporation border-b border-gray-300">
          <div className="coporationDes text-center">
            <h4 className='text-xl px-2 text-center text-secondary my-4'> EVARA COPORATION</h4>
            <h2 className='text-4xl font-semibold my-2 '>
               Our main Branches
               <span className="block">
                around the world
               </span>
             </h2>
             <p className='w-5/6 lg:w-4/6 xl:w-3/6 mx-auto mt-4'> At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium. ebitis nesciunt voluptatum dicta reprehenderit accusamus</p>
          </div>
          <div className="coporationLocations grid grid-cols-1 md:grid-cols-3 gap-4 px-2 my-8">
            {
              branches.map(({id, pic, title, subtitle, location})=>(
               <div className='branch1 ' key={id}>
              <div className="branch1Img">
                <img src={pic} className='transition-transform hover:-translate-y-1 hover:border hover:border-secondary rounded-lg ' alt="company 1 pic" />
              </div>
              <div className="branchDes text-center">
                <h4 className='my-4 text-2xl font-semibold '>{title}</h4>
                <p className='text-md text-secondary '> {subtitle} </p>
                <p className='text-md text-secondary'> {location} </p>

              </div>

               </div>
              ))
            }

          </div>
        </div>
        <div className="clientReview py-10 px-2">
          <div className="clientDes text-center">
            <h4 className='text-xl px-2 text-center text-secondary my-4'> SOME FACT</h4>
            <h2 className='text-4xl font-semibold my-2 '>
               Take a look what
               <span className="block">
                our clients say about us
               </span>
             </h2>
             <p className='w-5/6 lg:w-4/6 xl:w-3/6 mx-auto mt-4'>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium. ebitis nesciunt voluptatum dicta reprehenderit accusamus</p>
          </div>
          <div className="clientCards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   my-8 gap-4">
            {
              clientReviews.map(({id, pic,clientName,role, desc })=>(
                <div className="clientCard hover:border-secondary transform-translate duration-300 shadow hover:-translate-y-2 bg-white border border-gray-400 rounded-xl p-8 grid grid-cols-5" key={id}>
             <div className="clientPic col-span-1">
              <img src={pic} alt="members profiles" />
             </div>
             <div className="cardDes col-span-4 pl-4">
                <h4 className='font-semibold text-lg'> {clientName}  </h4>
                <p className='text-gray-400  my-1'> {role} </p>
                <p className="text-gray-600">{desc}</p>
             </div>

            </div>
                
              ))
            }
          </div>
          <div className="viewMoreBtn flex justify-center">
            <button className='px-4 py-3 font-semibold text-white bg-secondary transition-translate hover:-translate-y-1 hover:bg-hoverBtnColor duration-300 rounded-md  '> View More</button>
          </div>
        </div>

        <div className="abourBrands py-6 ">
          <h4 className=' mx-auto text-2xl flex justify-center '> 
            <span className='text-secondary mr-2'> Featured</span> 
            Clients </h4>
          <Brands/>
        </div>



      </div>
    </div>
  )
}

export default About