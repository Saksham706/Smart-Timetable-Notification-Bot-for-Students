import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { startOfWeek, addDays, addWeeks, subWeeks, format } from 'date-fns';
import CalendarEvent from './CalendarEvent';
import './WeeklyCalendar.css';

const WeeklyCalendar = ({ events = [] }) => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const weekStart = startOfWeek(currentWeek, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const navigateWeek = (direction) => {
    setCurrentWeek(direction === 'next' ? addWeeks(currentWeek, 1) : subWeeks(currentWeek, 1));
  };

  const eventsForDay = (date) =>
    events.filter((event) => format(new Date(event.date), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));

  return (
    <div className="weekly-calendar">
      <div className="calendar-header">
        <button className="nav-btn" onClick={() => navigateWeek('prev')}><ChevronLeft size={20} /></button>
        <h3 className="week-title">
          {format(weekStart, 'MMM dd')} - {format(addDays(weekStart, 6), 'MMM dd, yyyy')}
        </h3>
        <button className="nav-btn" onClick={() => navigateWeek('next')}><ChevronRight size={20} /></button>
      </div>
      <div className="calendar-grid">
        {weekDays.map((day, idx) => (
          <div key={idx} className="day-column">
            <div className="day-header">
              <div className="day-name">{format(day, 'EEE')}</div>
              <div className="day-date">{format(day, 'dd')}</div>
            </div>
            <div className="day-events">
              {eventsForDay(day).map((event) => (
                <CalendarEvent key={event.id} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
