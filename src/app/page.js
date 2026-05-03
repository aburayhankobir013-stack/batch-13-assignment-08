import Banar from "@/components/banar/Banar";
import BrandCard from "@/components/brandCard/BrandCard";
import ProductCard from "@/components/productCard/ProductCard";
import SummerCareTips from "@/components/summerCareTips/SummerCareTips";
import CTASection from "@/components/CTASection/CTASection";
import Marquee from "react-fast-marquee";

export default async function HomePage() {
  const response = await fetch("http://localhost:3000/database/data.json");
  const products = await response.json();

  return (
    <>
      <Marquee className="uppercase container mx-auto border-2 py-4 mt-5 rounded-md font-bold text-gray-600">
        Step into the season with comfort, style, and incredible savings. Our summer collection brings you the perfect blend of fashion and function, now available at up to 50% off. Don't miss the chance to upgrade your wardrobe and embrace the sunshine with confidence.
      </Marquee> 
      <Banar />
      <main className="flex items-center justify-center p-4 mt-12.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <SummerCareTips />
      <BrandCard />
      <CTASection />
    </>
  );
}
