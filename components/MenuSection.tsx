'use client';
import React, { useState } from 'react';
import { CategoryTabs } from './CategoryTabs';
import { ProductCard, Product } from './ProductCard';

const CATEGORIES = ["Birthday Cakes", "Cupcakes", "Treat Boxes", "Small Chops", "Party Packs"];

const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Vanilla Birthday Cake',
    description: 'Signature moist sponge with organic vanilla bean.',
    price: '₦25,000+',
    image: '/images/vanilla-birthday-cake.jpg',
    badge: 'Best Seller',
    size: 'large'
  },
  {
    id: '2',
    title: 'Red Velvet Classic',
    description: 'Tangy cream cheese frosting.',
    price: '₦18,000',
    image: '/images/red-velvet.jpg'
  },
  {
    id: '3',
    title: 'Cupcake Box',
    description: 'Dozen assorted flavors.',
    price: '₦12,000',
    image: '/images/cupcake.jpg'
  },
  {
    id: '4',
    title: 'Party Small Chops Tray',
    description: 'Perfect for sharing with up to 10 people.',
    price: '₦15,000',
    image: '/images/small-chops.jpg',
    size: 'large'
  }
];

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("Birthday Cakes");

  return (
    <section className="py-12 md:py-8 px-4 md:px-8 pb-16 bg-background" id="menu">
      <div className="max-w-300 mx-auto">
        <h2 className="text-secondary text-center text-2xl mt-8">We have a large array of</h2>
        <CategoryTabs 
          categories={CATEGORIES} 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />
        
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 mt-8">
          {PRODUCTS.map(product => (
            <div key={product.id} className={product.size === 'large' ? 'col-span-2 max-sm:col-span-1' : 'col-span-1'}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
