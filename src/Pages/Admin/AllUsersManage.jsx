import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AllUsersManage = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedUserName, setSelectedUserName] = useState("");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/users").then((res) => setUsers(res.data));
  }, [axiosSecure]);

  const handleSearch = async () => {
    if (!search) return toast.warning("Please enter a phone number to search");
    try {
      const res = await axiosSecure.get(`/admin/search-user?phone=${search}`);
      setUsers(res.data);
      if (res.data.length === 0) toast.info("No user found");
    } catch (err) {
      console.error("Search error:", err);
      toast.error("Failed to search user");
    }
  };

  // const toggleBlock = async (id, isBlocked) => {
  //   const action = isBlocked ? "unblock" : "block";
  //   try {
  //     await axiosSecure.patch(`/admin/block-user/${id}`, { action });
  //     toast.success(`User successfully ${action}ed`);
  //     handleSearch(); // Refresh list
  //   } catch (err) {
  //     console.error("Block/unblock error:", err);
  //     toast.error("Failed to update user status");
  //   }
  // };

  const fetchUserTransactions = async (userId, userName) => {
    try {
      const res = await axiosSecure.get(`/admin/user-transactions/${userId}`);
      if (!res.data.length) {
        toast.info("No transactions found for this user");
        setTransactions([]);
        return;
      }
      setTransactions(res.data);
      setSelectedUserName(userName);
    } catch (err) {
      console.error("Transaction fetch error:", err);
      toast.error("Failed to fetch transactions");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Admin User Management</h2>

      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Search
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border rounded-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 border">Name & Role</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Balance</th>

              <th className="p-3 border">Transactions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="text-center hover:bg-gray-50">
                <td className="p-2 border">
                  <div className="font-semibold">{user.name}</div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 rounded-full px-2 py-1 inline-block mt-1 capitalize">
                    {user.role}
                  </span>
                </td>
                <td className="p-2 border">{user.mobile}</td>
                <td className="p-2 border">{user.balance} ৳</td>
                {/* <td className="p-2 border capitalize">
                  {user.status === "blocked" ? "Blocked" : "Active"}
                </td> */}
                {/* <td className="p-2 border">
                  <button
                    onClick={() => toggleBlock(user._id, user.isBlocked)}
                    className={`px-3 py-1 rounded text-white transition ${
                      user.isBlocked
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    {user.isBlocked ? "Unblock" : "Block"}
                  </button>
                </td> */}
                <td className="p-2 border">
                  <button
                    title="View User Details Down Below"
                    onClick={() => fetchUserTransactions(user._id, user.name)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No users found.</p>
        )}
      </div>

      {transactions.length > 0 && (
        <div className="bg-white mt-10 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">
            Transactions of {selectedUserName}
          </h3>
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {transactions.map((tx) => (
              <div
                key={tx._id}
                className="border border-gray-200 p-3 rounded-lg"
              >
                <p>
                  <span className="font-medium">Type:</span>{" "}
                  <span className="capitalize">{tx.type}</span>
                </p>
                <p>
                  <span className="font-medium">Amount:</span> {tx.amount} ৳
                </p>
                <p>
                  <span className="font-medium">Date:</span>{" "}
                  {new Date(tx.createAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsersManage;
