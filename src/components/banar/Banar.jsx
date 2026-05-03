import banarImage from "@/assets/images/banar.jpg"
import Image from "next/image";



export default function Banar(){
  return(
    <div className="container mx-auto space-y-7 md:space-y-12.5 mt-7 md:mt-12.5  px-2">
      <h1 className="uppercase tracking-tight text-center text-3xl md:text-4xl font-extrabold bg-linear-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Stay Cool, Look Stylish This Summer
      </h1>
      <p className="text-center max-w-5xl mx-auto md:text-xl tracking-tight text-slate-700">Discover our latest summer collection designed for comfort, style, and everyday confidence. From lightweight essentials to trendy must-haves, everything you need is here. Enjoy up to 50% off for a limited time and refresh your wardrobe with effortless summer vibes.</p>
        <figure className="relative w-full h-64 md:h-125">
        <Image src={banarImage} alt="banar image" fill className="object-fit rounded-md opacity-80"/>
      </figure>
      <div className="text-center text-xl md:text-2xl font-bold text-green-900 container mx-auto py-4 px-2 rounded-md bg-green-200">
        <h1 className="font-extrabold bg-linear-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Summer Sale 50% OFF</h1>
        <h1 className="text-orange-500">Hot Deals</h1>
      </div>
    </div>
  );
}