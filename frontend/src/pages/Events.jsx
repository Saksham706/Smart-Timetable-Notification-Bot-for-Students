import React from 'react';
import './Events.css';

// Example upcoming events data
const events = [
  {
    id: 1,
    title: 'Annual Tech Fest 2025',
    date: '2025-09-15',
    time: '09:00 AM',
    location: 'Main Auditorium',
    description: 'Three-day technical festival with competitions, workshops, and exhibitions.'
  },
  {
    id: 2,
    title: 'Career Fair',
    date: '2025-09-20',
    time: '10:00 AM',
    location: 'Sports Complex',
    description: 'Meet recruiters from top companies and explore career opportunities.'
  },
  {
    id: 3,
    title: 'Research Symposium',
    date: '2025-09-25',
    time: '02:00 PM',
    location: 'Conference Hall',
    description: 'Student research presentations and faculty discussions.'
  }
];

const Events = () => {
  return (
    <div className="events page-content">
      <h1>University Events</h1>
      <p>Stay informed about upcoming university events and activities below:</p>
      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-info">
              <h2 className="event-titles">{event.title}</h2>
              <div className="event-meta">
                <span className="event-date">{event.date}</span>
                <span className="event-time">{event.time}</span>
                <span className="event-location">{event.location}</span>
              </div>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
        {events.length === 0 && <p className="no-events">No upcoming events.</p>}
      </div>
    </div>
  );
};

export default Events;
