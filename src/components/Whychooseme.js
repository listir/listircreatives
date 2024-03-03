import React from 'react'
import { RiUserFollowLine } from "react-icons/ri";
import { RiUserStarLine } from "react-icons/ri";
import { TbUserCog } from "react-icons/tb";


function Whychooseme() {
  return (
    <div className='w-full mx-auto lg:py-20 ssm:py-5 ssm:px-5 h-auto servicesBg'>
        <div className='lg:w-[1200px] ssm:w-full mx-auto h-auto  text-center'>
            <p className='lg:text-[20px] ssm:text-16  text-[#ADACB5] uppercase'>
            Why ME?
            </p>
            <h1 className='lg:text-[55px] ssm:text-[36px] lg:leading-[50px] ssm:leading-[36px] text-white uppercase mt-3'>
            Elevate Your Online Presence
            </h1>
        </div>
        <div className='w-full mx-auto flex flex-wrap justify-center lg:mt-10 ssm:mt-5 lg:p-10 ssm:p-3'>
            <div className='customBg w-full mx-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 lg:py-20 ssm:py-5 lg:px-10 ssm:px-4 border border-[#FBF9FF33] border-1'>
            <div className='lg:w-[120px] ssm:w-[60px] lg:h-[120px] ssm:h-[60px] p-5 mx-auto flex items-center justify-center bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 rounded-full'>
                    <TbUserCog className='text-white text-[60px] mx-auto text-center' />
                </div>
                <h1 className='lg:text-[27px] ssm:text-[20px] text-center text-[#FBF9FF] uppercase mt-5'>Expertise</h1>
                <p className='lg:text-[20px] ssm:text-12 text-center text-[#ADACB5] mt-2'>Passionate professional, turning concepts into immersive web experiences.</p>
            </div>

            <div className='customBg lg:mt-0 ssm:mt-3 w-full mx-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 lg:py-20 ssm:py-5 lg:px-10 ssm:px-4 border border-[#FBF9FF33] border-1'>
            <div className='lg:w-[120px] ssm:w-[60px] lg:h-[120px] ssm:h-[60px] p-5 mx-auto flex items-center justify-center bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 rounded-full'>
                    <RiUserFollowLine className='text-white text-[60px] mx-auto text-center' />
                </div>
                <h1 className='lg:text-[27px] ssm:text-[20px] text-center text-[#FBF9FF] uppercase mt-5'>Precision</h1>
                <p className='lg:text-[20px] ssm:text-12text-center text-[#ADACB5] mt-2'>Committed to perfection, meticulous attention to detail at every pixel.</p>
            </div>

            <div className='customBg lg:mt-0 ssm:mt-3 w-full mx-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 lg:py-20 ssm:py-5 lg:px-10 ssm:px-4 border border-[#FBF9FF33] border-1'>
            <div className='lg:w-[120px] ssm:w-[60px] lg:h-[120px] ssm:h-[60px] p-5 mx-auto flex items-center justify-center bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 rounded-full'>
                    <RiUserStarLine className='text-white text-[60px] mx-auto text-center' />
                </div>
                <h1 className='lg:text-[27px] ssm:text-[20px] text-center text-[#FBF9FF] uppercase mt-5'>Creativity</h1>
                <p className='lg:text-[20px] ssm:text-12 text-center text-[#ADACB5] mt-2'>Infusing art for a unique online presence—turning imagination into digital masterpieces.</p>
            </div>
        </div>
        <div className='lg:mt-10 ssm:mt-3'>
        <button className='lg:text-[26px] sm:text-[18px] block mx-auto py-4 px-[50px] bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 hover:bg-gradient-to-l hover:from-[#153AC5] hover:via-[#4064E9] hover:to-[#153AC5] transition duration-300 ease-in-out rounded-full f900 text-white '>
            LEARN MORE ABOUT ME
          </button>
        </div>
    </div>
  )
}

export default Whychooseme