import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const Withdrawal = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [amount, setAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Please enter a valid withdrawal amount.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await axiosSecure.post("/withdrawal-request", {
        amount: Number(amount),
        email: user?.email,
      });
      toast.success(res.data.message || "Withdrawal request submitted!");
      setAmount(""); // Clear the input after successful submission
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to submit withdrawal request"
      );
      console.error("Withdrawal error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-center mb-2">
          Withdrawal Request
        </h2>
        <p className="text-gray-600 text-center text-sm">
          Agents can request to withdraw money from their balance. Admin will
          review and process the request.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
            className="w-full p-3 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

export default Withdrawal;
