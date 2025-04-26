import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useState } from "react";

const CashIn = () => {
  const axiosSecure = useAxiosSecure();
  const [trxId, setTrxId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.post("/transactions/UCashIn", data);
      toast.success(response.data.message || "Cash-in successful!");
      setTrxId(response.data.trxId);
      console.log("Transaction:", response.data.transaction);
      reset();
    } catch (error) {
      console.error("Cash-in error:", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6">
      <header className="mb-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Cash In User
        </h2>
        <div className="bg-gray-100 p-4 rounded-md mt-4">
          <h3 className="text-lg font-semibold mb-2">Scenario</h3>
          <p className="text-gray-700">
            A user comes to an agent and says, &quot;I want to cash-in 1000
            Taka.&quot;
          </p>
          <h3 className="text-lg font-semibold mt-4 mb-2">Process</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>The user gives physical cash to the agent.</li>
            <li>
              The agent logs in, selects the user (by phone or ID), and enters
              the amount.
            </li>
            <li>
              The system increases the user&apos;s balance by that amount.
            </li>
            <li>The agent&apos;s system balance decreases accordingly.</li>
            <li>
              The agent must have enough balance; otherwise, the cash-in fails.
            </li>
          </ol>
        </div>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-md p-6 space-y-5"
      >
        <div>
          <label></label>
          <input
            {...register("agentId", { required: "Agent ID is required" })}
            placeholder="Agent ID"
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.agentId && (
            <p className="text-red-500 text-sm mt-1">
              {errors.agentId.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            {...register("agentPin", { required: "Agent PIN is required" })}
            placeholder="Agent PIN"
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.agentPin && (
            <p className="text-red-500 text-sm mt-1">
              {errors.agentPin.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="number"
            {...register("amount", {
              required: "Amount is required",
              min: { value: 1, message: "Amount must be at least 1" },
            })}
            placeholder="Amount (Taka)"
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.amount && (
            <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("userPhn", { required: "User phone is required" })}
            placeholder="User Phone Number"
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.userPhn && (
            <p className="text-red-500 text-sm mt-1">
              {errors.userPhn.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-6 rounded-md w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Processing..." : "Cash In"}
        </button>
      </form>

      {trxId && (
        <div className="mt-6 text-green-600 text-center">
          <p>
            ✅ <span className="font-semibold">Transaction ID:</span> {trxId}
          </p>
        </div>
      )}
    </section>
  );
};

export default CashIn;
