import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useState } from "react";

const UserCashOut = () => {
  const axiosSecure = useAxiosSecure();
  const [trxId, setTrxId] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.post("/transactions/UCashOut", data);
      toast.success("Cash-out successful ✅");
      setTrxId(res.data.trxId);
      console.log("Transaction:", res.data.transaction);
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.error("Cash-out error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">User Cash Out</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("userId", { required: "User ID is required" })}
          placeholder="User ID"
          className="border p-2 w-full"
        />
        {errors.userId && (
          <p className="text-red-500 text-sm">{errors.userId.message}</p>
        )}

        <input
          {...register("userPin", { required: "PIN is required" })}
          type="password"
          placeholder="User PIN"
          className="border p-2 w-full"
        />
        {errors.userPin && (
          <p className="text-red-500 text-sm">{errors.userPin.message}</p>
        )}

        <input
          {...register("agentPhn", { required: "Agent Phone is required" })}
          placeholder="Agent Phone"
          className="border p-2 w-full"
        />
        {errors.agentPhn && (
          <p className="text-red-500 text-sm">{errors.agentPhn.message}</p>
        )}

        <input
          {...register("amount", {
            required: "Amount is required",
            min: { value: 1, message: "Amount must be at least 1" },
          })}
          type="number"
          placeholder="Amount"
          className="border p-2 w-full"
        />
        {errors.amount && (
          <p className="text-red-500 text-sm">{errors.amount.message}</p>
        )}

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Cash Out"}
        </button>
      </form>
      {trxId && (
        <div className="mt-4 text-green-600">
          ✅ Transaction ID: <strong>{trxId}</strong>
        </div>
      )}
    </div>
  );
};

export default UserCashOut;
