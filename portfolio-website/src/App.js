import React from 'react';
import './App.css';
import Header from './Header'; // Adjust the import paths
import About from './About'; // Adjust the import paths
import Projects from './Projects'; // Adjust the import paths
import Contact from './Contact'; // Adjust the import paths
import Navigation from './Navigation';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
        <Navigation/>
        <Skills/>
      </main>
    </div>
  );
}

export default App;
