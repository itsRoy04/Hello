import React from 'react';
import Right from './images/Right.png'

const Banner = (props) => {
    return (
        <>
            <div className="flex lg:flex-row md:flex-row items-center flex-col-reverse lg:justify-between  md:justify-between py-10">
                {/* <!-- Content --> */}
                <div className="banner_fwd_scroll" >
                    <h1 className="-rotate-90 text-1xl  text-black">Fb. Tw. Inst.</h1>
                </div>
                <div className=" bg-white   ">

                    <div className=" py-2 px-2 banner_sub_heading ">

                        <div className="font-bold  ">
                            <h1 className="text-5xl text-start lg:text-6xl md:text-6xl banner_heading pl-6">Smart <br />Consulting <br />Group. </h1>
                        </div>
                        <article className=" ml-10 ">
                            <br />
                            <p>We helping client to create technology that uses Blockchain,<br /> AI and IOT with our talented
                                expert.
                            </p>
                            <div>
                                <button href="Consult.html" className="btn mt-2 border-black border-2 px-4 py-4">Consult with an
                                    expert now!</button>
                                <p className="text-xs font-bold mt-3">
                                    Already a member? Sign in.
                                </p>
                            </div>
                        </article>

                    </div>
                </div>


                {/* <!-- Banner Image --> */}
                <div className="bg-contain items-end ">

                    <img src={Right} alt="Banner" className="banner_img" />

                </div>

                <div className="banner_fwd_scroll" >
                    <h1 className="-rotate-90  display-none lg:display-block text-black pl-8">Scroll </h1>
                </div>

            </div>


            <hr className="bg-black" ></hr>
        </>
    )
}

export default Banner