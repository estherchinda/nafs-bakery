import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-overlay font-sans pt-12 md:pt-16 pb-8 px-4 md:px-8 border-t border-border">
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1.5fr_1fr] max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 md:gap-12 mb-12 md:mb-16">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/logo.png" alt="Nafs Bakery Logo" width={32} height={32} className="rounded" />
              <span className="font-serif text-xl font-bold text-secondary">Nafs Bakery</span>
            </div>
            <p className="text-muted text-[0.9rem] leading-relaxed mb-6 max-w-62.5">
              Creating moments of daily indulgence through the art of artisanal baking.
            </p>
            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-full border-none bg-black/5 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-black/10">
                <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
              </button>
              <button className="w-9 h-9 rounded-full border-none bg-black/5 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-black/10">
                <Image src="/icons/whatsapp.svg" alt="Website" width={20} height={20} />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-sans text-base font-bold text-secondary mb-6">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-muted text-[0.9rem] transition-colors duration-200 hover:text-secondary">Cake Gallery</Link></li>
              <li><Link href="#" className="text-muted text-[0.9rem] transition-colors duration-200 hover:text-secondary">Wedding Packages</Link></li>
              <li><Link href="#" className="text-muted text-[0.9rem] transition-colors duration-200 hover:text-secondary">Corporate Gifting</Link></li>
              <li><Link href="#" className="text-muted text-[0.9rem] transition-colors duration-200 hover:text-secondary">Baking Workshops</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-sans text-base font-bold text-secondary mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-muted text-[0.9rem]">
                <Phone/>
                <span>+234 812 345 6789</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-[0.9rem]">
                <Mail/>
                <span>hello@nafsbakery.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-[0.9rem]">
                <MapPin/>
                <span>12B Admiralty Way, Lekki Phase 1, Lagos</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-sans text-base font-bold text-secondary mb-6">Opening Hours</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex justify-between text-muted text-[0.9rem]">
                <span>Mon - Fri:</span>
                <span>9am - 8pm</span>
              </li>
              <li className="flex justify-between text-muted text-[0.9rem]">
                <span>Saturday:</span>
                <span>10am - 6pm</span>
              </li>
              <li className="flex justify-between text-[0.9rem] text-[#D32F2F] font-medium">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-border text-muted text-[0.8rem] max-sm:flex-col max-sm:gap-4 max-sm:text-center">
          <p>© 2026 Esther Chinda.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-secondary transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
