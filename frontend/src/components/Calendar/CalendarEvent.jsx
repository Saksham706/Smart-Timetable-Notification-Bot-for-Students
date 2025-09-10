import React from 'react';
import './CalendarEvent.css';

const CalendarEvent = ({ event }) => {
  const typeColors = {
    event: '#10b981',
    timetable: '#3b82f6',
    class_cancelled: '#ef4444',
    teacher_replacement: '#f59e0b',
  };
  const bgColor = typeColors[event.type] || '#64748b';
  const height = event.duration ? event.duration * 1.5 : 30;

  return (
    <div
      className="calendar-event"
      style={{ backgroundColor: bgColor, height }}
      title={`${event.title} at ${event.time}`}
      tabIndex={0}
      aria-label={`${event.title} starting at ${event.time}, duration ${event.duration} minutes`}
    >
      <strong className="event-title">{event.title}</strong>
      <div className="event-time">{event.time}</div>
      {event.description && <small className="event-desc">{event.description}</small>}
    </div>
  );
};

export default CalendarEvent;
