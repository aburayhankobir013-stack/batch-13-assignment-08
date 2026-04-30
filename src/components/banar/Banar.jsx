import banarImage from "@/assets/images/banar.jpg"
import Image from "next/image";



export default function Banar(){
  return(
    <div className="container mx-auto space-y-7 md:space-y-12.5 mt-7 md:mt-12.5  px-2">
      <h1 className="text-center font-bold text-green-900 text-3xl md:text-4xl">Welcome To Summer Mart</h1>
      <figure className="relative w-full h-64 md:h-125">
        <Image src={banarImage} alt="banar image" fill className="object-fit rounded-md"/>
      </figure>
      <div className="text-center text-xl md:text-2xl font-bold text-green-900 container mx-auto py-4 px-2 rounded-md bg-green-200">
        <h1>Summer Sale 50% OFF</h1>
        <h1>Hot Deals</h1>
      </div>
    </div>
  );
}