import { Mail, Phone } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "lucide-react";  // Assuming these are available
import React from "react";

const Topbar = () => {
  return (
    <div className="bg-[#0055C2] text-white rounded-b-lg shadow-lg">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center pt-4 pb-2 px-12 flex-nowrap">
        {/* Left: Social Icons */}
        <div className="flex gap-2 text-xs">
          <p className="flex gap-2 items-center">
            <Mail className="size-4" />
            info@successhcgroup.com.au
          </p>
          <p className="border border-[#ed1352]" />
          <p className="flex gap-2 items-center">
            <Phone className="size-4" />
            +61 567 890 890
          </p>
          {/* <p className="bg-[#0055C2] p-2 text-white rounded-t-lg">Vacancies</p>
          <p className="bg-[#ed1352] p-2 text-white rounded-t-lg">Make an Enquiry</p> */}
        </div>

        

        {/* Center: Marquee */}
        <div className="flex-1 text-center mx-4">
          <marquee behavior="scroll" direction="left" className="text-xs">
            Owned and operated by registered nurses, we have proudly delivered over 100,000 hours of dedicated support and continue to provide exceptional care.
          </marquee>
        </div>

        {/* Right: Contact and Buttons */}
        <div className="flex gap-4 text-xs">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="size-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="size-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="size-5" />
          </a>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden pt-4 px-4">
        <marquee behavior="scroll" direction="left" className="text-xs">
          Owned and operated by registered nurses, we have proudly delivered over 100,000 hours of dedicated support and continue to provide exceptional care.
        </marquee>
      </div>
    </div>
  );
};

export default Topbar;
