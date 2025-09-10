import React from 'react';
import NotificationCard from './NotificationCard';
import './NotificationList.css';

const NotificationList = ({ notifications, onMarkAsRead }) => {
  if (!notifications || notifications.length === 0) {
    return <p className="no-notifications">No notifications found.</p>;
  }

  return (
    <div className="notification-list">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onMarkAsRead={onMarkAsRead}
        />
      ))}
    </div>
  );
};

export default NotificationList;
