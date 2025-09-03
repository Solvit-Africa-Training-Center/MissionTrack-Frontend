import React from "react";

const Hero: React.FC = () => {
    return (
        <div
            className="h-[650px] w-full font-bold relative overflow-hidden"
        >
            {/* Background image with blur */}
            <div
                className="absolute inset-0 bg-cover bg-center blur-lg"
                style={{ backgroundImage: "url('src/assets/Rectangle52.jpeg')" }}
            ></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r  from-[#4D8FFA]/70 to-[#11A677]/70"></div>

            {/* Content */}
            <div className="relative flex justify-center">
                <div className="h-[600px] w-[1300px]  flex items-center justify-between ">
                    {/* Left text */}
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col  max-sm:mt-0 max-sm:ml-2 gap-20 max-sm:gap-10">
                            <p className="text-white max-sm:text-xl text-4xl">
                                Your Missions,<br />
                                Streamlined from <br />
                                <span className="bg-gradient-to-r from-[#4D8FFA]/70 to-[#11A677]/70 bg-clip-text text-transparent">
                                    Start to Approval.
                                </span>

                            </p>
                            <p className="text-white max-sm:text-sm">
                                From Request to mission expenses <br />
                                All in One Flow
                            </p>
                        </div>
                        <div>
                            <button className="bg-white text-[#4D8FFAE5] rounded-lg px-6 max-sm:p-1 ml-2 py-1">
                                Big Button
                            </button>
                        </div>
                    </div>

                    {/* Right image */}
                    <div>
                        <img
                            src="src/assets/image1.png"
                            alt="Mission preview"
                            className="h-120 w-auto max-sm:h-100 border-gray-50"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
