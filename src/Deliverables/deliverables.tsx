import React from "react";
import './deliverables.css'

export default function Deliverables() {
    return (
        <div className="flex flex-col justify-center h-screen py-20" style={{backgroundColor: '#0C0C0C'}} id='deliverables'>
            <div className="flex items-start justify-start text-start px-80">
                <span className="spotlight text-2xl">
                    REVOLUTIONSING ATHLETE MONITORING
                </span>
            </div>
            <div className="board py-4 h-4/5 flex justify-center" style={{padding: '0 17.5%'}}>
                <div className="column1 w-1/3 bg-red p-2 flex flex-col justify-between">
                    <div className="left1 p-4 pl-6 content-end">
                        <span id='analyse'>ANALYSE</span><br />
                        <p className="w-4/5 analyse-subtext leading-4">Real time vitals, performance and limb assessment data.</p>
                    </div>
                    <div className="left2 content-center p-4 text-center">
                        <span className="elevate">ELEVATE YOUR</span>
                        <br />
                        <div className="w-1/4 h-1/5 rounded-xl inline-block" style={{backgroundColor: "#5AD5EF"}}></div>
                        <span className="elevate">GAME.</span>
                    </div>
                    <div className="left3 content-end text-center">
                        <div>
                            <span className="mr-5 inline-block">
                                MASTER
                            </span>
                            <span className="mr-8 mb-2 inline-block">
                                <img src="./Deliverables/left3.png" alt=''></img>
                            </span>
                        </div>
                        <div>
                            <span className="ml-16 relative bottom-2">
                                PRECISION.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="column2 w-1/3 p-2 flex flex-col justify-between">
                    <div className="middle1 flex flex-col p-2 justify-between">
                            <div>
                                <div className="flex middle1_text">
                                    <span className="text-center text-white">GET REAL TIME DATA & 
                                    <div className="inline-block rounded-xl w-1/3 h-1/4 ml-4" style={{backgroundColor: '#5AD5EF', height: '28px', width: '100px'}}></div><br/>
                                    <div className="inline-block"><img src="./Deliverables/star.png" alt="" style={{height: '30px', width: '30px', marginRight: '10px'}}></img></div>ANALYTICS 
                                    <br/><span className="text-left" style={{marginRight: '50px'}}>TO AID YOU</span></span>
                                </div>
                                <div className="middle1_subtext flex px-8">
                                    <span className="text-white">All via our customizable application for a personalised user experience</span>
                                </div>
                            </div>
                            <div className="text-left">
                                <img src="./Deliverables/middle1_nut.png" alt=''></img>
                            </div>
                    </div>
                    
                    <div className="middle2 flex flex-col text-right p-6 justify-end">
                        <p id='optimise'>OPTIMISE</p>
                        <p className="optimise_subtext leading-4">Training and coaching strategies</p>
                    </div>
                </div>
                <div className="column3 w-1/3 flex flex-col bg-green p-2 justify-between">
                    <div className="right1 py-5 px-7 flex flex-col justify-between">
                        <div>
                            <div className="circle">

                            </div>
                        </div>
                        <div className="text-white">
                            <p className="optimise_subtext leading-4">Combining insights from nearly</p>
                            <p className='parameters'>25 Parameters</p>
                        </div>
                    </div>
                    <div className="right2 px-7 py-5">
                        <span id='overcome'>OVERCOME</span><br />
                        <p className="leading-4 right_subtext">Injury and performance hurdles</p>
                    </div>
                    <div className="right3 text-white text-center justify-end flex flex-col">
                        <div className="text-right pb-3 pr-5">
                            <span className="inline-block">
                                <img src="./Deliverables/right3_star.png" alt=''></img>
                            </span>
                            <span className="inline-block">
                                PREVENT
                            </span>
                        </div>
                        <div className="text-center">
                            <span className="relative bottom-2">
                                INJURIES.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right px-80">
                <span className="spotlight text-2xl">
                    WITH BIOMEDICAL SOLUTIONS
                </span>
            </div>
        </div>
    )
}
