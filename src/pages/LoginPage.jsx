import { useState } from 'react';
import { Heart, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Add your login logic here
    console.log('Login:', { email, password });
    // Example: navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-pink-200">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mb-4 shadow-lg">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
            <p className="text-gray-600">We missed you so much ✨</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-sm text-pink-500 hover:text-pink-600 font-semibold transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold py-3 rounded-xl hover:from-pink-500 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Sign In
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t-2 border-pink-200"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t-2 border-pink-200"></div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-pink-500 hover:text-pink-600 font-bold transition-colors"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;