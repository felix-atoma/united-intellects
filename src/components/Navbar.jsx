import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">United Intellects</h1>

        {/* Hamburger Menu Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="relative hover:text-gray-400 transition-colors duration-300"
          >
            Home
            <span className="absolute left-0 bottom-0 h-0.5 bg-gray-400 w-0 hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/about"
            className="relative hover:text-gray-400 transition-colors duration-300"
          >
            About
            <span className="absolute left-0 bottom-0 h-0.5 bg-gray-400 w-0 hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/features"
            className="relative hover:text-gray-400 transition-colors duration-300"
          >
            Features
            <span className="absolute left-0 bottom-0 h-0.5 bg-gray-400 w-0 hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/testimonials"
            className="relative hover:text-gray-400 transition-colors duration-300"
          >
            Testimonials
            <span className="absolute left-0 bottom-0 h-0.5 bg-gray-400 w-0 hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/contact"
            className="relative hover:text-gray-400 transition-colors duration-300"
          >
            Contact
            <span className="absolute left-0 bottom-0 h-0.5 bg-gray-400 w-0 hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link
            to="/"
            className="block py-2 px-4 hover:bg-gray-800 hover:text-gray-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 hover:bg-gray-800 hover:text-gray-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/features"
            className="block py-2 px-4 hover:bg-gray-800 hover:text-gray-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            to="/testimonials"
            className="block py-2 px-4 hover:bg-gray-800 hover:text-gray-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 hover:bg-gray-800 hover:text-gray-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;