/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";

const BalanceView = ({ email, autoShow = false }) => {
  const [balanceData, setBalanceData] = useState(null);
  const [showBalance, setShowBalance] = useState(autoShow);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await axiosSecure.get(
          `/balance-inquiry?email=${user?.email}`
        );
        setBalanceData(res.data);
      } catch (err) {
        console.error("Failed to load balance", err);
      }
    };

    fetchBalance();
  }, [axiosSecure, email, user?.email]);

  if (!balanceData) return null;

  const blurredStyle = {
    filter: showBalance ? "none" : "blur(4px)",
    cursor: "pointer",
  };

  return (
    <div className="text-sm font-semibold">
      {balanceData.role === "admin" && (
        <div onClick={() => setShowBalance(true)}>
          <span style={blurredStyle}>
            Admin: ৳ {balanceData.income.toFixed(2)} | Total: ৳{" "}
            {balanceData.totalSystemBalance.toFixed(2)}
          </span>
        </div>
      )}

      {(balanceData.role === "user" || balanceData.role === "agent") && (
        <div onClick={() => setShowBalance(true)}>
          <span style={blurredStyle}>
            {balanceData.role === "user" ? "Balance" : "Income"}: ৳{" "}
            {balanceData.balance.toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
};

export default BalanceView;
