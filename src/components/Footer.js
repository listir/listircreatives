import React from 'react';
import { FaFacebookSquare, FaBehanceSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const socialMediaLinks = {
    facebook: 'https://www.facebook.com/xlhezt',
    behance: 'https://www.behance.net/listircreatives',
    instagram: 'https://www.instagram.com/listircreatives',
    linkedin: 'https://www.linkedin.com/in/listircreatives',
  };

  return (
    <div className='w-full bg-black'>
      <div className='mx-auto max-w-[1240px] py-7 text-white'>
        <div className='flex justify-center items-center w-[300px] h-auto mx-auto'>
          <a href={socialMediaLinks.facebook} target='_blank' rel='noopener noreferrer' className='mr-3'>
            <FaFacebookSquare className='text-[25px]' />
          </a>
          <a href={socialMediaLinks.behance} target='_blank' rel='noopener noreferrer' className='mr-3'>
            <FaBehanceSquare className='text-[25px]' />
          </a>
          <a href={socialMediaLinks.instagram} target='_blank' rel='noopener noreferrer' className='mr-3'>
            <FaInstagramSquare className='text-[25px]' />
          </a>
          <a href={socialMediaLinks.linkedin} target='_blank' rel='noopener noreferrer' className='mr-3'>
            <FaLinkedin className='text-[25px]' />
          </a>
        </div>
        <p className='text-white block text-[14px] text-center capitalize mt-5'>
          Copyright © ListirCreatives 2020 | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
