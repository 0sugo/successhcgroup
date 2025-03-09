import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const rhoza = localFont({
  src: "/fonts/RozhaOne-Regular.ttf",
});

const Footer = () => {
  return (
    <div className="bg-black relative h-[500px] mt-48">
      <div className="flex flex-col py-12  justify-between h-96 w-3/4 rounded-3xl p-4 absolute left-1/2 transform -translate-x-1/2 translate-transform -top-16 bg-secondary">
        <div className="grid grid-cols-5 text-white">
          <div className="space-y-10 col-span-3 ">
            <h2 className={`${rhoza.className} text-5xl opacity-80`}>
              Do you have a question?
              <br /> Feel free to contact
            </h2>
            <button className="bg-white rounded-3xl text-primary p-2 text-sm">
              GET IN TOUCH
            </button>
          </div>
          <div className="relative col-span-2">
          {/* <Image src={logo} alt="logo" width={350} height={250} className="rounded-full absolute border-2 p-1 border-primary -top-36"/> */}
          <Image src="/clearLogo.jpg" alt="logo" width={350} height={250} className="rounded-full absolute border-2 p-1 border-primary -top-36"/>
          </div>
        </div>

        <div className="flex text-white justify-between text-sm">
          <div>
            <p className="text-[#e2e2e2]">Email</p>
            <p>info@successhcgroup.com</p>
          </div>

          <div>
            <p className="text-[#e2e2e2]">Phone</p>
            <p>info@successhcgroup.com</p>
          </div>

          <div>
            <p className="text-[#e2e2e2]">Address</p>
            <p>info@successhcgroup.com</p>
          </div>
        </div>

      </div>
      <span className="text-white absolute bottom-3 left-1/2 transform -translate-x-1/2 text-sm " >Copyright © 2025 Success Healthcare Group | Made with 	<span className="text-secondary">&#9829;</span> by <span className="text-secondary">successhcgroup.com.au.</span></span>
    </div>
  );
};

export default Footer;
