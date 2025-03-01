// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ResponsiveAppBar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Resume from './Components/Resume/Resume';
import Facecam from './Components/Facecam/Facecam';
import Dashboard from './Components/Dashboard/Dashboard';
import Landing from './Components/Landing/Landing';

const App = () => {
  const location = useLocation();
  // Hide navbar on Landing (/) and Login (/login) pages
  const showNavbar = !['/', '/login'].includes(location.pathname);

  return (
    <div>
      {showNavbar && <ResponsiveAppBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/facecam" element={<Facecam />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;