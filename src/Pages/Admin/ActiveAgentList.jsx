import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ActiveAgentList = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await axiosSecure.get("/agents"); // Update the URL as needed
        setAgents(res.data);
      } catch (error) {
        console.error("Error fetching agents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, [axiosSecure]);

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 text-center">
        Active Agents
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : agents.length === 0 ? (
        <div className="text-center text-gray-500 font-medium py-10">
          No active agents found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-gray-100 text-gray-700 text-sm md:text-base">
              <tr>
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Balance</th>
                <th className="border p-3 text-left">User ID</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {agents.map((agent) => (
                <tr
                  key={agent._id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="border p-3">{agent.name || "N/A"}</td>
                  <td className="border p-3">{agent.email}</td>
                  <td className="border p-3">{agent.balance ?? 0} ৳</td>
                  <td className="border p-3 break-all">{agent._id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ActiveAgentList;
