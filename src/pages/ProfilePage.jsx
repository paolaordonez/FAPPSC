import { useAuth } from "../context/AuthContext";

function ProfilePage() {

  const { user } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-purple-600">

      <div className="bg-pink-100 p-10 rounded-2xl shadow-2xl border-2 border-purple-300 text-center max-w-md w-full">

        <h1 className="text-3xl font-bold text-purple-700 mb-6">
          My Profile
        </h1>

        <div className="bg-white rounded-xl p-6 shadow-md text-left">

          <p className="text-gray-700 text-lg mb-3">
            👤 <span className="font-semibold text-purple-700">Username:</span>{" "}
            {user?.username}
          </p>

          <p className="text-gray-700 text-lg">
            📧 <span className="font-semibold text-purple-700">Email:</span>{" "}
            {user?.email}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ProfilePage;
