import React from "react";
import { BsStars } from "react-icons/bs";

interface InfoRowProps {
  label: string;
  value: string | number;
  isSeparator?: boolean;
  isTotal?: boolean;
}

const InfoRow: React.FC<InfoRowProps> = ({
  label,
  value,
  isSeparator = true,
  isTotal = false,
}) => {
  const lineClasses = isSeparator ? "border-b border-gray-200" : "";
  const labelClasses = isTotal
    ? "text-lg font-bold text-gray-900"
    : "text-base font-medium text-gray-700";
  const valueClasses = isTotal
    ? "text-lg font-bold text-gray-900"
    : "text-sm text-gray-700";

  return (
    <div className={`flex justify-between py-3 ${lineClasses}`}>
      <span className={labelClasses}>{label}:</span>
      <span className={`text-right ${valueClasses}`}>{value}</span>
    </div>
  );
};

const SuggestionCard: React.FC = () => {
  const aiIcon = <BsStars />;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {aiIcon}
          <h2 className="text-lg font-semibold text-gray-900">
            AI Suggestion
          </h2>
        </div>
        <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-medium rounded-lg">
          95% Confidence
        </span>
      </div>

      {/* Recommended Daily Rate */}
      <div className="pb-3 border-b border-gray-300">
        <InfoRow
          label="Recommended daily rate"
          value="50,000 Rwf"
          isSeparator={false}
          isTotal
        />
      </div>

      {/* Cost Breakdown */}
      <div className="pt-3 space-y-1">
        <InfoRow label="Accommodation" value="20,000 Rwf" />
        <InfoRow label="Meal" value="10,000 Rwf" />
        <InfoRow label="Transport" value="10,000 Rwf" />
        <InfoRow label="Others" value="10,000 Rwf" />
      </div>

      {/* Total Mission Cost */}
      <div className="pt-3 border-t border-gray-300 mt-3">
        <InfoRow
          label="Total Mission Cost"
          value="500,000 Rwf"
          isSeparator={false}
          isTotal
        />
      </div>

      {/* Footer */}
      <p className="mt-4 text-xs text-gray-500">
        Based on employee role, destination cost of living, and historical data.
      </p>
    </div>
  );
};

export default SuggestionCard;
