import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

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
            <li className='py-3 px-5 hover:text-[#4064E9]'>Home</li>
            <li className='py-3 px-5 hover:text-[#4064E9]'>Company</li>
            <li className='py-3 px-5 hover:text-[#4064E9]'>Resources</li>
            <li className='py-3 px-5 hover:text-[#4064E9]'>About</li>
            <li className='py-3 px-10 bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 rounded-full hover:bg-gradient-to-l hover:from-[#153AC5] hover:via-[#4064E9] hover:to-[#153AC5] transition duration-300 ease-in-out'>Contact</li>
        </ul>
        <div onClick={handdleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} /> }
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#000330] border-r-gray-900' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#FE5757] m-4'>ListirCreatives</h1>   
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-b-gray-600'>Home</li>
                <li className='p-4 border-b border-b-gray-600'>Company</li>
                <li className='p-4 border-b border-b-gray-600'>Resources</li>
                <li className='p-4 border-b border-b-gray-600'>About</li>
                <li className='p-4 '>Contact</li>
            </ul>
        </div>
    </div>
    </div>
    
  )
}
