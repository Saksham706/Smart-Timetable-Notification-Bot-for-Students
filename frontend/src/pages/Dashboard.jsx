import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';
import DashboardStats from '../components/Dashboard/DashboardStats';
import RecentActivity from '../components/Dashboard/RecentActivity';
import './Dashboard.css';

const Dashboard = () => {
  const { notifications, markAsRead, getUnreadCount } = useContext(NotificationContext);

  const unreadCount = getUnreadCount();

  const statsData = [
    {
      id: 1,
      label: 'Unread Notifications',
      value: unreadCount,
      color: 'blue',
      icon: 'Bell',
    },
    {
      id: 2,
      label: "Today's Classes",
      value: 5,
      color: 'green',
      icon: 'Clock',
    },
    {
      id: 3,
      label: 'Upcoming Events',
      value: 2,
      color: 'purple',
      icon: 'Calendar',
    },
  ];

  const unreadNotifications = notifications.filter(n => !n.isRead).slice(0, 5);

  return (
    <div className="dashboard page-content">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's what's happening today.</p>
      </header>

      <div className="stats-grid">
        {statsData.map(({ id, ...stat }) => (
          <DashboardStats key={id} {...stat} />
        ))}
      </div>

      <RecentActivity notifications={unreadNotifications} onMarkAsRead={markAsRead} />
    </div>
  );
};

export default Dashboard;
