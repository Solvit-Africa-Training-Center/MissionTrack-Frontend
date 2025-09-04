import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  // List of images
  const images = [
    "src/assets/image1.png",
    "src/assets/image2.png",
    "src/assets/image3.png",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image, loop back at the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-[650px] w-full font-bold relative overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg"
        style={{ backgroundImage: "url('src/assets/Rectangle52.jpeg')" }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primaryColor-10 to-primaryColor-100 to-accent-10"></div>

      {/* Content */}
      <div className="relative flex justify-center">
        <div className="h-[600px] w-[1300px]">
          {/* Left text */}
          <div className="h-[400px] w-[1000px] mt-30 ml-30 flex items-center justify-between">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col max-sm:mt-0 max-sm:ml-2 gap-4 max-sm:gap-10">
                <p className="text-gray-800   11 max-sm:text-xl text-4xl">
                  Your Missions,
                  <br />
                  Streamlined from <br />
                  <span className="bg-gradient-to-r from-[#4D8FFA]/70 to-[#11A677]/70 bg-clip-text text-transparent">
                    Start to Approval.
                  </span>
                </p>
                <p className="text-gray-800 text-sm fo max-sm:text-sm">
                  From Request to mission expenses.All in One Flow
                </p>
              </div>
              <div>
                <button className="bg-primaryColor-500 text-white rounded-lg px-6 max-sm:p-1 ml-2 py-2">
                  Get Started
                </button>
              </div>
            </div>

            {/* Right image with fade animation */}
            <div className="relative h-120 w-auto max-sm:h-100">
              <img
                key={currentIndex} // force re-render for animation
                src={images[currentIndex]}
                alt="Mission preview"
                className="h-120 w-auto max-sm:h-100 border-gray-50 transition-opacity duration-1000 ease-in-out opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
