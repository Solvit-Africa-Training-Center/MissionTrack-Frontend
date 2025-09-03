// EmployeeDashboard.tsx
import React, { useState } from "react";
import { Home, Bell, User, Plus, Calendar, BarChart3, Settings as SettingsIcon } from "lucide-react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Profile from "../Components/Profile";
import Password from "../Components/Password";
import Notification from "../Components/Notification"

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const quickLinks = [
    { title: "Create New Request", icon: Plus, color: "bg-blue-500" },
    { title: "View Calendar", icon: Calendar, color: "bg-purple-500" },
    { title: "View Reports", icon: BarChart3, color: "bg-green-500" },
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "profile", label: "Profile", icon: User },
    { id: "new-request", label: "New Mission Request", icon: Plus },
    { id: "schedule", label: "Schedule Meeting", icon: Calendar },
    { id: "settings", label: "System Settings", icon: SettingsIcon }, // ✅ Use renamed icon
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarItems={sidebarItems}
        quickLinks={quickLinks}
      /> */}
       <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 px-6 overflow-auto">
           <Profile/> 
          <Password />
          <Notification/>
        </main>
      </div>
    </div>
  );
};

export default Settings;
