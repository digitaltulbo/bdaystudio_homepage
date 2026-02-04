import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TargetCustomersSection from '@/components/TargetCustomersSection';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import HowToUseSection from '@/components/HowToUseSection';
import PricingSection from '@/components/PricingSection';
import LocationSection from '@/components/LocationSection';
import AIServicesSection from '@/components/AIServicesSection';
import ReservationSection from '@/components/ReservationSection';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TargetCustomersSection />
        <GallerySection />
        <ReviewsSection />
        <HowToUseSection />
        <PricingSection />
        <LocationSection />
        <AIServicesSection />
        <ReservationSection />
      </main>
      <FloatingCTA />
      <Footer />
    </>
  );
}
