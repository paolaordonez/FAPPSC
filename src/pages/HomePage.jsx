import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-purple-600 flex items-center justify-center">

      <div className="bg-pink-100 p-12 rounded-2xl shadow-2xl text-center max-w-xl">

        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
          Welcome to Notes App ✨
        </h1>

        <p className="text-gray-700 mb-8 text-sm md:text-base">
          Organize your ideas, tasks and reminders in one place.
          Create notes easily and keep everything under control.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center">

          <Link
            to="/login"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="bg-white border-2 border-pink-400 text-purple-700 py-2 rounded-md font-semibold hover:bg-pink-200 transition"
          >
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}

export default HomePage;



