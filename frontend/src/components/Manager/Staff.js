import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManagerStaff() {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    axios.get('/api/manager/staff')
      .then(res => setStaffList(res.data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h2>Staff List</h2>
      <ul>
        {staffList.map(staff => (
          <li key={staff.userId}>
            {staff.firstName} {staff.lastName} - {staff.registrationNo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManagerStaff;
