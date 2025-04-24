import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AgentWithdrawalReq = () => {
  const axiosSecure = useAxiosSecure();
  const [requests, setRequests] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await axiosSecure.get("/withdrawal-requests");
      setRequests(res.data);
      setMessage("");
    } catch (err) {
      console.error("Error fetching withdrawal requests:", err);
      setMessage("Error fetching withdrawal requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [axiosSecure]);

  const handleAction = async (id, action) => {
    try {
      const res = await axiosSecure.patch(`/withdrawal-request/${id}`, {
        action,
      });
      setMessage(res.data.message);
      fetchRequests(); // refresh list
    } catch (err) {
      console.error("Error processing request:", err);
      setMessage("Error processing request.");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-primary mb-6">
        Agent Withdrawal Requests
      </h2>

      {message && (
        <div className="text-center mb-4 text-sm text-red-500 font-medium">
          {message}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-24">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : requests.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No withdrawal requests found.
        </div>
      ) : (
        <ul className="space-y-4">
          {requests.map((req) => (
            <li
              key={req._id}
              className="p-4 border rounded-lg shadow-sm hover:shadow transition flex flex-col md:flex-row justify-between gap-3"
            >
              <div>
                <p className="font-semibold text-gray-800">
                  Agent:{" "}
                  <span className="text-gray-700">
                    {req.agentId.name} ({req.agentId.email})
                  </span>
                </p>
                <p className="text-gray-600">
                  Amount: <span className="font-medium">{req.amount} Taka</span>
                </p>
                <p>
                  Status:{" "}
                  <span
                    className={`font-semibold capitalize ${
                      req.status === "pending"
                        ? "text-yellow-500"
                        : req.status === "approved"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {req.status}
                  </span>
                </p>
              </div>

              {req.status === "pending" && (
                <div className="flex gap-2 md:self-center">
                  <button
                    onClick={() => handleAction(req._id, "approve")}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleAction(req._id, "reject")}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AgentWithdrawalReq;
