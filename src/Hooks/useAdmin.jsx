import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      if (!user?.email) {
        return false;
      }
      const res = await axiosSecure.get(`/users/roles/${user?.email}`);
      return res.data?.isAdmin ?? false;
    },
    enabled: !!user?.email,
  });

  return [isAdmin, isLoading];
};

export default useAdmin;
