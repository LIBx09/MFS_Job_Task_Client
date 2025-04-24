import AgentTabs from "./AgentTabs";

const Agent = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-700 mb-6 bg-blue-600 text-white p-4 rounded-md shadow-md">
        Welcome to the Agent Panel
      </h3>
      <div className="bg-white rounded-lg shadow-md p-6">
        <AgentTabs />
      </div>
    </div>
  );
};

export default Agent;
