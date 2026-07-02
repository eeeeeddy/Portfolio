// GitHub 레포 분석 기반 포트폴리오 데이터
// 출처: https://github.com/eeeeeddy

export const featured = [
    {
        name: 'EGG',
        title: 'EGG · 논문 시각화 검색 서비스',
        period: '2023.07 ~ 2023.10 (팀 프로젝트)',
        summary:
            '논문/저자/연구기관의 연관 관계를 그래프로 시각화해 직관적으로 탐색할 수 있는 논문 검색 서비스. ' +
            'ResearchRabbit·ConnectedPapers를 벤치마킹해 국내 논문 검색의 접근성을 높이는 것을 목표로 했습니다.',
        role: [
            '논문 데이터 크롤링 및 전처리',
            'ML 모델 학습 및 결과 분석 (연관 관계 기준 수립)',
            'Hadoop 분산 환경 구축 (EC2 · Docker)',
            'FastAPI ↔ 데이터 파이프라인 연동',
        ],
        stack: ['Python', 'PyTorch', 'FastAPI', 'Spring Boot', 'React', 'ElasticSearch',
            'Kibana', 'MySQL', 'Redis', 'Hadoop', 'Spark', 'D3.js', 'Docker', 'AWS EC2'],
        links: [
            { label: 'Main', url: 'https://github.com/eeeeeddy/EGG' },
            { label: 'Frontend', url: 'https://github.com/eeeeeddy/EGG_Frontend' },
            { label: 'Backend', url: 'https://github.com/eeeeeddy/EGG_Backend' },
            { label: 'Data', url: 'https://github.com/eeeeeddy/EGG_Data' },
            { label: 'FastAPI', url: 'https://github.com/eeeeeddy/EGG_FastAPI' },
            { label: 'Docker', url: 'https://github.com/eeeeeddy/EGG_Docker' },
        ],
    },
    {
        name: 'BeatBuddy',
        title: 'BeatBuddy · 음악 기반 소셜 네트워크',
        period: '2023 (팀 프로젝트 · Frontend)',
        summary:
            '음악을 매개로 피드·플레이리스트·DM을 공유하는 SNS 서비스. 게시글 작성, 음악 검색, ' +
            '플레이리스트 구성, 실시간 DM, 프로필/검색 등 SNS 핵심 기능의 프론트엔드를 구현했습니다.',
        role: [
            'React 컴포넌트 설계 및 페이지 구현 (Feed · Playlist · DM · Profile)',
            '음악 검색 / 게시글 작성 모달 UI 구현',
            '반응형 레이아웃 대응',
        ],
        stack: ['React', 'JavaScript', 'CSS', 'HTML'],
        links: [
            { label: 'Frontend', url: 'https://github.com/eeeeeddy/BB_Frontend' },
        ],
    },
    {
        name: 'Portfolio',
        title: 'Portfolio · 개인 포트폴리오 사이트',
        period: '2023 ~ (개인 프로젝트)',
        summary:
            'React + Bootstrap 기반의 개인 포트폴리오 웹사이트. GitHub Pages로 배포하며 ' +
            'React Router로 섹션을 구성했습니다.',
        role: [
            'React SPA 구조 설계',
            'GitHub Pages 배포 파이프라인 구성',
        ],
        stack: ['React', 'React Router', 'Bootstrap', 'GitHub Pages'],
        links: [
            { label: 'Repo', url: 'https://github.com/eeeeeddy/Portfolio' },
        ],
    },
];

