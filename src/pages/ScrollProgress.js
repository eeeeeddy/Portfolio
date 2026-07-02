import React, { useEffect, useState } from 'react';

// 상단 스크롤 진행 바
function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const h = document.documentElement;
            const scrolled = h.scrollTop;
            const max = h.scrollHeight - h.clientHeight;
            setProgress(max > 0 ? (scrolled / max) * 100 : 0);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

export default ScrollProgress;
