import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManagerAttendance() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get('/api/manager/attendance')
      .then(res => setAttendance(res.data))
      .catch(err => console.error('Error fetching attendance', err));
  }, []);

  return (
    <div>
      <h2>Attendance Records</h2>
      <table>
        <thead>
          <tr>
            <th>Staff Name</th>
            <th>In Time</th>
            <th>Out Time</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, idx) => (
            <tr key={idx}>
              <td>{record.userName}</td>
              <td>{record.inTime}</td>
              <td>{record.outTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManagerAttendance;
