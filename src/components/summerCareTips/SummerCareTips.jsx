
const SkinIcon = () => (
  <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      d="M12 3c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7z" />
  </svg>
);

const WaterIcon = () => (
  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      d="M12 2C8 7 6 10 6 13a6 6 0 0012 0c0-3-2-6-6-11z" />
  </svg>
);

const SunIcon = () => (
  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" strokeWidth="2"/>
    <path strokeWidth="2" strokeLinecap="round"
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
);

export default function SummerCareTips() {
  return (
    <section className="py-12 bg-leaner-to-br from-yellow-50 to-blue-50 mt-7 md:mt-12.5">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          🌞 Summer Care Tips
        </h2>
        <p className="text-gray-600 mt-2 mb-10">
          Stay cool, fresh, and healthy during the summer
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Skin Care */}
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <SkinIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2">Skin Care</h3>
            <p className="text-gray-600 text-sm">
              Use sunscreen daily, wash your face regularly, and keep your skin moisturized to avoid dryness.
            </p>
          </div>

          {/* Hydration */}
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <WaterIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hydration</h3>
            <p className="text-gray-600 text-sm">
              Drink plenty of water, coconut water, and fresh juices to stay hydrated in hot weather.
            </p>
          </div>

          {/* Sun Protection */}
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <SunIcon />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sun Protection</h3>
            <p className="text-gray-600 text-sm">
              Wear sunglasses, hats, and light clothing to protect yourself from harmful UV rays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}