export const dataML = [
    {
        name: 'Machine_Learning',
        desc: '『파이썬 머신러닝 완벽 가이드』 학습 및 실습 코드',
        tags: ['Python', 'scikit-learn', 'ML'],
        url: 'https://github.com/eeeeeddy/Machine_Learning',
    },
    {
        name: 'Crawling',
        desc: 'Selenium · BeautifulSoup 기반 웹 크롤링 실습',
        tags: ['Python', 'Selenium', 'Crawling'],
        url: 'https://github.com/eeeeeddy/Crawling',
    },
    {
        name: 'WeatherBigdataContest_2023',
        desc: '날씨 빅데이터 콘테스트 ML 미니 프로젝트 (23.06)',
        tags: ['ML', 'Data Analysis'],
        url: 'https://github.com/eeeeeddy/WeatherBigdataContest_2023',
    },
    {
        name: 'Big_Data_Certification_KR',
        desc: '빅데이터분석기사 실기 대비 실습 (Jupyter)',
        tags: ['Python', 'Pandas', 'Jupyter'],
        url: 'https://github.com/eeeeeddy/Big_Data_Certification_KR',
    },
    {
        name: 'SQL_Mini_Project',
        desc: 'ERD 설계 → 테이블 생성 → 조인/Export 미니 프로젝트',
        tags: ['SQL', 'MySQL', 'ERD'],
        url: 'https://github.com/eeeeeddy/SQL_Mini_Project',
    },
];

export const study = [
    { name: 'Coding_Test_Practice', desc: '코딩테스트 문제 풀이', tags: ['Python'], url: 'https://github.com/eeeeeddy/Coding_Test_Practice' },
    { name: 'Data_Structure', desc: '자료구조 학습', tags: ['Python'], url: 'https://github.com/eeeeeddy/Data_Structure' },
    { name: 'Python', desc: '파이썬 기초 학습', tags: ['Python'], url: 'https://github.com/eeeeeddy/Python' },
    { name: 'SQL', desc: 'SQL 기초 학습', tags: ['SQL'], url: 'https://github.com/eeeeeddy/SQL' },
    { name: 'JavaScript', desc: 'JavaScript 기초 학습', tags: ['JavaScript', 'HTML'], url: 'https://github.com/eeeeeddy/JavaScript' },
    { name: 'JSP', desc: 'JSP / Servlet 학습', tags: ['Java', 'JSP'], url: 'https://github.com/eeeeeddy/JSP' },
    { name: 'Linux', desc: '리눅스 명령어 · 환경 학습', tags: ['Linux', 'Shell'], url: 'https://github.com/eeeeeddy/Linux' },
];

// icon: simple-icons 슬러그 / color: 브랜드 색(hex, # 제외). 없으면 텍스트만 표시
const S = (name, icon, color) => ({ name, icon, color });

export const skillGroups = [
    {
        group: 'Languages',
        items: [S('Python', 'python', '3776AB'), S('Java', 'openjdk', 'ED8B00'),
            S('JavaScript', 'javascript', 'F7DF1E'), S('SQL')],
    },
    {
        group: 'Backend',
        items: [S('Spring Boot', 'springboot', '6DB33F'), S('FastAPI', 'fastapi', '009688'),
            S('JWT', 'jsonwebtokens', '888888'), S('Redis', 'redis', 'DC382D')],
    },
    {
        group: 'Frontend',
        items: [S('React', 'react', '61DAFB'), S('Bootstrap', 'bootstrap', '7952B3'),
            S('D3.js', 'd3', 'F9A03C'), S('HTML/CSS', 'html5', 'E34F26')],
    },
    {
        group: 'Data / ML',
        items: [S('PyTorch', 'pytorch', 'EE4C2C'), S('scikit-learn', 'scikitlearn', 'F7931E'),
            S('Pandas', 'pandas', '888888'), S('Selenium', 'selenium', '43B02A'),
            S('Hadoop', 'apachehadoop', '66CCFF'), S('Spark', 'apachespark', 'E25A1C'), S('Zookeeper')],
    },
    {
        group: 'Database / Search',
        items: [S('MySQL', 'mysql', '4479A1'), S('Redis', 'redis', 'DC382D'),
            S('ElasticSearch', 'elasticsearch', '00BFB3'), S('Kibana', 'kibana', '00BFB3')],
    },
    {
        group: 'Infra / DevOps',
        items: [S('Docker', 'docker', '2496ED'), S('AWS EC2'),
            S('AWS CodeDeploy'), S('GitHub Actions', 'githubactions', '2088FF'),
            S('GitHub Pages', 'githubpages', '888888'), S('Ubuntu', 'ubuntu', 'E95420')],
    },
    {
        group: 'Tools',
        items: [S('Git', 'git', 'F05032'), S('GitHub', 'github', '888888'),
            S('Notion', 'notion', '888888'), S('Axure')],
    },
];
