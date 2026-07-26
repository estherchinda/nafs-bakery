import React from 'react';
import { SmallProductCard, Product } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BEST_SELLERS: Product[] = [
  {
    id: '1',
    title: 'Glazed Donuts Box',
    description: 'Pack of 6 fresh donuts.',
    price: '',
    image: '/images/glazed-donuts.jpg'
  },
  {
    id: '2',
    title: 'Double Choc Cookies',
    description: 'Soft baked every morning.',
    price: '',
    image: '/images/choc-chip.jpg'
  },
  {
    id: '3',
    title: 'Macaron Gift Box',
    description: '6 premium French flavors.',
    price: '',
    image: '/images/macaron.jpg'
  },
  {
    id: '4',
    title: 'Lemon Zest Loaf',
    description: 'Tangy and refreshing.',
    price: '',
    image: '/images/lemon-zest.jpg'
  }
];

export const DailyBestSellers = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-background/50" id="bestsellers">
      <div className="max-w-300 mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl mb-1 font-serif font-bold text-black">Daily Best Sellers</h2>
            <p className="text-secondary text-[0.95rem]">The treats everyone is talking about today.</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-border bg-white text-secondary flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-border hover:text-white">
              <ChevronLeft/>
            </button>
            <button className="w-10 h-10 rounded-full border border-border bg-white text-secondary flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-border hover:text-white">
              <ChevronRight/>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:flex max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory gap-6 pb-4">
          {BEST_SELLERS.map(product => (
            <div key={product.id} className="max-sm:min-w-[80%] max-sm:snap-start">
              <SmallProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
