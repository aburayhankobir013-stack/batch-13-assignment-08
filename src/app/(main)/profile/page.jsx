"use client";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const [imgError, setImgError] = useState(false);
  const image = session?.user?.image;
  const name = session?.user?.name;
  const firstLetter = name?.charAt(0)?.toLocaleUpperCase() || "?";
  return (
    <div className="min-h-screen container mx-auto flex flex-col gap-2 items-center">
      <div className="border flex flex-col items-center mt-12 px-10 py-5 gap-2 rounded-md shadow-md bg-green-300">
        <figure className="p-2 border border-green-900 rounded-full flex justify-center items-center size-25">
          {image && !imgError ? (
            <img
              src={image}
              alt="avatar"
              className="object-cover rounded-full"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-3xl font-bold text-gray-700">
              {firstLetter}
            </span>
          )}
        </figure>
        <h1 className="text-xl font-bold">{session?.user?.name}</h1>
        <h2 className="font-semibold italic">{session?.user?.email}</h2>
      </div>
      <Link href="/updateProfile">
          <button className="border rounded-md font-bold py-2 px-20 hover:shadow-md cursor-pointer bg-green-200">Update Your Profile</button>
      </Link>
    </div>
  );
}
