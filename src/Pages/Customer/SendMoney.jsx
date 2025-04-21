import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useState } from "react";

const SendMoney = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const [trxId, setTrxId] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axiosSecure.post("/transactions/sendMoney", data);
      toast.success("Send money successful ✅");
      setTrxId(res.data.trxId);
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Send Money</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("senderPhone")}
          placeholder="Sender Phone"
          className="border p-2 w-full"
        />
        <input
          {...register("senderPin")}
          type="password"
          placeholder="PIN"
          className="border p-2 w-full"
        />
        <input
          {...register("receiverPhone")}
          placeholder="Receiver Phone"
          className="border p-2 w-full"
        />
        <input
          {...register("amount")}
          type="number"
          placeholder="Amount"
          className="border p-2 w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2"
        >
          {loading ? "Processing..." : "Send Money"}
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

export default SendMoney;
