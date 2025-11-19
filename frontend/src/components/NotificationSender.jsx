import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { Send, Mail, MessageSquare, Users } from 'lucide-react';
import './NotificationSender.css';
const API_URL =  import.meta.env.VITE_API_URL 
const NotificationSender = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    targetClass: '',
    type: 'general'
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.message || !formData.targetClass) {
      toast.error('Please fill all required fields');
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authentication token found');

      const response = await fetch(`${API_URL}/api/notifications/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ ...formData, sentByName: user.name })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      toast.success(`Notification sent to ${formData.targetClass}!`);
      setFormData({ title: '', message: '', targetClass: '', type: 'general' });
    } catch (error) {
      toast.error(`Failed to send notification: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="notification-sender-container">
      <div className="sender-card">
        <div className="sender-header">
          <Mail size={32} />
          <h1>Send Notification</h1>
          <p>Send custom notifications to your class</p>
        </div>

        <form className="sender-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">
              <MessageSquare size={18} />
              Notification Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Assignment Deadline"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <MessageSquare size={18} />
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your notification message here..."
              rows={6}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="targetClass">
                <Users size={18} />
                Target Class *
              </label>
              <input
                type="text"
                id="targetClass"
                name="targetClass"
                value={formData.targetClass}
                onChange={handleChange}
                placeholder="e.g., CSE-4A"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">
                <Mail size={18} />
                Notification Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="general">General</option>
                <option value="assignment">Assignment</option>
                <option value="announcement">Announcement</option>
                <option value="exam">Exam</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <button type="submit" className="send-btn" disabled={loading}>
            <Send size={20} />
            <span>{loading ? 'Sending...' : 'Send Notification'}</span>
          </button>
        </form>

        <div className="info-box">
          <h3>📢 Info</h3>
          <ul>
            <li>Notification will be sent to all students in the selected class</li>
            <li>Students will receive it in real-time via WebSocket</li>
            <li>Notification will appear in their notification center</li>
            <li>They can mark it as read or delete it</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotificationSender;
