import React from 'react'
import Nav from './Nav';
import Project from './Project';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BGvideo from './backgroundvideo.mp4'
import Skills from './Skills';
import About from './About';
import Home from './Home';
import './App.css';
function App() {
  return (
    <>
      <div className="container">
        <video autoPlay loop muted className='BGVideo'>
          <source src={BGvideo} type="video/mp4" />
        </video>
        <Nav />
          <section id="home">
        <Home name="Shubham Giri" role="Web Developer" />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="myProject">
        <Project />
      </section>

      <section id="skills">
        <Skills />
      </section>

      </div>
    </>
  );
}

export default App;