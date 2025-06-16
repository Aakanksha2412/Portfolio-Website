
import {  Link, useLocation  } from 'react-router-dom';
import logo from '../assets/as_logo.jpg';


const NavItem = ({ to, text }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
        isActive 
          ? 'text-black bg-yellow-400' 
          : 'text-gray-300 hover:text-white hover:bg-gray-700'
      }`}
    >
      {text}
    </Link>
  );
};

// Navbar Component: The main navigation bar
const Navbar = () => {
  return (
    <nav className="bg-black shadow-lg p-4 sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Link to home page */}
        <Link to="/" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors duration-300">
          <img
            src={logo}
            alt="AS Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-700 shadow-md transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"

          />
          
        </Link>
        <div className="space-x-6 hidden md:flex">
          <NavItem to="/" text="Home" />
          <NavItem to="/about" text="About" />
          
          <NavItem to="/skills" text="Skills" />
          <NavItem to="/projects" text="Projects" />
          <NavItem to="/contact" text="Contact" />
        </div>
        {/* Mobile Menu Button - Placeholder for responsive menu toggle */}
        <button className="md:hidden text-gray-200 focus:outline-none focus:text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;