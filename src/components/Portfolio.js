import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Portfolio1 from '../assets/slider1.png'
import Portfolio2 from '../assets/slider2.png'
import Portfolio3 from '../assets/slider3.png'
import Portfolio4 from '../assets/slider4.png'
import Portfolio5 from '../assets/slider5.png'
import Portfolio6 from '../assets/slider6.png'
import Portfolio7 from '../assets/slider7.png'
import Portfolio8 from '../assets/slider8.png'
import Graphics1 from '../assets/graphic1.png'
import Graphics2 from '../assets/graphic2.png'
import Graphics3 from '../assets/graphic3.png'
import Graphics4 from '../assets/graphic4.png'
import Graphics5 from '../assets/graphic5.png'
import Graphics6 from '../assets/graphic6.png'

function Portfolio() {
  return (
    <div className='w-full mx-auto py-20 h-auto servicesBg'>
    <div className='w-[1200px] mx-auto h-auto  text-center'>
        <p className='text-[20px] text-[#ADACB5] uppercase'>
            PORTFOLIO 
        </p>
        <h1 className='text-[55px] leading-[50px] text-white uppercase mt-2'>
        Check my Recent Client Work
        </h1>
        <div className='w-[1000px] h-auto mx-auto mt-10'>
        <Tabs>
            <TabList>
            <Tab>WEB DEVELOPMENT</Tab>
            <Tab>GRAPHIC DESIGN</Tab>
            </TabList>

            <TabPanel>
            <div className='grid grid-cols-4 gap-4 mt-10'>
                <img src={Portfolio1} alt='portfolio' className='w-[320px] h-auto' />
                <img src={Portfolio2} alt='portfolio' className='w-[320px] h-auto' />
                <img src={Portfolio3} alt='portfolio' className='w-[320px] h-auto' />
                <img src={Portfolio4} alt='portfolio' className='w-[320px] h-auto' />
                <img src={Portfolio5} alt='portfolio' className='w-[320px] h-auto' />
                <img src={Portfolio6} alt='portfolio' className='w-[320px] h-auto' />
                <img src={Portfolio7} alt='portfolio' className='w-[320px] h-auto' />
                <img src={Portfolio8} alt='portfolio' className='w-[320px] h-auto' />
            </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-4 gap-4 mt-10'>
                    <img src={Graphics1} alt='portfolio' className='w-[320px] h-auto' />
                    <img src={Graphics2} alt='portfolio' className='w-[320px] h-auto' />
                    <img src={Graphics3} alt='portfolio' className='w-[320px] h-auto' />
                    <img src={Graphics4} alt='portfolio' className='w-[320px] h-auto' />
                    <img src={Graphics5} alt='portfolio' className='w-[320px] h-auto' />
                    <img src={Graphics6} alt='portfolio' className='w-[320px] h-auto' />
                    <img src={Graphics1} alt='portfolio' className='w-[320px] h-auto' />
                    <img src={Graphics2} alt='portfolio' className='w-[320px] h-auto' />
                </div>
            </TabPanel>
        </Tabs>
        </div>
    </div>
</div>
  )
}

export default Portfolio