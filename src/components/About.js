import React from 'react'
import AboutMe from '../assets/img1.png'

function About() {
  return (
    <div className='w-full mx-auto pt-[250px] pb-10 h-auto customBg2'>
        <div className='w-[1200px] mx-auto h-auto flex justify-center items-center'>
            <div className='w-[50%]'>
                <img className='w-full h-auto' src={AboutMe} alt='Me'/>   
            </div>
            <div className='w-[50%]'>
                    <p className='text-[20px] text-[#ADACB5]'>
                        ABOUT ME
                    </p>
                    <h1 className='text-[55px] leading-[50px] text-white uppercase mt-2'>
                        WEb designer funnel builder
                    </h1>
                    <p className='text-[#ADACB5] text-[20px] leading-[30px] mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className='text-[#ADACB5] text-[20px] leading-[30px] mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidm, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <button className='py-4 px-[50px] bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 hover:bg-gradient-to-l hover:from-[#153AC5] hover:via-[#4064E9] hover:to-[#153AC5] transition duration-300 ease-in-out  text-[26px] rounded-full f900 text-white mt-10'>
                LEARN MORE ABOUT ME
            </button>
            </div>
        </div>
    </div>
  )
}

export default About