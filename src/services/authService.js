/**
 * 💖 Authentication Service 💖
 * Beautiful and adorable authentication service with pink vibes!
 * Handles all auth operations with love and care ✨
 */

// API Base URL - Update this with your actual API endpoint
const API_BASE_URL = 'https://your-api-url.com/api';

/**
 * 🌸 Helper function to handle API responses
 */
const handleResponse = async (response) => {
  const data = await response.json();
  
  if (!response.ok) {
    const error = (data && data.message) || response.statusText;
    throw new Error(error);
  }
  
  return data;
};

/**
 * 🎀 Helper function to get auth headers
 */
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

/**
 * 💝 Authentication Service Object
 */
const authService = {
  /**
   * 🌟 Login user with email and password
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {Promise<object>} User data and token
   */
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await handleResponse(response);
      
      // Store token and user data locally
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      
      return data;
    } catch (error) {
      console.error('💔 Login error:', error);
      throw error;
    }
  },

  /**
   * ✨ Register new user
   * @param {string} name - User's full name
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {Promise<object>} User data and token
   */
  register: async (name, email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await handleResponse(response);
      
      // Store token and user data locally
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      
      return data;
    } catch (error) {
      console.error('💔 Registration error:', error);
      throw error;
    }
  },

  /**
   * 🔐 Request password reset
   * @param {string} email - User's email
   * @returns {Promise<object>} Success message
   */
  forgotPassword: async (email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      return await handleResponse(response);
    } catch (error) {
      console.error('💔 Forgot password error:', error);
      throw error;
    }
  },

  /**
   * 🔑 Reset password with token
   * @param {string} token - Reset token from email
   * @param {string} newPassword - New password
   * @returns {Promise<object>} Success message
   */
  resetPassword: async (token, newPassword) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, newPassword })
      });

      return await handleResponse(response);
    } catch (error) {
      console.error('💔 Reset password error:', error);
      throw error;
    }
  },

  /**
   * 👋 Logout user
   * Clears local storage and optionally calls logout endpoint
   */
  logout: async () => {
    try {
      // Optional: Call logout endpoint if your API has one
      const token = localStorage.getItem('authToken');
      if (token) {
        await fetch(`${API_BASE_URL}/auth/logout`, {
          method: 'POST',
          headers: getAuthHeaders()
        });
      }
    } catch (error) {
      console.error('💔 Logout error:', error);
    } finally {
      // Always clear local storage
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    }
  },

  /**
   * 👤 Get current user data
   * @returns {object|null} User object or null if not authenticated
   */
  getCurrentUser: () => {
    try {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('💔 Get current user error:', error);
      return null;
    }
  },

  /**
   * 🎫 Get auth token
   * @returns {string|null} Auth token or null
   */
  getToken: () => {
    return localStorage.getItem('authToken');
  },

  /**
   * ✅ Check if user is authenticated
   * @returns {boolean} True if authenticated
   */
  isAuthenticated: () => {
    const token = localStorage.getItem('authToken');
    return !!token;
  },

  /**
   * 🔄 Refresh user data from server
   * @returns {Promise<object>} Updated user data
   */
  refreshUser: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: 'GET',
        headers: getAuthHeaders()
      });

      const data = await handleResponse(response);
      
      // Update stored user data
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      
      return data.user;
    } catch (error) {
      console.error('💔 Refresh user error:', error);
      throw error;
    }
  },

  /**
   * 📧 Verify email with token
   * @param {string} token - Verification token from email
   * @returns {Promise<object>} Success message
   */
  verifyEmail: async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      });

      return await handleResponse(response);
    } catch (error) {
      console.error('💔 Verify email error:', error);
      throw error;
    }
  },

  /**
   * 🔄 Change password for authenticated user
   * @param {string} currentPassword - Current password
   * @param {string} newPassword - New password
   * @returns {Promise<object>} Success message
   */
  changePassword: async (currentPassword, newPassword) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/change-password`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ currentPassword, newPassword })
      });

      return await handleResponse(response);
    } catch (error) {
      console.error('💔 Change password error:', error);
      throw error;
    }
  },

  /**
   * 👤 Update user profile
   * @param {object} userData - Updated user data
   * @returns {Promise<object>} Updated user data
   */
  updateProfile: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/profile`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(userData)
      });

      const data = await handleResponse(response);
      
      // Update stored user data
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      
      return data.user;
    } catch (error) {
      console.error('💔 Update profile error:', error);
      throw error;
    }
  }
};

// Export the adorable auth service! 💖
export default authService;