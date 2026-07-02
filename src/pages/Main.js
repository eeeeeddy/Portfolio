import React from 'react';
import '../css/Main.css';
import Navbar from './navbar';
import ScrollProgress from './ScrollProgress';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

function Main() {
    return (
        <div className="nanumgothic">
            <ScrollProgress />
            <Navbar />

            {/* Hero */}
            <header id="home" className="hero">
                <div className="hero-blobs">
                    <span className="blob blob-1" />
                    <span className="blob blob-2" />
                    <span className="blob blob-3" />
                </div>
                <div className="hero-content">
                    <p className="hero-hi">Hello, I'm</p>
                    <h1 className="hero-name">Eddy</h1>
                    <p className="hero-role">Full-Stack Developer</p>
                    <p className="hero-sub">데이터를 수집하고 가공해 서비스로 잇는 풀스택 개발자</p>

                    <div className="hero-stats">
                        <div className="stat"><span className="stat-num">3+</span><span className="stat-label">대표 프로젝트</span></div>
                        <div className="stat"><span className="stat-num">15+</span><span className="stat-label">GitHub 레포</span></div>
                        <div className="stat"><span className="stat-num">Full</span><span className="stat-label">Stack</span></div>
                    </div>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-glow px-4">프로젝트 보기</a>
                        <a href="https://github.com/eeeeeddy" target="_blank" rel="noreferrer" className="btn btn-ghost px-4">GitHub</a>
                    </div>
                </div>
                <a href="#about" className="scroll-down" aria-label="아래로 스크롤">
                    <span className="mouse"><span className="wheel" /></span>
                </a>
            </header>

            <About />
            <Skills />
            <Projects />

            <footer className="site-footer">
                <p className="mb-1">© 2024 Eddy · Built with React</p>
                <a href="https://github.com/eeeeeddy" target="_blank" rel="noreferrer">github.com/eeeeeddy</a>
            </footer>
        </div>
    );
}

export default Main;
