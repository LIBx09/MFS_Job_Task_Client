import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState();
  // console.log(user);

  useEffect(() => {
    axiosSecure.get("/users").then((res) => setUser(res.data));
  }, [axiosSecure]);

  return (
    <div>
      <h3>Home::{user?.length} </h3>
    </div>
  );
};

export default Home;
