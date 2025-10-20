import React from "react";

// 1. Define types
interface Employee {
  name: string;
  dept: string;
}

interface Duration {
  start: string;
  end: string;
}

interface Mission {
  employee: Employee;
  position: string;
  missionPurpose: string;
  location: string;
  status: string;
  duration: Duration;
  budget: string;
}

// Props for StatusBadge
interface StatusBadgeProps {
  status: string;
}

// 2. Reusable Status Badge Component
const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let colorClasses = "";
  switch (status) {
    case "Approved":
      colorClasses = "bg-blue-100 text-blue-700 border-blue-300";
      break;
    case "In Progress":
    case "In progress":
      colorClasses = "bg-yellow-100 text-yellow-700 border-yellow-300";
      break;
    case "Completed":
      colorClasses = "bg-green-100 text-green-700 border-green-300";
      break;
    case "Pending Review":
      colorClasses = "bg-white text-orange-600 border border-orange-300";
      break;
    default:
      colorClasses = "bg-gray-100 text-gray-700 border border-gray-300";
  }

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${colorClasses}`}
    >
      {status}
    </span>
  );
};

// 3. Reusable Action Button (Ellipsis)
const ActionsButton: React.FC = () => (
  <button
    aria-label="More actions"
    className="p-2 text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h.01M12 12h.01M19 12h.01"
      />
    </svg>
  </button>
);

// 4. Sample Data
const missionData: Mission[] = [
  {
    employee: { name: "John Smith", dept: "Sales" },
    position: "Sales Manager",
    missionPurpose: "Client Technical Review",
    location: "Huye, Tumba",
    status: "Approved",
    duration: { start: "24-12-2025", end: "31-12-2025" },
    budget: "1.2 M",
  },
  {
    employee: { name: "John Smith", dept: "Sales" },
    position: "Sales Manager",
    missionPurpose: "Client Technical Review",
    location: "Huye, Tumba",
    status: "In Progress",
    duration: { start: "24-12-2025", end: "31-12-2025" },
    budget: "1.2 M",
  },
  {
    employee: { name: "John Smith", dept: "Sales" },
    position: "Sales Manager",
    missionPurpose: "Client Technical Review",
    location: "Huye, Tumba",
    status: "Completed",
    duration: { start: "24-12-2025", end: "31-12-2025" },
    budget: "1.2 M",
  },
  {
    employee: { name: "John Smith", dept: "Sales" },
    position: "Sales Manager",
    missionPurpose: "Client Technical Review",
    location: "Huye, Tumba",
    status: "Pending Review",
    duration: { start: "24-12-2025", end: "31-12-2025" },
    budget: "1.2 M",
  },
];

// 5. Main Table Component
const MissionReportTable: React.FC = () => {
  return (
  <div className=" bg-white w-[950px] p-6 rounded-lg shadow-md m-10">
      <h1 className="text-2xl font-bold mb-4">Missions</h1>

    <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl mx-auto overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Employee
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Position
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Mission Purpose
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Duration
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                Budget
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {missionData.map((data, index) => (
              <tr
                key={`${data.employee.name}-${index}`}
                className="hover:bg-gray-50 transition-colors"
              >
                {/* Employee */}
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-800">
                      {data.employee.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {data.employee.dept}
                    </span>
                  </div>
                </td>
                {/* Position */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {data.position}
                </td>
                {/* Mission Purpose */}
                <td className="px-6 py-4 text-sm text-gray-700">
                  {data.missionPurpose}
                </td>
                {/* Location */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {data.location}
                </td>
                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex justify-center">
                    <StatusBadge status={data.status} />
                  </div>
                </td>
                {/* Duration */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <div className="flex flex-col leading-snug">
                    <span>{data.duration.start}</span>
                    <span>{data.duration.end}</span>
                  </div>
                </td>
                {/* Budget */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right text-gray-800">
                  {data.budget}
                </td>
                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <ActionsButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default MissionReportTable;
