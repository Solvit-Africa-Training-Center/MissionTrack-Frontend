// EmployeeDashboard.tsx
import React, { useState } from "react";
import { Home, Bell, User, Plus, Calendar, FileText, CheckCircle, Clock, DollarSign, BarChart3 } from "lucide-react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import StatsGrid from "../Components/StatsGrid";
import RecentActivity from "../Components/RecentActivity";
import QuickLinksPanel from "../Components/QuickLinksPanel";


const EmployeeDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    { label: "Active Requests", value: "3", color: "blue" as const, icon: FileText },
    { label: "Approved Missions", value: "12", color: "green" as const, icon: CheckCircle },
    { label: "Pending Approval", value: "2", color: "yellow" as const, icon: Clock },
    { label: "Total Budget Used", value: "$8,450", color: "purple" as const, icon: DollarSign },
  ];

  const recentActivity = [
    { title: "Mission to London approved", time: "2 hours ago", icon: CheckCircle, color: "text-green-600" },
    { title: "New request submitted", time: "1 day ago", icon: FileText, color: "text-blue-600" },
    { title: "Budget review pending", time: "2 days ago", icon: Clock, color: "text-yellow-600" },
  ];

  const quickLinks = [
    { title: "Create New Request", icon: Plus, color: "bg-blue-500" },
    { title: "View Calendar", icon: Calendar, color: "bg-purple-500" },
    { title: "View Reports", icon: BarChart3, color: "bg-green-500" },
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "profile", label: "Profile", icon: User },
   
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} sidebarItems={sidebarItems} quickLinks={quickLinks} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <StatsGrid stats={stats} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RecentActivity activities={recentActivity} />
            <QuickLinksPanel quickLinks={quickLinks} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
