import React from "react";



const Hero: React.FC = () => {


    return (
        <div className="h-[650px] w-full bg-gradient-to-r font-bold p-{10px}  from-[#4D8FFA] to-[#11A677] backdrop-blur-md">
            <div className="flex justify-center  ">
                <div className="h-[600px] w-[1300px] mt-30 flex   justify-between gap-10 ">
                    <div className="flex flex-col   gap-10">
                    <div className=" flex flex-col mt-20 max-sm:mt-0 max-sm:ml-2 gap-20 max-sm:gap-10">
                        <p className="text-white  max-sm:text-xl text-2xl">
                            Streamline your <br/> business<br/> missions with <br/> Mission Track.

                        </p>
                        <p className="text-white max-sm:text-sm ">
                            From Request to mission expenses <br/>All in One Flow

                        </p>
                    </div>
                    <div>
                        <button className="bg-white text-[#4D8FFAE5] rounded-lg  px-6 max-sm:p-1 ml-2 py-1">
                            Big Button

                        </button>
                    </div>
                    </div>
                    <div className=" ">
                        <img 
                        src="src/assets/image.jpg" 
                        alt="" 
                        className="h-120 w-auto rounded-md max-sm:h-100 border-gray-50  "
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
