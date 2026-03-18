import Navbar from "@/components/Navbar";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";

const Awards = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <AwardsSection />
    </div>
    <Footer />
  </div>
);

export default Awards;
