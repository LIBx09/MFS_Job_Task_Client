import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Registration Data:", data);
    await createUser(data.email, data.pin);
    navigate("/");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            For more features and better experience, sign up now.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label">Name</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Full Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <label className="label">Mobile Number</label>
              <input
                type="tel"
                className="input input-bordered"
                placeholder="Mobile Number"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10,11}$/,
                    message: "Invalid mobile number format",
                  },
                })}
              />
              {errors.mobile && (
                <p className="text-red-500">{errors.mobile.message}</p>
              )}

              <label className="label">Email</label>
              <input
                type="email"
                className="input input-bordered"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <label className="label">5-digit PIN</label>
              <input
                type="password"
                className="input input-bordered"
                placeholder="Enter 5-digit PIN"
                {...register("pin", {
                  required: "PIN is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "PIN must be exactly 5 digits",
                  },
                })}
              />
              {errors.pin && (
                <p className="text-red-500">{errors.pin.message}</p>
              )}

              <label className="label">Account Type</label>
              <select
                className="select select-bordered"
                {...register("userRole", {
                  required: "Account type is required",
                })}
              >
                <option value="">Select Account Type</option>
                <option value="Agent">Agent</option>
                <option value="User">User</option>
              </select>
              {errors.accountType && (
                <p className="text-red-500">{errors.accountType.message}</p>
              )}

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
