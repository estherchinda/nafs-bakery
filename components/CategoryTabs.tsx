import React from 'react';

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex justify-center py-8 overflow-x-auto">
      <div className="flex flex-wrap gap-4 px-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full border bg-transparent text-[0.95rem] font-medium cursor-pointer whitespace-nowrap transition-all duration-200 ${
              activeCategory === category 
                ? 'bg-border border-border text-secondary' 
                : 'border-border text-secondary hover:bg-white/50'
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
