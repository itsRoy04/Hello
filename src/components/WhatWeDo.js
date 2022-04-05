import React from 'react'
import Star from './images/Star.svg'

function WhatWeDo() {
  return (
    // <!--What do we know -->

    <section className="flex flex-row py-8 ">

        <div className="-rotate-90 text-center flex-col  h-9">
        <div>
            <h2 className="pt-8">01</h2>
        </div>


    </div> 

        <div className="sm:flex w-full gap-4 justify-center py-8 lg:py-0 md:py-0">



            <div className=" flex flex-col sm:flex-row  items-center justify-center sm:justify-between ">


                <div className=" pr-10 pl-4">


                    <div className=" what_we_text">


                        <img className='w-8 pb-1' src={Star} />


                        <h1 className="font-bold">Marketing</h1>
                        <p>Creating a spacing how people <br/>
                            move through.</p>
                    </div>

                </div>
                <div className=" p-4 ">
                    <div className=" what_we_text">


                    <img className='w-8 ' src={Star} />


                        <h1 className="font-bold"> Creativity.</h1>
                        <p>Get a full cRontrol of debts in the<br/> dsu digital world simplesity. labore<br/> et dolore
                            magna
                            aliqua.</p>
                    </div>
                </div>
                <div className=" p-4 ">
                    <div className=" what_we_text">


                    <img className='w-8' src={Star} />


                        <h1 className="font-bold"> Dev & Design.</h1>
                        <p>Creating a higher spacing how <br/> people move through. From its mel<br/> origins to the
                            digital
                            era.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default WhatWeDo