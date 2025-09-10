import React from 'react';
import './Timetable.css';

const sampleTimetable = [
  {
    day: 'Tuesday',
    classes: [
      { time: '13:10 - 14:00', subject: 'Natural Programming Language', teacher: 'Dr. Shweta Bansal', room: 'C-Block:003' },
    ],
  },
    {
    day: 'Wednesday',
    classes: [
      { time: '09:10 - 10:00', subject: 'Machine Learning Lab', teacher: 'Dr. Monika ', room: 'C-017' },
      { time: '10:05 - 10:55', subject: 'Machine Learning Lab', teacher: 'Dr. Monika ', room: 'C-017' },
      { time: '11:00 - 11:50', subject: 'Natural Language Processing', teacher: 'Dr. Shewta Bansal ', room: 'C-003' },
      { time: '11:50 - 12:40', subject: 'Natural Language Procssing', teacher: 'Dr. Shewta Bansal ', room: 'C-003' },
      { time: '14:20 - 15:10', subject: 'Machine Learning ', teacher: 'Dr. Monika ', room: 'C-003' },
      { time: '15:10 - 16:00', subject: 'Machine Learning ', teacher: 'Dr. Monika ', room: 'C-003' },
    ],
  },
    {
    day: 'Thruday',
    classes: [
      { time: '09:10 - 10:00', subject: 'Machine Learning ', teacher: 'Dr. Monika ', room: 'C-003' },
      { time: '10:05 - 10:55', subject: 'Machine Learning', teacher: 'Dr. Monika ', room: 'C-003' },
      { time: '11:00 - 11:50', subject: 'Natural Language Processing Lab', teacher: 'Dr. Shewta Bansal ', room: 'C-017' },
      { time: '12:40 - 13:30', subject: 'Natural Language Processing Lab ', teacher: 'Dr. Shewta Bansal ', room: 'C-017' },
      { time: '13:30 - 14:20', subject: 'Machine Learning ', teacher: 'Dr. Monika ', room: 'C-Block:003' },
    ],
  },
  
];

const Timetable = () => {
  return (
    <div className="timetable page-content">
      <h1>Class Timetable</h1>
      <p>View your weekly class schedule below.</p>
      <div className="timetable-container">
        {sampleTimetable.map((dayEntry) => (
          <div key={dayEntry.day} className="timetable-day">
            <h3>{dayEntry.day}</h3>
            <ul className="class-list">
              {dayEntry.classes.map((cls, idx) => (
                <li key={idx} className="class-item">
                  <strong>{cls.subject}</strong> <span>({cls.time})</span>
                  <br />
                  <small>{cls.teacher} - Room: {cls.room}</small>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
