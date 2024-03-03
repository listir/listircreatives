import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handdleNav  = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full  bg-[#050614]'>
        <div className='flex justify-between items-center h-20 mx-auto max-w-[1240px] px-4 text-white'>
         <h1 className='w-full text-3xl font-bold text-white m-4 f900'>LISTIR</h1>   
        <ul className='hidden md:flex'>
            <li className='py-3 px-5 hover:text-[#4064E9]'>
            <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                >
                Home
            </Link>
            </li>
            <li className='py-3 px-5 hover:text-[#4064E9]'>            
            <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                >
                About
            </Link>
            </li>
            <li className='py-3 px-5 hover:text-[#4064E9]'>
            <Link 
                to="services" 
                smooth={true} 
                duration={500} 
                >
                Services
            </Link>
            </li>
            <li className='py-3 px-5 hover:text-[#4064E9]'>
            <Link 
                to="portfolio" 
                smooth={true} 
                duration={500} 
                >
                Portfolio
            </Link>
            </li>
            <li className='py-3 px-10 bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 rounded-full hover:bg-gradient-to-l hover:from-[#153AC5] hover:via-[#4064E9] hover:to-[#153AC5] transition duration-300 ease-in-out'>
            <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                >
                Contact
            </Link>
            </li>
        </ul>
        <div onClick={handdleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} /> }
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#000330] border-r-gray-900 z-[9999]' : 'fixed left-[-100%] ease-in-out duration-500 z-[9999]'}>
        <h1 className='w-full text-3xl font-bold text-white m-4 f900'>LISTIR</h1>   
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-b-gray-600 hover:text-[#4064E9]'>
                <Link onClick={handdleNav} 
                    to="home" 
                    smooth={true} 
                    duration={500} 
                    >
                    Home
                </Link>
                </li>
                <li className='p-4 border-b border-b-gray-600 hover:text-[#4064E9]'>
                <Link onClick={handdleNav} 
                    to="about" 
                    smooth={true} 
                    duration={500} 
                    >
                    About
                </Link>
                </li>
                <li className='p-4 border-b border-b-gray-600 hover:text-[#4064E9]'>
                <Link onClick={handdleNav} 
                    to="services" 
                    smooth={true} 
                    duration={500} 
                    >
                    Services
                </Link>
                </li>
                <li className='p-4 border-b border-b-gray-600 hover:text-[#4064E9]'>
                <Link onClick={handdleNav} 
                    to="portfolio" 
                    smooth={true} 
                    duration={500} 
                    >
                    Portfolio
                </Link>
                </li>
                <li className='p-4 hover:text-[#4064E9]'>
                <Link onClick={handdleNav} 
                    to="contact" 
                    smooth={true} 
                    duration={500} 
                    >
                    Contact
                </Link>
                </li>
            </ul>
        </div>
    </div>
    </div>
    
  )
}
