import React, { useContext, useState } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';
import { X, CheckCheck, Trash2, Bell } from 'lucide-react';
import './NotificationBar.css';

const NotificationBar = ({ isOpen, onClose }) => {
  const { notifications, unreadCount, markAsRead, markAllAsRead, deleteNotification } = useContext(NotificationContext);
  const [filter, setFilter] = useState('all');

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.read;
    return true;
  });

  const formatDate = (date) => {
    const now = new Date();
    const notifDate = new Date(date);
    const diffMs = now - notifDate;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return notifDate.toLocaleDateString();
  };

  return (
    <div className={`notification-bar ${isOpen ? 'open' : ''}`}>
      <div className="notification-header">
        <div className="notification-title">
          <Bell size={24} />
          <h3>Notifications</h3>
          {unreadCount > 0 && (
            <span className="unread-badge">{unreadCount}</span>
          )}
        </div>
        <div className="notification-actions">
          {unreadCount > 0 && (
            <button onClick={markAllAsRead} title="Mark all as read" className="action-btn">
              <CheckCheck size={18} />
            </button>
          )}
          <button onClick={onClose} className="action-btn close-btn">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="notification-filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'unread' ? 'active' : ''}`}
          onClick={() => setFilter('unread')}
        >
          Unread ({unreadCount})
        </button>
      </div>

      <div className="notification-list">
        {filteredNotifications.length === 0 ? (
          <div className="no-notifications">
            <Bell size={48} />
            <p>No notifications</p>
          </div>
        ) : (
          filteredNotifications.map((notif) => (
            <div
              key={notif._id}
              className={`notification-item ${notif.read ? 'read' : 'unread'}`}
              onClick={() => !notif.read && markAsRead(notif._id)}
            >
              {!notif.read && <div className="unread-indicator"></div>}
              <div className="notification-content">
                <h4>{notif.title}</h4>
                <p>{notif.message}</p>
                <span className="notification-time">{formatDate(notif.createdAt)}</span>
              </div>
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNotification(notif._id);
                }}
                title="Delete notification"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationBar;
