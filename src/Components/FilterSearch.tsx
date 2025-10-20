import React from "react";

// Type for the dropdown props
interface DropdownFilterProps {
  label: string; // placeholder/label for the first option
  options?: { value: string; label: string }[]; // array of options
  onChange?: (value: string) => void; // callback when selected
}

// Reusable Dropdown Component
const DropdownFilter: React.FC<DropdownFilterProps> = ({
  label,
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ],
  onChange,
}) => {
  return (
    <div className="relative">
      <select
        className="appearance-none bg-gray-50 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg px-4 py-3 pr-8 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
        defaultValue=""
        onChange={(e) => onChange?.(e.target.value)}
      >
        <option value="" disabled hidden>
          {label}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {/* Custom dropdown arrow icon */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

// Main Filter Bar Component
const FilterSearchBar: React.FC = () => {
  // SVG for the Search Icon
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  return (
    <div className="flex items-center space-x-3 w-full max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-md">
      {/* Search Input Field */}
      <div className="flex-1 flex items-center px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors">
        {searchIcon}
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent ml-2 text-gray-700 placeholder-gray-500 focus:outline-none"
        />
      </div>

      {/* Dropdown Filters */}
      <div className="flex space-x-3">
        <DropdownFilter label="All Status" />
        <DropdownFilter label="All Departments" />
      </div>
    </div>
  );
};

export default FilterSearchBar;
