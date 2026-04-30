import Link from "next/link";

export default function CTASection() {
  return (
    <section className="container mx-auto bg-linear-to-r from-orange-400 via-pink-500 to-red-500 text-white py-16 text-center rounded-md shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Summer Sale is Live! ☀️
      </h2>
      <p className="mb-6 text-lg">Up to 50% off on all summer essentials</p>
      <Link href={"/login"}>
        <button className="bg-white text-red-500 px-8 py-1 rounded-xl font-semibold hover:bg-gray-100 transition cursor-pointer">
          Shop Now
        </button>
      </Link>
    </section>
  );
}
