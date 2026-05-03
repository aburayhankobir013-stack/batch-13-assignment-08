import ProductCard from "@/components/productCard/ProductCard";

export default async function ProductsPage() {
  const response = await fetch(
    "https://batch-13-assignment-git-1b1af9-aburayhankobir013-7602s-projects.vercel.app/database/data.json",
  );
  const products = await response.json();
  return (
    <>
      <main className="flex items-center justify-center p-4 my-12.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
