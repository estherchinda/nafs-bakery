import React from 'react';
import Image from 'next/image';

export const About = () => {
  return (
    <section className="py-24 px-8 bg-background" id="about">
      <div className="max-w-300 mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
        <div className="relative w-full aspect-4/5 max-lg:aspect-video rounded-3xl overflow-hidden">
          <Image 
            src="/images/about-section.png" 
            alt="Baker decorating cake" 
            fill 
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-black/70 to-transparent text-white font-serif italic text-[1.1rem]">
            &quot;Baking isn&apos;t just a job, it&apos;s a love language we share with our city.&quot;
          </div>
        </div>
        
        <div className="flex flex-col">
          <h2 className="text-4xl mb-10 font-serif font-bold text-secondary">Why Choose Nafs?</h2>
          
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-2xl shrink-0">🌿</div>
              <div>
                <h3 className="font-sans text-[1.1rem] mb-2 font-bold text-secondary">Pure Ingredients</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">We source organic flour, real butter, and premium cocoa. No preservatives, just real food.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-2xl shrink-0">🎨</div>
              <div>
                <h3 className="font-sans text-[1.1rem] mb-2 font-bold text-secondary">Artisanal Design</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">Every cake is a unique masterpiece, custom-designed to tell your story and match your theme perfectly.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-2xl shrink-0">⭐</div>
              <div>
                <h3 className="font-sans text-[1.1rem] mb-2 font-bold text-secondary">Trusted Since 2018</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">Over 5,000 celebrations sweetened across Lagos with consistent quality and timely delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
