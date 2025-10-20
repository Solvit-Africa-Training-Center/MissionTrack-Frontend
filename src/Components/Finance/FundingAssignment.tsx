import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

// 1. Reusable Status Badge Component
interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let colorClasses = '';
  switch (status) {
    case 'Pending Review':
      colorClasses = 'bg-yellow-100 text-yellow-700 border border-yellow-300';
      break;
    case 'Funds Rejected':
      colorClasses = 'bg-red-100 text-red-700 border border-red-300';
      break;
    case 'Funded':
      colorClasses = 'bg-green-100 text-green-700 border border-green-300';
      break;
    case 'Drafted':
      colorClasses = 'bg-gray-100 text-gray-700 border border-gray-300';
      break;
    default:
      colorClasses = 'bg-gray-100 text-gray-700 border border-gray-300';
  }

  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${colorClasses}`}>
      {status}
    </span>
  );
};

// 2. Reusable Mission Card Component
interface Mission {
  title: string;
  date: string;
  status: string;
}

interface MissionCardProps {
  mission: Mission;
}

const MissionCard: React.FC<MissionCardProps> = ({ mission }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Mission Details */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-800">
          Mission Title <span className="text-gray-600 font-normal">{mission.title}</span>
        </span>
        <span className="text-xs text-gray-500 mt-1">
          {mission.date}
        </span>
      </div>

      {/* Status Badge */}
      <StatusBadge status={mission.status} />
    </div>
  );
};

// 3. Main Component
interface Tab {
  name: string;
  count: number;
}

const FundingAssignment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All (9)');

  const tabs: Tab[] = [
    { name: 'All', count: 9 },
    { name: 'Pending Review', count: 2 },
    { name: 'Funded', count: 3 },
    { name: 'Funds Rejected', count: 1 },
    { name: 'Drafted Review', count: 2 },
  ];

  const missionData: Mission[] = [
    { title: 'Sarah Johnson - Rusizi', date: '12-12-2025 - 20-12-2025', status: 'Pending Review' },
    { title: 'Sarah Johnson - Rusizi', date: '12-12-2025 - 20-12-2025', status: 'Funds Rejected' },
    { title: 'Sarah Johnson - Rusizi', date: '12-12-2025 - 20-12-2025', status: 'Pending Review' },
    { title: 'Sarah Johnson - Rusizi', date: '12-12-2025 - 20-12-2025', status: 'Funded' },
    { title: 'Sarah Johnson - Rusizi', date: '12-12-2025 - 20-12-2025', status: 'Drafted' },
    { title: 'Sarah Johnson - Rusizi', date: '12-12-2025 - 20-12-2025', status: 'Funds Rejected' },
    { title: 'Sarah Johnson - Rusizi', date: '12-12-2025 - 20-12-2025', status: 'Funded' },
  ];

  
  const searchIcon = <FaSearch className="text-gray-400" />;

  return (
    <div className="w-[900px]  mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors">
          {searchIcon}
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent ml-3 text-gray-700 placeholder-gray-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-1 p-2 bg-gray-100 overflow-x-auto whitespace-nowrap">
        {tabs.map((tab) => {
          const tabLabel = `${tab.name} (${tab.count})`;
          const isActive = activeTab === tabLabel;

          return (
            <button
              key={tabLabel}
              onClick={() => setActiveTab(tabLabel)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-transparent text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.name}
              <span className={`ml-1 font-bold ${isActive ? 'text-white' : 'text-gray-500'}`}>
                ({tab.count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Mission List */}
      <div className="p-4 space-y-3">
        {missionData.map((mission, index) => (
          <MissionCard key={index} mission={mission} />
        ))}
      </div>
    </div>
  );
};

export default FundingAssignment;
