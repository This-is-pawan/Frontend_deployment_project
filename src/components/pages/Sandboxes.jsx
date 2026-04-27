import React from "react";

const Sandboxes = () => {
  return (
    <div className="p-4 mt-[4rem] bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h1 className="text-xl font-semibold">Sandboxes</h1>

        <select className="border p-2 rounded-md text-sm">
          <option>Last 12 hours</option>
          <option>Last 24 hours</option>
          <option>Last 7 days</option>
        </select>
      </div>

      {/* Main Card */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">

        {/* Title */}
        <h2 className="text-lg font-semibold mb-2">
          Get Started with Sandboxes
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          Execute untrusted code without exposing your environment variables or databases.
        </p>

        {/* Features */}
        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>• Spin up isolated Linux environments with Node.js or Python on-demand</li>
          <li>• Pay only for active CPU time, not idle or waiting periods</li>
        </ul>

        {/* Language Buttons */}
        <div className="flex gap-3 mb-6">
          <button className="px-4 py-1.5 border rounded-md text-sm hover:bg-gray-100">
            Node.js
          </button>
          <button className="px-4 py-1.5 border rounded-md text-sm hover:bg-gray-100">
            Python
          </button>
        </div>

        {/* Code Block */}
        <div className="bg-black text-green-400 text-xs p-4 rounded-md overflow-x-auto">
<pre>{`import { Sandbox } from "@vercel/sandbox";

const sandbox = await Sandbox.create();

const cmd = await sandbox.runCommand("echo", [
  "Hello from Vercel Sandbox!"
]);

console.log(await cmd.stdout());

await sandbox.stop();`}
</pre>
        </div>

        {/* Command */}
        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-2">
            Start with one command
          </p>

          <div className="bg-gray-100 p-3 rounded-md text-sm font-mono">
            npx sandbox create --connect
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sandboxes;