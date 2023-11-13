import { HashRouter, Route, Routes } from 'react-router-dom';
import '../css/App.css';
import Main from  './Main';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
