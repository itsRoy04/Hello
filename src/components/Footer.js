import React from 'react'
import logo from './images/Logo.png';
import code from './images/code_partner.png';


function footer() {
  return (
    <footer>
        <div className="m-14 position static">
            <div className="flex flex-col lg:flex-row md:flex-row md:gap-14 pb-8 justify-between pt-8 mx-8 ">

                <div className="flex flex-row pb-4">
                    <img className="h-5 px-2  " src={logo} alt="logo"/>
                    <img className="h-4 " src={code} alt="code partner"/>
                </div>


                <div className="footer_links text_start pb-4">

                    <h1 className="text-gray-300">
                        LINKS
                    </h1>

                    <ul className="text_start">
                        <li>
                            Home
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Press Release
                        </li>
                        <li>
                            Blog
                        </li>


                    </ul>


                </div>


                <div className="pb-4 text_start">
                    <h1 className="text-gray-300 ">
                        LEGAL
                    </h1>

                    <ul>
                        <li>
                            Terms of use
                        </li>
                        <li>
                            Terms & conditions
                        </li>
                        <li>
                            Privacy policy
                        </li>
                        <li>
                            Cookie policy
                        </li>
                    </ul>
                </div>

                <div className="footer_news pb-4 text_start ">
                    <h1 className="text-gray-300">
                        NEWSLETTER
                    </h1>
                    <p>Join over <span className="text-blue-300 underline">68,000</span> people gettings our emails</p>
                    <div className="flex items-center  p-1 bg-gray-200 rounded">
                        <div className="grow mx-1">
                            <input type="text "
                            className="footer_input w-full bg-gray-200 rounded lg:h-10 md:h-8 h-6   text_center"
                            placeholder="Enter Your Email"/>

                        </div>
                      <div>
                          <button className="bg-black p-2 text-white rounded " >Sign Up</button>
                      </div>

                    </div>
                    <p className="text-slate-300 text-xs">We only send interesting and relevant emails.</p>
                </div>



            </div>
            <div className="lg:px-24 ">
                <hr/>

            </div>
            <div className=" flex flex-row justify-between ">
                <p className="text-xs pl-10 pt-2">Privacy & Terms. Contact Us</p>

                <p className="text-xs pl-10 pt-2">Copyright @2021 Code PartnerIT Solutions Pvt. Ltd.</p>

            </div>




        </div>

    </footer>
  )
}

export default footer