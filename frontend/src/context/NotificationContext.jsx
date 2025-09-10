import React, { createContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'event',
      title: 'Annual Tech Fest 2025',
      message: "Registration is now open for the Annual Tech Fest. Don't miss out!",
      timestamp: '2025-09-08T10:30:00Z',
      isRead: false,
      priority: 'high',
    },
    {
      id: 2,
      type: 'class_cancelled',
      title: 'Data Structures Class Cancelled',
      message: "Tomorrow's Data Structures class has been cancelled.",
      timestamp: '2025-09-08T09:15:00Z',
      isRead: false,
      priority: 'high',
    },
    // Add more sample notifications
  ]);

  const markAsRead = useCallback((id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  }, []);

  const getUnreadCount = useCallback(() => {
    return notifications.filter((n) => !n.isRead).length;
  }, [notifications]);

  const filterByType = useCallback(
    (type) => {
      if (type === 'all') return notifications;
      return notifications.filter((n) => n.type === type);
    },
    [notifications]
  );

  return (
    <NotificationContext.Provider
      value={{ notifications, markAsRead, getUnreadCount, filterByType }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
