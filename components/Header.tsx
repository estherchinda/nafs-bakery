import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export const Header = () => {
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
          <button className="lg:hidden p-2 text-secondary cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
