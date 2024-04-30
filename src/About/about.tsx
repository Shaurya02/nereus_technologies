import './about.css';

export default function About() {
  return (
    <div className="flex flex-col about h-screen text-center align-center justify-center" id='about'>
      <div style={{marginLeft: '140px'}}>
        <div className='pb-4'>
            <span className='aboutUsTitle'>ABOUT US</span>
        </div>
        <div style={{padding: '0 25%'}}>
            <span className='aboutUsDescription'>
            Nereus Technologies, based in <span className='aboutUsSpan'>Bangalore</span> specializes in <span className='aboutUsSpan'>wearable biomedical solutions </span>
            for athlete <span className='aboutUsSpan'>monitoring, simplifying clinical testing and analysis</span> into a single platform, 
            making it easily accessible for the sports community.
            </span>
        </div>
        <div className='flex flex-row justify-evenly text-center mt-16'>
            <div className='flex flex-col justify-evenly align-center text-center'>
            <img src='./About/sriya.png' className='photo ml-6' alt=""></img>
            <span className='name text-white'>SRIYA PERI</span>
            <span className='post text-white'>Co-founder</span>
            </div>
            <div className='flex flex-col justify-center align-center text-center'>
            <img src='./About/pari.png' className='photo ml-20' alt=''></img>
            <span className='name text-white'>PARINEETA MAHAJAN</span>
            <span className='post text-white'>Co-founder</span>
            </div>
        </div>
      </div>
    </div>
  )
}
