
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kasarani Catering & Beauty College</h3>
            <p className="text-gray-300 mb-4">
              Empowering Skills, Building Futures, Changing Lives since our foundation.
              KCBC offers quality, affordable education in beauty, hospitality, and more.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-accent">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-accent">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-accent">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Campuses */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Campuses</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-2 flex-shrink-0 text-accent" />
                <span className="text-gray-300">Githurai 45, Nairobi</span>
              </li>
              <li className="flex">
                <MapPin size={20} className="mr-2 flex-shrink-0 text-accent" />
                <span className="text-gray-300">ACK Cathedral, Machakos</span>
              </li>
              <li className="flex">
                <MapPin size={20} className="mr-2 flex-shrink-0 text-accent" />
                <span className="text-gray-300">Opposite Parkside Villa, Kitui</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone size={20} className="mr-2 flex-shrink-0 text-accent" />
                <span className="text-gray-300">0721 429 839 / 0751 211 902</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-2 flex-shrink-0 text-accent" />
                <span className="text-gray-300">info@kasaranicollege.ac.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Kasarani Catering & Beauty College. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
