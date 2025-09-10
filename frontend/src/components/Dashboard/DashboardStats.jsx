import React from 'react';
import { Bell, Clock, Calendar, Users } from 'lucide-react';
import './DashboardStats.css';

const iconMap = { Bell, Clock, Calendar, Users };

const DashboardStats = ({ label, value, color, icon }) => {
  const IconComponent = iconMap[icon] || Bell;

  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-icon">
        <IconComponent size={24} />
      </div>
      <div className="stat-content">
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default DashboardStats;
