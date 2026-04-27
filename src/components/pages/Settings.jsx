import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General" },
    { id: "domains", label: "Domains" },
    { id: "environment", label: "Environment Variables" },
    { id: "security", label: "Security" },
    { id: "billing", label: "Billing" },
  ];

  return (
    <div className="flex mt-[4rem] min-h-screen bg-gray-50">

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 hidden md:block">
        <h2 className="font-semibold mb-4">Settings</h2>

        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-2 rounded-md cursor-pointer text-sm ${
                activeTab === tab.id
                  ? "bg-pink-100 text-pink-600"
                  : "hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">

        {/* Page Title */}
        <h1 className="text-2xl font-semibold mb-6 capitalize">
          {activeTab}
        </h1>

        {/* GENERAL */}
        {activeTab === "general" && (
          <div className="bg-white p-6 rounded-xl border space-y-4 max-w-2xl">
            <div>
              <label className="text-sm font-medium">Project Name</label>
              <input
                type="text"
                placeholder="My Project"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Framework</label>
              <input
                type="text"
                placeholder="React / Vite"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>

            <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
              Save Changes
            </button>
          </div>
        )}

        {/* DOMAINS */}
        {activeTab === "domains" && (
          <div className="bg-white p-6 rounded-xl border max-w-2xl">
            <p className="text-sm text-gray-600 mb-4">
              Add a custom domain to your project.
            </p>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="example.com"
                className="flex-1 p-2 border rounded-md"
              />
              <button className="border px-4 rounded-md">
                Add
              </button>
            </div>
          </div>
        )}

        {/* ENVIRONMENT */}
        {activeTab === "environment" && (
          <div className="bg-white p-6 rounded-xl border max-w-3xl">
            <p className="text-sm text-gray-600 mb-4">
              Manage environment variables for your project.
            </p>

            <div className="space-y-3">
              <div className="flex justify-between p-3 border rounded-md">
                <span>JWT_SECRET</span>
                <span className="text-gray-500 text-sm">Production</span>
              </div>

              <div className="flex justify-between p-3 border rounded-md">
                <span>MONGODB_URL</span>
                <span className="text-gray-500 text-sm">All</span>
              </div>
            </div>

            <button className="mt-4 border px-4 py-2 rounded-md">
              Add Variable
            </button>
          </div>
        )}

        {/* SECURITY */}
        {activeTab === "security" && (
          <div className="bg-white p-6 rounded-xl border max-w-2xl space-y-4">
            <p className="text-sm text-gray-600">
              Manage access and security settings.
            </p>

            <button className="border px-4 py-2 rounded-md">
              Enable 2FA
            </button>

            <button className="border px-4 py-2 rounded-md text-red-500">
              Logout All Devices
            </button>
          </div>
        )}

        {/* BILLING */}
        {activeTab === "billing" && (
          <div className="bg-white p-6 rounded-xl border max-w-2xl">
            <p className="text-sm text-gray-600 mb-4">
              Manage your subscription and billing.
            </p>

            <div className="flex justify-between items-center p-3 border rounded-md">
              <span>Current Plan</span>
              <span className="font-medium">Free</span>
            </div>

            <button className="mt-4 bg-black text-white px-4 py-2 rounded-md">
              Upgrade Plan
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Settings;