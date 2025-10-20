import React from "react";
import MissionExample from "../Components/Finance/MissionExample";
import SuggestionCard from "../Components/Finance/SuggestionCard";
import ManualForm from "../Components/Finance/ManualForm";



const twTheme = (light: string, dark: string) => `${light} dark:${dark}`;
const AISuggest: React.FC = () => {
    return (

        <main className={`min-h-screen ${twTheme("", "bg-gray-900")}`}>
            <div className="flex">
                <MissionExample />
                <SuggestionCard />
            </div>
            <div className="mt-20">
                <ManualForm />
            </div>
        </main>
    )
};
export default AISuggest;