// HomePage: Fullscreen hero with image, about, and skills (no scroll)
import FooterBlock from "../components/FooterBlock";
import HeroSection from "../components/HeroSection";
import QuotesSection from "../components/QuoteSection";
import StatsSection from "../components/StatsSection";
import FeaturedProjectsSection from "../components/FeaturedProjectSection";
const HomePage = () => {
 

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen text-center py-0 bg-black text-white overflow-hidden">
     <HeroSection />
     <QuotesSection />
     <FeaturedProjectsSection />
     <StatsSection />
     <FooterBlock />
    </section>
  );
};

export default HomePage;
