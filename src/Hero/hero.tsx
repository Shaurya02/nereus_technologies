import React from "react";
import Navbar from "./navbar";
import './Hero.css'
import HeroFooter from './herofooter'
export default function Hero(){
    return(
        <div>
            <div className="hero flex-row" id='hero'>
                <Navbar/>
                <div className="heroTitle text-white text-center mt-8 mb-0">
                    <span className="titleText md:text-6xl lg:text-7xl xl:text-8xl font-bold italic leading-tight text-center">UNLOCK  YOUR<br/>FULL  POTENTIAL</span>
                </div>
                <div className="text-center">
                    <span className="bg-blue rounded-3xl border px-5 py-3 heroTitleBubble text-black" id="move">Move.</span>
                    <span className="bg-blue rounded-3xl border px-5 py-3 heroTitleBubble text-black" id="mend">Mend.</span>
                    <span className="bg-blue rounded-3xl border px-5 py-3 heroTitleBubble text-black" id="master">Master.</span>
                </div>
                <div className="text-center my-12">
                    <span className="text-white text-xs md:text-sm xl:text-base heroDescription">Bringing the pulse of clinical testing<br/>straight to the heart of the action.</span>
                </div>
                <div className="text-center">
                    <a className='inline-block mt-16' href='#deliverables'><img src="./Hero/down-arrow.png" alt=''></img></a>
                </div>
            </div>
            <HeroFooter/>
        </div>
    )
}
