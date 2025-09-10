import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext  } from '../context/NotificationContext';
import NotificationFilter from '../components/Notifications/NotificationFilter';
import NotificationList from '../components/Notifications/NotificationList';
import './Notifications.css';

const Notifications = () => {
  const { notifications, markAsRead, filterByType } = useContext(NotificationContext);
  const [filterType, setFilterType] = useState('all');
  const [filteredNotifications, setFilteredNotifications] = useState([]);

  useEffect(() => {
    const filtered = filterByType(filterType);
    setFilteredNotifications(filtered);
  }, [filterType, notifications, filterByType]);

  return (
    <div className="notifications page-content">
      <header className="page-header">
        <h1>Notifications</h1>
        <p>Stay updated with university events, class schedules, changes, and more.</p>
      </header>

      <NotificationFilter selectedType={filterType} onFilterChange={setFilterType} />
      <NotificationList notifications={filteredNotifications} onMarkAsRead={markAsRead} />
    </div>
  );
};

export default Notifications;
