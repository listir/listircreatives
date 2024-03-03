import React from 'react'
import Toolsimg from '../assets/tools.svg'
import { Link } from 'react-scroll'

function Tools() {
  return (
    <div className='w-full mx-auto lg:py-20 ssm:py-5 ssm:px-5 h-auto bgGrad'>
    <div className='lg:w-[1200px] ssm:w-full mx-auto h-auto sm:flex justify-center items-center lg:text-left ssm:text-center'>
        <div className='lg:w-[50%] ssm:w-full p-5'>
                <p className='lg:text-[20px] ssm:text-16 text-[#ADACB5] uppercase'>
                    Tools
                </p>
                <h1 className='lg:text-[55px] ssm:text-[33px] lg:leading-[50px] ssm:leading-[36px] text-white uppercase mt-2'>
                    Web Design Toolkit.
                </h1>
                <img className='w-full h-auto lg:hidden ssm:block mt-4' src={Toolsimg} alt='tools'/>  
                <p className='text-[#ADACB5] lg:text-[27px] ssm:text-[20px] lg:leading-9 ssm:leading-normal mt-3 lg:pr-10 ssm:pr-0'>
                Empower Your Creativity with Tools Tailored for Seamless Website Creation.
                </p>
                <p className='text-[#ADACB5] lg:text-[20px] ssm:text-16 leading-[26px] mt-3 lg:pr-5 ssm:pr-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidm, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <Link 
                    to="contact" 
                    smooth={true} 
                    duration={1000} 
                    >
                    <button className='lg:text-[26px] sm:text-[18px] lg:mt-10 ssm:mt-5 py-4 px-[50px] bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 hover:bg-gradient-to-l hover:from-[#153AC5] hover:via-[#4064E9] hover:to-[#153AC5] transition duration-300 ease-in-out rounded-full f900 text-white'>
                        LEARN MORE ABOUT ME
                    </button>
                </Link>
        </div>

        <div className='lg:w-[50%] ssm:w-full lg:block ssm:hidden'>
            <img className='w-full h-auto' src={Toolsimg} alt='tools'/>   
        </div>

    </div>
</div>
  )
}

export default Tools