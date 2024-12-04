import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header'
import AboutMe from './components/about-me';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Header />
        <AboutMe />
      </>
    </div>
  );
}

export default App;
