import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Mission & Vision Section */}
      <div className="mx-auto max-w-3xl text-left p-4 space-y-4">
        <h2 className="text-3xl md:text-4xl text-primary text-center font-semibold">
          Mission & Vision
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Success Healthcare Group's Mission is to deliver services guided by each
          person’s aspirations for the life they want to lead. We support individuals
          to be the best version of themselves.
        </p>
        <p className="text-sm md:text-base text-gray-700">
          We are committed to providing a safe space for people with disabilities
          to grow and experience their full potential. We understand that what
          matters to you as a participant is important, and we promise to be beside
          you as you strive to achieve it. You shall never walk alone. Success Healthcare
          Group is a CALD SERVICE PROVIDER.
        </p>
        <div className="text-center">
          <button className="text-primary p-2 opacity-70 border-t-2 border-t-secondary hover:translate-x-2 sm:hover:translate-x-6 transform transition-transform duration-300 ease-in-out">
            Know more {">>"}
          </button>
        </div>
      </div>

      {/* Image & Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-14">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/about.png"
            alt="about"
            width={500}
            height={300}
            className="rounded-lg w-full max-w-md md:max-w-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex items-center p-4 justify-center bg-cover bg-center">
          <div className="space-y-4 text-sm md:text-base text-gray-700">
            <h2 className="text-lg md:text-xl text-primary font-semibold text-center md:text-left">
              Enhancing lives with compassionate care
            </h2>
            <p>
              Success Healthcare Services provides quality and safe services to all
              our participants. We aspire to put our participants first and central
              to all our services because a win for them is a win for us too.
            </p>
            <p>
              We are committed to creating a safe space for people with disabilities
              to grow and reach their full potential. Your goals matter, and we
              promise to be beside you as you strive to achieve them.
            </p>
            <div className="text-center md:text-left">
              <button className="text-primary p-2 opacity-70 hover:translate-x-2 sm:hover:translate-x-6 transform transition-transform duration-300 ease-in-out">
                Know more {">>"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
