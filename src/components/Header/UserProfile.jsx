import React, { useState } from "react";

import avatar from '../../assets/Profile/user.png'

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 pl-2 pr-2 bg-white border rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <div className="w-10 h-10  rounded-full overflow-hidden bg-gray-200">
            <img
              src= {avatar} // Replace with the actual image URL
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Albert Jusmin</h2>
            <span className="text-sm text-blue-500">Admin</span>
          </div>
          <div className="ml-auto cursor-pointer">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
