
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

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
          <NavLink to="/" isActive={location.pathname === "/"}>Home</NavLink>
          <NavLink to="/about" isActive={location.pathname === "/about"}>About</NavLink>
          <NavLink to="/courses" isActive={location.pathname === "/courses"}>Courses</NavLink>
          <NavLink to="/admissions" isActive={location.pathname === "/admissions"}>Admissions</NavLink>
          <NavLink to="/gallery" isActive={location.pathname === "/gallery"}>Gallery</NavLink>
          <NavLink to="/contact" isActive={location.pathname === "/contact"}>Contact</NavLink>
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
            <MobileNavLink to="/" onClick={toggleMenu} isActive={location.pathname === "/"}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu} isActive={location.pathname === "/about"}>About</MobileNavLink>
            <MobileNavLink to="/courses" onClick={toggleMenu} isActive={location.pathname === "/courses"}>Courses</MobileNavLink>
            <MobileNavLink to="/admissions" onClick={toggleMenu} isActive={location.pathname === "/admissions"}>Admissions</MobileNavLink>
            <MobileNavLink to="/gallery" onClick={toggleMenu} isActive={location.pathname === "/gallery"}>Gallery</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu} isActive={location.pathname === "/contact"}>Contact</MobileNavLink>
            <div className="pt-4">
              <Button className="w-full bg-primary hover:bg-primary-hover text-white">Apply Now</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ 
  to, 
  children,
  isActive
}: { 
  to: string; 
  children: React.ReactNode;
  isActive: boolean;
}) => (
  <Link 
    to={to} 
    className={`relative transition-colors duration-300 hover:text-primary ${
      isActive ? 'text-primary' : 'text-gray-700'
    } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0 after:left-0 
    ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'} after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-bottom-left`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick,
  isActive
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) => (
  <Link 
    to={to} 
    className={`text-xl font-medium py-2 ${isActive ? 'text-primary' : 'text-gray-800'} hover:text-primary`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
