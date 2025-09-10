import React from 'react';
import { Menu } from 'lucide-react';
import './Header.css';
import krmulogo from '../../assets/Krmulogo.png';
const Header = ({ onMenuClick, isMobile }) => (
  <header className="header">
    {isMobile && (
      <button className="menu-btn" onClick={onMenuClick} aria-label="Toggle sidebar menu">
        <Menu size={24} />
      </button>
    )}
    <div className="header-title">
      <img src={krmulogo} alt="KRMU Logo" className="header-logo" />
      <h1> KRMU Notification Panel</h1>
    </div>
  </header>
);

export default Header;
