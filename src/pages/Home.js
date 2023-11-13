import React from 'react';
import '../css/Home.css';


function Home() {
    return (
        <div style={{ fontFamily: 'Nanum Gothic' }}>
            <div className='Navbar'>
                <nav id="navbar-example2" className="navbar bg-dark px-3 mb-3">
                    <a className="navbar-brand" href="/" style={{color:"white"}}>Eddy's Portfolio</a>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Projects">Projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="scrollspy-example bg-dark p-3 rounded-2 mt-5" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">

                {/* About */}
                <div id="About" className='About'>
                    <p className='display-5 text-start'>About</p>

                    <div className="img" style={{ height: "500px" }}></div>
                </div>

                {/* Skills */}
                <div id="Skills">
                    <p className='display-5 text-start'>Skills</p>
                    {/* <img src="" width="40" height="40"/> */}
                    <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="React" width="80" height="40" />
                    <p>Spring, HTML, CSS, Python, MySQL, ElasticSearch, Kibana, Git, Github, Docker, AWS</p>
                    <p>AWS CodeDeploy, Amazon EC2, Github Action, Github pages, notion, Bootstrap, Axure</p>

                    <div style={{ height: "500px" }}></div>
                </div>

                {/* Projects */}
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
        </div>
    );
}

export default Home;