"use client";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";



export default function ProfilePage(){
  const { data: session, isPending } = authClient.useSession();
  const [imgError, setImgError] = useState(false);
  const image = session?.user?.image;
  const name = session?.user?.name;
  const firstLetter = name?.charAt(0)?.toLocaleUpperCase() || "?";
  return(
    <div className="min-h-screen container mx-auto flex flex-col items-center">
      <div className="border flex flex-col items-center mt-12 px-10 py-5 gap-2 rounded-md shadow-md">
      <figure className="relative border rounded-full flex justify-center items-center size-25">
        {image && !imgError ? (
          <Image src={image} alt="avatar" fill className="object-cover rounded-full" onError={()=> setImgError(true)} />
        ):(
          <span className="text-3xl font-bold text-gray-700">{firstLetter}</span>
        )}
      </figure>
      <h1 className="text-xl font-bold">
        {session?.user?.name}
      </h1>
      <h2 className="font-semibold italic">
        {session?.user?.email}
      </h2>
    </div>
    </div>
  );
}