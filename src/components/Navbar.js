import logo from './images/Logo.png';
import { a, Router, Routes, Route } from "react-router-dom";
import Our from './Our';
import { useState } from 'react';
import Mobile from './MobileNav';
const Navbar = () => {


    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu);
    return (
        <header>
            {/* <nav className="flex flex-row lg:flex-row md:flex-row  justify-between lg:justify-around nav  py-4 px-8"> */}
            {/* Hidden Mobile Nav */}
            <div className={`${setShowMenu ? 'visible' : 'invisible'}`}>
                <Mobile />
            </div >
            {/* Hidden Mobile Nav */}

            <nav className={`  nav  py-4 px-8 ${setShowMenu ? 'invisible lg:visible overflow-hidden' : ' '}`}>


                <div className='flex flex-row justify-between lg:justify-around pt-4'>
                    <div className='w-12 '>
                        <img className='w-full' src={logo} alt="Logo" />
                    </div>

                    <div className=" nav_links">


                        <ul className="flex flex-row space-x-4 text-xl  ">

                            <li><  a href="#about" className="font-semibold no-underline hover:underline">About</  a></li>

                            <li><  a href="#our" className="font-semibold no-underline hover:underline">Case Studies</  a></li>

                            <li><  a href="#blog" className="font-semibold no-underline hover:underline">Blog</  a></li>

                            <li><a  a href="#contact" className="font-semibold no-underline hover:underline">Contact</a></li>

                        </ul>



                    </div>
                    <div className="nav_search  pt-2 ">
                        <div className="border-b-2 ">

                            <span className="fa fa-search text-slate-300 "></span>
                            <input type="text" className="h-8 w-96 pr-8 pl-5 rounded z-0  focus:outline-none" placeholder="Search anything..."/>
                        </div>
                    </div>
                    <div className="flex text-2xl pt-2">
                        <div className="flex mr-4 ">
                            <div  >
                                <i class="fa-solid fa-user"></i>
                            </div>

                            <div className="ml-2 ">
                                <p>Login</p>
                            </div>

                        </div>
                        <div>
                            <i className="fa-solid fa-bars" onClick={() => setShowMenu(!showMenu)}></i>
                        </div>
                    </div>

                </div>

            </nav >




        </header >
    )
}


export default Navbar