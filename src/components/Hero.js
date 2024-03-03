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
import { Link } from 'react-scroll'

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  };

  return (
    <div name="home" className='w-full pt-4 mx-auto bg-cover bg-center bg-no-repeat h-[1150px] ssm:h-auto' style={{ backgroundImage: `url(${HeroBg})` }}>

      <div className='lg:w-[1240px] sm:w-full  lg:py-[100px] ssm:py-10 px-5 ssm:px-5 mx-auto ssm:mt-0 relative h-screen ssm:h-auto bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${Listir})` }}>
        <div className='w-full lg:py-11 ssm:py-5 ssm:mt-20 flex justify-center items-center  bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${TxtBg})` }}>
            <h1 className='lg:text-[120px] md:text-[70px] ssm:text-[40px] text-[#4064E9] txtShadow'>
              HI
            </h1>
            <ReactTyped className='lg:text-[120px] md:text-[60px] ssm:text-[40px] text-white pl-4 f900 txtShadow'
              strings={['LISTIR HERE!']} 
              typeSpeed={70}
              backSpeed={140}
              cursorChar=""
            />
          </div>
          <div className='lg:w-[700px] ssm:w-full mx-auto mt-[-20px]'>
            <p className='text-[#ADACB5] lg:text-[20px] ssm:text-[16px] mx-auto ssm:px-15  text-center'>
            <span className='font-bold text-white capitalize'>I'm a web designer and funnel builder</span> with 3 years of experience. As a freelancer expert, my mission is to design and develop websites and sales funnels that you and your audience love.
            </p>
            <Link 
                to="contact" 
                smooth={true} 
                duration={1000} 
                >
              <button className='block mx-auto py-4 px-[50px] bg-[#4064E9] shadow-[#4064E9]/50 hover:bg-gradient-to-l hover:from-[#153AC5] hover:via-[#4064E9] hover:to-[#153AC5] transition duration-300 ease-in-out shadow-lg lg:text-[26px] sm:text-[18px] rounded-full f900 text-white mt-10'>
              LEARN MORE ABOUT ME
            </button>
            </Link>

          </div>
      </div>
      <div className='w-full h-auto mx-auto lg:mt-20 sm:mt-5'>
        <Slider {...settings} className='p-0'>
          {sliders.map((slider, index) => (
            <div key={index} className='w-full p-0 m-0'>
              <img className='lg:w-[320px] ssm:w-[100px] h-auto p-0 m-0' src={slider} alt={`Slider${index + 1}`} style={{ margin: '0' }} />
            </div>
          ))}
        </Slider>
      </div>

    </div>
  )
}

export default Hero