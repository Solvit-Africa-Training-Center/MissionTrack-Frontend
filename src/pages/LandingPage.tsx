import React from "react";
import HeadLanding from "../Components/LandingPage/HeadLanding";
import Hero from "../Components/LandingPage/Hero";
import Features from "../Components/LandingPage/Features";
import Working from "../Components/LandingPage/Working";
import Feedback from "../Components/LandingPage/Feedback";

const LandingPage: React.FC = () => {
  return (
    <div 
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/Rectangle52.jpeg')" }}
    >
      {/* Optional overlay for blur/darkening */}
      <div className="absolute inset-0 bg-primaryColor-10/50 opacity-50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10">
        <HeadLanding />
        <div className="mt-20">
          <Hero />
        </div>
        <Features />
        <Working />
        <Feedback />
      </div>
    </div>
  )
};

export default LandingPage;
