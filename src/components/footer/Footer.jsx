import Link from "next/link";

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.5v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h3l-.5 3h-2.5v7A10 10 0 0022 12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0022 4.5a8.1 8.1 0 01-2.3.6 4 4 0 001.7-2.2 8.1 8.1 0 01-2.6 1A4 4 0 008 8a11.4 11.4 0 01-8-4 4 4 0 001.2 5.4A4 4 0 010 9v.1a4 4 0 003.2 3.9 4 4 0 01-1.8.1 4 4 0 003.7 2.8A8.1 8.1 0 010 17.5 11.4 11.4 0 008 19"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
          <p>Email: support@myshop.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Location: Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="hover:text-blue-500">
              <FacebookIcon />
            </Link>
            <Link href="#" className="hover:text-sky-400">
              <TwitterIcon />
            </Link>
            <Link href="#" className="hover:text-pink-500">
              <InstagramIcon />
            </Link>
          </div>
        </div>

        {/* Privacy Policy */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Legal</h2>
          <Link href="/privacy-policy" className="hover:text-white block">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white block mt-2">
            Terms & Conditions
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}