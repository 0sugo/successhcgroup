import Image from "next/image";
import React from "react";
import hero from "@/images/hero.jpg";
import localFont from "next/font/local";

const rhoza = localFont({
  src: "/fonts/RozhaOne-Regular.ttf",
});
const poppins = localFont({
  src: "/fonts/Poppins-Regular.ttf",
});

const Hero = () => {
  return (
    <div className="relative">
      <Image src={hero} alt="hero" className="rounded-lg" />
      <div className=" bg-[#ed1352] flex flex-col gap-5 opacity-80 absolute top-1/2 transform  -translate-y-2/3 rounded-r-2xl text-white p-4">
        <h1 className={`text-7xl text-[#E2E2D2] font-semibold text-center ${rhoza.className}`}>
          NDIS <br /> Disability <br /> Support
        </h1>
        <p>Making Lives Better for People with Disabilities</p>
      </div>
    </div>
  );
};

export default Hero;
