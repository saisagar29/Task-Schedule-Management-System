import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StaffAttendance() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('/api/staff/attendance?staffId=3')
      .then(res => setRecords(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>My Attendance</h2>
      <ul>
        {records.map((rec, i) => (
          <li key={i}>
            {rec.inTime} to {rec.outTime}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StaffAttendance;
