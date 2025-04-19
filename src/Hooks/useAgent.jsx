import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAgent = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: isAgent, isLoading } = useQuery({
    queryKey: [user?.email, "isAgent"],
    queryFn: async () => {
      if (!user?.email) {
        return false;
      }
      const res = await axiosSecure.get(`/users/roles/${user?.email}`);
      return res.data?.isAgent ?? false;
    },
    enabled: !!user?.email,
  });

  return [isAgent, isLoading];
};

export default useAgent;
