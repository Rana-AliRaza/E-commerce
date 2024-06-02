import React, { useState } from 'react';
import { productsImg } from '../../Data';
import { MdDeleteOutline } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { HiFingerPrint } from "react-icons/hi2";
import { PiShuffleAngularFill } from "react-icons/pi";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ReactFlagsSelect from "react-flags-select";
import { IoMdClipboard } from "react-icons/io";
import PathBar from '../PathBar';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";






const Cart = () => {
  const [selected, setSelected] = useState("");
  const [quantities, setQuantities] = useState([1, 2, 1]);
  const pathElement = <>
    <span className='flex'>
      <span className='mx-2 flex items-center'>
        <MdOutlineKeyboardArrowRight />
      </span>
        Shop
      <span className='mx-2 flex items-center'>
        <MdOutlineKeyboardArrowRight />
      </span>
        Your Cart
    </span>
  </>

  const addHandler = (index) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index]++;
      return newQuantities;
    });
  };

  const reduceHandler = (index) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index]--;
      }
      return newQuantities;
    });
  };


  return (
    <>
      <PathBar path={pathElement} />
      <div className='lg:w-11/12  px-2 sm:px-4 lg:px-8 xl:px-8 mx-auto CartSection flex flex-col items-center justify-center'>

        {/* For desktop */}
        <table className="favouriteLayout1  w-full border-collapse border-t my-10 border-b border-gray-300 hidden md:block">
          <thead>
            <tr>
              <th className='col-span-2 border-collapse border-t border-b border-gray-300 py-2' colSpan={2}>Product</th>
              <th className='border-t border-b border-gray-300 py-4 '>Price</th>
              <th className='border-t border-b border-gray-300 py-2'>Quantity</th>
              <th className='border-t border-b border-gray-300' >Subtotal</th>
              <th className='border-t border-b border-gray-300'>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border-t border-b border-gray-300'>
                <div className="product-img p-2">
                  <img src={productsImg.product1A} className='mx-auto w-40' alt="products1" />
                </div>
              </td>
              <td className='border-t border-b border-gray-300'>
                <div className="productDes text-center">
                  <h4 className='font-semibold text-secondary mx-auto'>J.Crew Mercantile Women's Short-Sleeve</h4>
                  <p>Maboriasam in tonto nesciung eget  <span className='block'>distiny magndabiates.</span></p>
                </div>
              </td>
              <td className='border-t border-b border-gray-300 text-center'>
                <p className="price">$65.00</p>
              </td>
              <td className='border-t border-b border-gray-300 text-center '>
                <div className=' flex p-2 border border-gray-300 rounded-md w-fit mx-auto'>
                  <button onClick={() => reduceHandler(0)}><MdOutlineKeyboardArrowDown /></button>
                  <span className='mx-2'> {quantities[0]}</span>
                  <button onClick={() => addHandler(0)}>  <MdKeyboardArrowUp />  </button>

                </div>
              </td>
              <td className='border-t border-b border-gray-300 text-center px-2'>
                <p>$65.00 </p>
              </td>
              <td className='border-t border-b border-gray-300 text-center'>
                <MdDeleteOutline className='text-2xl  mx-auto' />
              </td>
            </tr>
            <tr>
              <td className='border-t border-b border-gray-300'>
                <div className="product-img p-2">
                  <img src={productsImg.product2A} className='mx-auto w-40' alt="products1" />
                </div>
              </td>
              <td className='border-t border-b border-gray-300'>
                <div className="productDes text-center">
                  <h4 className='font-semibold text-secondary mx-auto'>Amazon Essentials Women 's Tank</h4>
                  <p>Sit as ipsum amet cita no est,<span className='block'>set amet sadipscing et gubergen</span></p>
                </div>
              </td>
              <td className='border-t border-b border-gray-300 text-center'>
                <p className="price">$75.00</p>
              </td>
              <td className='border-t border-b border-gray-300 text-center '>
                <div className=' flex p-2 border border-gray-300 rounded-md w-fit mx-auto'>
                  <button onClick={() => reduceHandler(1)}><MdOutlineKeyboardArrowDown /></button>
                  <span className='mx-2'> {quantities[1]}</span>
                  <button onClick={() => addHandler(1)}>  <MdKeyboardArrowUp />  </button>

                </div>
              </td>
              <td className='border-t border-b border-gray-300 text-center px-2'>
                <p> $150.00</p>
              </td>
              <td className='border-t border-b border-gray-300 text-center'>
                <MdDeleteOutline className='text-2xl  mx-auto' />
              </td>
            </tr>
            <tr>
              <td className='border-t border-b border-gray-300'>
                <div className="product-img p-2">
                  <img src={productsImg.product3A} className='mx-auto w-40' alt="products1" />
                </div>
              </td>
              <td className='border-t border-b border-gray-300'>
                <div className="productDes text-center">
                  <h4 className='font-semibold text-secondary mx-auto'>Amazon Brand - Daily Ritual Women's Jersey</h4>
                  <p>Erat emet et et amet diam diam et et. <span>justo amet at doloe  </span></p>
                </div>
              </td>
              <td className='border-t border-b border-gray-300 text-center'>
                <p className="price">$62.00</p>
              </td>
              <td className='border-t border-b border-gray-300 text-center '>
                <div className='w-fit flex p-2 border border-gray-300 rounded-md w-fit mx-auto'>
                  <button onClick={() => reduceHandler(2)}><MdOutlineKeyboardArrowDown /></button>
                  <span className='mx-2'> {quantities[2]}</span>
                  <button onClick={() => addHandler(2)}>  <MdKeyboardArrowUp />  </button>

                </div>
              </td>         <td className='border-t border-b border-gray-300 text-center px-2'>
                <p> $62.00</p>
              </td>
              <td className='border-t border-b border-gray-300 text-center'>
                <MdDeleteOutline className='text-2xl  mx-auto' />
              </td>
            </tr>
          </tbody>
        </table>

        {/* For Mobile */}
        <div className='   px-2 xl:px-4   flex items-center justify-center'>
          <table className="favouriteLayout1 overflow-y-hidden  w-full border-collapse block md:hidden " style={{ width: "100%" }} >
            <tbody>

              <tr >
                <td className='border border-gray-300 my-4'>
                  <div className="product-img p-2 border border-bottom-gray-300">
                    <img src={productsImg.product1A} className='mx-auto w-40' alt="products1" />
                  </div>


                  <div className="productDes text-center py-4">
                    <h4 className='font-semibold text-secondary mx-auto'>Amazon Essentials Women 's Tank</h4>
                    <p>Sit as ipsum amet cita no est,<span className='block'>set amet sadipscing et gubergen</span></p>
                  </div>


                  <p className="price flex justify-between border border-gray-300 w-full px-8">
                    <span className='font-medium'> Price </span>
                    <span> $75.00</span>
                  </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8">
                    <span className='font-medium flex items-center'> Stock </span>
                    <span>
                      <div className=' flex p-2 border border-gray-300 rounded-md w-fit mx-auto my-1'>
                        <button onClick={() => reduceHandler(0)}><MdOutlineKeyboardArrowDown /></button>
                        <span className='mx-2'> {quantities[0]}</span>
                        <button onClick={() => addHandler(0)}>  <MdKeyboardArrowUp />  </button>

                      </div>
                    </span>
                  </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8 py-2">
                    <span className='font-medium flex items-center'> Cart </span>
                    <span> $65.00 </span>
                  </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8 py-2">
                    <span className='font-medium'> Remove </span>
                    <span>
                      <MdDeleteOutline className='text-2xl  mx-auto' />
                    </span>
                  </p>




                </td>
              </tr>
              <tr >
                <td className='border border-gray-300 my-4'>
                  <div className="product-img p-2 border border-bottom-gray-300">
                    <img src={productsImg.product2A} className='mx-auto w-40' alt="products1" />
                  </div>
                  <div className="productDes text-center py-4">
                    <h4 className='font-semibold text-secondary mx-auto'>Amazon Essentials Women 's Tank</h4>
                    <p>Sit as ipsum amet cita no est,<span className='block'>set amet sadipscing et gubergen</span></p>
                  </div>

                  <p className="price flex justify-between border border-gray-300 w-full px-8">
                    <span className='font-medium'> Price </span>
                    <span> $75.00</span>
                  </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8">
                    <span className='font-medium flex items-center'> Stock </span>
                    <span>
                      <div className=' flex p-2 border border-gray-300 rounded-md w-fit mx-auto my-1'>
                        <button onClick={() => reduceHandler(0)}><MdOutlineKeyboardArrowDown /></button>
                        <span className='mx-2'> {quantities[0]}</span>
                        <button onClick={() => addHandler(0)}>  <MdKeyboardArrowUp />  </button>

                      </div>
                    </span>
                  </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8 py-2">
                    <span className='font-medium flex items-center'> Cart </span>
                    <span> $75.00 </span>
                  </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8 py-2">
                    <span className='font-medium'> Remove </span>
                    <span>
                      <MdDeleteOutline className='text-2xl  mx-auto' />
                    </span>
                  </p>

                </td>
              </tr>
              <tr>
                <td className='border border-gray-300 my-4'>
                  <div className="product-img p-2 border border-bottom-gray-300">
                    <img src={productsImg.product3A} className='mx-auto w-40' alt="products1" />
                  </div>

                  <div className="productDes text-center py-4">
                    <h4 className='font-semibold text-secondary mx-auto'>Amazon Brand - Daily Ritual Women's Jersey</h4>
                    <p>Erat emet et et amet diam diam et et. <span className='block'>justo amet at doloe  </span></p>
                  </div>

                  <p className="price flex justify-between border border-gray-300 w-full px-8">
                    <span className='font-medium'> Price </span>
                    <span> $75.00</span>
                  </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8">
                    <span className='font-medium flex items-center'> Stock </span>
                    <span>
                      <div className=' flex p-2 border border-gray-300 rounded-md w-fit mx-auto my-1'>
                        <button onClick={() => reduceHandler(0)}><MdOutlineKeyboardArrowDown /></button>
                        <span className='mx-2'> {quantities[0]}</span>
                        <button onClick={() => addHandler(0)}>  <MdKeyboardArrowUp />  </button>

                      </div>
                    </span>
                  </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8 py-2">
                    <span className='font-medium flex items-center'> Cart </span>
                    <span> $65.00 </span>
                  </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8 py-2">
                    <span className='font-medium'> Remove </span>
                    <span>
                      <MdDeleteOutline className='text-2xl  mx-auto' />
                    </span>
                  </p>

                </td>
              </tr>

            </tbody>
          </table>

        </div>


        <div className="clearCart    flex justify-end mx-2 ">
          <button className='flex items-baseline flex-baseLine text-gray-500'>
            <span className='mx-2 '><RxCross2 /></span>
            <span className=''>Clear Cart</span>
          </button>
        </div>

        <div className="CartBtns py-10 px-2 flex justify-end gap-4">
          <button className='px-4 py-3 flex gap-2 items-baseline text-white font-semibold bg-secondary rounded-md hover:bg-hoverBtnColor'>
            <PiShuffleAngularFill className='font-semibold ' />
            <span> Update Cart </span>
          </button>
          <button className='px-4 py-3 flex gap-2 items-baseline text-white font-semibold bg-secondary rounded-md hover:bg-hoverBtnColor'>
            <ShoppingBagOutlinedIcon className='font-semibold flex items-center' />
            <span className='font-semibold flex items-center my-auto'> continue Shopping </span>
          </button>

        </div>

        <div className="cartDevider w-full flex items-center">
          <div className="flex  flex-grow border-b-4 border-gray-200 ">
          </div>
          <span className='mx-2 text-gray-400 text-4xl'><HiFingerPrint /></span>
          <div className="flex flex-grow border-b-4 border-gray-200">
          </div>
        </div>
        <div className="shipping ">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className="calculateShipping   py-10">
              <h4 className='text-2xl  text-black'>Calculate Shipping</h4>
              <p> Flat rate: <span className="ml-2 text-secondary text-xl font-semibold"> 5%</span></p>
              <div className="selectCountry   ">
                <div className='w-full'>
                  <ReactFlagsSelect
                    selected={selected}
                    placeholder="choose a option...."
                    onSelect={(code) => setSelected(code)}
                  />
                  <div className="countryInput flex justify-between gap-4 my-4">
                    <input type="text" className='w-full rounded-md px-4 py-2 border outline-none border-gray-300' placeholder='State/Country' name="country" id="country" />
                    <input type="text" className='w-full rounded-md px-4 border outline-none border-gray-300 py-2' placeholder='PostCode/ZIP' name="country" id="country" />
                  </div>
                  <button className='px-4 py-3 flex gap-2 items-baseline text-white font-semibold bg-secondary rounded-md hover:bg-hoverBtnColor'>
                    <PiShuffleAngularFill className='font-semibold ' />
                    <span> Update</span>
                  </button>


                </div>
              </div>
              <div className="coupon   my-10">
                <h4 className='text-2xl text-black mb-3'> Apply Coupon</h4>
                <div className="flex gap-4">
                  <input type="text" className='w-full rounded-md px-4 py-2 border outline-none border-gray-300' placeholder='Enter Your Coupon' name="coupon" id="coupon" />
                  <Link to="/" className='flex w-fit items-baseline rounded-md bg-secondary text-white px-3 py-2'>
                    <IoMdClipboard />
                    <span className='font-semibold text-white mx-2 '> Apply </span>
                  </Link>

                </div>

              </div>
            </div>
            <div className="cartTotals    px-4 py-3 border border-gray-400 rounded-md my-10">
              <div className=''>
                <h4 className='text-3xl text-black my-3'> Cart Totals</h4>
                <div>
                  <table className='border w-full'>
                    <tbody className='border divide-gray-200'>
                      <tr >
                        <td className='p-2 border border-gray-300'>
                          <p className=' '> Cart Subtotal </p>
                        </td>
                        <td className='p-2 border border-gray-300'>
                          <p className='text-xl font-bold text-secondary'> $240.00 </p>
                        </td>
                      </tr>
                      <tr >
                        <td className='p-2 border border-gray-300'>
                          <p className=' '> Shipping </p>
                        </td>
                        <td className='p-2 border border-gray-300'>
                          <p className='font-semibold'> Free Shipping</p>
                        </td>
                      </tr>
                      <tr >
                        <td className='p-2 border border-gray-300'>
                          <p className=' '> Total </p>
                        </td>
                        <td className='p-2 border border-gray-300'>
                          <p className='text-xl font-bold text-secondary'> $240.00 </p>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                  <Link to="/" className='flex my-4 w-fit items-baseline rounded-md bg-secondary text-white px-3 py-2'>
                    <IoMdClipboard />
                    <span className='font-semibold text-white mx-2 '> Proceed to CheckOut </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default Cart