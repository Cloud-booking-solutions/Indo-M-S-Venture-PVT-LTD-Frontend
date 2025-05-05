
import HeroBanner from "@/components/HomePage/HeroBanner";
import WelcomeSection from "@/components/HomePage/WelcomeSection";
import FeaturedProducts from "@/components/HomePage/FeaturedProducts";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";
import CallToAction from "@/components/HomePage/CallToAction";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <WelcomeSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
};

export default HomePage;
