import React from 'react';
import image from '../../../assets/kamrul.jpg'
import './About.css'


const About = () => {
    return (
        <div className='text-[#E2E8F0] pb-24 md:pb-48 '>
            <div>
                <div className='md:flex justify-between items-center gap-20'>
                    <div className=''>
                        <p className='text-[#38BDF8] py-4 text-4xl font-bold'>About Me</p>
                        <p className='font-semibold leading-8'>I am Kamrul Hasan, a passionate web developer and programmer from Bogura, Bangladesh. With a Bachelor of Science (BSc) degree and expertise in various programming languages, I create visually appealing and functional websites. I am dedicated to delivering high-quality solutions that exceed clients' expectations.</p>
                        <p className='font-semibold leading-8 mt-3'> I have experience collaborating with clients from diverse industries, and my creative thinking and problem-solving skills enable me to provide personalized web development services. I am committed to helping businesses thrive in the digital world by providing innovative and tailored solutions.</p>
                    </div>
                    <div className='bg-white md:w-2 md:h-44 sm:h-2 sm:w-44'>

                    </div>
                    <div className=' py-5'>
                        <img className='md:w-[80%] border-4 border-[#38BDF8] shadow-2xl shadow-[#38BDF8]' src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;