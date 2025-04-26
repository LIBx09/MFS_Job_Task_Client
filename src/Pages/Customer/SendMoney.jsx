import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useState } from "react";

const SendMoney = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
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
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Send Money
      </h2>

      <ul className="list-decimal list-inside text-gray-700 space-y-1 mb-6">
        <li>The minimum amount for a transaction is 50 Taka.</li>
        <li>A 5 Taka fee is applied for transactions over 100 Taka.</li>
        <li>
          The recipient’s phone number and transaction amount are required for
          the transfer.
        </li>
        <li>
          Sender&apos;s balance is deducted by the transaction amount and fee,
          receiver&apos;s balance is credited, and 5 Taka is added to the
          admin’s account.
        </li>
        <li>
          The total amount of money in the system is updated automatically after
          each transaction.
        </li>
        <li>
          The user receives a notification confirming the transaction details
          once successfully completed.
        </li>
      </ul>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Sender Phone */}
        <div>
          <label
            htmlFor="senderPhone"
            className="block text-sm font-medium text-gray-700"
          >
            Sender Phone
          </label>
          <input
            id="senderPhone"
            {...register("senderPhone", {
              required: "Sender phone is required",
            })}
            placeholder="Enter Sender Phone"
            className="border-2 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.senderPhone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.senderPhone.message}
            </p>
          )}
        </div>

        {/* Sender PIN */}
        <div>
          <label
            htmlFor="senderPin"
            className="block text-sm font-medium text-gray-700"
          >
            PIN
          </label>
          <input
            id="senderPin"
            {...register("senderPin", { required: "PIN is required" })}
            type="password"
            placeholder="Enter PIN"
            className="border-2 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.senderPin && (
            <p className="text-red-500 text-sm mt-1">
              {errors.senderPin.message}
            </p>
          )}
        </div>

        {/* Receiver Phone */}
        <div>
          <label
            htmlFor="receiverPhone"
            className="block text-sm font-medium text-gray-700"
          >
            Receiver Phone
          </label>
          <input
            id="receiverPhone"
            {...register("receiverPhone", {
              required: "Receiver phone is required",
            })}
            placeholder="Enter Receiver Phone"
            className="border-2 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.receiverPhone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.receiverPhone.message}
            </p>
          )}
        </div>

        {/* Amount */}
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            id="amount"
            {...register("amount", {
              required: "Amount is required",
              min: { value: 50, message: "Amount must be at least 50 Taka" },
            })}
            type="number"
            placeholder="Enter Amount"
            className="border-2 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.amount && (
            <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {loading ? "Processing..." : "Send Money"}
        </button>
      </form>

      {trxId && (
        <div className="mt-4 text-green-600 text-center">
          ✅ Transaction ID: <strong>{trxId}</strong>
        </div>
      )}
    </div>
  );
};

export default SendMoney;
