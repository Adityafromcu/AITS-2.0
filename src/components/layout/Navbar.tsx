import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { AuthButtons } from './AuthButtons';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <AuthButtons />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 p-4 rounded-b-lg">
            <div className="flex flex-col gap-4">
              <NavLinks />
              <AuthButtons />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};