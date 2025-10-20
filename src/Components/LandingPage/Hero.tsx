import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full font-bold overflow-hidden h-auto lg:h-[650px]">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle51.jpg')" }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[#D9D9D9]/70"></div>

      {/* Content */}
      <div className="relative flex justify-center">
        <div className="w-full max-w-[1000px] h-800 max-sm:h-full px-4 bg-sm:px-6 lg:px-0 py-10 lg:py-0">
          {/* Flex direction changes on small screens */}
          <div className="lg:mt-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-0">


            {/* Left text section */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <div className="flex flex-col gap-4">
                <p className="text-gray-800 text-3xl sm:text-5xl lg:text-6xl leading-tight">
                  Your Missions,
                  <br />
                  Streamlined from <br />
                  <span className="bg-gradient-to-r from-[#4D8FFA]/70 to-[#11A677]/70 bg-clip-text text-transparent">
                    Start to Approval.
                  </span>
                </p>
                <p className="text-gray-800 text-sm sm:text-base">
                  From Request to mission expenses — All in One Flow
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4">
                <Link
                  to="/apply"
                  className="bg-primaryColor-700 text-white rounded-lg px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base"
                >
                  Get Started
                </Link>
                <button className="bg-accent-400 text-white rounded-lg px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base">
                  Request Demo
                </button>
              </div>
            </div>

            {/* Right image section */}
            <div className="relative h-130 w-auto max-sm:h-100">
              <img
                src="/Group40.png"
                alt="Mission preview background"
                className="h-120 w-auto max-sm:h-100 border-gray-50"
              />
              <img
                src="/Frame400.png"
                alt="Mission preview overlay"
                className="relative w-[400px] bottom-10 left-20 h-30 max-sm:w-[250px] max-sm:h-15 max-sm:left-10 border-gray-50 z-10"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
