import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import ChartPage from './Pages/ChartPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ChartPage" element={<ChartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
