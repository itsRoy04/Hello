import React, { useState } from 'react';
import logo from './images/Logo.png';

// import {useState} from 'react';
function MobileNav() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className='flex md:hidden p-4 justify-between items-center'>
                <div className='w-12 '>
                    <img className='w-full' src={logo} alt="Logo" />
                </div>
                <div className="flex text-2xl">
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




            <div className="transitio-all ease-in-out  duration-1000">



                {/* <ul id="" className="text-left h-48   bg-zinc-200 p-4"> */}
                <ul id="" className={`text-left bg-zinc-200 p-4 transition-all ease-in-out duration-500 overflow-hidden ${showMenu ? 'h-auto text-xl opacity-1' : 'h-0 p-0 text-sm opacity-0'} `}>

                    {/* {

                        showMenu &&
                        (<> */}
                          <li className="  my-2">About</li>
                            <li className="  my-2">Case Studies</li>
                            <li className=" my-2" >Blog</li>
                            <li className=" my-2" >Contact</li>
                            {/* </>)
                    } */}
                </ul>


            </div>

        </>
    )
}

export default MobileNav