import React from 'react'
import Lady from './images/ylady.jpeg';
import Play from './images/play.png';

function WhyChoose() {
    return (
        <section className=" pt-10 pb-6">
            <div className="flex flex-col  md:flex-row lg:flex-row items-center text_start pl-14">
                <div className=" items-end pl-10  ">

                    <div className=" ">
                        <img src={Play} alt="" className="w-14" />
                    </div>
                    <div className=" p-1 ">
                        <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold  pb-3">
                            Why Choose<br /> Code Partner?
                        </h1>
                        <p className="font-bold py-4 text-sm md:text-base lg:text-lg">So how does it work? Let’s check our Getting Started<br /> tutorial for
                            detailed
                            info.</p>


                        <ul className="flex flex-col">
                            <li className="flex gap-2"><i className="fas fa-check"></i> <p>&nbsp;Provides professional service with ease and single
                                point of contact.<br /><br /></p>
                            </li>
                            <li className="flex gap-2"><i className="fas fa-check "></i> <p>&nbsp;Takes complete responsibility from start to
                                end.<br /><br /></p></li>
                            <li className="flex gap-2"><i className="fas fa-check"></i> <p>&nbsp;Dedicated Relationship Manager in place.<br /><br /></p></li>
                        </ul>

                    </div>

                    <div className="">
                        <button type="button" className="bg-black text-white border-black h-10 p-2 md:h-10 lg:h-12"> Consult with and expert
                            now!</button>
                    </div>


                </div>

                <div className="flex justify-end">
                    {/* <div className="item_center"> */}
                    <img className="w-9/12 " src={Lady} alt="" />

                </div>
                {/* </div> */}
            </div>
        </section>
    )
}

export default WhyChoose