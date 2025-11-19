import axios from 'axios';

const API_URL =  import.meta.env.VITE_API_URL

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  
  // ✅ Debug: Log token
  console.log('Token from localStorage:', token ? 'exists' : 'NOT FOUND');
  
  if (!token) {
    console.warn('No token found in localStorage');
    return { headers: {} };
  }

  return {
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
};

const notificationService = {
  getNotifications: async (filters = {}) => {
    try {
      const params = new URLSearchParams(filters);
      const authHeader = getAuthHeader();
      
      console.log('Calling notifications with headers:', authHeader.headers);
      
      const response = await axios.get(`${API_URL}/api/notifications?${params}`, authHeader);
      return response.data;
    } catch (error) {
      console.error('Error fetching notifications:', error);
      throw error;
    }
  },

  markAsRead: async (id) => {
    try {
      const response = await axios.put(`${API_URL}/api/notifications/${id}/read`, {}, getAuthHeader());
      return response.data;
    } catch (error) {
      console.error('Error marking as read:', error);
      throw error;
    }
  },

  markAllAsRead: async () => {
    try {
      const response = await axios.put(`${API_URL}/api/notifications/read-all`, {}, getAuthHeader());
      return response.data;
    } catch (error) {
      console.error('Error marking all as read:', error);
      throw error;
    }
  },

  deleteNotification: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/api/notifications/${id}`, getAuthHeader());
      return response.data;
    } catch (error) {
      console.error('Error deleting notification:', error);
      throw error;
    }
  },

  clearReadNotifications: async () => {
    try {
      const response = await axios.delete(`${API_URL}/api/notifications/clear-read`, getAuthHeader());
      return response.data;
    } catch (error) {
      console.error('Error clearing read notifications:', error);
      throw error;
    }
  }
};

export default notificationService;
