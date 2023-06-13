import React from 'react';
import coding from '../../assets/icons/coding.gif'
import design from '../../assets/icons/design.gif'
import repair from '../../assets/icons/repair.gif'

const Services = () => {
    return (
        <div className='text-[#E2E8F0] pb-24 md:pb-48 '>
            <div>
                <div>
                <p className='text-center  pb-3 font-bold text-4xl text-[#38BDF8]'>Services</p>
                <p className="text-center font-semibold pb-10">What I will do for you!</p>
                </div>

                <div className='md:flex gap-20'>
                    <div className='bg-[#0B1120] md:w-[400px] flex flex-col items-center text-center p-5 gap-5 border border-[#38BDF8] rounded-md mb-5 transform transition duration-500 hover:scale-110'>
                        <img src={design} className='w-44 shadow-lg shadow-[#38BDF8]' alt="" />
                        <h5 className='font-bold text-2xl'>Website <span className='text-[#38BDF8]'>Design</span></h5>
                        <p>We will create a custom website design that meets your specific needs and requirements. We will work with you to understand your business goals and objectives, and we will use our expertise to create a website that is both visually appealing and functionally effective.</p>
                    </div>
                    <div className='bg-[#0B1120] md:w-[400px] flex flex-col items-center text-center p-5 gap-5 border border-[#38BDF8] rounded-md mb-5 transform transition duration-500 hover:scale-110'>
                        <img src={coding} className='w-44 shadow-lg shadow-[#38BDF8]' alt="" />
                        <h5 className='font-bold text-2xl'>Website <span className='text-[#38BDF8]'>Development</span></h5>
                        <p>We will develop a custom website that is built on the latest technologies and platforms. We will use our expertise to create a website that is secure, reliable, and scalable. We will also work with you to implement your content management system (CMS) of choice, so you can easily manage your website content after it is launched.</p>
                    </div>
                    <div className='bg-[#0B1120] md:w-[400px] flex flex-col items-center text-center p-5 gap-5 border border-[#38BDF8] rounded-md mb-5 transform transition duration-500 hover:scale-110'>
                        <img src={repair} className='w-44 shadow-lg shadow-[#38BDF8]' alt="" />
                        <h5 className='font-bold text-2xl'>Website <span className='text-[#38BDF8]'>Maintenance</span></h5>
                        <p>We will keep your website up-to-date and secure. We will regularly update your website's content, fix any security vulnerabilities, and optimize your website's performance. We will also provide you with 24/7 support so you can always reach us if you have any questions or concerns.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;