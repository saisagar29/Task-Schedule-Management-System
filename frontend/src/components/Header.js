import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Optional

function Header() {
  return (
    <nav className="header">
      <ul>
        <li><Link to="/manager/dashboard">Manager Dashboard</Link></li>
        <li><Link to="/manager/tasks">Tasks</Link></li>
        <li><Link to="/manager/staff">Staff</Link></li>
        <li><Link to="/manager/attendance">Attendance</Link></li>
        <li><Link to="/manager/schedule">Schedule</Link></li>
        <li><Link to="/manager/reports">Reports</Link></li>
        <li><Link to="/staff/dashboard">Staff Dashboard</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
