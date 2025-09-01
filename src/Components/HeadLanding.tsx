import React from "react";



const HeadLanding: React.FC = () => {
  

  return (
    <header className="bg-white w-full h-20 shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between">
        
        <div>

            <h1 className="bg-gradient-to-r font-bold text-2xl from-[#282FA8] to-[#F27455] text-transparent bg-clip-text">
  Mission Track
</h1>
           
        </div>

        <div className="flex justify between gap-10">
            <a href="">Home</a>
            <a href=""> Request</a>
            <a href="">Track</a>


        </div>

        
        <button>Sign Up</button>

        </div>
      
    </header>
  );
};

export default HeadLanding;
