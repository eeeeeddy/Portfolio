import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../css/App.css';
import Main from './Main';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Skills" element={<Skills />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
