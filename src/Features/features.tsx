import './features.css';

export default function Features(){
    return(
    <div className="features h-screen text-center justify-center flex flex-col align-center" id='features'>
        <div className='pb-20'>
            <span className='title text-white pb-2 inline-block'>WHAT IS INCLUDED?</span>
            <span className='w-2/3 text-white description inline-block px-20'>We employ advanced technology enabling immediate player assessment, ensuring proactive management of performance and health.</span>
        </div>
        <div>
            <div className='flex flex-row justify-evenly text-center align-center'>
                <img src='./Features/icon-1.png' alt='' className='icons inline-block'></img>
                <img src='./Features/icon-2.png' alt='' className='icons inline-block mx-28'></img>
                <img src='./Features/icon-3.png' alt='' className='icons inline-block'></img>
            </div>
            <img src='./Features/line.png' alt='' className='line inline-block px-28'></img>
        </div>
        <div className='flex flex-row justify-evenly'>
            <span className='inline-block text-white w-1/5 icon-description align-top text-center'>Motion and Muscle Monitoring Sensors</span>
            <span className='inline-block text-white w-1/5 icon-description align-top'>One-stop application for managing athlete data and analysis</span>
            <span className='inline-block text-white w-1/5 icon-description align-top'>Cardiac health and Location Monitoring Sensor</span>
        </div>
    </div>)
}