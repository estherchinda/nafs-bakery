import React from 'react';

export const InfoBar = () => {
  return (
    <div className="bg-background py-4 border-b border-border">
      <div className="max-w-[1200px] mx-auto px-8 flex justify-center md:justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-2 text-[0.9rem] text-secondary">
          <span className="text-[1.1rem]">🕒</span>
          <span>Open today: 9am - 8pm</span>
        </div>
        <div className="flex items-center gap-2 text-[0.9rem] text-secondary">
          <span className="text-[1.1rem]">🎂</span>
          <span>Custom orders available</span>
        </div>
        <div className="flex items-center gap-2 text-[0.9rem] text-secondary">
          <span className="text-[1.1rem]">🔔</span>
          <span>24-48h notice required</span>
        </div>
        <div className="flex items-center gap-2 text-[0.9rem] text-secondary">
          <span className="text-[1.1rem]">🚚</span>
          <span>Pickup & Delivery</span>
        </div>
      </div>
    </div>
  );
};
