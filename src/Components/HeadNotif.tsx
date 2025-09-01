import React from "react";

const HeadNotif: React.FC = () => {
  return (
    <div className="h-[500px] w-[1300px] mt-10 flex rounded-md shadow">
      <div className="flex flex-col w-full">
        {/* Top navigation with full-width border */}
        <div className="border-b w-full">
          <div className="h-15 p-5">
            <div className="flex  gap-20">
              <a href="">Personal Information</a>
              <a href="">Password</a>
              <a href="">Notifications</a>
              <a href="">Calendar</a>
            </div>
          </div>
        </div>

        {/* Content below */}
        <div className="p-5 flex justify-between">
          <h1 className="text-xl font-semibold">Personal Information</h1>
          <button className="mt-3 px-4 py-2 rounded bg-blue-600 text-white">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadNotif;
