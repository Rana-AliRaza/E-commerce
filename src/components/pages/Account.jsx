import React from 'react'
import PathBar from '../PathBar';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { TbShoppingCartCopy } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";



const Account = () => {
  const [renderItem, setRenderItem] = React.useState("dashboard");
  const pathElement = <>
    <span className='flex'>
      <span className='mx-2 flex items-center'>
        <MdOutlineKeyboardArrowRight />
      </span>
      Pages
      <span className='mx-2 flex items-center'>
        <MdOutlineKeyboardArrowRight />
      </span>
      Account
    </span>
  </>
  // const renderLinkAfter = " bg-secondary text-gray-100";
  // const renderLinkBefore = " bg-white text-gray-600";
  return (
    <div>
      <PathBar path={pathElement} />
      <section className="account w-full lg:w-11/12 lg:px-2 xl:px-4 mx-auto py-40 flex justify-center items-center">
        <div className="accountLayout container  mx-3  grid grid-cols-1 md:grid-cols-12  px-4 w-4/5">
          <div className="sidebar text-gray-600 md:col-span-4 border border-gray-300 rounded-md items-start h-fit">
            <button className={`flex ${renderItem === "dashboard" ? "bg-secondary text-gray-100 " : "text-gray-600 "} items-baseline gap-2 py-4 px-8 rounded-tl-md rounded-tr-md   border-b border-gray-300 w-full`} onClick={() => setRenderItem("dashboard")}>
              <span> <VscSettings className='rotate-90 ' /> </span>
              Dashboard

            </button>
            <button className={`flex ${renderItem === "order" ? "bg-secondary text-gray-100 " : "text-gray-600 "} items-baseline gap-2 py-4 px-8    border-b border-gray-300 w-full`} onClick={() => setRenderItem("order")}>
              <span> <HiOutlineShoppingBag /> </span>
              Orders
            </button>
            <button className={`flex ${renderItem === "track" ? "bg-secondary text-gray-100 " : "text-gray-600 "} items-baseline gap-2 py-4 px-8    border-b border-gray-300 w-full`} onClick={() => setRenderItem("track")}>
              <span> <TbShoppingCartCopy /> </span>
              Track Your Order
            </button>
            <button className={`flex ${renderItem === "address" ? "bg-secondary text-gray-100 " : "text-gray-600 "} items-baseline gap-2 py-4 px-8    border-b border-gray-300 w-full`} onClick={() => setRenderItem("address")}>
              <span> <CiLocationOn /> </span>
              My Address
            </button>
            <button className={`flex ${renderItem === "accountDetails" ? "bg-secondary text-gray-100 " : "text-gray-600 "} items-baseline gap-2 py-4 px-8    border-b border-gray-300 w-full`} onClick={() => setRenderItem("accountDetails")}>
              <span> <VscAccount /> </span>
              Account Details
            </button>
            <button className='flex items-baseline gap-2 py-4 px-8 border-t   border-gray-300 w-full' onClick={() => setRenderItem("logout")}>
              <Link to="/register" className='flex items-baseline gap-2 h-fit'>
                <span> <IoIosLogOut /> </span>
                Logout
              </Link>
            </button>

          </div>
          <div className="content col-span-8 px-3  ">
            {
              renderItem === "dashboard" && <div className="dashboard border border-gray-300 rounded-md w-full">
                <h2 className='p-4 w-full rounded-tl-md rounded-tr-md  border-b border-gray-300  font-semibold' style={{ background: "#F7F8F9" }}> Hello Rosie!</h2>
                <p className="p-4"> From your account dashboard. you can easily check & view your recent orders, manage your
                  <Link to="/account" className='text-secondary'> shipping and billing addresses </Link>
                  and
                  <Link to="/account" className='text-secondary'> edit your password and account details.</Link>
                </p>
              </div>
            }
            {
              renderItem === "order" && <div className="dashboard  border border-gray-300 rounded-md w-full">
                <h2 className=' w-full p-4 rounded-tl-md rounded-tr-md  border-b border-gray-300  font-semibold' style={{ background: "#F7F8F9" }}> Hello Rosie!</h2>
                <div className='p-4'>
                  <table className='border border-gray-300 w-full  border-collapse'>
                    <thead>
                      <tr className='border border-gray-300 '>
                        <td className='border border-gray-300 p-3 font-semibold'>Order</td>
                        <td className='border border-gray-300 p-3 font-semibold '>Date</td>
                        <td className='border border-gray-300 p-3 font-semibold'>Status</td>
                        <td className='border border-gray-300 p-3 font-semibold'>Total</td>
                        <td className='border border-gray-300 p-3 font-semibold'>Actions</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='border border-gray-300 p-2 font-medium'> #2468</td>
                        <td className='border border-gray-300 p-2 font-medium'> June 29, 2020</td>
                        <td className='border border-gray-300 p-2 font-medium'> Completed</td>
                        <td className='border border-gray-300 p-2 font-medium'> $364.00 for 5 item</td>
                        <td className='border border-gray-300 p-2 font-medium'> <Link to="/account" className='text-secondary'> View </Link></td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2 font-medium'> #2366</td>
                        <td className='border border-gray-300 p-2 font-medium'> August 02, 2020</td>
                        <td className='border border-gray-300 p-2 font-medium'> Completed</td>
                        <td className='border border-gray-300 p-2 font-medium'> $280.00 for 3 item</td>
                        <td className='border border-gray-300 p-2 font-medium'> <Link to="/account" className='text-secondary'> View </Link></td>
                      </tr>
                      <tr>
                        <td className='border border-gray-300 p-2 font-medium'> #1357</td>
                        <td className='border border-gray-300 p-2 font-medium'> March 45, 2020</td>
                        <td className='border border-gray-300 p-2 font-medium'> Processing</td>
                        <td className='border border-gray-300 p-2 font-medium'> $125.00 for 2 item</td>
                        <td className='border border-gray-300 p-2 font-medium'> <Link to="/account" className='text-secondary'> View </Link></td>
                      </tr>
                    </tbody>
                  </table>

                </div>



              </div>
            }
            {
              renderItem === "track" && <div className="dashboard  border border-gray-300 rounded-md w-full">
                <h2 className=' w-full p-4 rounded-tl-md rounded-tr-md  border-b border-gray-300  font-semibold' style={{ background: "#F7F8F9" }}> Orders tracking</h2>
                <div className='p-4'>
                  <p className='text-gray-600'> To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                  <div className='trackInfo py-8'>
                    <label htmlFor="id" className='text-gray-600 ' >Order ID</label>
                    <input type="text" name='id' className='py-2 mt-2 mb-4 pl-4 block outline-none w-4/5 focus:border-secondary border' placeholder='Found in your order confirmation email' />
                    <label htmlFor="email" className='text-gray-600 ' >Billing email</label>
                    <input type="text" name='id' className='py-2 mt-2 mb-4 pl-4 block outline-none w-4/5 focus:border-secondary border' placeholder='Email you used during checkout' />
                    <button className='rounded-md text-white bg-secondary py-3 px-10 hover:bg-hoverBtnColor my-4'>Track</button>
                  </div>

                </div>



              </div>
            }
            {
              renderItem === "address" && <div className="dashboard  w-full px-3">
                <div className="addresses grid grid-cols-2 gap-4">
                   <div className="billingAddress border border-gray-300 rounded-md">
                     <h2 className='p-4 w-full rounded-tl-md rounded-tr-md  border-b border-gray-300  font-semibold' style={{ background: "#F7F8F9" }}> Billing Address</h2>
                     <div className='p-4 text-gray-600'>
                       <p>3522 Interstate</p>
                       <p>75 Business Spur,</p>
                       <p>Sault Ste.</p>
                       <p>Marie, MI 49783</p>
                       <p>New York</p>
                       <p> <button className='text-secondary'>
                         Edit
                       </button>
                        </p>

                     </div>
                   </div>
                   <div className="billingAddress border border-gray-300 rounded-md">
                     <h2 className='p-4 w-full rounded-tl-md rounded-tr-md  border-b border-gray-300  font-semibold' style={{ background: "#F7F8F9" }}> Shipping Address</h2>
                     <div className='p-4 text-gray-600'>
                       <p>3522 Interstate</p>
                       <p>75 Business Spur,</p>
                       <p>Sault Ste.</p>
                       <p>Marie, MI 49783</p>
                       <p>New York</p>
                       <p> <button className='text-secondary'>
                         Edit
                       </button>
                        </p>

                     </div>
                   </div>

                </div>
              </div>
            }
            {
              renderItem === "accountDetails" && <div className="dashboard border border-gray-300 rounded-md w-full">
                <h2 className='p-4 w-full rounded-tl-md rounded-tr-md  border-b border-gray-300  font-semibold' style={{ background: "#F7F8F9" }}> Account Details </h2>
                <p className="p-4 text-gray-600"> 
                    Already have an account?
                    <Link to="/register" className='text-secondary'> Log in instead!</Link>
                </p>
                <div className="accountForm p-4  py-6 text-gray-600">
                  <form action="" >
                    <div className='grid w-full grid-cols-2 gap-4'>
                      <div>
                        <label htmlFor="fName"> First Name * </label>
                        <input type="text" name='fName' required className='block w-full mt-2 mb-4 py-1.5 pl-5 pr-3  outline-none border border-gray-300' />
                      </div>
                      <div>
                        <label htmlFor="lName"> Last Name * </label>
                        <input type="text" name='lName' required className='block w-full mt-2 mb-4 py-1.5 pl-5 pr-3  outline-none border border-gray-300' />
                      </div>
                    </div>

                      <label htmlFor="lName"> Display Name * </label>
                      <input type="text" name='lName' required className='block w-full mt-2 mb-4 py-1.5 pl-5 pr-3  outline-none border border-gray-300' />
                      <label htmlFor="lName"> Email Address * </label>
                      <input type="text" name='lName' required className='block w-full mt-2 mb-4 py-1.5 pl-5 pr-3  outline-none border border-gray-300' />
                      <label htmlFor="lName"> Current Password * </label>
                      <input type="text" name='lName' required className='block w-full mt-2 mb-4 py-1.5 pl-5 pr-3  outline-none border border-gray-300' />
                      <label htmlFor="lName"> New Password  * </label>
                      <input type="text" name='lName' required className='block w-full mt-2 mb-4 py-1.5 pl-5 pr-3  outline-none border border-gray-300' />
                      <label htmlFor="lName"> Confirm Password * </label>
                      <input type="text" name='lName' required className='block w-full mt-2 mb-4 py-1.5 pl-5 pr-3  outline-none border border-gray-300' />

                      <button type='submit' className=" py-3 px-10 bg-secondary hover:bg-hoverBtn text-white font-semibold rounded-md" onSubmit={(e)=>e.preventDefault()}>
                         Save 
                      </button>

                  </form>
                </div>
              </div>
            }

          </div>
        </div>
      </section>
    </div>
  )
}

export default Account