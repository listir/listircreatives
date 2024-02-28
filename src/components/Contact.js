import React from 'react'

function Contact() {
  return (
    <div className='w-full mx-auto py-20 h-auto servicesBg'>
        <div className='w-[1200px] mx-auto h-auto  text-center'>
            <p className='text-[20px] text-[#ADACB5] uppercase'>
            CONTACT
            </p>
            <h1 className='text-[55px] leading-[50px] text-white uppercase mt-5'>
            Get in Touch with Me.
            </h1>
        </div>
        <div className='w-[650px] mx-auto mt-10 customBg2 p-10 rounded-xl border border-[#FBF9FF33] border-1'>
            <h2 className='text-white text-center text-[30px] uppercase'>Send a message</h2>
            <form action=''>
                <div className='mb-4'>
                    <label className=' text-white block font-medium mb-2' htmlFor=''>Fullname:</label>
                    <input placeholder='John Doe' className='text-white w-full px-3 py-5 border rounded-lg bg-gray-800 focus:border-blue-500' required type='text'/>
                </div>
                <div className='mb-4'>
                    <label className=' text-white block font-medium mb-2' htmlFor=''>Email:</label>
                    <input placeholder='John@example.com' className='text-white w-full px-3 py-5 border rounded-lg bg-gray-800 focus:border-blue-500' required type='email'/>
                </div>
                <div className='mb-4'>
                    <label className=' text-white block font-medium mb-2' htmlFor=''>Message:</label>
                    <textarea rows='4' placeholder='Enter your message here...' className='text-white w-full px-3 py-5 border rounded-lg bg-gray-800 focus:border-blue-500' required type='text'/>
                </div>
                <div>
                <button className='block mx-auto py-4 px-[50px] bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 hover:bg-gradient-to-l hover:from-[#153AC5] hover:via-[#4064E9] hover:to-[#153AC5] transition duration-300 ease-in-out  text-[26px] rounded-full f900 text-white '>
                    LEARN MORE ABOUT ME
                </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact