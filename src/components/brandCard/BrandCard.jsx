import Image from "next/image";
import SunShadeImage from "@/assets/images/01.jpg";
import CoolWearImage from "@/assets/images/02.jpg";
import HydraLifeImage from "@/assets/images/03.jpg";

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.379 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.538 1.118l-3.379-2.455a1 1 0 00-1.175 0l-3.379 2.455c-.783.57-1.838-.196-1.539-1.118l1.288-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
  </svg>
);

export default function BrandCard() {
  const brands = [
    {
      id: 1,
      name: "SunShade",
      rating: 4.7,
      description: "Premium sunglasses and summer accessories brand.",
      image: SunShadeImage, // ✅ fixed
    },
    {
      id: 2,
      name: "CoolWear",
      rating: 4.5,
      description: "Lightweight and breathable summer clothing.",
      image: CoolWearImage, // ✅ fixed
    },
    {
      id: 3,
      name: "HydraLife",
      rating: 4.8,
      description: "Hydration products and summer care essentials.",
      image: HydraLifeImage, // ✅ fixed
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          🔥 Top Summer Brands
        </h2>
        <p className="text-gray-600 mt-2 mb-10">
          Discover the most popular brands for your summer needs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white p-6 rounded-md shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative w-full h-32 mb-4">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold">{brand.name}</h3>

              <div className="flex justify-center items-center gap-1 mt-2">
                {[...Array(Math.round(brand.rating))].map((_, i) => (
                  <StarIcon key={i} />
                ))}
                <span className="text-sm text-gray-500 ml-1">
                  ({brand.rating})
                </span>
              </div>

              <p className="text-gray-600 text-sm mt-3">
                {brand.description}
              </p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer">
                View Products
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}