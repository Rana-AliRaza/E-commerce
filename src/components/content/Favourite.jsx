import React from 'react';
import { productsImg } from '../../Data';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { FaHeadset } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";



const Favourite = () => {
  return (
    <section className='py-10'>
      <div className="favourite py-10 h-screen px-2 xl:px-4 w-11/12 mx-auto flex items-center justify-center overflow-x-auto">
        {/* Desktop/Tablet View */}
        <table className="favouriteLayout1 w-full border-collapse border border-gray-300 hidden md:table">
          <thead>
            <tr>
              <th className='col-span-2 border-collapse border border-gray-300 py-2' colSpan={2}>Product</th>
              <th className='border border-gray-300 py-4 '>Price</th>
              <th className='border border-gray-300 py-2'>Stock Status</th>
              <th className='border border-gray-300' >Action</th>
              <th className='border border-gray-300'>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300'>
                <div className="product-img p-2">
                  <img src={productsImg.product1A} className='mx-auto w-40' alt="products1" />
                </div>
              </td>
              <td className='border border-gray-300'>
                <div className="productDes text-center">
                  <h4 className='font-semibold text-secondary mx-auto'>J.Crew Mercantile Women's Short-Sleeve</h4>
                  <p>Maboriasam in tonto nesciung eget  <span className='block'>distiny magndabiates.</span></p>
                </div>
              </td>
              <td className='border border-gray-300 text-center'>
                <p className="price">$65.00</p>
              </td>
              <td className='border border-gray-300 text-center '>
                <p className="price ">In Stock</p>
              </td>
              <td className='border border-gray-300 text-center px-2'>
                <button className='rounded-md flex bg-secondary text-white px-3 py-3 mx-auto hover:'>
                  <ShoppingBagOutlinedIcon />
                  <span className='mx-2'> Add to Cart</span>
                </button>
              </td>
              <td className='border border-gray-300 text-center'>
                <ShoppingBagOutlinedIcon />
              </td>
            </tr>
            <tr>
              <td className='border border-gray-300'>
                <div className="product-img p-2">
                  <img src={productsImg.product2A} className='mx-auto w-40' alt="products1" />
                </div>
              </td>
              <td className='border border-gray-300'>
                <div className="productDes text-center">
                  <h4 className='font-semibold text-secondary mx-auto'>Amazon Essentials Women 's Tank</h4>
                  <p>Sit as ipsum amet cita no est,<span className='block'>set amet sadipscing et gubergen</span></p>
                </div>
              </td>
              <td className='border border-gray-300 text-center'>
                <p className="price">$75.00</p>
              </td>
              <td className='border border-gray-300 text-center '>
                <p className="price ">In Stock</p>
              </td>
              <td className='border border-gray-300 text-center px-2'>
                <button className='rounded-md flex bg-secondary text-white px-3 py-3 mx-auto hover:'>
                  <ShoppingBagOutlinedIcon />
                  <span className='mx-2'> Add to Cart</span>
                </button>
              </td>
              <td className='border border-gray-300 text-center'>
                <ShoppingBagOutlinedIcon />
              </td>
            </tr>
            <tr>
              <td className='border border-gray-300'>
                <div className="product-img p-2">
                  <img src={productsImg.product3A} className='mx-auto w-40' alt="products1" />
                </div>
              </td>
              <td className='border border-gray-300'>
                <div className="productDes text-center">
                  <h4 className='font-semibold text-secondary mx-auto'>Amazon Brand - Daily Ritual Women's Jersey</h4>
                  <p>Erat emet et et amet diam diam et et. <span>justo amet at doloe  </span></p>
                </div>
              </td>
              <td className='border border-gray-300 text-center'>
                <p className="price">$62.00</p>
              </td>
              <td className='border border-gray-300 text-center '>
                <p className="price text-red-500"> Out of Stock</p>
              </td>
              <td className='border border-gray-300 text-center px-2'>
                <button className='rounded-md flex bg-btnColor  text-white px-3 py-3 mx-auto '>
                  <FaHeadset className='flex items-center justify-center' />
                  <span className='mx-2 '> Contact</span>
                </button>
              </td>
              <td className='border border-gray-300 text-center'>
                <MdDeleteOutline className='text-2xl  mx-auto' />
              </td>
            </tr>           </tbody>
        </table>

        {/* Mobile View */}
        <div className='   px-2 xl:px-4  mx-auto flex items-center justify-center'>
          <table className="favouriteLayout1 overflow-y-hidden  w-full border-collapse block md:hidden" >
            <tbody>

              <tr>
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
                    <span className='font-medium'> Stock </span>
                    <span> In Stock</span>
                  </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8 py-2">
                    <span className='font-medium flex items-center'> Cart </span>
                    <button className='rounded-md flex bg-secondary text-white px-2 py-2 mx-auto hover:'>
                      <ShoppingBagOutlinedIcon />
                      <span className='mx-2 '> Add to Cart</span>
                    </button>                </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8 py-2">
                    <span className='font-medium'> Remove </span>
                    <span>
                      <ShoppingBagOutlinedIcon />
                    </span>
                  </p>




                </td>
              </tr>
              <tr>
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
                    <span className='font-medium'> Stock </span>
                    <span> In Stock</span>
                  </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8 py-2">
                    <span className='font-medium flex items-center'> Cart </span>
                    <button className='rounded-md flex bg-secondary text-white px-2 py-2 mx-auto hover:'>
                      <ShoppingBagOutlinedIcon />
                      <span className='mx-2 '> Add to Cart</span>
                    </button>                </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8 py-2">
                    <span className='font-medium'> Remove </span>
                    <span>
                      <ShoppingBagOutlinedIcon />
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
                    <span className='font-medium'> Stock </span>
                    <span> In Stock</span>
                  </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8 py-2">
                    <span className='font-medium flex items-center'> Cart </span>
                    <button className='rounded-md flex bg-secondary text-white px-2 py-2 mx-auto hover:'>
                      <ShoppingBagOutlinedIcon />
                      <span className='mx-2 '> Add to Cart</span>
                    </button>                </p>
                  <p className="price flex justify-between border border-gray-300 w-full px-8 py-2">
                    <span className='font-medium'> Remove </span>
                    <span>
                      <ShoppingBagOutlinedIcon />
                    </span>
                  </p>

                </td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </section>
  )
}

export default Favourite;




