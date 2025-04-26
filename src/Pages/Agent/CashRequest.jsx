import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const CashRequest = () => {
  const { user } = useContext(AuthContext);
  const [isRequesting, setIsRequesting] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleRequest = async () => {
    if (!user?.email) {
      toast.error("User email not found!");
      return;
    }

    setIsRequesting(true);
    try {
      const res = await axiosSecure.post("/balance-request", {
        email: user.email,
      });
      toast.success(res.data.message || "Request submitted successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit request");
      console.error("Request error:", error);
    } finally {
      setIsRequesting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Balance Request</h2>
        <p className="text-gray-600 text-sm">
          If agent balance is low, agent can request additional digital money
          from the admin.
        </p>
      </div>

      <div className="space-y-2">
        <label className="block text-gray-700 text-sm font-medium">
          Agent Email
        </label>
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="border border-gray-300 rounded p-2 w-full bg-gray-100"
        />
      </div>

      <button
        onClick={handleRequest}
        disabled={isRequesting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300 disabled:opacity-50"
      >
        {isRequesting ? "Submitting..." : "Request Balance"}
      </button>
    </div>
  );
};

export default CashRequest;
