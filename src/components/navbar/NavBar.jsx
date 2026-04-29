"use client";
import Image from "next/image";
import logo from "@/assets/icons/logo.jpg";
import { useState } from "react";
import Link from "next/link";

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="relative size-12">
          <Image src={logo} alt="logo" fill className="object-cover rounded-full" />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Middle Links */}
          <div className="flex gap-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
            <Link href="/profile" className="hover:text-blue-600">
              My Profile
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-3">
            <Link href="/login">
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Register
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {/* Links */}
          <div className="flex flex-col gap-3 text-gray-700 font-medium">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/profile">My Profile</Link>
          </div>

          {/* Auth */}
          <div className="flex flex-col gap-2">
            <Link href="/login">
              <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
