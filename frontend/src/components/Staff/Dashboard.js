import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StaffDashboard() {
  const [summary, setSummary] = useState({ totalTasks: 0, attendanceRecords: 0 });

  useEffect(() => {
    axios.get('/api/staff/dashboard?staffId=3')
      .then(res => setSummary(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Staff Dashboard</h2>
      <p>Assigned Tasks: {summary.totalTasks}</p>
      <p>Attendance Records: {summary.attendanceRecords}</p>
    </div>
  );
}

export default StaffDashboard;
