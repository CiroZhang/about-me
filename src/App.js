import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import CourseWork from './components/CourseWork';
import Teaching from './components/Teaching';
import Misc from './components/Misc';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="about-me/" element={<About />} />
          <Route path="about-me/projects" element={<Projects />} />
          <Route path="about-me/coursework" element={<CourseWork />} />
          <Route path="about-me/teaching" element={<Teaching />} />
          <Route path="about-me/misc" element={<Misc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
