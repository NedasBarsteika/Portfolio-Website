import './App.css';
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
