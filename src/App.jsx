import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ToolConnection from './pages/ToolConnection';
import Canvas from './pages/Canvas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onToggleForm={() => {}} />} />
        <Route path="/registration" element={<Registration onToggleForm={() => {}} />} />
        <Route path="/tool-connection" element={<ToolConnection />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </Router>
  );
}

export default App;
