import React from 'react';
import '../css/About.css';
import Navbar from './navbar';

function About() {
    return (
        <div>
            
            <Navbar />
            
            <div id="About" className='mb-5'>
                <p className='display-5 text-start'>About</p>

                <div className="img" style={{ height: "500px", opacity: "50%" }}></div>
            </div>
        </div>

    );
}

export default About;