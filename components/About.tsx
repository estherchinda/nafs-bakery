import React from 'react';
import Image from 'next/image';
import { BadgeCheck, Cannabis, Palette } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-overlay" id="about">
      <div className="max-w-300 mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-16 items-center">
        <div className="relative w-full hidden md:block aspect-4/5 max-lg:aspect-video rounded-3xl overflow-hidden">
          <Image 
            src="/images/about-section.jpg" 
            alt="Baker decorating cake" 
            fill 
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-primary/70 to-transparent text-secondary font-serif italic text-[1.1rem]">
            &quot;Baking isn&apos;t just a job, it&apos;s a love language we share with our city.&quot;
          </div>
        </div>
        
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl mb-8 md:mb-10 font-serif font-bold text-secondary">Why Choose Nafs Bakery?</h2>
          
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-2xl shrink-0">
                <Cannabis/>
              </div>
              <div>
                <h3 className="font-sans text-[1.1rem] mb-2 font-bold text-black">Pure Ingredients</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">We source organic flour, real butter, and premium cocoa. No preservatives, just real food.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-2xl shrink-0">
                <Palette/>
              </div>
              <div>
                <h3 className="font-sans text-[1.1rem] mb-2 font-bold text-black">Artistic Design</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">Every cake is a unique masterpiece, custom-designed to tell your story and match your theme perfectly.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-2xl shrink-0">
                <BadgeCheck/>
              </div>
              <div>
                <h3 className="font-sans text-[1.1rem] mb-2 font-bold text-black">Trusted Brand</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">Over 5,000 celebrations sweetened across Abuja with consistent quality and timely delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
