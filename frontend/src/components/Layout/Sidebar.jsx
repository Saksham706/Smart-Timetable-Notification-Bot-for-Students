import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Bell, Calendar, Clock, Users, User, Settings, X } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose, isMobile }) => {
  const menuItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/notifications', icon: Bell, label: 'Notifications' },
    { path: '/calendar', icon: Calendar, label: 'Calendar' },
    { path: '/timetable', icon: Clock, label: 'Timetable' },
    { path: '/events', icon: Users, label: 'Events' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {isMobile && isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'open' : ''} ${isMobile ? 'mobile' : 'desktop'}`}>
        <div className="sidebar-header">
          {isMobile && (
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>
          )}
        </div>
        <nav className="sidebar-nav">
          <ul>
            {menuItems.map(({ path, icon: Icon, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={isMobile ? onClose : undefined}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
