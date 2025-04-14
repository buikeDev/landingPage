
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-agency-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-agency-blue">Axiom</span>Agency
            </h2>
            <p className="mb-6 text-gray-400">
              We create digital experiences that engage, inspire, and drive business growth.
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-agency-blue transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-agency-blue transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-agency-blue transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-agency-blue transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-agency-blue transition-all">Web Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-agency-blue transition-all">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-agency-blue transition-all">Digital Marketing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-agency-blue transition-all">Mobile App Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-agency-blue transition-all">Brand Strategy</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-agency-blue transition-all">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-agency-blue transition-all">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-agency-blue transition-all">Portfolio</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-agency-blue transition-all">Our Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-agency-blue transition-all">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on our latest projects and industry insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="p-3 bg-gray-800 rounded-l flex-1 focus:outline-none focus:ring-2 focus:ring-agency-blue"
              />
              <button className="bg-agency-blue text-white p-3 rounded-r">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 py-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Axiom Creative Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
