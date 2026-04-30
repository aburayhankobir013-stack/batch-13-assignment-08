"use client";
import Image from "next/image";
import Link from "next/link";

const StarIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.379 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.538 1.118l-3.379-2.455a1 1 0 00-1.175 0l-3.379 2.455c-.783.57-1.838-.196-1.539-1.118l1.288-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
  </svg>
);

export default function ProductCard({ product }) {
  const {id, name, price, rating, image } = product;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Product Name */}
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(Math.round(rating))].map((_, i) => (
            <StarIcon key={i} />
          ))}
          <span className="text-sm text-gray-500 ml-1">({rating})</span>
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-blue-600">${price}</p>

        {/* Button */}
        <Link href={`productDetails/${id}`}>
          <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer">
            View details
          </button>
        </Link>
      </div>
    </div>
  );
}
