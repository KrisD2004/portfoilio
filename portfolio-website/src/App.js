import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navigation from './Navigation';
import Skills from './Skills';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
