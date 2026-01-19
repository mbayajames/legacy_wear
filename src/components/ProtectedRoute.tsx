import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ResetPasswordForm from './ResetPasswordForm';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [currentView, setCurrentView] = useState('login'); // 'login', 'register', 'reset'

  if (!isAuthenticated) {
    if (currentView === 'login') {
      return (
        <LoginForm 
          onSwitchToRegister={() => setCurrentView('register')}
          onSwitchToReset={() => setCurrentView('reset')}
        />
      );
    }
    
    if (currentView === 'register') {
      return (
        <RegisterForm 
          onSwitchToLogin={() => setCurrentView('login')}
        />
      );
    }
    
    if (currentView === 'reset') {
      return (
        <ResetPasswordForm 
          onBack={() => setCurrentView('login')}
        />
      );
    }
  }

  return children;
};

export default ProtectedRoute;