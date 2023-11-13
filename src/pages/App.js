import { HashRouter, Route, Routes } from 'react-router-dom';
import '../css/App.css';
import Main from  './Main';
import Home from './Home';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
