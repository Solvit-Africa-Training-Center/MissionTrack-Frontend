import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import MissionCard from "./MissionCard";
import MissionDetailsModal from "./MissionDetailsModal";

const RequestManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMission, setSelectedMission] = useState<any | null>(null);

  const missions = [
    {
      initials: "SJ",
      name: "Sarah Johnson",
      role: "Marketing Manager",
      title: "Mission Title",
      location: "Kigali, Rwanda",
      dateRange: "Jan 12, 2025 - Jan 16, 2025",
      status: "pending" as const,
    },
    {
      initials: "SJ",
      name: "Sarah Johnson",
      role: "Marketing Manager",
      title: "Mission Title",
      location: "Nairobi, Kenya",
      dateRange: "Jan 20, 2025 - Jan 25, 2025",
      status: "rejected" as const,
    },
    {
      initials: "SJ",
      name: "Sarah Johnson",
      role: "Marketing Manager",
      title: "Mission Title",
      location: "Kampala, Uganda",
      dateRange: "Feb 1, 2025 - Feb 5, 2025",
      status: "approved" as const,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="py-2 mt-5 bg-gradient-to-l from-accent-10 rounded-md to-primaryColor-50">
        <h1 className="font-bold text-2xl text-center">Requests</h1>
      </div>

      {/* Search Box */}
      <div className="relative mb-4 mt-10 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 p-2 pl-10 rounded w-1/2 max-sm:w-10/12 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder=""
        />
        {searchTerm === "" && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 flex items-center pointer-events-none">
            <FiSearch className="mr-2" />
            <span>Search missions...</span>
          </div>
        )}
      </div>

      {/* Mission Cards */}
      <ul className="grid grid-cols-2 gap-[30px] mt-5 items-center w-full">
        {missions
          .filter((m) =>
            `${m.name} ${m.title} ${m.location}`.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((mission, idx) => (
            <MissionCard
              key={idx}
              {...mission}
              onDetails={() => setSelectedMission(mission)}
            />
          ))}
      </ul>

      {/* Modal */}
      {selectedMission && (
        <MissionDetailsModal
          onClose={() => setSelectedMission(null)}
          mission={selectedMission}
        />
      )}
    </div>
  );
};

export default RequestManager;
