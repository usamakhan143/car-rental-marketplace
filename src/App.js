import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/frontend/authentication/dashboard/Dashboard";
import Login from "./pages/frontend/authentication/login/Login";
import Register from "./pages/frontend/authentication/register/Register";
import Home from "./pages/frontend/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
