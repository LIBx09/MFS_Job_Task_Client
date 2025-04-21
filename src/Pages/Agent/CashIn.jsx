import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const CashIn = () => {
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.post("/transactions/UCashIn", data);
      toast.success(res.data.message);
      console.log("Transaction:", res.data.transaction);
      reset(); // Reset form after successful submission
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.error("Cash in error:", error);
    }
  };

  return (
    <>
      <h3 className="text-xl font-semibold mb-4">Cash In User</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-md mx-auto"
      >
        <input
          {...register("agentId", { required: "Agent ID is required" })}
          placeholder="Agent ID"
          className="border p-2 w-full"
        />
        {errors.agentId && (
          <p className="text-red-500 text-sm">{errors.agentId.message}</p>
        )}

        <input
          type="password"
          {...register("agentPin", { required: "Agent PIN is required" })}
          placeholder="Agent PIN"
          className="border p-2 w-full"
        />
        {errors.agentPin && (
          <p className="text-red-500 text-sm">{errors.agentPin.message}</p>
        )}

        <input
          type="number"
          {...register("amount", {
            required: "Amount is required",
            min: { value: 1, message: "Amount must be at least 1" },
          })}
          placeholder="Amount"
          className="border p-2 w-full"
        />
        {errors.amount && (
          <p className="text-red-500 text-sm">{errors.amount.message}</p>
        )}

        <input
          {...register("userPhn", { required: "User phone is required" })}
          placeholder="User Phone"
          className="border p-2 w-full"
        />
        {errors.userPhn && (
          <p className="text-red-500 text-sm">{errors.userPhn.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          {isSubmitting ? "Processing..." : "Cash In"}
        </button>
      </form>
    </>
  );
};

export default CashIn;
