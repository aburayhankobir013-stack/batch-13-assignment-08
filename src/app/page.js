import Banar from "@/components/banar/Banar";
import BrandCard from "@/components/brandCard/BrandCard";
import ProductCard from "@/components/productCard/ProductCard";
import SummerCareTips from "@/components/summerCareTips/SummerCareTips";

export default async function HomePage() {
  const response = await fetch(
    "https://batch-13-assignment-08.vercel.app/database/data.json",
  );
  const products = await response.json();

  return (
    <>
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
    </>
  );
}
