import Image from "next/image";

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.379 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.538 1.118l-3.379-2.455a1 1 0 00-1.175 0l-3.379 2.455c-.783.57-1.838-.196-1.539-1.118l1.288-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
  </svg>
);

const CartIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6H19M7 13l-1-5m5 13a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z"
    />
  </svg>
);

export default async function ProductDetails({ params }) {
  const response = await fetch(
    "https://batch-13-assignment-08.vercel.app/database/data.json",
  );
  const products = await response.json();

  const { productId } = await params;

  const foundedProduct = products.find(
    (product) => product.id === parseInt(productId));

  const { name, brand, price, rating, stock, description, image, category } =
    foundedProduct;

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-md shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative w-full h-80 md:h-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
            <p className="text-gray-500 mt-1">Brand: {brand}</p>
            <p className="text-gray-500">Category: {category}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-3">
              {[...Array(Math.round(rating))].map((_, i) => (
                <StarIcon key={i} />
              ))}
              <span className="ml-2 text-gray-600 text-sm">({rating})</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-bold text-blue-600 mt-4">${price}</p>

            {/* Stock */}
            <p
              className={`mt-2 font-medium ${stock > 0 ? "text-green-600" : "text-red-500"}`}
            >
              {stock > 0 ? `In Stock (${stock})` : "Out of Stock"}
            </p>

            {/* Description */}
            <p className="text-gray-700 mt-4 leading-relaxed">{description}</p>
          </div>

          {/* Button */}
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition cursor-pointer">
            <CartIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
