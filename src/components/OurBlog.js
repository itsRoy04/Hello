import ibm from './images/ibm.png'
import digital from './images/digital.png'
import google from './images/google.png'
import aws from './images/aws.png'
import opartner from './images/opartner.png'

import React from 'react'

function OurBlog() {
  return (


<section>

<div>


    <div className="bg-gray-100 flex flex-col items-center  md:items-start lg:items-start">



        <div className="text_start">
            <h1 className="text-slate-400 lg:pl-40 md:pl-40 pt-12 pb-3">NEWS</h1>
            <h1 className="lg:text-6xl text-3xl lg:pl-40 md:pl-40  font-bold  pb-4   md:text-5xl">
                Our Partners.
            </h1>
        </div>

        <div className="text_start">
            <h1 className="text-slate-400 lg:pl-40 md:pl-40 pb-3 ">CLOUD PARTNER</h1>
            <div
                className="flex flex-col lg:flex-row md:flex-col md:pl-48 md:gap-2 md:justify-between lg:space-x-7 lg:justify-around  pb-4">
                <img className="lg:pt-4 pb-4 h-28" src={google} alt="googlepartner.com"/>
                <img className="lg:pt-4 pb-4  h-28" src={digital} alt="digitalocean.com"/>
                <img className="lg:pt-4 pb-4 h-28" src={aws} alt="amazonpartner.com"/>
                <img className="lg:pt-4 pb-4 h-28 w-48" src={ibm} alt="ibm.com"/>
            </div>

        </div>

        <div className="text_start">
            <h1 className="text-slate-400 lg:pl-40 md:pl-40 pb-4">BLOCKCHAIN PARTNERS</h1>
            <div className="flex lg:flex-row md:flex-row    md:pl-48 pb-20">
                <img id="partner_img " className="  lg:w-48 md:w-48" src={opartner} alt=""/>
            </div>
        </div>
    </div>

    {/* <!-- Send CV --> */}

    <div
        className="py-8   flex flex-col md:flex-row lg:flex-row bg-slate-900  items-center lg:items-center lg:pl-40 ">
        <div className="flex flex-col lg:flex-row md:flex-row md:items-center">
            <div className="md:p-8 lg:p-8">
                <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-white pb-8 text_start">Join our<br/>
                    team be a great<br/> skills elit.</h1>
            </div>
            <div className="md:p-8 lg:p-8 text_start">
                <h1 className="font-semibold text-white pb-4">We’re a team of creatives who are excited about<br/>
                    unique
                    ideas & help.</h1>

                <span className="">
                    <button type="button" className="btn bg-white rounded h-12 w-48  text-sky">Send your CV <i
                            className="fas fa-long-arrow-alt-right w-4"></i></button>
                </span>
            </div>
        </div>
    </div>


</div>


</section>
  )
}

export default OurBlog