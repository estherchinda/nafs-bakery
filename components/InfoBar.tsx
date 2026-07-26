"use client";

import { Clock3, Bell, Truck, Cake } from "lucide-react";
export const InfoBar = () => {
  return (
    <div className="bg-[#F8F6C9] py-4 px-4 md:px-16 border-b border-border min-h-18 grid grid-cols-1 md:flex md:flex-wrap items-center justify-between gap-4 md:gap-4">
        <div className="flex items-center gap-2 text-[0.8rem] md:text-[0.9rem] text-secondary">
          <Clock3 className="size-4.5 shrink-0" />
          <span>Open today: 9am - 8pm</span>
        </div>
        <div className="flex items-center gap-2 text-[0.8rem] md:text-[0.9rem] text-secondary">
          <Cake className="size-4.5 shrink-0" />
          <span>Custom orders available</span>
        </div>
        <div className="flex items-center gap-2 text-[0.8rem] md:text-[0.9rem] text-secondary">
          <Bell className="size-4.5 shrink-0" />
          <span>24-48h notice required</span>
        </div>
        <div className="flex items-center gap-2 text-[0.8rem] md:text-[0.9rem] text-secondary">
          <Truck className="size-4.5 shrink-0" />
          <span>Pickup & Delivery</span>
        </div>
    </div>
  );
};
