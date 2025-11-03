// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // close when clicking outside nav
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200 bg-gradient-to-br from-red-600 to-red-700">
              <span className="text-white font-bold text-xl">SS</span>
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              SHIVAM SQUARE BALER
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 font-medium transition-colors duration-200 relative group ${
                  location.pathname === link.path
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 relative z-[60]"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            type="button"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full z-40 transform transition-all duration-300 ease-in-out ${
            isOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
          id="mobile-menu"
        >
          <div className="bg-white shadow-md border-t">
            <div className="py-4 space-y-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "bg-red-50 text-red-600"
                      : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full mt-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-center"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
