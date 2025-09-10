import React from 'react';
import './NotificationFilter.css';

const NotificationFilter = ({ selectedType, onFilterChange }) => {
  return (
    <div className="notification-filter">
      <label htmlFor="filterSelect" className="filter-label">Filter by Type:</label>
      <select
        id="filterSelect"
        value={selectedType}
        onChange={(e) => onFilterChange(e.target.value)}
        className="filter-select"
      >
        <option value="all">All</option>
        <option value="event">Events</option>
        <option value="timetable">Class Schedules</option>
        <option value="class_cancelled">Class Cancelled</option>
        <option value="teacher_replacement">Teacher Replacement</option>
      </select>
    </div>
  );
};

export default NotificationFilter;
