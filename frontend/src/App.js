import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddUsers from './users/AddUsers';
import EditUser from './users/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/addUser" element={<AddUsers />}/>
          <Route exact path="/editUser/:id" element={<EditUser />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
