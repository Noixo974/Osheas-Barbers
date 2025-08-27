import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Contact', href: '/contact' },
    { name: 'À propos', href: '/about' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Groupe logo + liens centré */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Scissors className="h-8 w-8 text-amber-500" />
            
            {/* Liens de navigation */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-lg font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-amber-500'
                    : 'text-white hover:text-amber-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Menu mobile */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive(item.href)
                    ? 'text-amber-500'
                    : 'text-white hover:text-amber-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
