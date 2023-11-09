import React from 'react';

function navbar() {
    return (
        <div>
            <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
                <a class="navbar-brand" href="/">Eddy's Portfolio</a>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" href="#About">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Projects">Projects</a>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
}

export default navbar;