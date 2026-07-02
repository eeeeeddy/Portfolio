import React from 'react';
import Reveal from './Reveal';
import { featured, dataML, study } from '../data/repos';

function FeaturedCard({ p }) {
    return (
        <div className="project-card featured">
            <div className="d-flex flex-wrap justify-content-between align-items-baseline">
                <h4 className="fw-bold mb-1">{p.title}</h4>
                <span className="period">{p.period}</span>
            </div>
            <p className="mt-2 mb-3 summary">{p.summary}</p>
            <div className="row g-3">
                <div className="col-md-6">
                    <h6 className="sub-head">담당 역할</h6>
                    <ul className="role-list">
                        {p.role.map((r) => <li key={r}>{r}</li>)}
                    </ul>
                </div>
                <div className="col-md-6">
                    <h6 className="sub-head">기술 스택</h6>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                        {p.stack.map((s) => <span className="badge-skill" key={s}>{s}</span>)}
                    </div>
                    <h6 className="sub-head">Repositories</h6>
                    <div className="d-flex flex-wrap gap-2">
                        {p.links.map((l) => (
                            <a key={l.label} className="btn btn-sm btn-outline-accent"
                                href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function MiniCard({ p }) {
    return (
        <a className="mini-card" href={p.url} target="_blank" rel="noreferrer">
            <h6 className="fw-bold mb-1">{p.name}</h6>
            <p className="mini-desc">{p.desc}</p>
            <div className="d-flex flex-wrap gap-1">
                {p.tags.map((t) => <span className="badge-mini" key={t}>{t}</span>)}
            </div>
        </a>
    );
}

function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <Reveal>
                    <p className="section-index">03</p>
                    <p className="section-title">Projects</p>
                </Reveal>

                <h5 className="cat-title">🚀 대표 프로젝트</h5>
                {featured.map((p, i) => (
                    <Reveal key={p.name} className="mb-4" delay={i * 80}>
                        <FeaturedCard p={p} />
                    </Reveal>
                ))}

                <h5 className="cat-title mt-4">📊 Data &amp; Machine Learning</h5>
                <div className="row g-3">
                    {dataML.map((p, i) => (
                        <Reveal className="col-md-6 col-lg-4" key={p.name} delay={(i % 3) * 80}>
                            <MiniCard p={p} />
                        </Reveal>
                    ))}
                </div>

                <h5 className="cat-title mt-4">📚 Study &amp; Fundamentals</h5>
                <div className="row g-3">
                    {study.map((p, i) => (
                        <Reveal className="col-md-6 col-lg-4" key={p.name} delay={(i % 3) * 80}>
                            <MiniCard p={p} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
