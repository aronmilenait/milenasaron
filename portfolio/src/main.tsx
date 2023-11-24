import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

ReactDOM.render(
  <BrowserRouter> 
    <React.StrictMode>
      <Navbar />
      <Header />
      <Experience />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
