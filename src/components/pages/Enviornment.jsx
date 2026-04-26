import React, { useState } from "react";
import { environment_data } from "./data.js/Project_data";

const Environment = () => {
  const [search, setSearch] = useState("");

  // ✅ Filter logic
  const filteredData = environment_data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 mt-[4rem] bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold capitalize">
          Environment Variables
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Environment variables added to the team can be used by all, or a subset of your projects{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Learn more
          </span>
        </p>
      </div>

      {/* Main Container */}
      <div className="bg-white border rounded-xl shadow-sm p-4">

        {/* Tabs */}
        <div className="flex gap-6 border-b pb-2 mb-4">
          <p className="font-medium cursor-pointer text-black border-b-2 border-pink-500 pb-1">
            Projects
          </p>
          <p className="text-gray-500 cursor-pointer hover:text-black">
            Shared
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="text"
            placeholder="All Environments"
            className="p-2 border rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="All Projects"
            className="p-2 border rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="All Variables"
            className="p-2 border rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="Last Updated"
            className="p-2 border rounded-md text-sm"
          />
        </div>

        {/* Project Title */}
        <div className="mb-3">
          <p className="font-semibold text-gray-700">
            jobify-project-backend-4
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          
          {/* ✅ USE filteredData HERE */}
          {filteredData.length > 0 ? (
            filteredData.map(({ id, title, status, env, date, img }) => {
              return (
                <div
                  key={id}
                  className="border rounded-xl p-4 bg-white hover:shadow-md transition duration-200"
                >
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-lg">{title}</h2>
                    <img
                      src={img}
                      alt="env"
                      className="w-8 h-8 rounded-full border"
                    />
                  </div>

                  {/* Status */}
                  <p
                    className={`text-xs mt-2 font-medium ${
                      status === "Needs Attention"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {status}
                  </p>

                  {/* Env */}
                  <p className="text-xs text-gray-500 mt-1">{env}</p>

                  {/* Date */}
                  <p className="text-xs text-gray-400 mt-3">{date}</p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No results found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Environment;