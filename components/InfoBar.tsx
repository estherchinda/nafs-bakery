"use client";

import { Clock3, Bell, Truck, Cake } from "lucide-react";
export const InfoBar = () => {
  return (
    <div className="bg-[#F8F6C9] py-4 px-16 border-b border-border h-18 flex flex-wrap items-center justify-between">
      {/* <div className="max-w-600 mx-auto px-8 flex justify-center md:justify-between items-center flex-wrap gap-4">
      </div> */}
        <div className="flex items-center gap-2 text-[0.9rem] text-secondary">
          <Clock3 className="size-4.5" />
          <span>Open today: 9am - 8pm</span>
        </div>
        <div className="flex items-center gap-2 text-[0.9rem] text-secondary">
          <Cake className="size-4.5" />
          <span>Custom orders available</span>
        </div>
        <div className="flex items-center gap-2 text-[0.9rem] text-secondary">
          <Bell className="size-4.5" />
          <span>24-48h notice required</span>
        </div>
        <div className="flex items-center gap-2 text-[0.9rem] text-secondary">
          <Truck className="size-4.5" />
          <span>Pickup & Delivery</span>
        </div>
    </div>
  );
};
