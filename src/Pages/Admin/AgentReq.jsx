import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AgentReq = () => {
  const [pendingAgents, setPendingAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchPendingAgents = async () => {
      setLoading(true);
      try {
        const res = await axiosSecure.get("/admin/pending-agents");
        setPendingAgents(res.data);
      } catch (error) {
        console.error("Error fetching pending agents:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPendingAgents();
  }, [axiosSecure]);

  const handleAction = async (id, action) => {
    try {
      const res = await axiosSecure.patch(`/admin/handle-agent/${id}`, {
        action,
      });
      alert(res.data.message);
      setPendingAgents((prev) => prev.filter((agent) => agent._id !== id));
    } catch (err) {
      console.error("Failed to process agent request", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-primary mb-6">
        Pending Agent Requests
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : pendingAgents.length === 0 ? (
        <div className="text-center text-gray-500 font-medium py-10">
          No pending agent requests.
        </div>
      ) : (
        <ul className="space-y-4">
          {pendingAgents.map((agent) => (
            <li
              key={agent._id}
              className="border rounded-lg p-4 shadow hover:shadow-md transition flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
            >
              <div>
                <p className="font-medium text-gray-800">
                  Name: <span className="text-gray-700">{agent.name}</span>
                </p>
                <p className="text-gray-600">
                  Phone: <span>{agent.mobile}</span>
                </p>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0">
                <button
                  onClick={() => handleAction(agent._id, "accept")}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleAction(agent._id, "reject")}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AgentReq;
