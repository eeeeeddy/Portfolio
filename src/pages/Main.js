import React from 'react';
import '../css/Main.css';
import Navbar from './navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

function Main() {
    return (
        <div className='' style={{ fontFamily: 'Nanum Gothic' }}>
            <div className='Navbar'>
                <Navbar />
            </div>
            <div className="scrollspy-example bg-white p-3 rounded-2 mt-5" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex={0}>
                
                {/* About */}
                {/* <About /> */}

                {/* Skills */}
                {/* <Skills /> */}
                
                {/* Projects */}
                {/* <Projects /> */}
            </div>
        </div>
    );
}

export default Main;