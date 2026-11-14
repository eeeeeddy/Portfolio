import React from 'react';
import Reveal from './Reveal';
import { skillGroups } from '../data/repos';

// icon이 '/'로 시작하면 public 폴더의 로컬 아이콘, 아니면 simple-icons 슬러그
const iconSrc = (s) =>
    s.icon.startsWith('/')
        ? `${process.env.PUBLIC_URL}${s.icon}`
        : `https://cdn.simpleicons.org/${s.icon}/${s.color}`;

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
                                                    src={iconSrc(s)}
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
