import React, { useState } from "react";

import FinanceSidebar from "../Components/Finance/FinanceSidebar";


 import HeaderFin from "../Components/Finance/HeaderFin";
 import { Outlet } from "react-router-dom";


const twTheme = (light: string, dark: string) => `${light} dark:${dark}`;

const FinanceDashboard: React.FC = () => {


    return (
        <>
            <div className="w-[1400px]">
                <HeaderFin />
            </div>
            <div className={`flex gap-70 mt-20 ${twTheme("bg-[#E6EAF5]", "bg-gray-900")}`}>
                <FinanceSidebar />
                <Outlet/>

               
            </div>
        </>
    );
};

export default FinanceDashboard;
