import React from 'react';
import Reveal from './Reveal';
import { skillGroups } from '../data/repos';

function Skills() {
    return (
        <section id="skills" className="section section-alt">
            <div className="container">
                <Reveal>
                    <p className="section-index">02</p>
                    <p className="section-title">Skills</p>
                </Reveal>
                <div className="row g-4">
                    {skillGroups.map((g, i) => (
                        <Reveal className="col-md-6 col-lg-4" key={g.group} delay={(i % 3) * 100}>
                            <div className="skill-card">
                                <h5 className="skill-group">{g.group}</h5>
                                <div className="d-flex flex-wrap gap-2">
                                    {g.items.map((s) => (
                                        <span className="badge-skill" key={s.name}>
                                            {s.icon && (
                                                <img
                                                    className="skill-icon"
                                                    src={`https://cdn.simpleicons.org/${s.icon}/${s.color}`}
                                                    alt=""
                                                    loading="lazy"
                                                    onError={(e) => { e.target.style.display = 'none'; }}
                                                />
                                            )}
                                            {s.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
