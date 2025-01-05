import React from 'react';
import { Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logos Section */}
          <div className="flex items-center gap-6">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png" 
              alt="IEEE Logo" 
              className="h-12 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
            />
            <img 
              src="c:/Users/biraj/Pictures/Screenshots/Screenshot 2024-12-26 210050.png" 
              alt="IEEE ComSoc Logo" 
              className="h-10 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
            />
            <div className="h-8 w-px bg-gray-600 mx-2" />
            <div className="flex items-center gap-4">
              <img 
                src="https://www.cuchd.in/about/assets/images/cu-logo.png" 
                alt="Chandigarh University Logo" 
                className="h-12 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
              />
              <img 
                src="https://th.bing.com/th/id/OIP._B6mxngpYiLzQUK8iTJLJgHaCo?rs=1&pid=ImgDetMain" 
                alt="NAAC A+ Grade" 
                className="h-12 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:translate-y-1 cursor-pointer">About</a>
            <a href="#speakers" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:translate-y-1 cursor-pointer">Speakers</a>
            <a href="#schedule" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:translate-y-1 cursor-pointer">Schedule</a>
            <a href="#register" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:translate-y-1 cursor-pointer">Register</a>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity transform hover:scale-105 hover:shadow-lg cursor-pointer">
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6 transition-transform transform hover:scale-110 cursor-pointer" />
          </button>
        </div>
      </div>
    </nav>
  );
};
