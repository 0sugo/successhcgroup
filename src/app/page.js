import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="w-[90%] mx-auto ">
        <div className="h-screen overflow-y-hidden">
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
  );
}
