import React from 'react'
import AboutMe from '../assets/img1.png'
import { Link } from 'react-scroll'

function About() {
  return (
    <div name="about" className='w-full mx-auto lg:pt-[250px] ssm:pt-[50px] pb-10 h-auto customBg2 ssm:px-5'>
        <div className='lg:w-[1200px] ssm:w-full mx-auto h-auto sm:flex justify-center items-center '>
            <div className='lg:w-[50%] ssm:w-full lg:block ssm:hidden'>
                <img className='w-full h-auto p-10' src={AboutMe} alt='Me'/>   
            </div>
            <div className='lg:w-[50%] ssm:w-full lg:text-left ssm:text-center'>
                    <p className='lg:text-[20px] ssm:text-16 text-[#ADACB5]'>
                        ABOUT ME
                    </p>
                    <h1 className='lg:text-[55px] ssm:text-[33px] lg:leading-[50px] ssm:leading-[36px] text-white uppercase mt-2'>
                        WEb designer funnel builder
                    </h1>
                    <img className='w-full h-auto lg:hidden ssm:block mt-[-20px] lg:p-10 ssm:p-10' src={AboutMe} alt='Me'/>
                    <p className='text-[#ADACB5] lg:text-[20px] ssm:text-16 lg:leading-[30px] ssm:leading-auto lg:mt-3 ssm:mt-[-20px]'>
                        As a web designer, my passion lies in transforming ideas into visually compelling digital experiences. With a keen eye for aesthetics and user-centric design principles, I strive to create websites that not only captivate but also provide seamless navigation and functionality.
                    </p>
                    <p className='text-[#ADACB5] lg:text-[20px] ssm:text-16 lg:leading-[30px] ssm:leading-auto mt-3'>
                    In addition to my design skills, I specialize in funnel building, ensuring that the user journey is strategically crafted to optimize conversions. From awareness to action, I focus on constructing effective sales funnels that guide visitors through a purposeful sequence, ultimately enhancing the overall success of online ventures.
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
        </div>
    </div>
  )
}


export default About