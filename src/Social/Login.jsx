import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("User Data:", data);
    await login(data.email, data.pin);
    navigate("/");
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label">Mobile Number / Email</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your mobile number or email"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <label className="label">PIN</label>
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Enter your PIN"
            {...register("pin", { required: "PIN is required" })}
          />
          {errors.pin && <p className="text-red-500">{errors.pin.message}</p>}

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
