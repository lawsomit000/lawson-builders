import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <PortfolioPreview />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
