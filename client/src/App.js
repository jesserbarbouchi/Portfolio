import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Home from './Pages/Home';
// import About from './Pages/About';
// import Skills from './Pages/Skills';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import Projects from './Pages/Projects';
import Navbar from './components/Navbar';
import './css/styles.css';
import './scss/styles.scss';
// import StudentAPIIntegration from './components/StudentAPIIntegration';
import WeatherApi from './components/WeatherApi';
import Technologies from './Pages/Technologies';
import Blog from './Pages/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Navbar /> 
        <main className="l-main">
          <Routes> 
            <Route path="/" element={<Home />} /> 
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/skills" element={<Skills />} /> */}
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/api-integration" element={<StudentAPIIntegration />} /> */}
            <Route path="/weather-api" element={<WeatherApi />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
