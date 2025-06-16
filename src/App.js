
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';


const App = () => {
  return (
    <div className="min-h-screen bg-black font-inter text-gray-200 antialiased overflow-x-hidden">
      <Router>
        {/* Navbar is outside Routes so it persists across all pages */}
        <Navbar />
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
       
        
          {/* Add a fallback route for 404 Not Found if desired */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        {/* Footer is outside Routes so it persists across all pages */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
