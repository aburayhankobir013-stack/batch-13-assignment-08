"use client";

import Link from "next/link";

export default function NotFoundPage(){
  return(
    <div className="min-h-screen flex flex-col justify-center items-center gap-4 bg-black">
      <h1 className="text-white text-3xl">Page Not Found!</h1>
      <Link href={"/"}>
        <button className="bg-green-700 px-4 py-2 rounded-md hover:shadow-xs cursor-pointer font-bold hover:shadow-green-500 text-white">Go to home</button>
      </Link>
    </div>
  );
}