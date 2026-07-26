import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="w-full py-6 absolute top-0 left-0 z-10">
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Nafs Bakery Logo" width={40} height={40} className="rounded" />
          <span className="font-serif text-2xl font-bold text-secondary">Nafs Bakery</span>
        </div>
        
        <nav className="flex items-center gap-8">
          <Link href="#menu" className="text-[0.95rem] text-secondary font-medium pb-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary">Menu</Link>
          <Link href="#custom-orders" className="text-[0.95rem] text-secondary font-medium pb-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-secondary hover:after:opacity-50">Custom Orders</Link>
          <Link href="#bestsellers" className="text-[0.95rem] text-secondary font-medium pb-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-secondary hover:after:opacity-50">Bestsellers</Link>
          <Link href="#about" className="text-[0.95rem] text-secondary font-medium pb-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-secondary hover:after:opacity-50">About</Link>
        </nav>

        <div className="flex items-center">
          <button className="bg-transparent border-none cursor-pointer flex items-center justify-center p-2 rounded-full transition-colors hover:bg-black/5">
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
