import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center pb-4'>
            <small className='text-white '>Copyright © 2023 All Rights Reserved by <Link to={'https://www.facebook.com/kamrul0903'}><span className='text-[#38BDF8]'>Kamrul Hasan</span></Link></small>
        </div>
    );
};

export default Footer;