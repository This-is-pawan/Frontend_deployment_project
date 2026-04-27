import React from "react";
import { HiCircleStack } from "react-icons/hi2";
import { FcDataConfiguration } from "react-icons/fc";
import { GiFallingBlob } from "react-icons/gi";
import { RiShareBoxLine } from "react-icons/ri";

const storageData = [
  {
    id: 1,
    title: "Edge Config",
    description: "Ultra-low latency reads",
    icon: <FcDataConfiguration className="text-2xl" />,
  },
  {
    id: 2,
    title: "Blob",
    description: "Fast object storage",
    icon: <GiFallingBlob className="text-2xl text-purple-500" />,
  },
];

const Storage = () => {
  return (
    <div className="p-4 mt-[6rem] bg-gray-50 min-h-screen">

      {/* Top Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 flex items-center justify-center bg-white border rounded-xl shadow-md">
          <HiCircleStack className="text-4xl text-gray-700" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-center mt-4 text-xl font-semibold capitalize">
        Create a database
      </h1>

      <p className="text-center mt-2 text-gray-500 text-sm max-w-md mx-auto">
        Create databases and storage that you can connect to your team's projects.
      </p>

      {/* Cards */}
      <div className="mt-8 max-w-3xl mx-auto space-y-4">

        {storageData.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-white border rounded-xl hover:shadow-md transition"
          >
            {/* Left */}
            <div className="flex items-start gap-3">
              {icon}
              <div>
                <h2 className="font-semibold text-sm sm:text-base">
                  {title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  {description}
                </p>
              </div>
            </div>

            {/* Right */}
            <button className="px-4 py-1.5 text-sm border rounded-md hover:bg-gray-100">
              Create
            </button>
          </div>
        ))}

        {/* Learn More */}
        <p className="flex items-center justify-center mt-4 text-sm text-blue-600 capitalize cursor-pointer hover:underline">
          Learn more <RiShareBoxLine className="ml-1" />
        </p>
      </div>
    </div>
  );
};

export default Storage;