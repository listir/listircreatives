import React from 'react'
import Listir from '../assets/Listir.png';
import HeroBg from '../assets/HeroBg.jpg';
import TxtBg from '../assets/TxtBg.png';
import Slider1 from '../assets/slider1.png'
import Slider2 from '../assets/slider2.png'
import Slider3 from '../assets/slider3.png'
import Slider4 from '../assets/slider4.png'
import Slider5 from '../assets/slider5.png'
import Slider6 from '../assets/slider6.png'
import Slider7 from '../assets/slider7.png'
import Slider8 from '../assets/slider8.png'
import { ReactTyped } from "react-typed";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {

  const sliders = [Slider1, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7, Slider8];

  var settings = {
    dots: false,
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '0',
    initialSlide: 0,
    variableWidth: true, 
  };

  return (
    <div className='w-full pt-4 mx-auto bg-cover bg-center bg-no-repeat h-[1150px]' style={{ backgroundImage: `url(${HeroBg})` }}>
      <div className='w-[1300px] mx-auto'>
        {/* eslint-disable-next-line */}
        <img className='mx-auto' src={Listir}/>
        {/* eslint-disable-next-line */}
        <img className='w-[1100px] mt-10 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={TxtBg} alt='Me'/>
        <div className='w-full mt-[50px] flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          <h1 className='text-[120px]  text-[#4064E9] txtShadow'>
            HI
          </h1>
          <ReactTyped className='text-[120px]  text-white pl-4 f900 txtShadow'
            strings={['LISTIR HERE!']} 
            typeSpeed={70}
            backSpeed={140}
            cursorChar=""
          />
        </div>
        <div className='w-[700px] mx-auto mt-[250px] absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <p className='text-[#ADACB5] text-[20px]  text-center'>
          <span className='font-bold text-white'>Lorem ipsum dolor sit amet</span> consectetur adipiscing elit, sed do eiusmod tempor incidm, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className='block mx-auto py-4 px-[50px] bg-[#4064E9] shadow-[#4064E9]/50 hover:bg-gradient-to-l hover:from-[#153AC5] hover:via-[#4064E9] hover:to-[#153AC5] transition duration-300 ease-in-out shadow-lg text-[26px] rounded-full f900 text-white mt-10'>
            LEARN MORE ABOUT ME
          </button>
        </div>
        
      </div>
      <div className='w-full h-auto mx-auto mt-[-50px]'>
        <Slider {...settings} className='p-0 transform translate-x-0 translate-y-0 translate-z-0'>
          {sliders.map((slider, index) => (
            <div key={index} className='w-full p-0 m-0'>
              <img className='w-[320px] h-auto p-0 m-0' src={slider} alt={`Slider${index + 1}`} style={{ margin: '0' }} />
            </div>
          ))}
        </Slider>
      </div>

    </div>
  )
}

export default Hero