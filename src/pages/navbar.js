import React from 'react';

function navbar() {
    return (
        <div>
            <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
                <a className="navbar-brand" href="/">Eddy's Portfolio</a>
                <ul className="nav nav-pills">
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
    );
}

export default navbar;