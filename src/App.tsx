import './App.css';
import { motion } from 'framer-motion';
import MainPage from './Pages/MainPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from './Pages/ProjectPage';

function App() {
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </Router>
      </motion.div>
    </div>
  );
}

export default App;
