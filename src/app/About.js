import React from "react";
import aboutPic from "@/images/about.png";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="mx-auto max-w-[70%] text-left p-4 space-y-4">
        <h2 className="text-3xl text-primary text-center font-semibold">Mission & Vision</h2>
        <p>
          Success Healthcare Group's Mission is to deliver services which are
          guided by each person’s aspirations for the life they want to lead. We
          will support each individual to be the best version of themselves.
        </p>
        <p>
          We are committed to providing a safe space for people with
          disabilities to grow and experience their full life potential. We
          understand that what matters to you as a participant is important and
          we promise to be beside you as you strive to achieve it. We promise
          that you shall never walk alone. Success Healthcare Group is a CALD
          SERVICE PROVIDER
        </p>
        <div className="text-center ">
          <button className="text-primary p-2 opacity-70 border-t-2 border-t-secondary hover:translate-x-6 transform transition-transform duration-300 ease-in-out">
            Know more{">>"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-14 ">
        <div className="relative flex justify-center">
          <Image src={aboutPic} alt="about" className="rounded-lg w-[508px] " />
        </div>

        <div className="flex items-center p-4 justify-center bg-[url('../images/perth.svg')] bg-cover bg-center">
            <div className="space-y-4 text-sm ">
              <h2 className="text-xl text-primary font-semibold">
                Enhancing lives with compassionate care
              </h2>
              <p>
                Success Healthcare Services provides quality and safe services
                to all our participants. We aspire to put our participants first
                and central to all our services because we understand that a win
                for our participants in their lives is a win for us too.
              </p>
              <p>
                We are committed to providing a safe space for people with
                disabilities to grow and experience their full life potential.
                We understand that what matters to you as a participant is
                important and we promise to be beside you as you strive to
                achieve it.
              </p>

              <div className=" ">
                <button className="text-primary p-2 opacity-70 hover:translate-x-6 transform transition-transform duration-300 ease-in-out">
                  Know more{">>"}
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
