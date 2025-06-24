import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManagerSchedule() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    axios.get('/api/manager/schedule')
      .then(res => setSchedules(res.data))
      .catch(err => console.error('Error fetching schedules', err));
  }, []);

  return (
    <div>
      <h2>Work Schedules</h2>
      <ul>
        {schedules.map((s, i) => (
          <li key={i}>
            {s.userName}: {s.startTime} - {s.endTime} ({s.daysOfWork})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManagerSchedule;
