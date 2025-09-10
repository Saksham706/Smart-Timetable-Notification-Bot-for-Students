import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Calendar from './pages/Calendar';
import Timetable from './pages/Timetable';
import Events from './pages/Events';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const App = () => (
  <NotificationProvider>
    <Router>
      <Routes>
        {/* The Layout is used as the main element for all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="events" element={<Events />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  </NotificationProvider>
);

export default App;
