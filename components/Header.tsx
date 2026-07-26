"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full py-4 md:py-6 left-0 bg-overlay sticky top-0 z-50">
      <div className="max-w-300 mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Nafs Bakery Logo" width={40} height={40} className="rounded" />
          <span className="font-serif text-xl md:text-2xl font-bold text-secondary">Nafs Bakery</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#menu" className="text-[0.95rem] text-secondary font-medium pb-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary">Menu</Link>
          <Link href="#custom-orders" className="text-[0.95rem] text-secondary font-medium pb-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-secondary hover:after:opacity-50">Custom Orders</Link>
          <Link href="#bestsellers" className="text-[0.95rem] text-secondary font-medium pb-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-secondary hover:after:opacity-50">Bestsellers</Link>
          <Link href="#about" className="text-[0.95rem] text-secondary font-medium pb-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-secondary hover:after:opacity-50">About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex bg-primary border-none cursor-pointer items-center justify-center gap-2 px-4 py-2 rounded-full transition-colors hover:bg-primary/50 text-sm">
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            <span>Order Now</span>
          </button>
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-secondary cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-overlay border-t border-border shadow-lg flex flex-col items-start p-8 gap-6 animate-in slide-in-from-top-4 fade-in duration-200">
          <nav className="flex flex-col items-start gap-6">
            <Link onClick={closeMenu} href="#menu" className="text-[1.1rem] text-secondary font-medium transition-colors hover:text-black">Menu</Link>
            <Link onClick={closeMenu} href="#custom-orders" className="text-[1.1rem] text-secondary font-medium transition-colors hover:text-black">Custom Orders</Link>
            <Link onClick={closeMenu} href="#bestsellers" className="text-[1.1rem] text-secondary font-medium transition-colors hover:text-black">Bestsellers</Link>
            <Link onClick={closeMenu} href="#about" className="text-[1.1rem] text-secondary font-medium transition-colors hover:text-black">About</Link>
          </nav>
          
          <button className="bg-primary border-none cursor-pointer flex items-center justify-center gap-2 px-6 py-3 mt-4 rounded-full transition-colors hover:bg-primary/50 text-[1rem] w-full">
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            <span>Order Now</span>
          </button>
        </div>
      )}
    </header>
  );
};
