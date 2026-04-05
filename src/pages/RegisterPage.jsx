import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/notes");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-200 to-purple-400">

      <div className="bg-pink-100 max-w-md w-full p-10 rounded-2xl shadow-2xl border-2 border-purple-300">

        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Register
        </h1>

        {registerErrors.map((error, i) => (
          <div className="bg-pink-500 p-2 text-white rounded-md text-center my-2" key={i}>
            {error}
          </div>
        ))}

        <form onSubmit={onSubmit}>

          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-white border-2 border-pink-300 text-pink-400 px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Username"
          />

          {errors.username && (
            <p className="text-pink-600 text-sm">Username is required</p>
          )}

          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-white border-2 border-pink-300 text-pink-400 px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Email"
          />

          {errors.email && (
            <p className="text-pink-600 text-sm">Email is required</p>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-white border-2 border-pink-300 text-pink-400 px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Password"
          />

          {errors.password && (
            <p className="text-pink-600 text-sm">Password is required</p>
          )}

          <button
            className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
            type="submit"
          >
            Register
          </button>

        </form>

        <p className="flex gap-x-2 justify-center mt-6 text-purple-700">
          Already have an account?
          <Link to="/login" className="text-pink-600 font-semibold hover:underline">
            Sign in
          </Link>
        </p>

      </div>

    </div>
  );
}

export default RegisterPage;
