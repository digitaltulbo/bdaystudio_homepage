import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import GallerySection from '@/components/GallerySection';
import PricingSection from '@/components/PricingSection';
import HowToUseSection from '@/components/HowToUseSection';
import LocationSection from '@/components/LocationSection';
import AIServicesSection from '@/components/AIServicesSection';
import ReservationSection from '@/components/ReservationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <HowToUseSection />
        <PricingSection />
        <LocationSection />
        <AIServicesSection />
        <ReservationSection />
      </main>
      <Footer />
    </>
  );
}
