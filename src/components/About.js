import React, { useState } from 'react'
import Block from './images/block.jpeg';

function About() {

    //  const s  = [false , false , false , false ];
    const [showText, setShowText] = useState([false, false, false, false]);

    return (

        <>
        <section className="flex flex-col md:flex-row lg:flex-row p-8 md:gap-4 lg:gap-0  items-center lg:justify-evenly md:justify-evenly md:items-start">

            <div className="  text_start  flex-col flex md:flex-col lg:flex-col  overflow-y-auto  ">

                <div>
                    <p className=" text-slate-400 text-xl">
                        Why Choose us
                    </p>
                </div>
                <div className="">
                    <div>
                        <h1 className="font-bold head text-5xl md:text-6xl">
                            We solve your <br />Problem.
                        </h1>
                    </div>
                    <div>
                        <img className="w-8/12 md:10/12 lg:11/12 block_iot  " src={Block} alt="" />
                    </div>

                </div>


            </div>
            <div className=" pt-8 md:flex md:flex-col text_start">
                <h1 className="font-s  sub_heading text-2xl lg:text-3xl md:text-3xl">
                    We don’t sell technology, We<br /> give ideas that boosts your<br /> journey.
                </h1>


                <div className="">
                    <ul>
                        <li className="py-2 pt-8">
                            <div className="flex ">
                                <h3 className="hover:cursor-pointer " id="heading_1" onClick={() => setShowText([!showText[0], false, false, false])}>Expert Members </h3>
                                <span className="flex-row pb-4"  id="span_1"> + </span>
                            </div>



                            {

                                showText[0] &&
                                <div className="w-auto h-16">

                                    <p id="para_1" className="text-sm ">
                                        Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Vero facere veritatis
                                        culpa quae<br />
                                        eum, libero expedita velit dolor accusamus<br /> aliquid.
                                    </p>
                                </div>

                            }


                        </li>
                        <li  className="py-2">
                            <div className="flex pt-4 ">
                                <h3 className="hover:cursor-pointer pb-4" id="heading_2" onClick={() => setShowText([false, !showText[1], false, false])}>Secure & Trsuted
                                </h3>
                                <span className="flex-row" id="span_2">+</span>
                            </div>

                            {

                                showText[1] &&
                                <div>
                                    <p id="para_1" className="text-sm  ">
                                        Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Vero facere veritatis
                                        culpa quae<br />
                                        eum, libero expedita velit dolor accusamus<br /> aliquid.
                                    </p>
                                </div>
                            }

                        </li>
                        <li  className="py-2"> 
                            <div className="flex pt-4">
                                <h3 className="hover:cursor-pointer " id="heading_3" onClick={() => setShowText([false, false, !showText[2], false])}>Expert Members </h3>
                                <span className="flex-row " id="span_3"> +</span>
                            </div>


                            {
                                showText[2] &&

                                <div>

                                    <p id="para_1" className="text-sm  ">
                                        Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Vero facere veritatis
                                        culpa quae<br />
                                        eum, libero expedita velit dolor accusamus<br /> aliquid.
                                    </p>
                                </div>

                            }

                        </li>

                        <li  className="py-2">
                            <div className="flex pt-4">
                                <h3 className="hover:cursor-pointer" id="heading_4" onClick={() => setShowText([false, false, false, (!showText[3])])}>Big Resoruces</h3><span
                                    className="flex-row " id="span_4"> +</span>
                            </div>


                            {

                                showText[3] &&
                                <div>

                                    <p id="para_1" className="text-sm ">
                                        Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Vero facere veritatis
                                        culpa quae<br />
                                        eum, libero expedita velit dolor accusamus<br /> aliquid.
                                    </p>

                                </div>
}

                        </li>
                    </ul>
                </div>
            </div>

            
            </section>




    <div className="flex flex-col lg:flex-row md:flex-row items-center gap-2 pt-8 justify-around pb-4">
        <div>

        </div>

        <div className="py-4">

            <h1 className="text-4xl font-bold ">3.5K</h1>
            <p className="text-slate-400">Projects Done</p>

        </div>

        <div className="py-4">
            <h1 className="text-4xl font-bold">20million</h1>
            <p className="text-slate-400">Plus pages build</p>
        </div>
        <div className="py-4">
            <h1 className="text-4xl font-bold">3000+</h1>
            <p className="text-slate-400">Device invented</p>
        </div>


        <hr className="bg-black"/>

    </div>


    </>

    )
}

export default About