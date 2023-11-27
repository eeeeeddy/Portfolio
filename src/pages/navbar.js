import React from 'react';
import '../css/navbar.css';

function navbar() {
    return (
        <div>
            <nav id="navbar-example2" className="navbar bg-dark bg-opacity-25 px-3">
                <a className="navbar-brand" href="/Portfolio"><strong>Eddy's Portfolio</strong></a>
                <ul className="nav nav-pills">
                    <li className='nav-item'>
                        <a className='nav-link' href='/Portfolio/About'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/Portfolio/Skills'>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/Portfolio/Projects'>Projects</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#About">[S]About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Skills">[S]Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Projects">[S]Projects</a>
                    </li> */}
                </ul>
            </nav>    
        </div>
    );
}

export default navbar;