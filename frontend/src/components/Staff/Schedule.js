import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StaffSchedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios.get('/api/staff/schedule?staffId=3')
      .then(res => setSchedule(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>My Work Schedule</h2>
      <ul>
        {schedule.map((s, idx) => (
          <li key={idx}>
            {s.startTime} - {s.endTime} ({s.daysOfWork})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StaffSchedule;
