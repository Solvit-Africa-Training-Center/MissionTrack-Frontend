import React from "react";



const Feedback: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className=" w-[1300px] h-[500px]">
                {/* Header */}
                <div className="flex justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">How it works</h1>
                        <p className="text-2xl text-gray-600 mt-5">
                            A simple four-step process from mission request to expense tracking
                        </p>
                    </div>
                </div>

                {/* Cards */}


                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="p-6 rounded-lg shadow-sm flex flex-col items-center gap-4 w-[250px] mx-auto">
                        <div className=" bg-blue-100  rounded-full p-2">

                        </div>
                        <div>

                            <p className="text-sm text-start mt-5 text-gray-800">
                                MissionFlow has transformed how we handle business trips. What used to take days now takes minutes, and the expense tracking is phenomena
                            </p>
                        </div>
                    </div>


                    <div className="p-6 rounded-lg shadow-sm flex flex-col items-center gap-4 w-[250px] mx-auto">
                        <div className=" bg-blue-100  rounded-full p-2">

                        </div>
                        <div>
                            
                            <p className="text-sm mt-5 text-center text-gray-800">
                                MissionFlow has transformed how we handle business trips. What used to take days now takes minutes, and the expense tracking is phenomena
                            </p>
                        </div>
                    </div>


                    <div className="p-6 rounded-lg shadow-sm flex flex-col items-center gap-4 w-[250px] mx-auto">
                        <div className=" bg-blue-100  rounded-full p-2">

                        </div>
                        <div>
                           
                            <p className="text-sm mt-5 text-center text-gray-800">
                                MissionFlow has transformed how we handle business trips. What used to take days now takes minutes, and the expense tracking is phenomenal
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Feedback;
