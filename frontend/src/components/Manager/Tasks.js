import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManagerTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/manager/tasks?managerId=1')
      .then(res => setTasks(res.data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h2>Assigned Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.taskId}>
            {task.title} - {task.priority}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManagerTasks;
