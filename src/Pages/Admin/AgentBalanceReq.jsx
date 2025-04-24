import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AgentBalanceReq = () => {
  const axiosSecure = useAxiosSecure();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await axiosSecure.get("/balance-requests");
      setRequests(res.data);
      setMessage("");
    } catch (err) {
      console.error("Failed to fetch requests", err);
      setMessage("Error fetching balance requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleAction = async (id, action) => {
    try {
      const res = await axiosSecure.patch(`/balance-request/${id}`, { action });
      alert(res.data.message);
      fetchRequests(); // Refetch data
    } catch (err) {
      alert(err.response?.data?.message || "Failed to process request");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6 text-primary">
        Agent Balance Requests
      </h2>

      {message && <p className="text-red-600 text-center mb-4">{message}</p>}

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : requests.length === 0 ? (
        <div className="text-center text-gray-500 font-medium py-10">
          No balance requests available.
        </div>
      ) : (
        <ul className="space-y-6">
          {requests.map((req) => (
            <li
              key={req._id}
              className="border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="space-y-1">
                  <p>
                    <span className="font-semibold">Agent:</span>{" "}
                    {req.agentId?.name} ({req.agentId?.email})
                  </p>
                  <p>
                    <span className="font-semibold">Amount:</span> {req.amount}{" "}
                    ৳
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
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
                  <div className="flex gap-2 mt-3 md:mt-0">
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
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AgentBalanceReq;
