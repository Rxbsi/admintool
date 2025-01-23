import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddUsers from './users/AddUsers';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/addUser" element={<AddUsers />}/>
          <Route exact path="/editUser/:id" element={<EditUser />}/>
          <Route exact path="/viewUser/:id" element={<ViewUser />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
