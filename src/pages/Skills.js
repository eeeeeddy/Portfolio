import React from 'react';
import Navbar from './navbar';

function Skills() {
    return (
        <div>
            
            <Navbar />
            
            <div id="Skills" className='mb-5'>
                <p className='display-5 text-start'>Skills</p>
                {/* <img src="" width="40" height="40"/> */}
                <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="React" width="80" height="40" />
                <p>Spring, HTML, CSS, Python, MySQL, ElasticSearch, Kibana, Git, Github, Docker, AWS</p>
                <p>AWS CodeDeploy, Amazon EC2, Github Action, Github pages, notion, Bootstrap, Axure</p>

                <div style={{ height: "500px" }}></div>
            </div>
        </div>

    );
}

export default Skills;