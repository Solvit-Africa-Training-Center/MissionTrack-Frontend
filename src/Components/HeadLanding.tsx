import React from "react";



const HeadLanding: React.FC = () => {


  return (
    <header className="bg-white w-full h-20 shadow-sm border-b border-gray-200 px-8 py-8">
      <div className="flex justify-between items-center">

        <div>

          <h1 className="bg-gradient-to-r font-bold p-{10px} text-2xl from-[#4D8FFAE5] to-[#11A677E5] text-transparent  bg-clip-text">
            Mission Track
          </h1>

        </div>

        <div className="flex justify between gap-10">
          <a href="">Home</a>
          <a href=""> Request</a>
          <a href="">Track</a>


        </div>

        <div className="">
          <button className="bg-[#5056C7] text-white border rounded-md px-[8px] py-1">Sign Up</button>
        </div>
      </div>

    </header>
  );
};

export default HeadLanding;
