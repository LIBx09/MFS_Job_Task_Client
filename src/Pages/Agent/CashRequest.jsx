import { useContext, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";

const CashRequest = () => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState(user?.email || "");
  const [message, setMessage] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleRequest = async () => {
    try {
      await axiosSecure.post("/balance-request", { email });
      setMessage("Request submitted successfully!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error submitting request");
    }
  };

  return (
    <div className="p-4">
      <input
        type="email"
        placeholder="Agent email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
        readOnly // optional: prevent changing email
      />
      <button
        onClick={handleRequest}
        className="ml-2 px-4 py-2 bg-blue-500 text-white"
      >
        Request Balance
      </button>
      <p>{message}</p>
    </div>
  );
};

export default CashRequest;
