import React from 'react';
import '../css/About.css';
import Reveal from './Reveal';
import eddyImg from '../image/Eddy.png';

function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <Reveal>
                    <p className="section-index">01</p>
                    <p className="section-title">About</p>
                </Reveal>
                <div className="row align-items-center g-4">
                    <Reveal className="col-md-4 text-center">
                        <img src={eddyImg} alt="Eddy" className="profile-img" />
                    </Reveal>
                    <Reveal className="col-md-8" delay={120}>
                        <h3 className="fw-bold mb-3">풀스택 개발자 <span className="text-accent">Eddy</span></h3>
                        <p className="lead-text">
                            데이터를 수집·가공하고 이를 서비스로 연결하는 전 과정에 관심이 많은 풀스택 개발자입니다.
                            논문 시각화 검색 서비스 <b>EGG</b>에서 데이터 크롤링부터 ML 모델 학습,
                            Hadoop 분산 환경 구축, 그리고 FastAPI·Spring Boot 백엔드와 React 프론트엔드까지
                            서비스 전반을 직접 구현했습니다.
                        </p>
                        <p className="lead-text">
                            Python 기반의 데이터 처리와 머신러닝을 축으로, 백엔드 API 설계와 프론트엔드 개발,
                            Docker·AWS 인프라 구축까지 아우르며 서비스의 처음부터 끝까지 책임지는 개발자를 지향합니다.
                        </p>
                        <ul className="about-list">
                            <li>📊 데이터 크롤링 · 전처리 · 머신러닝</li>
                            <li>🔗 백엔드 API 설계 (Spring Boot · FastAPI)</li>
                            <li>💻 프론트엔드 개발 (React · Bootstrap)</li>
                            <li>⚙️ 분산 처리(Hadoop · Spark) 및 인프라(Docker · AWS EC2)</li>
                        </ul>
                        <div className="mt-3">
                            <a className="btn btn-outline-accent btn-sm me-2"
                                href="https://github.com/eeeeeddy" target="_blank" rel="noreferrer">GitHub</a>
                            <a className="btn btn-outline-accent btn-sm"
                                href="mailto:marill94727@naver.com">Email</a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default About;
