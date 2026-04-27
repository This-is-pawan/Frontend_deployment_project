import React from "react";

const Workflow = () => {
  return (
    <div className="p-4 mt-[4rem] bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h1 className="text-xl font-semibold">Production</h1>

        <div className="flex gap-3 items-center">
          <select className="border p-2 rounded-md text-sm">
            <option>Combobox Menu</option>
          </select>

          <select className="border p-2 rounded-md text-sm">
            <option>Last 12 hours</option>
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
          </select>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">

        {/* Title */}
        <h2 className="text-lg font-semibold mb-2">
          Get Started with Workflows
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          Replace hand-rolled queues and retries with durable, resumable code.
        </p>

        {/* Features */}
        <ul className="text-sm text-gray-600 space-y-2 mb-6">
          <li>• Sleep for seconds, hours, or days without using compute</li>
          <li>• Automatic retries, state persistence, and observability built in</li>
        </ul>

        {/* Code Block */}
        <div className="bg-black text-green-400 text-xs p-4 rounded-md overflow-x-auto">
<pre>{`import { sleep } from "workflow";

export async function handleUserSignup(email: string) {
  "use workflow";

  const user = await createUser(email);
  await sendWelcomeEmail(user);

  await sleep("5s");

  await sendOnboardingEmail(user);

  return {
    userId: user.id,
    status: "onboarded"
  };
}`}
</pre>
        </div>

        {/* Install Section */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold mb-2">
            Install the Workflow SDK
          </h3>

          <p className="text-sm text-gray-600 mb-2">
            Add workflows to any Next.js, Vite, Astro, or Express app
          </p>

          <div className="bg-gray-100 p-3 rounded-md text-sm font-mono">
            npm i workflow
          </div>
        </div>

        {/* Create Workflow */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold mb-2">
            Create your first workflow
          </h3>

          <p className="text-sm text-gray-600 mb-2">
            Use the skill to set up your project with a workflow
          </p>

          <div className="bg-gray-100 p-3 rounded-md text-sm font-mono">
            npx skills add vercel/workflow --skill workflow-init
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;