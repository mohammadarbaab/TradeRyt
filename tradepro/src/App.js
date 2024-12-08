import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Login from "./auth/login/Login";
import Signup from "./auth/signup/Signup";
import "./index.css";

function App() {
  return (
    <Router> {/* Wrap the components in Router */}
      <Routes> {/* Set up Routes for navigation */}
        <Route path="/" element={<Signup />} /> {/* Route for Signup */}
        <Route path="/login" element={<Login />} /> {/* Route for Login */}
      </Routes>
    </Router>
  );
}

export default App;
