# Eddy's Portfolio

데이터를 수집하고 가공해 서비스로 잇는 풀스택 개발자 **Eddy**의 개인 포트폴리오 웹사이트입니다.

🔗 **Live:** https://eeeeeddy.github.io/Portfolio/

## Tech Stack

- **React 18** — SPA 구성
- **React Router** — 라우팅
- **React Bootstrap / Bootstrap 5** — UI
- **Create React App** — 빌드 도구
- **GitHub Pages** — 배포 (`gh-pages`)

## Sections

- **Hero** — 소개 및 핵심 지표
- **About** — 자기소개
- **Skills** — 기술 스택
- **Projects** — 주요 프로젝트 소개

스크롤 진행 표시(`ScrollProgress`)와 스크롤 등장 애니메이션(`Reveal`)이 적용되어 있으며, 라이트/다크 테마를 지원합니다.

## Getting Started

```bash
npm install      # 의존성 설치
npm start        # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run deploy   # gh-pages 배포
```

## Project Structure

```
public/          정적 파일 (favicon, index.html)
src/
├─ pages/        페이지 컴포넌트 (Main, About, Skills, Projects, navbar ...)
├─ css/          스타일시트
├─ data/         프로젝트/레포 데이터 (repos.js)
└─ image/        이미지 리소스
```
