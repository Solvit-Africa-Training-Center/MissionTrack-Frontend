import React from "react";
import HeadLanding from "../Components/HeadLanding";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Working from "../Components/Working";
import Feedback from "../Components/Feedback";




const LandingPage: React.FC = () => {
  return (
    <div className="">
      <div className="">
      <HeadLanding />
      </div>
      <div className="mt-20">
      <Hero />
      </div>
      <Features />
      <Working />

      <Feedback />

    </div>
  );
};

export default LandingPage;
