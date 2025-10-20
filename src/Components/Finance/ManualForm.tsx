import React, { useState, ChangeEvent } from "react";
import { BsFillPencilFill } from "react-icons/bs";

// ✅ Type definitions
interface BudgetItem {
  label: string;
  value: string;
}

interface BudgetInputProps {
  label: string;
  value: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

// ✅ Reusable Input Component for Budget Categories
const BudgetInput: React.FC<BudgetInputProps> = ({
  label,
  value,
  readOnly = true,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full px-2">
      <label className="text-sm font-medium text-gray-700 mb-2">
        {label} (per day)
      </label>
      <input
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange?.(e.target.value)
        }
        readOnly={readOnly}
        className={`w-full px-4 py-3 border rounded-lg text-gray-800 transition-colors
          ${
            readOnly
              ? "bg-gray-50 border-gray-300"
              : "bg-white border-blue-400"
          } 
          focus:ring-blue-500 focus:border-blue-500`}
      />
    </div>
  );
};

// ✅ Main Component
const ManualForm: React.FC = () => {
  const [dailyBreakdown, setDailyBreakdown] = useState<BudgetItem[]>([
    { label: "Accommodation", value: "20,000 Rwf" },
    { label: "Meal", value: "20,000 Rwf" },
    { label: "Transport", value: "20,000 Rwf" },
    { label: "Others", value: "20,000 Rwf" },
  ]);

  const [notes, setNotes] = useState("");

  // 🔹 Parse Rwf strings and calculate totals
  const totalDaily = dailyBreakdown.reduce((acc, item) => {
    const numeric = parseInt(item.value.replace(/[^0-9]/g, ""), 10) || 0;
    return acc + numeric;
  }, 0);

  // Example: total for 5-day mission
  const missionTotal = totalDaily * 5;

  const handleValueChange = (index: number, newValue: string) => {
    const updated = [...dailyBreakdown];
    updated[index].value = newValue;
    setDailyBreakdown(updated);
  };

  const handleSubmit = () => {
    const data = {
      dailyBreakdown,
      totalDaily,
      missionTotal,
      notes,
    };
    console.log("Submitted data:", data);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-xl w-[1000px] mx-auto">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Manual Adjustments
      </h2>

      {/* Inputs */}
      <div className="flex mb-4 ">
        {dailyBreakdown.map((item, index) => (
          <div
            key={index}
            className=" sm:w-1/2 mb-4 sm:mb-0"
          >
            <BudgetInput
              label={item.label}
              value={item.value}
              readOnly={false}
              onChange={(value) => handleValueChange(index, value)}
            />
          </div>
        ))}
      </div>

      {/* Cost Summary */}
      <div className="p-2 bg-green-50 rounded-lg mb-3">
        <div className="flex justify-between items-center py-1">
          <span className="text-base font-medium text-gray-800">Daily:</span>
          <span className="text-base font-semibold text-gray-900">
            {totalDaily.toLocaleString()} Rwf
          </span>
        </div>
        <div className="flex justify-between items-center py-1">
          <span className="text-base font-medium text-gray-800">
            Mission total:
          </span>
          <span className="text-base font-semibold text-gray-900">
            {missionTotal.toLocaleString()} Rwf
          </span>
        </div>
      </div>

      {/* Notes & Justification */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        Notes & Justification
      </h2>
      <textarea
        placeholder="Add any notes or justification for funding allocation..."
        rows={4}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 
                   focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none mb-3"
      ></textarea>

      {/* Buttons */}
      <div className="flex justify-between space-x-4">
        <button
          type="button"
          className="flex items-center justify-center w-full py-2 border border-gray-300 text-gray-700 
                     font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
        >
          <BsFillPencilFill/>
          Save as Draft
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center justify-center w-full  bg-green-600 text-white font-semibold 
                     rounded-lg shadow-md hover:bg-green-700 transition-colors focus:outline-none 
                     focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Submit For Approval
        </button>
      </div>
    </div>
  );
};

export default ManualForm;
