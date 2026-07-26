import React from "react";
import Image from "next/image";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center pt-40 md:pt-32 px-8 pb-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b md:bg-linear-to-r from-overlay/95 via-overlay/80 to-overlay/0 md:via-background/70 z-10"></div>
        <Image
          src="/images/nafs-hero.png"
          alt="Fresh Cakes and Treats"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      <div className="relative z-20 max-w-150 ml-0 lg:ml-[max(0px,calc((100vw-1300px)/2))]">
        <h1 className="text-4xl md:text-[3.2rem] leading-[1.1] mb-6 text-[#1D1D03] font-serif font-bold">
          Fresh Cakes, Treats, and Celebration Orders
        </h1>
        <p className="text-[1.1rem] text-secondary/90 mb-10 max-w-125">
          Handcrafted with love using the finest ingredients. Every bite is a
          journey into artisanal excellence and pure indulgence.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <Button
            variant="primary"
            icon={
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={20}
                height={20}
              />
            }>
            Order on WhatsApp
          </Button>
          <Button variant='outline'>View Menu</Button>
        </div>
      </div>
    </section>
  );
};
