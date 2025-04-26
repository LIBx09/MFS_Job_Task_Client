import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true); // Set loading state to true
    try {
      console.log("User Data:", data);
      await login(data.email, data.pin);
      navigate(location?.state ? location.state : "/");
      toast.success("Login successful! Welcome back!");
      navigate("/");
    } catch (error) {
      toast.error("Login failed! Please check your credentials.", error);
    } finally {
      setIsLoading(false); // Set loading state to false after login attempt
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
      <div className="border p-2 mr-3">
        <h2 className="border p-2 my-3">
          Admin : ibrahim@gmail.com <br />
          Pass: 111111
        </h2>
        <h2 className="border p-2 my-3">
          Agent : agent03@gmail.com <br />
          Pass: 111111
        </h2>
        <h2 className="border p-2 my-3">
          User : ibrahim1234@gmail.com <br />
          Pass: 111111
        </h2>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label" htmlFor="email">
            Mobile Number / Email
          </label>
          <input
            id="email"
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your mobile number or email"
            {...register("email", { required: "This field is required" })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <label className="label" htmlFor="pin">
            PIN
          </label>
          <input
            id="pin"
            type="password"
            className="input input-bordered w-full"
            placeholder="Enter your PIN"
            {...register("pin", { required: "PIN is required" })}
            aria-invalid={errors.pin ? "true" : "false"}
          />
          {errors.pin && <p className="text-red-500">{errors.pin.message}</p>}

          <button
            type="submit"
            className="btn btn-neutral mt-4 w-full"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
