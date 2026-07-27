'use client';
import React, { useState } from 'react';
import { CategoryTabs } from './CategoryTabs';
import { ProductCard, Product } from './ProductCard';

const CATEGORIES = ["Cupcakes", "Treat Boxes", "Small Chops", "Party Packs", "Birthday Cakes"];

const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Vanilla Birthday Cake',
    description: 'Signature moist sponge with organic vanilla bean.',
    price: '₦25,000+',
    image: '/images/vanilla-birthday-cake.jpg',
    badge: 'Best Seller',
    size: 'small',
    category: 'Birthday Cakes'
  },
  {
    id: '2',
    title: 'Red Velvet Classic',
    description: 'Tangy cream cheese frosting.',
    price: '₦18,000',
    image: '/images/red-velvet.jpg',
    category: 'Birthday Cakes'
  },
  {
    id: '3',
    title: 'Cupcake Box',
    description: 'Dozen assorted flavors.',
    price: '₦12,000',
    image: '/images/cupcake.jpg',
    category: 'Cupcakes'
  },
  {
    id: '4',
    title: 'Party Small Chops Tray',
    description: 'Perfect for sharing with up to 10 people.',
    price: '₦15,000',
    image: '/images/small-chops.jpg',
    size: 'small',
    category: 'Small Chops'
  },
  {
    id: '5',
    title: 'Luxury Treat Box',
    description: 'A curated selection of our finest pastries and sweets.',
    price: '₦22,000',
    image: '/images/treat-box1.jpg',
    category: 'Treat Boxes'
  },
  {
    id: '6',
    title: 'Kids Birthday Party Pack',
    description: 'Complete pack with mini cakes, cookies, and small chops.',
    price: '₦35,000',
    image: '/images/party-pack1.jpg',
    size: 'large',
    category: 'Party Packs',
    badge: 'Best Seller',
  },
  {
    id: '7',
    title: "Fruit Cake",
    description: "Fresh tangerine fruit cake",
    price: '₦40,000',
    image: '/images/birthday-cake.jpg',
    size: 'small',
    category: 'Birthday Cakes',
  },
  {
    id: '8',
    title: 'Kids Party Pack',
    description: 'Complete pack with mini cakes, cookies, and small chops.',
    price: '₦15,000',
    image: '/images/kids-pack.jpg',
    size: 'small',
    category: 'Party Packs'
  },
  {
    id: '9',
    title: 'Food tray chops',
    description: 'Perfect for sharing with up to 10 people.',
    price: '₦45,000',
    image: '/images/food-tray.jpg',
    size: 'large',
    category: 'Small Chops'
  },
  {
    id: '10',
    title: 'Food tray chops',
    description: 'Perfect for sharing with up to 10 people.',
    price: '₦25,000',
    image: '/images/cupcake1.jpg',
    size: 'large',
    category: 'Cupcakes'
  },
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
          {PRODUCTS.filter(p => p.category === activeCategory).map(product => (
            <div key={product.id} className={product.size === 'large' ? 'col-span-2 max-sm:col-span-1' : 'col-span-1'}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
