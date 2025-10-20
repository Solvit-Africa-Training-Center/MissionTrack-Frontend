
import React from "react";
import MissionReportTable from "./MissionReportTable";
import FilterSearchBar from "../FilterSearch";

const twTheme = (light: string, dark: string) => `${light} dark:${dark}`;

const FinanceHome: React.FC = () => {


    return (


        <main className={`min-h-screen ${twTheme("", "bg-gray-900")}`}>
            <div className="">
                <FilterSearchBar />
            </div>

            <div className="">
                <MissionReportTable />
            </div>

        </main>
    );
}

export default FinanceHome;