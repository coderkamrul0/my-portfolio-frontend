import React from 'react';
import Banner from './Banner';
import About from './About/About';
import Skills from './Skills/Skills';
import Services from '../Services/Services';
import Projects from './Projects/Projects';
import ContactUS from './ContactUs/ContactUS';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Skills/>
            <Services/>
            <Projects/>
            <ContactUS/>
        </div>
    );
};

export default Home;