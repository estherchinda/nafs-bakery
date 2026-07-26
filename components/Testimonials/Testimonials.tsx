import React from 'react';

const REVIEWS = [
  {
    id: 1,
    text: "The best Red Velvet I've ever had in Lagos. The frosting was perfect - not too sweet, just right. Nafs is my go-to for every birthday!",
    name: "Chioma A.",
    location: "Lekki, Lagos"
  },
  {
    id: 2,
    text: "I ordered a custom wedding cake and it exceeded all expectations. It was the center of attention and tasted even better than it looked!",
    name: "Tunde O.",
    location: "Ikeja, Lagos"
  },
  {
    id: 3,
    text: "Their small chops tray was the highlight of our office party. Super fresh, crispy, and delivered right on time. Highly recommended!",
    name: "Sarah M.",
    location: "Victoria Island"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-8 bg-[#FDF9E6]/70">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-4xl mb-12 font-serif font-bold text-secondary">Sweet Words from Clients</h2>
        
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
          {REVIEWS.map(review => (
            <div key={review.id} className="bg-background p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col">
              <div className="font-serif text-[4rem] text-primary leading-[0.5] mb-4">&quot;</div>
              <p className="italic text-secondary text-[0.95rem] leading-relaxed flex-1 mb-8">{review.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary"></div>
                <div>
                  <div className="font-bold text-[0.9rem] text-secondary">{review.name}</div>
                  <div className="text-[0.8rem] text-muted">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
