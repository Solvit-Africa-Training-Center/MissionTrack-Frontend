import React from "react";


import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { FaBell, FaCalendar } from "react-icons/fa";
import Header from "../HeaderDash";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";



const Notification: React.FC = () => {


  return (
    <>
      <Header />
      <div className="flex gap-6">
        <Sidebar />
        <div className="h-[400px] w-[1000px] mt-10 flex  bg-gradient-to-br  to-accent-10/50 rounded-md shadow">
          <div className="flex flex-col w-full">
            {/* Top navigation */}
            <div className="border-b border-gray-300 w-full">
            <div className="h-15 py-5">
              <div className="flex gap-15">
                <Link
                  to={"/details"}
                  className="flex items-center gap-1 border-b-2 p-2 border-transparent hover:border-blue-600 transition-all duration-300 -mb-[2px]"
                >
                  <FiUser size={20} />
                  <span>Personal Information</span>
                </Link>


                <Link to={"/password"} 
                  className="flex items-center gap-1 border-b-2 p-2 border-transparent hover:border-blue-600 transition-all duration-300 -mb-[2px]"
                >
                  <MdLockOutline size={20} />
                  <span>Password</span>
                </Link>

                <Link to={'/notifications'}
                  className="flex items-center gap-1 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 -mb-[2px]"
                >
                  <FaBell size={20} />
                  <span>Notifications</span>
                </Link>

                <a
                  href=""
                  className="flex items-center gap-1 border-b-2 p-2 border-transparent hover:border-blue-600 transition-all duration-300 -mb-[2px]"
                >
                  <FaCalendar size={20} />
                  <span>Calendar</span>
                </a>
              </div>
            </div>
          </div>

            {/* Header */}
            <div className="p-4 flex justify-between">
              <h1 className="text-xl font-semibold">Notification Preferences</h1>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Notification;
