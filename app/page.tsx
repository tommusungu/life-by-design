import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import MoneyPlanSection from '@/components/sections/MoneyPlanSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import CalculatorsSection from '@/components/sections/CalculatorsSection';
import CarInsuranceSection from '@/components/sections/CarInsuranceSection';
import ToolsResourcesSection from '@/components/sections/ToolsResourcesSection';
import WorkFromHomeSection from '@/components/sections/WorkFromHomeSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import StatsCounter from '@/components/sections/StatsCounter';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsCounter/>
      <ArticlesSection />
            <MoneyPlanSection />
            {/* <AboutSection /> */}

      {/* <CalculatorsSection /> */}
      {/* <CarInsuranceSection /> */}
      <ToolsResourcesSection />
      <WorkFromHomeSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
