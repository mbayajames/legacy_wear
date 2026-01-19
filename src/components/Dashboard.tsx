import { Heart } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';


const Dashboard = () => {
  const { user, logout } = useAuth();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Welcome back!</h1>
              <p className="text-gray-600 mt-2">Hello, {user?.name} 👋</p>
            </div>
            <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
          </div>
          
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 mb-6">
            <p className="text-gray-700">
              You're now logged in and protected by the authentication system!
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Email: {user?.email}
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-pink-600 hover:to-pink-700 transform transition hover:scale-105 shadow-md"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;