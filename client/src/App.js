// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './Pages/Projects';
import Navbar from './components/Navbar'; // Ensure this path is correct
import './css/styles.css';
import './scss/styles.scss'; // Ensure this path is correct
import StudentAPIIntegration from './components/StudentAPIIntegration';
import WeatherApi from './components/WeatherApi';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Navbar /> {/* Add the Navbar here */}
        <main className="l-main">
          <Routes> {/* Change Switch to Routes */}
            <Route path="/" element={<Home />} /> {/* Update Route to use element prop */}
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/api-integration" element={<StudentAPIIntegration />} />
            <Route path="/weather-api" element={<WeatherApi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
