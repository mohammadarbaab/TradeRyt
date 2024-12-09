import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Login from "./auth/login/Login";
import Signup from "./auth/signup/Signup";
import "./index.css";
import ForgetPassword from "./auth/forgetPassword/ForgetPassword";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap the components in Router */}
      <Routes>
        {" "}
        {/* Set up Routes for navigation */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} /> {/* Route for Signup */}
        <Route path="/login" element={<Login />} /> {/* Route for Login */}
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
