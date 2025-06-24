import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManagerReports() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('/api/manager/reports')
      .then(res => setLogs(res.data))
      .catch(err => console.error('Error fetching activity logs', err));
  }, []);

  return (
    <div>
      <h2>Activity Logs</h2>
      <ul>
        {logs.map((log, idx) => (
          <li key={idx}>
            {log.timestamp} - {log.userName} performed {log.actionType} on {log.entityType} #{log.entityId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManagerReports;
