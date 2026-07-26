import { Motorbike, Store, Truck } from 'lucide-react';
import React from 'react';

export const Delivery = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-border/40 border-t border-border">
      <div className="max-w-250 mx-auto">
        <h2 className="text-center text-3xl md:text-4xl mb-12 md:mb-16 font-serif font-bold text-secondary">Getting Your Treats</h2>
        
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 text-center font-sans">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-border text-secondary border border-border flex items-center justify-center text-2xl mb-6">
              <Store/>
            </div>
            <h3 className="font-sans text-[1.1rem] mb-3 font-bold text-secondary">Self Pickup</h3>
            <p className="text-muted text-[0.9rem] leading-relaxed">
              Collect from our bakery kitchen at Apo sunrise plaza, Apo Resettlement. Available Mon-Sat, 9am-5:30pm.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-border text-secondary border border-border flex items-center justify-center text-2xl mb-6">
              <Motorbike/>
            </div>
            <h3 className="font-sans text-[1.1rem] mb-3 font-bold text-secondary">Personal Delivery</h3>
            <p className="text-muted text-[0.9rem] leading-relaxed">
              You can send a dispatch delivery driver to come pick up your order. Same day for select items.
            </p>
          </div>
          
          {/* <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-border text-secondary border border-border flex items-center justify-center text-2xl mb-6">
              <Truck/>
            </div>
            <h3 className="font-sans text-[1.1rem] mb-3 font-bold text-secondary">Mainland Delivery</h3>
            <p className="text-muted text-[0.9rem] leading-relaxed">
              All mainland areas covered. Orders must be placed 24h in advance.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};
