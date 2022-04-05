import React from 'react'
import PM from './images/pm.png';
import MRD from './images/mrd.png';
import BS from './images/bs.png';

function OurTeam() {
  return (
    <section>
        <div className="p-10 ">

            <div className="lg:text-6xl font-bold text_start py-10 md:text-5xl sm:text-4xl pl-24 sm:pt-12 pb-14">
                <h1>Our Core Team <br/>Players.</h1>
            </div>

            <div className="flex md:flex-row sm:flex-col lg:flex-row gap-12 lg:gap-16 justify-center sm:items-center ">
                <div>
                    <img className="team_image md:w-60 sm:w-48" src={PM} alt=""/>
                    <h1 className="font-bold text-1xl text-center ">Pralay Mondal</h1>
                    <h2 className="text-slate-600 text-center">CEO</h2>
                </div>

                <div>
                    <img className="team_image md:w-60 sm:w-48" src={MRD} alt=""/>
                    <h1 className="font-bold text-1xl text-center">Manab Ranjan Das</h1>
                    <h2 className="text-slate-600 text-center">Marketing</h2>
                </div>
                <div>
                    <img className="team_image  md:w-60 sm:w-48" src={BS} alt=""/>
                    <h1 className="font-bold text-1xl text-center">Bitu Saud</h1>
                    <h2 className="text-slate-600 text-center">Creative Head</h2>
                </div>
            </div>

        </div>


    </section>
  )
}

export default OurTeam