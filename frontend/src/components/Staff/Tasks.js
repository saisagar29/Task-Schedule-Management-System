import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StaffTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/staff/tasks?staffId=3')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>My Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.taskId}>
            {task.title} - {task.description} ({task.priority})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StaffTasks;
