import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../css/App.css';
import Main from './Main';

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
