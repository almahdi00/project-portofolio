'use client'
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (elementId: string) => {
    setIsOpen(false); // Close mobile menu after clicking
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-white text-xl font-bold hover:text-blue-400 transition-colors duration-300"
          >
            MySite
          </a>
          <div className="flex space-x-6">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:border-b-2 border-blue-400 py-1"
            >
              Home
            </a>
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:border-b-2 border-blue-400 py-1"
            >
              About
            </a>
            <a 
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('project');
              }}
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:border-b-2 border-blue-400 py-1"
            >
              Projects
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:border-b-2 border-blue-400 py-1"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-white text-xl font-bold"
            >
              MySite
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isOpen ? 'max-h-60' : 'max-h-0'
            } overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;