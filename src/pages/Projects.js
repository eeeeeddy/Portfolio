import React from 'react';
import Navbar from './navbar';

function Projects() {
    return (
        <div>
            
            <Navbar />
            
            <div id="Projects">
                <p className='display-5 text-start'>Projects</p>
                <ul>
                    <p>- EGG</p>
                    <p>- BeatBuddy</p>
                    <p>- Portfolio Page</p>
                </ul>
                <div style={{ height: "500px" }}></div>
            </div>
        </div>

    );
}

export default Projects;