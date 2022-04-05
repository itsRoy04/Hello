import React from 'react'
import left from './images/left.svg';
import Mask from './images/mask1.jpeg';
import right from './images/right.svg';
// import React, { Component } from "react";
import Slider from "react-slick";


function Our() {

    const slider = React.useRef(null);


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (

        
        <section >

            <div className="py-16 md:py-16 ">

                <div className="flex sm:flex-row md:flex-row lg:flex-row justify-around">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-start justify-start pb-1">
                        Our Success <br />Story.
                    </h1>

                    <div className=" flex">
                        <button className="p-2" onClick={() => slider?.current?.slickPrev()}><img src={left} className="w-10"></img></button> 
                        <button className="p-2" onClick={() => slider?.current?.slickNext()} ><img src={right} className="w-14"></img></button>

                    </div>
                </div>

            </div>

            <div className ="overflow-hidden">
                {/* <h2>Custom Arrows</h2> */}
                <Slider ref={slider} {...settings}>
                    <div className="content_box  grad ">

                        <img src={Mask}className="back" />


                        <div className="transit mx-12 bottom1">

                            <h1 className="text-white lg:text-3xl md:text-2xl text-2xl text-left mx-5 font-bold " >
                                Best service <br />provider.
                            </h1>
                            <p className="pt-4 px-2  text-white ">
                                Lorem ipsum dolor sit amet, consuadielit, sed do eiusmod
                            </p>


                        </div>

                    </div>

                    {/* <!-- 1--> */}
                    <div className="content_box pt-8  grad1">
                        <div className="transit mx-12 bottom1">

                            <h1 className="text-white lg:text-3xl md:text-2xl text-2xl text-left mx-5 font-bold " >
                                Best service <br />provider.
                            </h1>
                            <p className="pt-4 px-2  text-white ">
                                Lorem ipsum dolor sit amet, consuadielit, sed do eiusmod
                            </p>


                        </div>


                        {/* <!-- 2--> */}

                    </div>

                    {/* <!-- 3--> */}

                    <div className="content_box pt-8 grad">

                        <div className="transit mx-12 bottom1">

                            <h1 className="text-white lg:text-3xl md:text-2xl text-2xl text-left mx-5 font-bold    " >
                                WP Award <br />winner.
                            </h1>
                            <p className="pt-4 px-2  text-white">
                                Lorem ipsum dolor sit amet, consuadielit, sed do eiusmod
                            </p>


                        </div>

                    </div>

                    {/* <!-- 4--> */}

                    <div className="content_box pt-8 grad1">

                        <div className="transit mx-12 bottom1">

                            <h1 className="text-white lg:text-3xl md:text-2xl text-2xl text-left mx-5 font-bold mt-2 " >
                                Highly train <br />Expert.
                            </h1>
                            <p className="pt-4 px-2   text-white">
                                Lorem ipsum dolor sit amet, consuadielit, sed do eiusmod
                            </p>


                        </div>

                    </div>


                    {/* <!-- 5--> */}

                    <div className="content_box pt-8 grad ">

                        <div className="transit mx-12 bottom1 ">

                            <h1 className="text-white lg:text-3xl md:text-2xl text-2xl text-left mx-5 font-bold mt-2 " >
                                Best service <br />provider.
                            </h1>
                            <p className="pt-4 px-2  text-white">
                                Lorem ipsum dolor sit amet, consuadielit, sed do eiusmod
                            </p>


                        </div>

                    </div>
                </Slider>
            </div>
        </section>

    )
}

export default Our

