import React from 'react';
import { Clock, AlertCircle, Calendar, User, BookOpen } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import './NotificationCard.css';

const NotificationCard = ({ notification, onMarkAsRead }) => {
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'event':
        return <Calendar size={20} />;
      case 'class_cancelled':
        return <AlertCircle size={20} />;
      case 'teacher_replacement':
        return <User size={20} />;
      case 'timetable':
        return <BookOpen size={20} />;
      default:
        return <Clock size={20} />;
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'event':
        return 'green';
      case 'class_cancelled':
        return 'red';
      case 'teacher_replacement':
        return 'orange';
      case 'timetable':
        return 'blue';
      default:
        return 'gray';
    }
  };

  return (
    <div
      className={`notification-card ${!notification.isRead ? 'unread' : ''} priority-${notification.priority}`}
      onClick={() => onMarkAsRead(notification.id)}
      tabIndex={0}
      role="button"
      aria-pressed={notification.isRead}
    >
      <div className={`notification-icon ${getNotificationColor(notification.type)}`}>
        {getNotificationIcon(notification.type)}
      </div>
      <div className="notification-content">
        <h4 className="notification-title">{notification.title}</h4>
        <p className="notification-message">{notification.message}</p>
        <span className="notification-time">
          {formatDistanceToNow(new Date(notification.timestamp), { addSuffix: true })}
        </span>
      </div>
      {!notification.isRead && <div className="unread-indicator" />}
    </div>
  );
};

export default NotificationCard;
