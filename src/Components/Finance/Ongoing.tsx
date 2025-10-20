import React from "react";
import { FaCalendar, FaDollarSign } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TbBriefcase2 } from "react-icons/tb";

// ✅ Type Definitions
interface BudgetItem {
    label: string;
    spent: string;
    total: string;
}

interface MissionData {
    employee: { initials: string; name: string; title: string };
    mission: { title: string; location: string; date: string; status: string };
    progress: { current: number; total: number };
    budget: { utilization: number; spent: string; total: string };
    items: BudgetItem[];
}

// ✅ Utility: Parse string amounts like "RF 1.2 M", "RF 200k"
const parseAmount = (amount: string): number => {
    const clean = amount.replace(/[^\d.]/g, "");
    if (amount.toLowerCase().includes("m")) return parseFloat(clean) * 1_000_000;
    if (amount.toLowerCase().includes("k")) return parseFloat(clean) * 1_000;
    return parseFloat(clean);
};

// ✅ 1. Reusable Status Badge Component
const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
    let colorClasses = "";
    switch (status) {
        case "On Track":
            colorClasses = "bg-white text-green-600 border border-green-400";
            break;
        case "Over Budget":
            colorClasses = "bg-white text-red-600 border border-red-400";
            break;
        default:
            colorClasses = "bg-white text-gray-600 border border-gray-400";
    }

    return (
        <span
            className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${colorClasses}`}
        >
            {status}
        </span>
    );
};

// ✅ 2. Reusable Budget Item Card
const BudgetItemCard: React.FC<{
    label: string;
    spent: string;
    total: string;
    isOverBudget: boolean;
}> = ({ label, spent, total, isOverBudget }) => {
    const spentValue = parseAmount(spent);
    const totalValue = parseAmount(total);
    const percentage = Math.min(100, (spentValue / totalValue) * 100);

    let barColorClass = "bg-blue-600";
    if (isOverBudget && spentValue > totalValue) {
        barColorClass = "bg-red-600";
    } else if (!isOverBudget && label === "Meal" && spent === "RF 220k") {
        barColorClass = "bg-red-600";
    }

    return (
        <div className="flex flex-col border border-gray-200  rounded-lg p-1 w-full sm:w-1/2 lg:w-1/4">
            <span className="text-sm font-medium text-gray-700 mb-1">{label}</span>
            <span className="text-xs text-gray-900 font-semibold">
                {spent}
                {total}
            </span>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1.5">
                <div
                    className={`h-1.5 rounded-full ${barColorClass}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

// ✅ 3. Main Mission Report Card Component
const EmployeeMissionReportCard: React.FC<{ data: MissionData }> = ({
    data,
}) => {
    const { employee, mission, progress, budget, items } = data;
    const budgetBarColor =
        budget.utilization > 100 ? "bg-red-600" : "bg-green-600";

    // ✅ SVG Icons

    const briefcaseIcon = <TbBriefcase2 />
    const locationIcon = <IoLocationOutline />

    const calendarIcon = <FaCalendar />

    const dollarIcon = <FaDollarSign />

    return (
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 w-[500px] ">
            {/* Header */}
            <div className="flex justify-between items-center pb-4  border-b border-gray-100">
                <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full text-white font-bold text-sm mr-3">
                        {employee.initials}
                    </div>
                    <div>
                        <p className="text-md font-bold text-gray-900 leading-none">
                            {employee.name}
                        </p>
                        <p className="text-sm text-gray-600">{employee.title}</p>
                    </div>
                </div>
                <StatusBadge status={mission.status} />
            </div>

            {/* Mission Core Details */}
            <div className="flex ">
                <div className="py-4 bg-accent-10 w-[200px] space-y-3 border-b border-gray-100">
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center">
                            {briefcaseIcon}
                            <span className="font-medium text-gray-700">{mission.title}</span>
                        </div>

                    </div>

                    <div className="flex items-center text-sm">
                        {locationIcon}
                        <span className="font-medium text-gray-700">
                            {mission.location}
                        </span>
                    </div>

                    <div className="flex items-center text-sm">
                        {calendarIcon}
                        <span className="font-medium text-gray-700">{mission.date}</span>
                    </div>
                </div>

                {/* Progress & Budget */}
                <div className="py-4 space-y-4 border-b w-[350px] bg-pink-400 border-gray-100">

                    {/* Mission Progress */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-medium text-gray-700">Mission Progress</span>
                            <span className="text-gray-500  text-xs flex justify-end">
                                Day {progress.current} of {progress.total}
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                                className="bg-blue-600 h-1.5 rounded-full"
                                style={{ width: `${(progress.current / progress.total) * 100}%` }}
                            ></div>
                        </div>

                    </div>

                    {/* Budget Utilization */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center">
                                {dollarIcon}
                                <span className="font-medium text-gray-700">
                                    Budget Utilization
                                </span>
                            </div>
                            <span
                                className={`font-semibold ${budget.utilization > 100
                                    ? "text-red-600"
                                    : "text-green-600"
                                    }`}
                            >
                                {budget.utilization}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                                className={`${budgetBarColor} h-1.5 rounded-full`}
                                style={{ width: `${Math.min(100, budget.utilization)}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

            </div>


            {/* Budget Items */}
            <div className="flex gap-3 py-4 border-b border-gray-100">
                {items.map((item, index) => (
                    <BudgetItemCard
                        key={index}
                        label={item.label}
                        spent={item.spent}
                        total={item.total}
                        isOverBudget={budget.utilization > 100}
                    />
                ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4">
                <p className="text-sm font-medium text-gray-700">
                    Total Spent:{" "}
                    <span className="font-semibold text-gray-900">
                        {budget.spent}/{budget.total}
                    </span>
                </p>
                <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    View Details
                </button>
            </div>
        </div>
    );
};

// ✅ 4. Container Example
const Ongoing: React.FC = () => {
    const onTrackData: MissionData = {
        employee: { initials: "SJ", name: "Sarah Johnson", title: "Marketing Manager" },
        mission: { title: "Marketing Strategy Trip", location: "Kigali", date: "Jan 12–18, 2025", status: "On Track" },
        progress: { current: 6, total: 7 },
        budget: { utilization: 70, spent: "RF 800k", total: "RF 1.2 M" },
        items: [
            { label: "Accommodation", spent: "RF 120k", total: "/200k" },
            { label: "Transport", spent: "RF 120k", total: "/200k" },
            { label: "Meal", spent: "RF 120k", total: "/200k" },
            { label: "Others", spent: "RF 120k", total: "/200k" },
        ],
    };

    const overBudgetData: MissionData = {
        employee: { initials: "SJ", name: "Sarah Johnson", title: "Marketing Manager" },
        mission: { title: "Product Launch Mission", location: "Nairobi", date: "Jan 12–18, 2025", status: "Over Budget" },
        progress: { current: 7, total: 7 },
        budget: { utilization: 104, spent: "RF 1.25 M", total: "RF 1.2 M" },
        items: [
            { label: "Accommodation", spent: "RF 220k", total: "/200k" },
            { label: "Transport", spent: "RF 200k", total: "/200k" },
            { label: "Meal", spent: "RF 220k", total: "/200k" },
            { label: "Others", spent: "RF 210k", total: "/200k" },
        ],
    };

    return (
        <div className="flex flex-wrap justify-center gap-6 ">
            <EmployeeMissionReportCard data={onTrackData} />
            <EmployeeMissionReportCard data={overBudgetData} />
        </div>
    );
};

export default Ongoing;
