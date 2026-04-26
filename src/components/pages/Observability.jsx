import React from "react";
import { FaServer, FaClock, FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

const Observability = () => {
  return (
    <div className="p-4 w-full mt-[4rem]">

      {/* Header */}
      <h1 className="text-xl font-semibold mb-4">Observability</h1>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="bg-white shadow p-3 rounded-md flex items-center gap-2">
          <FaServer className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Services</p>
            <p className="font-bold">12</p>
          </div>
        </div>

        <div className="bg-white shadow p-3 rounded-md flex items-center gap-2">
          <FaCheckCircle className="text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Healthy</p>
            <p className="font-bold">10</p>
          </div>
        </div>

        <div className="bg-white shadow p-3 rounded-md flex items-center gap-2">
          <MdError className="text-red-500" />
          <div>
            <p className="text-sm text-gray-500">Errors</p>
            <p className="font-bold">2</p>
          </div>
        </div>

        <div className="bg-white shadow p-3 rounded-md flex items-center gap-2">
          <FaClock className="text-yellow-500" />
          <div>
            <p className="text-sm text-gray-500">Avg Time</p>
            <p className="font-bold">120ms</p>
          </div>
        </div>

      </div>

      {/* Logs Section */}
      <div className="mt-6 bg-white shadow rounded-md p-3">
        <h2 className="text-md font-semibold mb-2">Recent Logs</h2>

        <ul className="text-sm text-gray-600 space-y-1">
          <li>✅ API /login success - 200</li>
          <li>❌ API /payment failed - 500</li>
          <li>⚡ DB query executed - 120ms</li>
          <li>✅ API /user success - 200</li>
        </ul>
      </div>

    </div>
  );
};

export default Observability;