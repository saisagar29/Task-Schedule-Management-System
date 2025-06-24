import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManagerDashboard() {
  const [stats, setStats] = useState({ totalStaff: 0, totalTasks: 0 });

  useEffect(() => {
    axios.get('/api/manager/dashboard?managerId=1')
      .then(res => setStats(res.data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="dashboard">
      <h2>Manager Dashboard</h2>
      <div>Total Staff: {stats.totalStaff}</div>
      <div>Total Tasks Assigned: {stats.totalTasks}</div>
    </div>
  );
}

export default ManagerDashboard;
