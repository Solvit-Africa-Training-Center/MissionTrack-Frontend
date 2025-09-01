import React from "react";



const Hero: React.FC = () => {


    return (
        <div className="h-[650px] w-full bg-gradient-to-r font-bold p-{10px}  from-[#4D8FFAE5] to-[#11A677E5]">
            <div className="flex justify-center ">
                <div className="h-[600px] w-[1300px] mt-10 flex   justify-between gap-10 ">
                    <div className="flex flex-col   gap-10">
                    <div className=" flex flex-col mt-20 gap-20">
                        <p className="text-white text-2xl">
                            Streamline your <br/> business<br/> missions with <br/> Mission Track.

                        </p>
                        <p className="text-white ">
                            From Request to mission expenses <br/>All in One Flow

                        </p>
                    </div>
                    <div>
                        <button className="bg-white text-[#4D8FFAE5] rounded-lg  px-6 py-1">
                            Big Button

                        </button>
                    </div>
                    </div>
                    <div className="mt-10 mr-4">
                        <img 
                        src="src/assets/image.jpg" 
                        alt="" 
                        className="h-135 w-auto rounded-md border-gray-50  "
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
