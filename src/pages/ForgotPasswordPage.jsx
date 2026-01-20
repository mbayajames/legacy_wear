import { useState } from 'react';
import { ArrowLeft, Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Add your password reset logic here
    console.log('Reset password for:', email);
    setSubmitted(true);
    // Example: API call to send reset email
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-pink-200">
          {/* Back Button */}
          <button
            onClick={() => navigate('/login')}
            className="flex items-center text-pink-500 hover:text-pink-600 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Login
          </button>

          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mb-4 shadow-lg">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Forgot Password?
                </h1>
                <p className="text-gray-600">
                  No worries, we'll help you reset it! 🔐
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-5">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
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
                  <p className="text-sm text-gray-500 mt-2">
                    Enter your email and we'll send you a reset link
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold py-3 rounded-xl hover:from-pink-500 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Send Reset Link
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mb-4 shadow-lg">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Check Your Email!
                </h1>
                <p className="text-gray-600 mb-6">
                  We've sent a password reset link to{' '}
                  <strong>{email}</strong>
                </p>
                <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    Didn't receive the email? Check your spam folder or try
                    again in a few minutes.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-pink-500 hover:text-pink-600 font-semibold transition-colors"
                >
                  Try another email
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;