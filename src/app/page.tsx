import HeroSection from "@/components/HeroSection";
import Inspiration from "@/components/section-inspiration";
import Products from "@/components/ProductsSection";
import Range from "@/components/Range";
import ShareSection from "@/components/ShareSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Range />
      <Products />
      <Inspiration />
      <ShareSection />
      <hr />
    </div>
  );
}