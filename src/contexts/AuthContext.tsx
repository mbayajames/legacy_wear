import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import type { AuthContextType } from './AuthContext';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ email: string; name: string; id: string } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = (email: string, _password: string) => {
    // Replace with actual API call
    const userData = {
      email,
      name: email.split('@')[0],
      id: Math.random().toString(36).substr(2, 9)
    };
    setUser(userData);
    setIsAuthenticated(true);

    // Store in localStorage (optional)
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true');
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const register = (name: string, email: string, _password: string) => {
    // Replace with actual API call
    const userData = {
      email,
      name,
      id: Math.random().toString(36).substr(2, 9)
    };
    setUser(userData);
    setIsAuthenticated(true);

    // Store in localStorage (optional)
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);

    // Clear localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
  };

  const resetPassword = (email: string): Promise<void> => {
    // Replace with actual API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('Password reset email sent to:', email);
        resolve();
      }, 1000);
    });
  };

  // Check if user is already logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedAuth = localStorage.getItem('isAuthenticated');

    if (storedUser && storedAuth === 'true') {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated,
    login,
    register,
    logout,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};