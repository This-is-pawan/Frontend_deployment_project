import React from "react";
import { FaServer, FaRocket, FaDatabase } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-[4rem]">

      {/* HERO SECTION */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Build. Deploy. Scale.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Manage your projects, environment variables, and deployments in one powerful platform.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">
            Get Started
          </button>
          <button className="border px-6 py-2 rounded-md hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
        {[
          { title: "Projects", value: "12+" },
          { title: "Deployments", value: "48+" },
          { title: "Active Users", value: "120+" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold">{item.value}</h2>
            <p className="text-gray-500">{item.title}</p>
          </div>
        ))}
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaServer className="text-pink-500 text-3xl mb-4" />
            <h3 className="font-semibold text-lg">Server Management</h3>
            <p className="text-sm text-gray-500 mt-2">
              Control your backend infrastructure easily and securely.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaRocket className="text-purple-500 text-3xl mb-4" />
            <h3 className="font-semibold text-lg">Fast Deployments</h3>
            <p className="text-sm text-gray-500 mt-2">
              Deploy your apps in seconds with zero downtime.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaDatabase className="text-blue-500 text-3xl mb-4" />
            <h3 className="font-semibold text-lg">Database Control</h3>
            <p className="text-sm text-gray-500 mt-2">
              Manage MongoDB and environment variables in one place.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT PREVIEW */}
      <section className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-semibold mb-6">
          Recent Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border rounded-xl p-4 hover:shadow-md transition"
            >
              <h3 className="font-semibold">Project {item}</h3>
              <p className="text-sm text-gray-500 mt-1">
                MERN Stack Application
              </p>

              <div className="flex justify-between mt-4 text-xs text-gray-400">
                <span>Updated 2 days ago</span>
                <span className="text-green-500">Live</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITY SECTION */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">
          Recent Activity
        </h2>

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          {[
            "Deployed new version of project",
            "Updated environment variable",
            "Created new project",
            "Server restarted successfully",
          ].map((activity, index) => (
            <p
              key={index}
              className="text-sm text-gray-600 border-b pb-2"
            >
              {activity}
            </p>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center py-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Your Next Project?
        </h2>
        <p className="mb-6">
          Start managing deployments like a pro today.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200">
          Create Project
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 text-center text-sm">
        <p>© 2026 Dev Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;