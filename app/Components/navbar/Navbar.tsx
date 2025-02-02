"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User } from 'lucide-react';
import { NavbarProps } from '../types/navbar';

const Navbar: React.FC<NavbarProps> = ({ 
  logo = "Your Logo", 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white w-full fixed shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <Link 
              href="/"
              className="flex-shrink-0 flex items-center"
            >
              <span className="text-xl font-bold text-gray-800">
                {logo}
              </span>
            </Link>
          </div>

          <div className="flex items-center">
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;