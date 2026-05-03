"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {Spinner} from "@heroui/react";

export default function Navbar() {
  const pathname = usePathname();

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const name = session?.user?.name;
  const image = session?.user?.image;
  const firstLetter = name?.charAt(0).toLocaleUpperCase() || "?";

  const handleSignOut = () => {
    authClient.signOut();
    router.push("/");
  };

  return (
    <nav className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">Sun cart</div>
        <div className="hidden md:flex items-center gap-8">
          {/* Center Links */}
          <div className="flex items-center font-bold gap-6">
            <Link
              href="/"
              className={`${pathname === "/" ? `border-b-2` : `${null}`}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`${pathname === "/products" ? `border-b-2` : `${null}`}`}
            >
              Products
            </Link>
            <Link
              href="/profile"
              className={`${pathname === "/profile" ? `border-b-2` : `${null}`}`}
            >
              Profile
            </Link>
          </div>

          {/* Right Side Auth */}
          <div className="flex items-center gap-4">
            {isPending ? (
              <Spinner color="success" />
            ) : session ? (
              <>
                <figure className="p-1 border rounded-full flex justify-center items-center size-10">
                  {image && !imgError ? (
                    <img
                      src={image}
                      alt="avatar"
                      className="object-cover rounded-full"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <span className="text-xl font-bold text-gray-700">
                      {firstLetter}
                    </span>
                  )}
                </figure>
                <span>{name}</span>
                <button
                  onClick={handleSignOut}
                  className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="px-3 py-1 border rounded cursor-pointer">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="bg-black text-white px-3 py-1 rounded cursor-pointer">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="cursor-pointer font-bold border size-8 rounded-full hover:shadow-md"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-13 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
            <Link
              href="/"
              className={`${pathname === "/" ? `border-b-2` : `${null}`}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`${pathname === "/products" ? `border-b-2` : `${null}`}`}
            >
              Products
            </Link>
            <Link
              href="/profile"
              className={`${pathname === "/profile" ? `border-b-2` : `${null}`}`}
            >
              Profile
            </Link>
            {session ? (
              <>
                <figure className="border p-1 rounded-full flex items-center gap-2">
                  {image && !imgError ? (
                    <img
                      src={image}
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <span className="text-xl font-bold text-gray-700">
                      {firstLetter}
                    </span>
                  )}
                </figure>
                <span>{name}</span>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
