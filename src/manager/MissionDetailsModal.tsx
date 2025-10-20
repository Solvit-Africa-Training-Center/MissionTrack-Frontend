import React from "react";

interface MissionDetailsModalProps {
  onClose: () => void;
  mission: {
    initials: string;
    name: string;
    role: string;
    title: string;
    location: string;
    dateRange: string;
    status: string;
  };
}

const MissionDetailsModal: React.FC<MissionDetailsModalProps> = ({ onClose, mission }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative p-6 bg-white w-full max-w-2xl mx-auto rounded-xl shadow-lg space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Mission Details</h2>
          <button onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-full text-white text-lg font-bold">
            {mission.initials}
          </div>
          <div>
            <p className="text-md font-semibold text-gray-900">{mission.name}</p>
            <p className="text-sm text-gray-600">{mission.role}</p>
          </div>
        </div>

        {/* Mission Info */}
        <div className="space-y-2">
          <p><strong>Title:</strong> {mission.title}</p>
          <p><strong>Location:</strong> {mission.location}</p>
          <p><strong>Dates:</strong> {mission.dateRange}</p>
          <p><strong>Status:</strong> {mission.status}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionDetailsModal;
