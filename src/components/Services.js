import React from 'react'
import Linings from '../assets/lines.svg'
import { TbDeviceDesktopCode } from "react-icons/tb"
import { FaFunnelDollar } from "react-icons/fa"
import { SiMaterialdesignicons } from "react-icons/si"

function Services() {
  return (
    <div className='w-full mx-auto py-20 h-auto servicesBg'>
        <div className='w-[1200px] mx-auto h-auto  text-center'>
            <p className='text-[20px] text-[#ADACB5] uppercase'>
                services
            </p>
            <h1 className='text-[55px] leading-[50px] text-white uppercase mt-2'>
            Uncover the Services I Provide
            </h1>
            <p className='text-[20px] text-[#ADACB5] w-[650px] mx-auto mt-3'>
            Uncover the Diverse Services I Provide for a Unique and Impactful Online Experience.
            </p>
            <img className='w-[1000px] mx-auto mt-10' src={Linings} alt='lines'/>
        </div>
        <div className='w-full mx-auto flex flex-wrap justify-center mt-5 p-10'>
            <div className='customBg w-full mx-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-20 border border-[#FBF9FF33] border-1'>
                <div className='w-[120px] h-[120px] p-5 mx-auto flex items-center justify-center bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 rounded-full'>
                    <TbDeviceDesktopCode className='text-white text-[60px] mx-auto text-center' />
                </div>
                <h1 className='text-[27px] text-center text-[#FBF9FF] uppercase mt-5'>web development</h1>
                <p className='text-[20px] text-center text-[#ADACB5] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i.</p>
            </div>

            <div className='customBg w-full mx-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-20 border border-[#FBF9FF33] border-1'>
                <div className='w-[120px] h-[120px] p-5 mx-auto flex items-center justify-center bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 rounded-full'>
                    <FaFunnelDollar className='text-white text-[60px] mx-auto text-center' />
                </div>
                <h1 className='text-[27px] text-center text-[#FBF9FF] uppercase mt-5'>Funnel creation</h1>
                <p className='text-[20px] text-center text-[#ADACB5] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i.</p>
            </div>

            <div className='customBg w-full mx-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-20 border border-[#FBF9FF33] border-1'>
                <div className='w-[120px] h-[120px] p-5 mx-auto flex items-center justify-center bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 rounded-full'>
                    <SiMaterialdesignicons className='text-white text-[60px] mx-auto text-center' />
                </div>
                <h1 className='text-[27px] text-center text-[#FBF9FF] uppercase mt-5'>Graphic Design</h1>
                <p className='text-[20px] text-center text-[#ADACB5] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i.</p>
            </div>
        </div>
        <div className='mt-10'>
        <button className='block mx-auto py-4 px-[50px] bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 hover:bg-gradient-to-l hover:from-[#153AC5] hover:via-[#4064E9] hover:to-[#153AC5] transition duration-300 ease-in-out  text-[26px] rounded-full f900 text-white '>
            LEARN MORE ABOUT ME
          </button>
        </div>
    </div>
  )
}

export default Services