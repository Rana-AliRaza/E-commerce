import React from 'react'
import PathBar from '../PathBar';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import img1 from "../../assets/pics/purchasedImg-1.jpg";
import { IoIosSearch } from "react-icons/io";
import { blogImg } from '../../Data';
import img2 from "../../assets/pics/blog-3.jpg";
import img3 from "../../assets/pics/blog-4.jpg";
import img4 from "../../assets/pics/blog-5.jpg";
import img5 from "../../assets/pics/blog-6.jpg";
import img6 from "../../assets/pics/banner-11.jpg";

import { Link } from "react-router-dom";


import { FaArrowRightLong } from 'react-icons/fa6';



const Privacy = () => {
    const pathElement = <>
        <span className='flex'>
            <span className='mx-2 flex items-center'>
                <MdOutlineKeyboardArrowRight />
            </span>
            Pages
            <span className='mx-2 flex items-center'>
                <MdOutlineKeyboardArrowRight />
            </span>
            Privacy Policy
        </span>
    </>
    return (
        <div className='privacySection'>
            <PathBar path={pathElement} />
            <div className="privacy px-2   w-11/12 sm:w-4/5 lg:w-11/12 xl:w-10/12 lg:px-2 xl:px-4 mx-auto py-10 grid grid-cols-12 gap-4">
                <div className="contentBar col-span-12 lg:col-span-9 py-4 pr-3">
                    <h4 className=' text-3xl  md:text-4xl font-medium'>Privacy Policy </h4>
                    <ul className='flex gap-4  py-6  justify-start list-disc text-gray-500 border-b border-gray-300'>
                        <p className='mr-2'>By John </p>
                        <li className=' ml-1 mr-2'> 18 May  2024</li>
                        <li className='px-2'> 8 mins read </li>
                        <li className='px-2'> 69k Views</li>
                    </ul>

                    <div className="purchasedGuideDesc">
                        <div className="point1">
                            <h4 className='text-3xl  font-spartan   py-4'> Welcome to Evara’s Privacy Policy</h4>
                            <ul className='list-decimal mt-3  text-gray-600'>
                                <li className='py-2 pl-4'>
                                    <p> Hi there, we’re Evara Pty Ltd (ABN 11 119 159 741) of Level 1, 121 King Street Melbourne, 3000, Australia (“Evara”) and welcome to our privacy policy which also applies to our Affiliate Companies. This policy sets out how we handle your personal information if you’re an Evara user or visitor to our Sites. It applies across Evara Elements, Evara Market, Evara Twenty20, Evara Studio, Evara Sites, Evara Tuts+ and Placeit (the “Sites”). </p>
                                </li>
                                <li className='py-2 pl-4'>
                                    <p> When we say ‘we’, ‘us’ or ‘Evara’ it’s because that’s who we are and we own and run the Sites.</p>
                                </li>
                                <li className='py-2 pl-4'>
                                    <p> If we say ‘policy’ we’re talking about this privacy policy. If we say ‘user terms’ we’re talking about the rules for using each of the Sites. The rules vary by product and each product makes them separately available and seeks consent to them separately to this policy.</p>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'> The type of personal information we collect </h4>
                                <li className='py-2 pl-4'>
                                    <p> We collect certain personal information about visitors and users of our Sites.</p>
                                </li>
                                <li className='py-2 pl-4'>
                                    <p>The most common types of information we collect include things like: user-names, member names, email addresses, IP addresses, other contact details, survey responses, blogs, photos, payment information such as payment agent details, transactional details, tax information, support queries, forum comments (if applicable), content you direct us to make available on our Sites (such as item descriptions), your actions on our Sites (including any selections or inputs into items) and web and email analytics data. We will also collect personal information from job applications (such as, your CV, the application form itself, cover letter and interview notes).</p>
                                </li>

                                <h4 className='text-3xl  font-spartan   py-4 text-black'> How we collect personal information</h4>
                                <li className='py-2 pl-4'>
                                    <p> We collect personal information directly when you provide it to us, automatically as you navigate through the Sites, or through other people when you use services associated with the Sites.</p>
                                </li>
                                <li className='py-2 pl-4'>
                                    <p> We collect your personal information when you provide it to us when you complete membership registration and buy or provide items or services on our Sites, subscribe to a newsletter, email list, submit feedback, enter a contest, fill out a survey, or send us a communication.</p>
                                </li>
                                <li className='py-2 pl-4'>
                                    <p> As the operator of digital content marketplaces, we have a legitimate interest in verifying the identity of our authors. We believe that knowing who our authors are will strengthen the integrity of our marketplaces by reducing fraud, making authors more accountable for their content and giving Evara and customers the ability to enforce contracts for authors who break the rules. Evara also has certain legal obligations that require us to know who our authors are in certain circumstances. In light of this, if you are an author we will verify your identity, in particular, your name, full address and date of birth by asking you to show us a Photo ID document. The verification procedure is called Evara Verify. Evara Verify will be carried out by our service provider Jumio Corporation located at 395 Page Mill Road, Suite 150, Palo Alto, California, USA. As part of Evara Verify, you will be asked to take a selfie which will then be compared against your Photo ID document using facial recognition technology. We will use your Photo ID document solely to carry out Evara Verify and delete it after the completion of this process.</p>
                                </li>

                                <h4 className='text-3xl  font-spartan   py-4 text-black'> Personal information we collect about you from others</h4>
                                <li className='py-2 pl-4'>
                                    <p> Although we generally collect personal information directly from you, on occasion, we also collect certain categories of personal information about you from other sources. In particular:</p>
                                    <ul className="list-alpha  mt-3">
                                        <li className='my-2'>
                                            <p> financial and/or transaction details from payment providers located in the US, UK, and Australia in order to process a transaction; </p>
                                        </li>
                                        <li className='my-2'>
                                            <p> third party service providers (like Google, Facebook) who are located in the US or UK, which may provide information about you when you link, connect, or login to your account with the third party provider and they send us information such as your registration and profile from that service, this only occurs if you are using Evara Studio. The information varies and is controlled by that service provider or as authorized by you via your privacy settings at that service provider; and </p>
                                        </li>
                                        <li className='my-2'>
                                            <p> other third party sources/and or partners from Australia, US or UK, whereby we receive additional information about you (to the extent permitted by applicable law), such as demographic data or fraud detection information, and combine it with information we have about you. For example, fraud warnings from service providers like identity verification service. We also receive information about you and your activities on and off the Evara platform through partnerships, or about your experiences and interactions from our partner ad networks. We also receive information about you as a rights holder from our third party authors. For example, information in the form of a model release when your image is used in an item made available on our Sites. </p>
                                        </li>
                                    </ul>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'>How we use personal information</h4>
                                <li className='py-2 pl-4'>
                                    <p> We will use your personal information:</p>
                                    <ul className="list-alpha  mt-3">
                                        <li className='my-2'>
                                            <p> To fulfil a contract, or take steps linked to a contract: in particular, in facilitating and processing transactions that take place on the Sites, like where you purchase an item from our marketplace.</p>
                                        </li>
                                        <li className='my-2'>
                                            <p> Where this is necessary for purposes which are in our, or third parties’, legitimate interests. These interests include:</p>
                                            <ul className='list-roman mt-3 pl-2'>
                                                <li className='py-1'>
                                                    <p> operating the Sites; </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> providing you with services described on the Sites; </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> verifying your identity when you sign in to any of our Sites; </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> responding to support tickets, and helping facilitate the resolution of any disputes; </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> updating you with operational news and information about our Sites and services e.g. to notify you about changes to our Sites, website disruptions or security updates; </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> carrying out technical analysis to determine how to improve the Sites and services we provide;
                                                    </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> monitoring activity on the Sites, e.g. to identify potential fraudulent activity and to ensure compliance with the user terms that apply to the Sites;
                                                    </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> managing our relationship with you, e.g. by responding to your comments or queries submitted to us on the Sites or asking for your feedback or whether you want to participate in a survey;
                                                    </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> managing our legal and operational affairs (including, managing risks relating to content and fraud matters);
                                                    </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> training Evara staff about how to best serve our user community;
                                                    </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> improving our products and services;
                                                    </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> providing general administrative and performance functions and activities; and
                                                    </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> verifying your identity by comparing a selfie taken by you against your Photo ID document using facial recognition technology (as is necessary for the establishment, exercise or defense of legal claims); and
                                                    </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> processing your job application to Evara.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>
                                                Where you give us consent:
                                            </p>
                                            <ul className='list-roman mt-3 pl-2'>
                                                <li className='py-1'>
                                                    <p> providing you with marketing information about products and services which we feel may interest you; and </p>
                                                </li>
                                                <li className='py-1'>
                                                    <p> customising our services and websites, like advertising that appear on the Site – where this involves the use of cookies or similar technologies – in order to provide a more personalised experience. </p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='py-2'>
                                            <p>
                                                For purposes which are required by law.
                                            </p>
                                        </li>
                                        <li className='py-2'>
                                            <p>
                                                For the purpose of responding to requests by government, a court of law, or law enforcement authorities conducting an investigation.
                                            </p>
                                        </li>

                                    </ul>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'>When we disclose your personal information</h4>
                                <li>
                                    <p>
                                        We will disclose personal information to the following recipients
                                    </p>
                                    <ul className='list-alpha mt-3'>
                                        <li className='py-1'>
                                            <p>
                                                companies that are in the Evara group which are located in Australia, Mexico and the US;
                                            </p>

                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                if applicable, authors of any items or services made available to you, so they can facilitate support and license validation, who maybe located in any of the countries our products are available in;
                                            </p>
                                        </li >
                                        <li className='py-1'>
                                            <p>
                                                subcontractors and service providers who assist us in connection with the ways we use personal information (as set out above), in particular: website hosting providers which are located in Australia, US and UK; technical and customer support services which are located in Australia, Canada, Philippines, Poland, Mexico, Romania, UK and the US; recruitment agencies which are located in Australia, US and Mexico; marketing and analytics services which are located in the US; security and fraud prevention services which are located in the US; subscription management services which are located in the US; payment processing services which are located in the US, UK and Australia; identification verification services located in the UK; and operational tooling services which are located in the US. Noting that our subcontractors and services providers may also transfer and access such information from other countries in which they have operations.
                                            </p>
                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                our professional advisers (lawyers, accountants, financial advisers etc.) which are located in Australia, Ireland, Mexico, UK and USA;
                                            </p>

                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                regulators and government authorities in connection with our compliance procedures and obligations;
                                            </p>

                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                a purchaser or prospective purchaser of all or part of our assets or our business, and their professional advisers, in connection with the purchase;
                                            </p>

                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                a third party to respond to requests relating to a criminal investigation or alleged or suspected illegal activity;
                                            </p>

                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                a third party, in order to enforce or defend our rights, or to address financial or reputational risks;
                                            </p>

                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                a rights holder in relation to an allegation of intellectual property infringement or any other infringement; and
                                            </p>
                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                other recipients where we are authorised or required by law, or requests by government, a court of law, or law enforcement authorities, to do so.
                                            </p>
                                        </li>
                                    </ul>
                                </li>

                                <h4 className='text-3xl  font-spartan   py-4 text-black'>Where we transfer and/or store your personal information</h4>
                                <li className='py-1'>
                                    <p>
                                        We are based in Australia and Mexico so your data will be processed in Australia, Mexico and the US. Some of the recipients we have described in section 10 above, and to whom we disclose your personal information, are based in places like Australia, Canada, Ireland, Mexico, Philippines, Poland, Romania, UK, the US, India and Columbia. We do this on the basis of this policy. In order to protect your information, we take care where possible to work with subcontractors and service providers who we believe maintain an acceptable standard of data security compliance.
                                    </p>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'>How we keep your personal information secure</h4>
                                <li className='py-1'>
                                    <p>
                                        We store personal information on secure servers that are managed by us and our service providers, and occasionally hard copy files that are kept in a secure location in Australia, Ireland, Mexico and the US. Personal information that we store or transmit is protected by security and access controls, including username and password authentication, two-factor authentication, and data encryption where appropriate.
                                    </p>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'>How you can access your personal information</h4>
                                <li className='py-1'>
                                    <p> You can access some of the personal information that we collect about you  by logging in to your account. You also have the right to make a request to access other personal information we hold about you and to request corrections of any errors in that data. You can also close the account you have with us for any of our Sites at any time. To make an access or correction request, contact our privacy champion using the contact details at the end of this policy.</p>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'>Marketing Choices regarding your personal information</h4>
                                <li className='py-1'>
                                    <p> Where we have your consent to do so (e.g. if you have subscribed to one of our email lists or have indicated that you are interested in receiving offers or information from us), we send you marketing communications by email about products and services that we feel may be of interest to you. You can ‘opt-out’ of such communications if you would prefer not to receive them in the future by using the “unsubscribe” facility provided in the communication itself.</p>
                                </li>
                                <li className='py-1'>
                                    <p> You also have choices about cookies, as described below. By modifying your browser preferences, you have the choice to accept all cookies, to be notified when a cookie is set, or to reject all cookies. If you choose to reject cookies some parts of our Sites may not work properly in your case.</p>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'>Cookies (not the type you eat!) and web analytics</h4>
                                <li className='py-1'>
                                    <p> For more information about how we use cookies, web beacons and similar technologies see our cookie policy here and for more general information on cookies, see http://www.allaboutcookies.org.</p>
                                </li>
                                <li className='py-1'>
                                    <p> When you visit our Sites, there’s certain information that’s recorded which is generally anonymous information and does not reveal your identity. If you’re logged into your account some of this information could be associated with your account. We’re talking about the following kinds of details:</p>
                                    <ul className='pl-2 list-alpha  mt-2'>
                                        <li className='py-1'>
                                            <p>
                                                your IP address or proxy server IP address’;
                                            </p>
                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                the domain name you requested;
                                            </p>
                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                the name of your internet service provider is sometimes captured depending on the configuration of your ISP connection;
                                            </p>
                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                the date and time of your visit to the website;
                                            </p>
                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                the length of your session;
                                            </p>
                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                the pages which you have accessed;
                                            </p>
                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                the number of times you access our site within any month;
                                            </p>
                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                the file URL you look at and information relating to it;
                                            </p>
                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                the website which referred you to our Sites;
                                            </p>
                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                the operating system which your computer uses; and
                                            </p>
                                        </li>
                                        <li className='py-1'>
                                            <p>
                                                the technical capabilities of your web browser.
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li className='py-1'>
                                    <p>Occasionally, we will use third party advertising companies to serve ads based on prior visits to our Sites. For example, if you visit our Sites, you may later see an add for our products and services when you visit a different Site. Read more about your options in our cookie policy.</p>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'>Information about children</h4>
                                <li className='py-1'>
                                    <p>Our Sites are not suitable for children under the age of 16 years, so if you are under 16 we ask that you do not use our Sites or give us your personal information (if you are a young tech wiz, please direct your nearest responsible adult to use the Sites for you!). If you are from 16 to 18 years, you can browse the Sites but you’ll need the supervision of a parent or guardian to become a registered user. It’s the responsibility of parents or guardians to monitor their children’s use of our Sites.</p>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'>Information you make public or give to others</h4>
                                <li className='py-1'>
                                    <p>If you make your personal information available to other people, we can’t control or accept responsibility for the way they will use or manage that data. There are lots of ways that you can find yourself providing information to other people, like when you post a public message on a forum thread, share information via social media, or make contact with another user (such as a third party Author) whether via our Sites or directly via email. Before making your information publicly available or giving your information to anyone else, think carefully. If giving information to another user via our Sites, ask them how they will handle your information. If you’re sharing information via another website, check the privacy policy for that site to understand its information management practices as this privacy policy will not apply.</p>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'>How long we keep your personal information</h4>
                                <li className='py-1'>
                                    <p>We retain your personal information for as long as is necessary to provide the services to you and others, and to comply with our legal obligations. If you no longer want us to use your personal information or to provide you with the Evara services, you can request that we erase your personal information and close your Evara account. Please note that if you request the erasure of your personal information we will retain information from deleted accounts as necessary for our legitimate business interests, to comply with the law, prevent fraud, collect fees, resolve disputes, troubleshoot problems, assist with investigations or requests by government, a court of law, or law enforcement authorities, enforce the terms of service and take other actions permitted by law. The information we retain will be handled in accordance with this Privacy Policy.</p>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'>When we need to update this policy</h4>
                                <li className='py-1'>
                                    <p>We will need to change this policy from time to time in order to make sure it stays up to date with the latest legal requirements and any changes to our privacy management practices.</p>
                                </li>
                                <li className='py-1'>
                                    <p>When we do change the policy, we’ll make sure to notify you about such changes, where required. A copy of the latest version of this policy will always be available on this page.</p>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'>How you can contact us</h4>
                                <li className='py-1'>
                                    <p>If you have any questions about our privacy practices or the way in which we have been managing your personal information, please contact our privacy champion in writing at PO Box 16122 Collins Street West Victoria 8007 Australia or privacy.champion@Evara.com.</p>
                                </li>
                                <li className='py-1'>
                                    <p>We’re really glad you made it to the end of the privacy policy, because knowing this stuff is the best way to understand how your personal information is used and how to best manage it!</p>
                                </li>
                           </ul>

                            <h4 className='text-3xl  font-spartan   py-4 text-black'>If you’re a user or visitor in the European Economic Area these rights also apply to you:</h4>
                            <ul className='list-decimal ml-2'>
                                <li className='py-1'>
                                    <p> For the purposes of applicable EU data protection law (including the General Data Protection Regulation 2016/679 (the “GDPR”), we are a ‘data controller’ of your personal information.</p>
                                </li>
                                <h4 className='text-3xl  font-spartan   py-4 text-black'>How you can access your personal information</h4>
                                <li className='py-1'>
                                    <p> You are also entitled to ask us to port your personal information (i.e. to transfer in a structured, commonly used and machine-readable format, to you), to erase it, or restrict its processing. You also have rights to object to some processing that is based on our legitimate interests, such as profiling that we perform for the purposes of direct marketing, and, where we have asked for your consent to process your data, to withdraw this consent as more fully described below.</p>
                                </li>
                                <li className='py-1'>
                                    <p> These rights are limited in some situations – for example, we can demonstrate that we have a legal requirement to process your personal information. In some instances, this means that we may retain some data even if you withdraw your consent.</p>
                                </li>
                                <li className='py-1'>
                                    <p> Where we require your personal information to comply with legal or contractual obligations, then provision of such data is mandatory: if such data is not provided, then we will not be able to manage our contractual relationship with you, or to meet obligations placed on us. In all other cases, provision of requested personal information is optional.</p>
                                </li>
                                <li className='py-1'>
                                    <p> You are also entitled to ask us to port your personal information (i.e. to transfer in a structured, commonly used and machine-readable format, to you), to erase it, or restrict its processing. You also have rights to object to some processing that is based on our legitimate interests, such as profiling that we perform for the purposes of direct marketing, and, where we have asked for your consent to process your data, to withdraw this consent as more fully described below.</p>
                                </li>
                                <li className='py-1'>
                                    <p> If you have unresolved concerns you also have the right to complain to data protection authorities. The relevant data protection authority will be the data protection authority of the country: (i) of your habitual residence; (ii) of your place of work; or (iii) in which you consider the alleged infringement has occurred.</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="lg:col-span-3 col-span-12 px-3">
                    <div className="input flex items-center justify-center w-full py-1 pl-5 h-11 border border-gray-300 rounded-sm">
                        <input type="text" placeholder='Search...' className='  outline-none  w-full' />
                        <button className='px-3 text-gray-600'> <IoIosSearch /> </button>
                    </div>
                    <div className="categories">
                        <h4 className='text-2xl py-4 border-b border-gray-300 my-3'> Categories </h4>
                        <ul className='text-gray-600'>
                            <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                                <Link to="/technology" className='text-secondary'> Beauty </Link>
                                <span> (3) </span>
                            </li>
                            <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                                <Link to="/technology" className='text-secondary'> Book </Link>
                                <span> (6) </span>
                            </li>
                            <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                                <Link to="/technology" className='text-secondary'> Design </Link>
                                <span> (4) </span>
                            </li>
                            <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                                <Link to="/technology" className='text-secondary'> Fashion </Link>
                                <span> (3) </span>
                            </li>
                            <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                                <Link to="/technology" className='text-secondary'> LifeStyle</Link>
                                <span> (6) </span>
                            </li>
                            <li className='py-2 flex justify-between border-b border-dotted border-gray-300  items-center'>
                                <Link to="/technology" className='text-secondary'> Travel </Link>
                                <span> (2) </span>
                            </li>
                        </ul>
                    </div>
                    <div className="trending mt-4">
                        <h4 className='text-xl py-2 border-b border-gray-300'> TRENDING NOW</h4>
                        <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                            <img src={blogImg.blog1} className='rounded-md transform hover:scale-105 duration-300 overflow-hidden' alt="blog1" />
                        </div>
                        <h4 className='text-xl font-semibold text-gray-800 py-2'>The litigants on the screen are not actors</h4>
                        <ul className='list-disc text-sm text-gray-500 flex'>
                            <li className='list-none'>25 April</li>
                            <li className='ml-8'>126k Views</li>
                        </ul>
                    </div>
                    <div className="subTrending mt-3 grid grid-cols-2 gap-4">
                        <div className='subTrending1'>
                            <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                                <img src={img2} className='rounded-md transform hover:scale-105 duration-300 overflow-hidden' alt="blog1" />
                            </div>
                            <h4 className='text-medium font-semibold text-gray-800 py-2'>Water Partners With Rag & Bone To Consume</h4>
                            <ul className='list-disc text-sm text-gray-500 flex'>
                                <li className='list-none text-nowrap mr-1'>25 April</li>
                                <li className='ml-4'>126k Views</li>
                            </ul>
                        </div>
                        <div className='subTrending2'>
                            <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                                <img src={img3} className='rounded-md transform hover:scale-105 duration-300 overflow-hidden' alt="blog3" />
                            </div>
                            <h4 className='text-medium font-semibold text-gray-800 py-2'>The loss is not all that surprising</h4>
                            <ul className='list-disc text-sm text-gray-500 flex'>
                                <li className='list-none text-nowrap mr-1'>25 April</li>
                                <li className='ml-4'>126k Views</li>
                            </ul>
                        </div>
                        <div className='subTrending3'>
                            <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                                <img src={img4} className='rounded-md transform hover:scale-105 duration-300 overflow-hidden' alt="blog4" />
                            </div>
                            <h4 className='text-medium font-semibold text-gray-800 py-2'>We got a right to pick a little fight, Bonanza</h4>
                            <ul className='list-disc text-sm text-gray-500 flex'>
                                <li className='list-none text-nowrap mr-1'>25 April</li>
                                <li className='ml-4'>126k Views</li>
                            </ul>
                        </div>
                        <div className='subTrending4'>
                            <div className="trendingImg mt-4 w-full overflow-hidden rounded-md">
                                <img src={img5} className='rounded-md transform hover:scale-105 duration-300 overflow-hidden' alt="blog1" />
                            </div>
                            <h4 className='text-medium font-semibold text-gray-800 py-2'>My entrance exam was on a book of matches</h4>
                            <ul className='list-disc text-sm text-gray-500 flex'>
                                <li className='list-none text-nowrap mr-1'>25 April</li>
                                <li className='ml-4'>126k Views</li>
                            </ul>
                        </div>

                    </div>

                    <div className="purchaseBanner hidden lg:block w-full mt-8 relative">
                        <img src={img6} className='rounded-sm  px-2 w-full' alt="monthly sale banner" />
                        <div className="sellingBannerDes absolute top-16 left-4">
                            <h4 className='text-slate-600'>Woman Zone </h4>
                            <h2 className=' text-black w-2/3 text-xl my-2 transition duration-300 hover:translate-x-1'>Save 17% on Clothing</h2>
                            <Link to="/" className=" inline-block transition-all group ">
                                <div className='flex text-sm text-secondary' >
                                    <span>Shop Now</span>
                                    <span className="flex items-center mx-2  transform transition-transform duration-300 group-hover:translate-x-2"> <FaArrowRightLong className='text-sm' /> </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="tags mt-8">
                        <h4 className='text-xl pb-4 border-b-2 border-gray-200'>POPULAR TAGS</h4>
                        <div className="flex flex-wrap mt-3 gap-2">
                            <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                                <button className='py-2 px-4 border-none'> beautiful </button>
                            </Link>
                            <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                                <button className='py-2 px-4 border-none'> New York </button>
                            </Link>
                            <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                                <button className='py-2 px-4 border-none'> droll </button>
                            </Link>
                            <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                                <button className='py-2 px-4 border-none'> intimate </button>
                            </Link>
                            <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                                <button className='py-2 px-4 border-none'> loving </button>
                            </Link>
                            <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                                <button className='py-2 px-4 border-none'> travel </button>
                            </Link>
                            <Link to="/technology" className='rounded-md border flex items-center justify-center border-gray-300'>
                                <button className='py-2 px-4 border-none'> fighting </button>
                            </Link>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Privacy