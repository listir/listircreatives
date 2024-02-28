import React from 'react'
import Toolsimg from '../assets/tools.png'
function Tools() {
  return (
    <div className='w-full mx-auto py-20 h-auto customBg2'>
    <div className='w-[1200px] mx-auto h-auto flex justify-center items-center'>
        <div className='w-[50%] p-5'>
                <p className='text-[20px] text-[#ADACB5] uppercase'>
                    Tools
                </p>
                <h1 className='text-[55px] leading-[55px] text-white uppercase mt-2'>
                    Web Design Toolkit.
                </h1>
                <p className='text-[#ADACB5] text-[27px] leading-9 mt-3 pr-10'>
                Empower Your Creativity with Tools Tailored for Seamless Website Creation.
                </p>
                <p className='text-[#ADACB5] text-[20px] leading-[26px] mt-3 pr-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidm, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <button className='block mt-10 py-4 px-[50px] bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 hover:bg-gradient-to-l hover:from-[#153AC5] hover:via-[#4064E9] hover:to-[#153AC5] transition duration-300 ease-in-out  text-[26px] rounded-full f900 text-white '>
                    LEARN MORE ABOUT ME
                </button>
        </div>

        <div className='w-[50%]'>
            <img className='w-full h-auto' src={Toolsimg} alt='tools'/>   
        </div>

    </div>
</div>
  )
}

export default Tools