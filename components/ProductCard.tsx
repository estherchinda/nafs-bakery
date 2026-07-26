import React from "react";
import Image from "next/image";
import { Button } from "./Button";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  size?: "large" | "small";
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isLarge = product.size === "large";

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col transition-transform duration-200 hover:-translate-y-1 group h-full">
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes={
            isLarge
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 25vw"
          }
        />
        {product.badge && (
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-[0.8rem] font-medium text-secondary">
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-6 flex justify-between items-end flex-1">
        <div className="flex-1 pr-4">
          <h3 className="font-serif text-xl mb-2 text-secondary font-bold">
            {product.title}
          </h3>
          <p className="text-[0.9rem] text-muted">{product.description}</p>
        </div>
        <div>
          <span className="text-[1.1rem] font-bold text-secondary">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export const SmallProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col h-full">
      <div className="relative w-full aspect-4/3">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h4 className="text-[1.05rem] font-sans text-secondary font-bold mb-1">
          {product.title}
        </h4>
        <p className="text-[0.85rem] text-muted mb-4 flex-1">
          {product.description}
        </p>
        <Button variant="primary" className="w-full py-2 px-0!">
          Add to Tray
        </Button>
      </div>
    </div>
  );
};
