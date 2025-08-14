import FeaturedCategories from "./sections/FeaturedCategories";
import FeaturedProducts from "./sections/FeaturedProducts";
import HeroSection from "./sections/HeroSection";
import SpecialOffers from "./sections/SpecialOffers";
import Testimonials from "./sections/Testimonials";
import WhyChooseUs from "./sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturedCategories />
        <FeaturedProducts />
        <SpecialOffers />
        <WhyChooseUs />
        <Testimonials />
      </main>
    </>
  );
}
