import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header'
import AboutMe from './components/about-me';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
    </div>
  );
}

export default App;
