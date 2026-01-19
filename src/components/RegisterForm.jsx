import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthLayout from './AuthLayout';

const RegisterForm = ({ onSwitchToLogin }) => {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    else if (name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      register(name, email, password);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <AuthLayout title="Create Account" subtitle="Join us and start your adventure">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
              placeholder="John Doe"
            />
          </div>
          {errors.name && <p className="text-pink-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
              placeholder="you@example.com"
            />
          </div>
          {errors.email && <p className="text-pink-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errors.password && <p className="text-pink-500 text-xs mt-1">{errors.password}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
              placeholder="••••••••"
            />
          </div>
          {errors.confirmPassword && <p className="text-pink-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-pink-600 hover:to-pink-700 transform transition hover:scale-105 shadow-md"
        >
          Create Account
        </button>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-pink-500 hover:text-pink-600 font-medium transition"
          >
            Sign in
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterForm;