import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSlider";
import StatsSection from "@/components/StatsSection";
import HighlightsSection from "@/components/HighlightsSection";
import Footer from "@/components/Footer";

const Home = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ImageSlider />
    <StatsSection />
    <HighlightsSection />
    <Footer />
  </div>
);

export default Home;
