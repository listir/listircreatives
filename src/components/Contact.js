import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';

function Contact() {
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_tvztag9', 'template_kkve8yl', form.current, {
          publicKey: 'JeKWP57mjLZtb5Gwt',
        })
        .then(() => {
          console.log('SUCCESS!');
          setIsModalOpen(true);
          form.current.reset();
        })
        .catch((error) => {
          console.log('FAILED...', error.text);
        });
    };
  
    useEffect(() => {
      if (isModalOpen) {
        const timer = setTimeout(() => {
          closeModal();
        }, 3000);
  
        return () => clearTimeout(timer);
      }
    }, [isModalOpen]);
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div name='contact' className='w-full mx-auto lg:py-20 ssm:py-5 ssm:px-5 h-auto servicesBg'>
        <div className='lg:w-[1200px] ssm:w-full mx-auto h-auto  text-center'>
            <p className='lg:text-[20px] ssm:text-16 text-[#ADACB5] uppercase'>
            CONTACT
            </p>
            <h1 className='lg:text-[55px] ssm:text-[33px] lg:leading-[50px] ssm:leading-[36px] text-white uppercase mt-2'>
            Connect with me
            </h1>
        </div>
        <div className='lg:w-[650px] ssm:w-full mx-auto lg:mt-10 ssm:mt-5 customBg2 p-10 rounded-xl border border-[#FBF9FF33] border-1'>
            <h2 className='text-white text-center lg:text-[30px] ssm:text-[22px] uppercase'>Send a message</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className='mb-4'>
                    <label className=' text-white block font-medium mb-2' htmlFor=''>Fullname:</label>
                    <input name="user_name" placeholder='John Doe' className='text-white w-full px-3 py-5 border rounded-lg bg-gray-800 focus:border-blue-500' required type='text'/>
                </div>
                <div className='mb-4'>
                    <label className=' text-white block font-medium mb-2' htmlFor=''>Email:</label>
                    <input name="user_email" placeholder='John@example.com' className='text-white w-full px-3 py-5 border rounded-lg bg-gray-800 focus:border-blue-500' required type='email'/>
                </div>
                <div className='mb-4'>
                    <label className=' text-white block font-medium mb-2' htmlFor=''>Message:</label>
                    <textarea name="message" rows='4' placeholder='Enter your message here...' className='text-white w-full px-3 py-5 border rounded-lg bg-gray-800 focus:border-blue-500' required type='text'/>
                </div>
                <div>
                <button  type="submit" value="Send" className='lg:mt-5 ssm:mt-2 lg:text-[26px] sm:text-[18px] block mx-auto py-4 lg:px-[50px] ssm:px-[30px] bg-[#4064E9] shadow-lg shadow-[#4064E9]/50 hover:bg-gradient-to-l hover:from-[#153AC5] hover:via-[#4064E9] hover:to-[#153AC5] transition duration-300 ease-in-out rounded-full f900 text-white '>
                    LEARN MORE ABOUT ME
                </button >
                </div>
            </form>
        {/* Modal for success message */}
        <Modal
            className='fixed bottom-0 right-0 m-4 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-6 bg-white rounded-lg shadow-lg'
            overlayClassName='custom-overlay'
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Email Sent"
            >
            <p className='text-center text-lg text-gray-800'>
                Thank you for reaching out! I'll get back to you as soon as possible.
            </p>
            <button
                className='block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
                onClick={closeModal}
            >
                Close
            </button>
        </Modal>

        </div>
    </div>
  )
}

export default Contact