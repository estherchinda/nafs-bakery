import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { InfoBar } from '@/components/InfoBar/InfoBar';
import { MenuSection } from '@/components/MenuSection/MenuSection';
import { CustomOrder } from '@/components/CustomOrder/CustomOrder';
import { DailyBestSellers } from '@/components/DailyBestSellers/DailyBestSellers';
import { About } from '@/components/About/About';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { Delivery } from '@/components/Delivery/Delivery';
import { Footer } from '@/components/Footer/Footer';

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