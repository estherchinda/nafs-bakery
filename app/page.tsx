import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { InfoBar } from '@/components/InfoBar';
import { MenuSection } from '@/components/MenuSection';
import { CustomOrder } from '@/components/CustomOrder';
import { DailyBestSellers } from '@/components/DailyBestSellers';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { Delivery } from '@/components/Delivery';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <InfoBar />
      <MenuSection />
      <CustomOrder />
      <DailyBestSellers />
      <About />
      <Testimonials />
      <Delivery />
      <Footer />
    </main>
  );
}