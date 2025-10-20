import { Briefcase } from "lucide-react";
import React from "react";
import { BsStars } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbBriefcase2 } from "react-icons/tb";

// ✅ Type Definitions
interface Employee {
  name: string;
  title: string;
}

interface Mission {
  title: string;
  location: string;
  date: string;
  description: string;
}

interface InfoItemProps {
  icon: React.ReactNode;
  value: string;
}

interface MissionDetailCardProps {
  employee: Employee;
  mission: Mission;
}

// ✅ Reusable component for displaying key-value information (Icon + Text)
const InfoItem: React.FC<InfoItemProps> = ({ icon, value }) => {
  return (
    <div className="flex items-center text-gray-700 text-base mb-2">
      <span className="mr-3 text-gray-500">{icon}</span>
      <span>{value}</span>
    </div>
  );
};

// ✅ Main Mission Detail Card Component
const MissionDetailCard: React.FC<MissionDetailCardProps> = ({ employee, mission }) => {
  // SVG Icons
  const briefcaseIcon = <TbBriefcase2/>

  const locationIcon = <MdOutlineLocationOn/>

  const calendarIcon = <FaCalendar/>

  const aiIcon = <BsStars />;

  // ✅ Helper function to get initials from name
  const getInitials = (name: string): string => {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name[0]?.toUpperCase() || "";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto">
      {/* Header: Employee Info */}
      <div className="flex items-center pb-4 border-b border-gray-100 mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full text-white font-bold text-lg mr-3">
          {getInitials(employee.name)}
        </div>
        <div>
          <p className="text-xl font-bold text-gray-900 leading-none">
            {employee.name}
          </p>
          <p className="text-sm text-gray-600">{employee.title}</p>
        </div>
      </div>

      {/* Mission Information */}
      <div className="space-y-2 mb-4">
        <InfoItem icon={briefcaseIcon} value={mission.title} />
        <InfoItem icon={locationIcon} value={mission.location} />
        <InfoItem icon={calendarIcon} value={mission.date} />
      </div>

      {/* Description */}
      <div className="space-y-3 mb-6">
        <h3 className="text-md font-semibold text-gray-800">Description</h3>
        <p className="p-4 bg-gray-50 text-gray-700 rounded-lg text-sm leading-relaxed">
          {mission.description}
        </p>
      </div>

      {/* AI Suggestion Button */}
      <button className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        {aiIcon}
        Generate AI Suggestion
      </button>
    </div>
  );
};

// ✅ Example Usage
const MissionExample: React.FC = () => {
  const data = {
    employee: { name: "Karenzi James", title: "Marketing Manager" },
    mission: {
      title: "Mission Title",
      location: "Location",
      date: "Jan 12, 2025 - Jan 12, 2025",
      description:
        "Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin metus, volutpat lacinia arcu nibh vel ante. Proin dapibus dui eget justo tincidunt eleifend. Mauris porta elementum est. Nullam euismod quis libero sed convallis. Vestibulum fringilla felis nec turpis aliquam auctor a lectus.",
    },
  };

  return (
    <div className="p-8  min-h-screen">
      <MissionDetailCard employee={data.employee} mission={data.mission} />
    </div>
  );
};

export default MissionExample;
