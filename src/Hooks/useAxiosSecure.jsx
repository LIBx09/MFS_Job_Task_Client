import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mfs-server-mu.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  return axiosInstance;
};

export default useAxiosSecure;
