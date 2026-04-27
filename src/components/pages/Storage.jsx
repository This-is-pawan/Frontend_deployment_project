import React from "react";
import { HiCircleStack } from "react-icons/hi2";
import { FcDataConfiguration } from "react-icons/fc";
import { GiFallingBlob } from "react-icons/gi";
import { RiShareBoxLine } from "react-icons/ri";
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

        {/* Edge Config */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-white border rounded-xl hover:shadow-md transition">
          
          <div className="flex items-start gap-3">
            <FcDataConfiguration className="text-2xl" />

            <div>
              <h2 className="font-semibold text-sm sm:text-base">
                Edge Config
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Ultra-low latency reads
              </p>
            </div>
          </div>

          <button className="px-4 py-1.5 text-sm border rounded-md hover:bg-gray-100">
            Create
          </button>
        </div>

        {/* Blob */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-white border rounded-xl hover:shadow-md transition">
          
          <div className="flex items-start gap-3">
            <GiFallingBlob className="text-2xl text-purple-500" />

            <div>
              <h2 className="font-semibold text-sm sm:text-base">
                Blob
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Fast object storage
              </p>
            </div>
          </div>

          <button className="px-4 py-1.5 text-sm border rounded-md hover:bg-gray-100">
            Create
          </button>
        </div>
<p className='flex items-center text-blue-600 justify-center mt-4 text-sm capitalize cursor-pointer'>learn more <RiShareBoxLine className='ml-1'/></p>
      </div>
    </div>
  );
};

export default Storage;