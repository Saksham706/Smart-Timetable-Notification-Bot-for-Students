import React from 'react';
import NotificationCard from '../Notifications/NotificationCard';
import './RecentActivity.css';

const RecentActivity = ({ notifications, onMarkAsRead }) => {
  return (
    <section className="recent-activity">
      <h2>Recent Notifications</h2>
      <div className="notification-list">
        {notifications.length === 0 ? (
          <p>No recent notifications.</p>
        ) : (
          notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onMarkAsRead={onMarkAsRead}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default RecentActivity;
