// constants.jsx

// Notification Types
export const NOTIFICATION_TYPES = {
  EVENT: 'event',
  TIMETABLE: 'timetable',
  CLASS_CANCELLED: 'class_cancelled',
  TEACHER_REPLACEMENT: 'teacher_replacement',
};

// Notification Priority Levels
export const NOTIFICATION_PRIORITY = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
};

// Color codes for notification types (used in components)
export const NOTIFICATION_COLORS = {
  [NOTIFICATION_TYPES.EVENT]: '#10b981',           // green
  [NOTIFICATION_TYPES.TIMETABLE]: '#3b82f6',       // blue
  [NOTIFICATION_TYPES.CLASS_CANCELLED]: '#ef4444', // red
  [NOTIFICATION_TYPES.TEACHER_REPLACEMENT]: '#f59e0b', // orange
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
};
