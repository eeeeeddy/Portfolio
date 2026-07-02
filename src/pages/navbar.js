import React, { useEffect, useState } from 'react';
import '../css/navbar.css';

function getInitialTheme() {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
}

const SECTIONS = ['home', 'about', 'skills', 'projects'];

function Navbar() {
    const [theme, setTheme] = useState(getInitialTheme);
    const [active, setActive] = useState('home');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // 현재 보이는 섹션을 네비에서 하이라이트
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) io.observe(el);
        });
        return () => io.disconnect();
    }, []);

    const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    const link = (id, label) => (
        <li className="nav-item">
            <a className={`nav-link ${active === id ? 'active-link' : ''}`} href={`#${id}`}>{label}</a>
        </li>
    );

    return (
        <nav id="navbar-example2" className="navbar navbar-expand fixed-top px-3 px-md-5 site-navbar">
            <a className="navbar-brand fw-bold" href="#home">Eddy's Portfolio</a>
            <ul className="nav nav-pills ms-auto align-items-center">
                {link('about', 'About')}
                {link('skills', 'Skills')}
                {link('projects', 'Projects')}
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/eeeeeddy" target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li className="nav-item">
                    <button
                        type="button"
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="테마 전환"
                        title={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
