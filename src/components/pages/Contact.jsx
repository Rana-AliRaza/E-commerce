import React from 'react'
import PathBar from '../PathBar';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";



const Contact = () => {
    const pathElement = <>
        <span className='flex'>
            <span className='mx-2 flex items-center'>
                <MdOutlineKeyboardArrowRight />
            </span>
            Pages
            <span className='mx-2 flex items-center'>
                <MdOutlineKeyboardArrowRight />
            </span>
            Contact Us
        </span>
    </>
    const locations = [
        {
            id: 1,
            branch: "Office",
            address: "205 North Michigan Avenue, Suite 810",
            fullAddress: "Chicago, 60601, USA",
        },
        {
            id: 2,
            branch: "Studio",
            address: "205 North Michigan Avenue, Suite 810",
            fullAddress: "Chicago, 60601, USA",
        },
        {
            id: 3,
            branch: "Shop",
            address: "205 North Michigan Avenue, Suite 810",
            fullAddress: "Chicago, 60601, USA",
        },
    ]
    return (
        <section className="contactMain">
            <PathBar path={pathElement} />
            <div className="contactAbout h-screen-80 w-full  flex justify-center items-center" style={{ background: "#CEE8E0" }}>
                <div className="contactDes text-center">
                    <h4 className='text-xl text-secondary font-semibold'>Get in touch</h4>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 font-semibold my-2'> Let's Talk About
                        <span className='block'> Your Idea</span>
                    </h2>
                    <p className="w-full md:w-4/6 lg:w-1/2 mx-auto text-base md:text-lg mt-3 px-1 sm:px-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nihil autem nesciunt ad accusamus quaerat nostrum, nulla ratione iure totam adipisci eveniet. Iure ad nostrum beatae perspiciatis nobis.
                    </p>
                    <div className=" aboutContactsBtn flex justify-center gap-4 pt-8">
                        <button className='px-4 shadow-sm py-3 font-semibold text-white bg-secondary transition-translate border border-secondary hover:-translate-y-1 hover:bg-hoverBtnColor duration-300 rounded-md'> About Us
                        </button>
                        <button className='px-4 py-3 font-semibold  border border-secondary  text-secondary shadow-sm transition-translate hover:-translate-y-1  duration-300 rounded-md'> Support  Center
                        </button>
                    </div>
                </div>
            </div>
            <div className="location p-10 pb-4 my-4 md:p-20 w-full items-center border-b border-gray-300">
                <iframe
                    className='w-full'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597332.069925257!2d65.21827697753908!3d28.297730414924146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393741be3c12b745%3A0x3ad13de2484b842!2sVirtual%20Soft%20pvt%20ltd!5e0!3m2!1sen!2s!4v1715843104889!5m2!1sen!2s"
                    width="600"
                    height="450"
                    title="google map"
                    style={{ border: 0 }}
                    allowFullScreen="no"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="locationOffices grid grid-cols-1 md:grid-cols-3 mt-3">
                 {
                    locations.map(({ id, branch, address, fullAddress })=>(
                        <div className='text-gray-700' key={id}>
                            <h4 className='text-secondary text-xl font-semibold my-4'> {branch}</h4>
                            <p>{address} </p>
                            <p>{fullAddress}</p>
                            <p>
                                <span className='mr-1 border-b border-gray-700 border-dotted'> Phone:</span>
                                (123) 456-7890
                            </p>
                            <p>
                                <span className='mr-1 border-b border-gray-700 border-dotted'> Email:</span>
                                contact@Evara.com
                            </p>
                            <button className='px-4 mt-3 items-baseline py-3 font-semibold  border border-secondary  text-secondary shadow-sm transition-translate hover:-translate-y-1  duration-300 rounded-md flex gap-x-2'> 
                             <span> <CiLocationOn className=''/> </span> View map
                            </button>
                        </div>
                    ))
                 }

                </div>

            </div>
            <div className="contactUs p-2 sm:p-10 md:p-20">
                <div className="contactForm text-center mx-auto w-full sm:w-4/5  xl:w-3/5">
                    <h4 className=" text-2xl lg:text-3xl font-semibold my-2"> Drop Us a Line </h4>
                    <p className=" text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 py-8 gap-4'>
                        <input type="text" className='rounded-md px-4 py-3 outline-none border border-gray-300  focus:border-secondary' placeholder='First Name ' />
                        <input type="text" className='rounded-md px-4 py-3 outline-none border border-gray-300  focus:border-secondary' placeholder='First Name ' />
                        <input type="text" className='rounded-md px-4 py-3 outline-none border border-gray-300  focus:border-secondary' placeholder='First Name ' />
                        <input type="text" className='rounded-md px-4 py-3 outline-none border border-gray-300  focus:border-secondary' placeholder='First Name ' />
                    </div>
                    <textarea name="message" className='w-full h-40 border outline-none border-gray-300 rounded-md p-4 focus:border-secondary' id="message" placeholder='message'>
                            
                    </textarea>
                    <button className='px-6 mt-4 shadow-sm py-3 font-semibold text-white bg-secondary  border border-secondary hover:bg-hoverBtnColor  rounded-md'> 
                     Send message
                        </button>
                </div>

            </div>

        </section>
    )
}

export default Contact