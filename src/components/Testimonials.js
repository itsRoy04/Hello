import React from 'react'
import Meetun from './images/meetun.png'
import Star from './images/star.png'

function Testimonials() {
  return (
    <section>
    <div className="flex lg:flex-row md:flex-row flex-col  md:py-10 lg:py-16 lg:justify-around  md:justify-around justify-center px-4">
        <div className="">
            <img  className=" w-10/12 pb-4" src={Meetun} alt=""/>
        </div>
        <div className="">

            <div>
            <img className="w-10" src={Star} alt=""/>
            </div>


            <div>
            <h1 className="font-weight:600 lg:text-3xl md:text-2xl px-4 text-2xl ">“Certainly from my perspective,<br/> Dream City has been a great<br/> success—with <span className="text-blue-400 underline">CPIOT Platform</span><br/> giving us that enterprise-level of<br/> assured quality on top.”</h1>
            <p className="md:text-xl pt-2 ">— Meetun Norsha<br/></p>
            <p className="pl-6 md:text-xl">INDIA</p>
            
            </div>
          
        </div>
    </div>
</section>
  )
}

export default Testimonials