import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
