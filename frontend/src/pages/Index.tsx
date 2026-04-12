import Layout from "@/components/layout/Layout";
import SEO from "@/components/common/SEO";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/home/StatsSection";
import DisciplinesPreview from "@/components/home/DisciplinesPreview";
import HomeGallery from "@/components/home/HomeGallery";
import FounderSection from "@/components/home/FounderSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SponsorsSection from "@/components/home/SponsorsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Premier Roller Skating Academy in Ayodhya"
        description="Join The Ayodhya Skates - Ayodhya's premier roller skating academy. Expert coaching, professional training, and competition preparation for all ages."
        path="/"
      />
      <HeroSection />
      <WhyChooseUs />
      <StatsSection />
      <DisciplinesPreview />
      <HomeGallery />
      <FounderSection />
      <TestimonialsSection />
      <SponsorsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
