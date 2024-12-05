import './App.css';
import Navbar from './components/navbar';
import Header from './components/header'
import AboutMe from './components/about-me';
import Skills from './components/skills';
import Projects from './components/projects';
import ContactMe from './components/contact-me';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
    </div>
  );
}

export default App;
