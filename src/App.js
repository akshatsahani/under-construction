// src/App.js
import React from 'react';
import HomePage from'./Pages/HomePage'
import ComingSoon from './Pages/ComingSoon'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {

  return (
    <div className="App">
    <Router>
    <Navbar /> {/* Navbar is displayed across all pages */}
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Render HomePage on the root path */}
      <Route path="/comingsoon" element={<ComingSoon />} /> {/* Render ComingSoon for products, applications, etc. */}
    </Routes>
  </Router>

    </div>
  );
}

export default App;
