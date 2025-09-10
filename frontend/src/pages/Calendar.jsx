import React from 'react';
import WeeklyCalendar from '../components/Calendar/WeeklyCalendar';
import './Calendar.css';

// Sample events data
const sampleEvents = [
  {
    id: 1,
    title: 'Natural Programming Language',
    date: '2025-09-09',  // Tuesday
    time: '13:10 - 14:00',
    duration: 50,
    description: 'Natural Programming concepts and fundamentals.',
    type: 'timetable',
  },
  {
    id: 2,
    title: 'Machine Learning Lab',
    date: '2025-09-10',  // Wednesday
    time: '09:10 - 10:00',
    duration: 50,
    description: 'Practical session on Machine Learning.',
    type: 'timetable',
  },
  {
    id: 3,
    title: 'Machine Learning Lab',
    date: '2025-09-10',
    time: '10:05 - 10:55',
    duration: 50,
    description: 'Continuation of the Machine Learning Lab.',
    type: 'timetable',
  },
  {
    id: 4,
    title: 'Natural Language Processing',
    date: '2025-09-10',
    time: '11:00 - 11:50',
    duration: 50,
    description: 'Introduction to NLP concepts.',
    type: 'timetable',
  },
  {
    id: 5,
    title: 'Natural Language Processing',
    date: '2025-09-10',
    time: '11:50 - 12:40',
    duration: 50,
    description: 'NLP practical examples and case studies.',
    type: 'timetable',
  },
  {
    id: 6,
    title: 'Machine Learning',
    date: '2025-09-10',
    time: '14:20 - 15:10',
    duration: 50,
    description: 'Theory and algorithms of Machine Learning.',
    type: 'timetable',
  },
  {
    id: 7,
    title: 'Machine Learning',
    date: '2025-09-10',
    time: '15:10 - 16:00',
    duration: 50,
    description: 'Advanced topics in Machine Learning.',
    type: 'timetable',
  },
   {
    id: 8,
    title: 'Machine Learning',
    date: '2025-09-11',
    time: '09:10 - 10:00',
    duration: 50,
    description: 'Lecture on Machine Learning',
    type: 'timetable',
  },
  {
    id: 9,
    title: 'Machine Learning',
    date: '2025-09-11',
    time: '10:05 - 10:55',
    duration: 50,
    description: 'Continuation of Machine Learning',
    type: 'timetable',
  },
  {
    id: 10,
    title: 'Natural Language Processing Lab',
    date: '2025-09-11',
    time: '11:00 - 11:50',
    duration: 50,
    description: 'Hands-on lab for NLP',
    type: 'timetable',
  },
  {
    id: 11,
    title: 'Natural Language Processing Lab',
    date: '2025-09-11',
    time: '12:40 - 13:30',
    duration: 50,
    description: 'Continuation of NLP Lab',
    type: 'timetable',
  },
  {
    id: 12,
    title: 'Machine Learning',
    date: '2025-09-11',
    time: '13:30 - 14:20',
    duration: 50,
    description: 'Advanced Machine Learning topics',
    type: 'timetable',
  },
];

const Calendar = () => {
  return (
    <div className="calendar page-content">
      <h1>Weekly Calendar</h1>
      <p>View your schedule and upcoming events week by week.</p>
      <WeeklyCalendar events={sampleEvents} />
    </div>
  );
};

export default Calendar;
