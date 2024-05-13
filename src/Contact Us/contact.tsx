import { useState } from 'react'
import './contact.css'

export default function ContactUs(){

    const [userData,setUserData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return(
        <div className='contactUs flex flex-col flex-row' id='ContactUs'>
            <div className='p-12 pb-0 text-left'>
                <h1 className='getInTouch inline-block'>GET IN TOUCH</h1>
            </div>
            <form>
                <div className='form flex mt-10 ml-14'>
                    <div className='flex flex-col'>
                        <input
                            className='bg-transparent'
                            id='name'
                            type='text'
                            placeholder='Your name'
                            name='name' // Add name attribute
                            value={userData.name} // Bind value to state
                            onChange={handleInputChange} // Add onChange handler
                        />
                        <input
                            className='email bg-transparent'
                            type='email'
                            id='email'
                            placeholder='Email address'
                            name='email' // Add name attribute
                            value={userData.email} // Bind value to state
                            onChange={handleInputChange} // Add onChange handler
                        />
                    </div>
                    <div className='flex ml-20'>
                        <textarea
                            className='message bg-transparent'
                            id='message'
                            placeholder='Write us a message...'
                            name='message' // Add name attribute
                            value={userData.message} // Bind value to state
                            onChange={handleInputChange} // Add onChange handler
                        >
                        </textarea>
                    </div>
                </div>
                <div className='flex ml-14 mt-9'>
                    <button onClick={()=>{}} className='submit'>Submit</button>
                </div>
            </form>
            <div className='flex flex-row justify-between mt-8 ml-8 mr-8'>
                <div className='flex flex-row justify-evenly' style={{width: '200px', marginTop: ''}}>
                    <a href='https://www.instagram.com/nereustechnologies?igsh=MTVjbWhlb2tlbHBuag=='><img src='./Contact Us/instagram.png' alt='' className='contactIcon'></img></a>
                    <a href='https://www.linkedin.com/company/nereus-technologies-pvt-ltd/'><img src='./Contact Us/linkedin.png' alt='' className='contactIcon'></img></a>
                    <a href='#a'><img src='./Contact Us/facebook.png' alt='' className='contactIcon'></img></a>
                </div>
                <div className='mt-4'>
                    <span className='moveMendMaster'>Move. Mend. Master.</span>
                </div>
                <div style={{marginTop: '-30px'}}>
                    <p id="nereus">
                        NEREUS
                    </p>
                    <span id='technologies'>
                        TECHNOLOGIES
                    </span>
                </div>
            </div>
        </div>
    )
}
