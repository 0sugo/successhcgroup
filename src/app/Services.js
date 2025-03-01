import React from "react";
import servePic from "@/images/serviceOne.jpg";
import servePic2 from "@/images/serviceTwo.jpg";
import servePic3 from "@/images/serviceThree.jpg";
import servePic4 from "@/images/serviceFour.jpg";
import servePic5 from "@/images/servicefive.jpg";
import servePic6 from "@/images/serviceSix.jpg";
import servePic7 from "@/images/serviceSeven.jpg";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

const Services = () => {
  const servicesList = [
    {
      image: servePic,
      title: "Community Nursing",
    },
    {
      image: servePic2,
      title: "Daily personal activities",
    },
    {
      image: servePic5,
      title: "Behaviour support",
    },
    {
      image: servePic6,
      title: "Accommmodation SIL/MTA/STA",
    },
    {
      image: servePic7,
      title: "Community access",
    },
    {
      image: servePic7,
      title: "Level 2 support coordination",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="block p-4">
          <h1 className="text-5xl font-semibold">SERVICES</h1>
          <p>Elevating Lives with Top-Notch Services</p>
        </div>
        <div className="p-2">
          <button className="bg-primary text-white p-2 rounded-lg flex items-center gap-1">
            Discover more
            <MoveUpRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-8">
        {servicesList.map((service, index) => (
          <div key={index} className="relative rounded-3xl shadow-lg">
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-2xl"
            />

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent rounded-2xl z-10"></div>

            <h2 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 font-semibold text-xs text-white py-2 z-20">
              {service.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
