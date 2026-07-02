import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import '../css/App.css';
import Main from './Main';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    {/* 이전 개별 라우트는 단일 페이지로 통합 */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
