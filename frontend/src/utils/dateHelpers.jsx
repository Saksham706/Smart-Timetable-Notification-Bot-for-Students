// dateHelpers.jsx
import { format, startOfWeek, addDays } from 'date-fns';

/**
 * Returns the start of the week for a given date (Monday as first day)
 * @param {Date} date 
 * @returns {Date} start of week date
 */
export const getStartOfWeek = (date) => {
  return startOfWeek(date, { weekStartsOn: 1 }); // Monday as first day of week
};

/**
 * Gets all days in the week based on a start date
 * @param {Date} startOfWeekDate 
 * @returns {Date[]} array of dates (7 days)
 */
export const getWeekDays = (startOfWeekDate) => {
  return Array.from({ length: 7 }, (_, i) => addDays(startOfWeekDate, i));
};

/**
 * Format a date to a string like 'Mon 14 Sep' or customizable format
 * @param {Date} date 
 * @param {string} dateFormat optional date-fns format string
 * @returns {string} formatted date string
 */
export const formatDate = (date, dateFormat = 'EEE dd MMM') => {
  return format(date, dateFormat);
};

/**
 * Format time string from "HH:mm" or Date to 12-hour format with am/pm
 * @param {string|Date} time 
 * @returns {string} formatted time string like '2:00 PM'
 */
export const formatTimeTo12Hour = (time) => {
  let dateObj;
  if (typeof time === 'string') {
    // Parse "HH:mm" string to Date object with today’s date
    const [hours, minutes] = time.split(':').map(Number);
    dateObj = new Date();
    dateObj.setHours(hours);
    dateObj.setMinutes(minutes);
    dateObj.setSeconds(0);
    dateObj.setMilliseconds(0);
  } else {
    dateObj = time;
  }
  return format(dateObj, 'h:mm a');
};
