import React from 'react';
import { Heart } from 'lucide-react';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mb-4 shadow-lg animate-pulse">
            <Heart className="w-8 h-8 text-white fill-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100">
          {children}
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Made with <Heart className="w-4 h-4 inline text-pink-500 fill-pink-500" /> for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;