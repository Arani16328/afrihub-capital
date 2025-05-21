
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > lastScroll;
      
      // Only trigger hiding when scrolled past a certain point (100px)
      if (currentScrollPos > 100) {
        if (isScrollingDown && isVisible) {
          setIsVisible(false);
        } else if (!isScrollingDown && !isVisible) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      
      setLastScroll(currentScrollPos);
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, isVisible]);

  return (
    <header className={`fixed w-full z-50 transition-transform duration-300 ${!isVisible ? '-translate-y-10' : 'translate-y-0'}`}>
      {/* Top Info Bar */}
      <div className={`bg-primary text-white py-2 transition-all duration-300 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>0721 429 839 / 0751 211 902</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Mail size={14} />
              <span>info@kasaranicollege.ac.ke</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span className="text-sm">Mon - Sat: 8:00 - 17:00</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`container-custom flex justify-between items-center py-4 bg-white shadow-sm transition-all duration-300`}>
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">KCBC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/admissions">Admissions</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary-hover text-white">Apply Now</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="container-custom py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">KCBC</span>
            </Link>
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="container-custom flex flex-col space-y-4 py-8">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink to="/courses" onClick={toggleMenu}>Courses</MobileNavLink>
            <MobileNavLink to="/admissions" onClick={toggleMenu}>Admissions</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={toggleMenu}>Gallery</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <div className="pt-4">
              <Button className="w-full bg-primary hover:bg-primary-hover text-white">Apply Now</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-gray-700 hover:text-primary font-medium transition-colors duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link 
    to={to} 
    className="text-xl font-medium text-gray-800 hover:text-primary py-2"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
