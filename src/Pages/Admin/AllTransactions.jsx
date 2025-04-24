import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axiosSecure.get("/transactions");
        setTransactions(res.data);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [axiosSecure]);

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
        All Transactions
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : transactions.length === 0 ? (
        <p className="text-center text-gray-500">No transactions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100 text-sm font-semibold text-gray-700">
              <tr>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Amount (৳)</th>
                <th className="p-3 border">From User</th>
                <th className="p-3 border">To User</th>
                <th className="p-3 border">Fee (৳)</th>
                <th className="p-3 border">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {transactions.map((tx) => (
                <tr key={tx._id} className="hover:bg-gray-50 transition">
                  <td className="p-3 border capitalize">{tx.type}</td>
                  <td className="p-3 border">
                    {parseFloat(tx.amount).toFixed(2)}
                  </td>
                  <td className="p-3 border">{tx.formUser || "N/A"}</td>
                  <td className="p-3 border">{tx.toUser || "N/A"}</td>
                  <td className="p-3 border">
                    {parseFloat(tx.fee || 0).toFixed(2)}
                  </td>
                  <td className="p-3 border">
                    {new Date(tx.createAt).toLocaleString("en-BD", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllTransactions;
