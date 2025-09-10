import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useResponsive } from '../../hooks/useResponsive';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { isMobile } = useResponsive();

  return ( 
    <div className="app-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} isMobile={isMobile} />
      <div className={`main-content ${sidebarOpen && isMobile ? 'overlay' : ''}`}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} isMobile={isMobile} />
        <main className="content-area">
          {/* This renders the matched child route */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
