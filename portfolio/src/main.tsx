import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter> 
    <React.StrictMode>
      <Navbar />
      <Header />
      <Experience />
      <Skills />
      <Projects />
    </React.StrictMode>
  </BrowserRouter>
);
