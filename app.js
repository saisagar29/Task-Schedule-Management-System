// Application Data and State
const AppData = {
  stores: [
    {"store_id": 1, "store_name": "XDRSS Tokyo", "location": "Tokyo, Japan"},
    {"store_id": 2, "store_name": "XDRSS Osaka", "location": "Osaka, Japan"}
  ],
  users: [
    {"user_id": 1, "store_id": 1, "first_name": "Saisagar", "last_name": "Sahukar", "gender": "M", "address": "Tokyo, Chiyoda", "phone": "08012345678", "registration_no": "BBTK000001", "password": "BBTKpw000001", "role": "manager"},
    {"user_id": 2, "store_id": 1, "first_name": "Sweta", "last_name": "Snigdha", "gender": "F", "address": "Tokyo, Shibuya", "phone": "08023456789", "registration_no": "BBTK000002", "password": "BBTKpw000002", "role": "manager"},
    {"user_id": 3, "store_id": 1, "first_name": "Ram", "last_name": "Sahu", "gender": "M", "address": "Tokyo, Minato", "phone": "08034567890", "registration_no": "BBTK000003", "password": "BBTKpw000003", "role": "staff"},
    {"user_id": 4, "store_id": 1, "first_name": "Ankit", "last_name": "Raj", "gender": "F", "address": "Tokyo, Setagaya", "phone": "08045678901", "registration_no": "BBTK000004", "password": "BBTKpw000004", "role": "staff"},
    {"user_id": 5, "store_id": 1, "first_name": "Ayshka", "last_name": "Singh", "gender": "F", "address": "Tokyo, Meguro", "phone": "08056789012", "registration_no": "BBTK000005", "password": "BBTKpw000005", "role": "staff"},
{"user_id": 6, "store_id": 1, "first_name": "Subham", "last_name": "Sharma", "gender": "M", "address": "Tokyo, Taito", "phone": "08067890123", "registration_no": "BBTK000006", "password": "BBTKpw000006", "role": "staff"},
    {"user_id": 7, "store_id": 1, "first_name": "Divya", "last_name": "Prakash", "gender": "F", "address": "Tokyo, Shibuya", "phone": "08023456781", "registration_no": "BBTK000007", "password": "BBTKpw000007", "role": "staff"},
    {"user_id": 8, "store_id": 1, "first_name": "Bhojraj", "last_name": "Adhikari", "gender": "M", "address": "Tokyo, Minato", "phone": "08023456782", "registration_no": "BBTK000008", "password": "BBTKpw000008", "role": "staff"}  ],
  tasks: [
    {"task_id": 1, "title": "Stock Check", "description": "Check inventory in aisle A", "date": "2025-07-02", "time": "10:00", "duration": 60, "recurrence": "Weekly", "priority": "Medium", "assigned_to": 3, "assigned_by": 1, "assignment_type": "manual", "status": "pending"},
    {"task_id": 2, "title": "Customer Survey", "description": "Ask feedback from customers", "date": "2025-07-02", "time": "15:00", "duration": 30, "recurrence": "Daily", "priority": "Low", "assigned_to": 4, "assigned_by": 2, "assignment_type": "auto", "status": "pending"},
    {"task_id": 3, "title": "Restock Shelves", "description": "Restock all empty shelves", "date": "2025-07-02", "time": "09:00", "duration": 90, "recurrence": "None", "priority": "High", "assigned_to": 5, "assigned_by": 1, "assignment_type": "manual", "status": "pending"}
  ],
  workShifts: [
    {"shift_id": 1, "user_id": 3, "start_time": "09:00", "end_time": "17:00", "days_of_work": "Mon,Tue,Wed"},
    {"shift_id": 2, "user_id": 4, "start_time": "12:00", "end_time": "20:00", "days_of_work": "Thu,Fri,Sat"},
    {"shift_id": 3, "user_id": 5, "start_time": "08:00", "end_time": "16:00", "days_of_work": "Mon,Wed,Fri"},
    {"shift_id": 4, "user_id": 6, "start_time": "10:00", "end_time": "18:00", "days_of_work": "Tue,Thu,Sat"}
  ],
  attendance: [
    {"attendance_id": 1, "user_id": 3, "in_time": "2025-06-24 09:01:00", "out_time": "2025-06-24 17:02:00", "marked_by": 1},
    {"attendance_id": 2, "user_id": 4, "in_time": "2025-06-24 12:05:00", "out_time": "2025-06-24 20:00:00", "marked_by": 2},
    {"attendance_id": 3, "user_id": 5, "in_time": "2025-06-24 08:00:00", "out_time": "2025-06-24 16:00:00", "marked_by": 1},
    {"attendance_id": 4, "user_id": 6, "in_time": "2025-06-24 10:10:00", "out_time": "2025-06-24 18:15:00", "marked_by": 2}
  ],
  translations: {
    "en": {
      "welcome": "Welcome",
      "login": "Login",
      "dashboard": "Dashboard",
      "tasks": "Tasks",
      "staff": "Staff",
      "attendance": "Attendance",
      "schedule": "Schedule",
      "logout": "Logout",
      "register_staff": "Register Staff",
      "create_task": "Create Task",
      "view_reports": "View Reports",
      "my_tasks": "My Tasks",
      "check_in": "Check In",
      "check_out": "Check Out",
      "profile": "Profile",
      "settings": "Settings",
      "reports": "Reports"
    },
    "ja": {
      "welcome": "ようこそ",
      "login": "ログイン",
      "dashboard": "ダッシュボード",
      "tasks": "タスク",
      "staff": "スタッフ",
      "attendance": "出席",
      "schedule": "スケジュール",
      "logout": "ログアウト",
      "register_staff": "スタッフ登録",
      "create_task": "タスク作成",
      "view_reports": "レポート表示",
      "my_tasks": "私のタスク",
      "check_in": "チェックイン",
      "check_out": "チェックアウト",
      "profile": "プロファイル",
      "settings": "設定",
      "reports": "レポート"
    }
  }
};

// Application State
const AppState = {
  currentUser: null,
  currentLanguage: 'en',
  currentView: 'welcome',
  attendanceToday: []
};

// Utility Functions
function showNotification(message, type = 'info') {
  const notification = document.getElementById('notification');
  const messageEl = document.getElementById('notificationMessage');
  
  messageEl.textContent = message;
  notification.className = `notification ${type}`;
  notification.classList.remove('hidden');
  
  setTimeout(() => {
    notification.classList.add('hidden');
  }, 3000);
}

function formatTime(timeString) {
  const time = new Date(`2000-01-01T${timeString}`);
  return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

function getUserById(userId) {
  return AppData.users.find(user => user.user_id === userId);
}

function getTasksByUser(userId) {
  return AppData.tasks.filter(task => task.assigned_to === userId);
}

function getStaffUsers() {
  return AppData.users.filter(user => user.role === 'staff');
}

function getTodayAttendance() {
  const today = new Date().toISOString().split('T')[0];
  return AppData.attendance.filter(att => att.in_time.startsWith(today));
}

// Authentication Functions
function login(regNumber, password) {
  // Clear any existing form data and normalize inputs
  const cleanRegNumber = regNumber.trim();
  const cleanPassword = password.trim();
  
  console.log('Attempting login with:', cleanRegNumber, cleanPassword);
  
  const user = AppData.users.find(u => 
    u.registration_no === cleanRegNumber && u.password === cleanPassword
  );
  
  if (user) {
    AppState.currentUser = user;
    showWelcomeScreen(false);
    
    // Clear form fields
    document.getElementById('regNumber').value = '';
    document.getElementById('password').value = '';
    
    if (user.role === 'manager') {
      showManagerDashboard();
    } else {
      showStaffDashboard();
    }
    
    showNotification(`Welcome, ${user.first_name}!`, 'success');
    return true;
  }
  
  showNotification('Invalid registration number or password', 'error');
  return false;
}

function logout() {
  AppState.currentUser = null;
  showWelcomeScreen(true);
  showNotification('Logged out successfully', 'info');
}

// Screen Management
function showWelcomeScreen(show = true) {
  document.getElementById('welcomeScreen').classList.toggle('hidden', !show);
  document.getElementById('managerDashboard').classList.toggle('hidden', show);
  document.getElementById('staffDashboard').classList.toggle('hidden', show);
}

function showManagerDashboard() {
  document.getElementById('managerDashboard').classList.remove('hidden');
  document.getElementById('staffDashboard').classList.add('hidden');
  
  // Update user info
  const user = AppState.currentUser;
  document.getElementById('managerName').textContent = `${user.first_name} ${user.last_name}`;
  document.getElementById('managerRole').textContent = user.role.toUpperCase();
  
  // Show overview section by default
  showManagerSection('manager-overview');
  updateManagerStats();
  updateManagerOverview();
  populateTaskAssignDropdown();
}

function showStaffDashboard() {
  document.getElementById('staffDashboard').classList.remove('hidden');
  document.getElementById('managerDashboard').classList.add('hidden');
  
  // Update user info
  const user = AppState.currentUser;
  document.getElementById('staffName').textContent = `${user.first_name} ${user.last_name}`;
  document.getElementById('staffRole').textContent = user.role.toUpperCase();
  
  // Show overview section by default
  showStaffSection('staff-overview');
  updateStaffStats();
  updateStaffOverview();
  updateStaffProfile();
}

function showManagerSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('#managerDashboard .content-section').forEach(section => {
    section.classList.add('hidden');
  });
  
  // Show selected section
  document.getElementById(sectionId).classList.remove('hidden');
  
  // Update navigation
  document.querySelectorAll('#managerDashboard .nav-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
  
  // Update content based on section
  switch(sectionId) {
    case 'manager-tasks':
      updateManagerTasks();
      break;
    case 'manager-staff':
      updateManagerStaff();
      break;
    case 'manager-attendance':
      updateManagerAttendance();
      break;
    case 'manager-schedule':
      updateManagerSchedule();
      break;
    case 'manager-reports':
      updateManagerReports();
      break;
  }
  
  // Update content title
  const titles = {
    'manager-overview': 'Dashboard',
    'manager-tasks': 'Tasks Management',
    'manager-staff': 'Staff Management',
    'manager-attendance': 'Attendance Tracking',
    'manager-schedule': 'Schedule Management',
    'manager-reports': 'Reports & Analytics'
  };
  document.getElementById('contentTitle').textContent = titles[sectionId] || 'Dashboard';
}

function showStaffSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('#staffDashboard .content-section').forEach(section => {
    section.classList.add('hidden');
  });
  
  // Show selected section
  document.getElementById(sectionId).classList.remove('hidden');
  
  // Update navigation
  document.querySelectorAll('#staffDashboard .nav-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
  
  // Update content based on section
  switch(sectionId) {
    case 'staff-tasks':
      updateStaffTasks();
      break;
    case 'staff-attendance':
      updateStaffAttendance();
      break;
    case 'staff-schedule':
      updateStaffSchedule();
      break;
  }
  
  // Update content title
  const titles = {
    'staff-overview': 'Dashboard',
    'staff-tasks': 'My Tasks',
    'staff-attendance': 'Attendance',
    'staff-schedule': 'My Schedule',
    'staff-profile': 'Profile'
  };
  document.getElementById('staffContentTitle').textContent = titles[sectionId] || 'Dashboard';
}

// Manager Dashboard Functions
function updateManagerStats() {
  const staffCount = getStaffUsers().length;
  const activeTasks = AppData.tasks.filter(t => t.status !== 'completed').length;
  const todayAttendance = getTodayAttendance().length;
  const urgentTasks = AppData.tasks.filter(t => t.priority === 'High' && t.status !== 'completed').length;
  
  document.getElementById('totalStaffCount').textContent = staffCount;
  document.getElementById('totalTasksCount').textContent = activeTasks;
  document.getElementById('presentTodayCount').textContent = todayAttendance;
  document.getElementById('urgentTasksCount').textContent = urgentTasks;
}

function updateManagerOverview() {
  // Recent tasks
  const recentTasks = AppData.tasks.slice(-3);
  const recentTasksList = document.getElementById('recentTasksList');
  
  recentTasksList.innerHTML = recentTasks.map(task => {
    const assignedUser = getUserById(task.assigned_to);
    return `
      <div class="task-item">
        <div class="task-item-info">
          <h5>${task.title}</h5>
          <p>Assigned to: ${assignedUser ? assignedUser.first_name + ' ' + assignedUser.last_name : 'Unassigned'}</p>
        </div>
        <span class="task-priority ${task.priority.toLowerCase()}">${task.priority}</span>
      </div>
    `;
  }).join('');
  
  // Today's attendance
  const todayAttendance = getTodayAttendance();
  const attendanceList = document.getElementById('todayAttendanceList');
  
  attendanceList.innerHTML = todayAttendance.map(att => {
    const user = getUserById(att.user_id);
    const inTime = new Date(att.in_time);
    const outTime = att.out_time ? new Date(att.out_time) : null;
    
    return `
      <div class="attendance-item">
        <div class="attendance-info">
          <strong>${user.first_name} ${user.last_name}</strong>
          <small>In: ${inTime.toLocaleTimeString()} ${outTime ? '| Out: ' + outTime.toLocaleTimeString() : ''}</small>
        </div>
        <div class="attendance-status">
          <span class="status-dot present"></span>
          Present
        </div>
      </div>
    `;
  }).join('');
}

function updateManagerTasks() {
  const filter = document.getElementById('taskFilter').value;
  const priorityFilter = document.getElementById('priorityFilter').value;
  
  let filteredTasks = AppData.tasks;
  
  if (filter !== 'all') {
    filteredTasks = filteredTasks.filter(task => task.status === filter);
  }
  
  if (priorityFilter !== 'all') {
    filteredTasks = filteredTasks.filter(task => task.priority === priorityFilter);
  }
  
  const tasksList = document.getElementById('managerTasksList');
  
  if (filteredTasks.length === 0) {
    tasksList.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-tasks"></i>
        <h4>No tasks found</h4>
        <p>Create a new task to get started</p>
      </div>
    `;
    return;
  }
  
  tasksList.innerHTML = filteredTasks.map(task => {
    const assignedUser = getUserById(task.assigned_to);
    const assignedBy = getUserById(task.assigned_by);
    
    return `
      <div class="task-card">
        <div class="task-card-header">
          <h4>${task.title}</h4>
          <span class="task-priority ${task.priority.toLowerCase()}">${task.priority}</span>
        </div>
        <p>${task.description}</p>
        <div class="task-meta">
          <div class="task-meta-item">
            <i class="fas fa-calendar"></i>
            <span>${formatDate(task.date)} at ${formatTime(task.time)}</span>
          </div>
          <div class="task-meta-item">
            <i class="fas fa-clock"></i>
            <span>${task.duration} min</span>
          </div>
          <div class="task-meta-item">
            <i class="fas fa-user"></i>
            <span>${assignedUser ? assignedUser.first_name + ' ' + assignedUser.last_name : 'Unassigned'}</span>
          </div>
        </div>
        <div class="task-actions">
          <span class="task-status ${task.status}">${task.status.replace('_', ' ')}</span>
          <button class="btn btn--sm btn--outline" onclick="editTask(${task.task_id})">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button class="btn btn--sm btn--secondary" onclick="deleteTask(${task.task_id})">
            <i class="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function updateManagerStaff() {
  const staffList = document.getElementById('staffList');
  const staffUsers = getStaffUsers();
  
  staffList.innerHTML = staffUsers.map(user => {
    const shift = AppData.workShifts.find(s => s.user_id === user.user_id);
    const todayAttendance = AppData.attendance.find(a => 
      a.user_id === user.user_id && a.in_time.startsWith(new Date().toISOString().split('T')[0])
    );
    
    return `
      <div class="staff-card">
        <div class="staff-avatar">
          <i class="fas fa-user"></i>
        </div>
        <h4>${user.first_name} ${user.last_name}</h4>
        <p>${user.role.toUpperCase()}</p>
        <div class="staff-info">
          <div class="staff-info-item">
            <span>Phone:</span>
            <span>${user.phone}</span>
          </div>
          <div class="staff-info-item">
            <span>Reg No:</span>
            <span>${user.registration_no}</span>
          </div>
          <div class="staff-info-item">
            <span>Status:</span>
            <span class="status-indicator ${todayAttendance ? 'checked-in' : 'not-started'}">
              ${todayAttendance ? 'Present' : 'Not Present'}
            </span>
          </div>
          ${shift ? `
          <div class="staff-info-item">
            <span>Shift:</span>
            <span>${shift.start_time} - ${shift.end_time}</span>
          </div>` : ''}
        </div>
        <div class="task-actions">
          <button class="btn btn--sm btn--primary" onclick="viewStaffDetails(${user.user_id})">
            <i class="fas fa-eye"></i> View
          </button>
          <button class="btn btn--sm btn--outline" onclick="editStaff(${user.user_id})">
            <i class="fas fa-edit"></i> Edit
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function updateManagerAttendance() {
  const attendanceDate = document.getElementById('attendanceDate');
  const today = new Date().toISOString().split('T')[0];
  attendanceDate.value = today;
  
  viewAttendanceForDate(today);
}

function viewAttendanceForDate(date) {
  const attendanceTable = document.getElementById('attendanceTable');
  const dayAttendance = AppData.attendance.filter(att => att.in_time.startsWith(date));
  
  if (dayAttendance.length === 0) {
    attendanceTable.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-clock"></i>
        <h4>No attendance records</h4>
        <p>No staff checked in on this date</p>
      </div>
    `;
    return;
  }
  
  const tableHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Staff Member</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Duration</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${dayAttendance.map(att => {
          const user = getUserById(att.user_id);
          const inTime = new Date(att.in_time);
          const outTime = att.out_time ? new Date(att.out_time) : null;
          const duration = outTime ? Math.round((outTime - inTime) / (1000 * 60 * 60 * 100)) / 100 : 0;
          
          return `
            <tr>
              <td>${user.first_name} ${user.last_name}</td>
              <td>${inTime.toLocaleTimeString()}</td>
              <td>${outTime ? outTime.toLocaleTimeString() : 'Not checked out'}</td>
              <td>${duration > 0 ? duration.toFixed(1) + ' hours' : '-'}</td>
              <td>
                <span class="status-indicator ${outTime ? 'checked-out' : 'checked-in'}">
                  ${outTime ? 'Completed' : 'Active'}
                </span>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
  
  attendanceTable.innerHTML = tableHTML;
}

function updateManagerSchedule() {
  const scheduleView = document.getElementById('scheduleView');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  scheduleView.innerHTML = `
    <div class="schedule-grid">
      ${days.map(day => {
        const dayShifts = AppData.workShifts.filter(shift => 
          shift.days_of_work.includes(day.substring(0, 3))
        );
        
        return `
          <div class="schedule-day">
            <div class="schedule-day-header">${day}</div>
            ${dayShifts.map(shift => {
              const user = getUserById(shift.user_id);
              return `
                <div class="schedule-shift">
                  ${user.first_name} ${user.last_name}<br>
                  ${shift.start_time} - ${shift.end_time}
                </div>
              `;
            }).join('')}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function updateManagerReports() {
  // Simple text-based reports since we don't have Chart.js
  const performanceChart = document.getElementById('performanceChart');
  const taskChart = document.getElementById('taskChart');
  
  // Replace canvas with simple HTML reports
  performanceChart.parentElement.innerHTML = `
    <h4>Staff Performance</h4>
    <div class="report-summary">
      ${getStaffUsers().map(user => {
        const userTasks = getTasksByUser(user.user_id);
        const completedTasks = userTasks.filter(t => t.status === 'completed').length;
        const totalTasks = userTasks.length;
        const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        
        return `
          <div class="performance-item">
            <div class="performance-info">
              <strong>${user.first_name} ${user.last_name}</strong>
              <span>${completedTasks}/${totalTasks} tasks completed</span>
            </div>
            <div class="performance-bar">
              <div class="performance-fill" style="width: ${percentage}%"></div>
            </div>
            <span class="performance-percentage">${percentage}%</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
  
  taskChart.parentElement.innerHTML = `
    <h4>Task Completion</h4>
    <div class="task-summary">
      <div class="summary-item">
        <span class="summary-label">Completed:</span>
        <span class="summary-value text-success">${AppData.tasks.filter(t => t.status === 'completed').length}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">In Progress:</span>
        <span class="summary-value text-info">${AppData.tasks.filter(t => t.status === 'in_progress').length}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Pending:</span>
        <span class="summary-value text-warning">${AppData.tasks.filter(t => t.status === 'pending').length}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">High Priority:</span>
        <span class="summary-value text-error">${AppData.tasks.filter(t => t.priority === 'High').length}</span>
      </div>
    </div>
  `;
}

// Staff Dashboard Functions
function updateStaffStats() {
  const user = AppState.currentUser;
  const myTasks = getTasksByUser(user.user_id);
  const completedTasks = myTasks.filter(t => t.status === 'completed').length;
  
  // Calculate hours worked today
  const todayAttendance = AppData.attendance.find(a => 
    a.user_id === user.user_id && a.in_time.startsWith(new Date().toISOString().split('T')[0])
  );
  
  let hoursToday = 0;
  if (todayAttendance && todayAttendance.out_time) {
    const inTime = new Date(todayAttendance.in_time);
    const outTime = new Date(todayAttendance.out_time);
    hoursToday = Math.round((outTime - inTime) / (1000 * 60 * 60) * 100) / 100;
  }
  
  document.getElementById('myTasksCount').textContent = myTasks.length;
  document.getElementById('completedTasksCount').textContent = completedTasks;
  document.getElementById('hoursWorkedToday').textContent = hoursToday;
}

function updateStaffOverview() {
  const user = AppState.currentUser;
  const today = new Date().toISOString().split('T')[0];
  
  // Today's tasks
  const todayTasks = AppData.tasks.filter(task => 
    task.assigned_to === user.user_id && task.date === today
  );
  
  const todayTasksList = document.getElementById('todayTasksList');
  
  if (todayTasks.length === 0) {
    todayTasksList.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-tasks"></i>
        <h4>No tasks for today</h4>
        <p>Enjoy your day!</p>
      </div>
    `;
  } else {
    todayTasksList.innerHTML = todayTasks.map(task => `
      <div class="task-item">
        <div class="task-item-info">
          <h5>${task.title}</h5>
          <p>${formatTime(task.time)} - ${task.duration} min</p>
        </div>
        <span class="task-status ${task.status}">${task.status.replace('_', ' ')}</span>
      </div>
    `).join('');
  }
  
  // My schedule widget
  const shift = AppData.workShifts.find(s => s.user_id === user.user_id);
  const scheduleWidget = document.getElementById('myScheduleWidget');
  
  if (shift) {
    scheduleWidget.innerHTML = `
      <div class="schedule-info">
        <h5>Today's Shift</h5>
        <p><strong>Time:</strong> ${formatTime(shift.start_time)} - ${formatTime(shift.end_time)}</p>
        <p><strong>Days:</strong> ${shift.days_of_work}</p>
      </div>
    `;
  } else {
    scheduleWidget.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-calendar"></i>
        <h4>No schedule assigned</h4>
        <p>Contact your manager</p>
      </div>
    `;
  }
}

function updateStaffTasks() {
  const user = AppState.currentUser;
  const filter = document.getElementById('staffTaskFilter').value;
  
  let myTasks = getTasksByUser(user.user_id);
  
  if (filter !== 'all') {
    myTasks = myTasks.filter(task => task.status === filter);
  }
  
  const tasksList = document.getElementById('staffTasksList');
  
  if (myTasks.length === 0) {
    tasksList.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-tasks"></i>
        <h4>No tasks found</h4>
        <p>All caught up!</p>
      </div>
    `;
    return;
  }
  
  tasksList.innerHTML = myTasks.map(task => {
    const assignedBy = getUserById(task.assigned_by);
    
    return `
      <div class="task-card">
        <div class="task-card-header">
          <h4>${task.title}</h4>
          <span class="task-priority ${task.priority.toLowerCase()}">${task.priority}</span>
        </div>
        <p>${task.description}</p>
        <div class="task-meta">
          <div class="task-meta-item">
            <i class="fas fa-calendar"></i>
            <span>${formatDate(task.date)} at ${formatTime(task.time)}</span>
          </div>
          <div class="task-meta-item">
            <i class="fas fa-clock"></i>
            <span>${task.duration} min</span>
          </div>
          <div class="task-meta-item">
            <i class="fas fa-user"></i>
            <span>Assigned by: ${assignedBy.first_name} ${assignedBy.last_name}</span>
          </div>
        </div>
        <div class="task-actions">
          <span class="task-status ${task.status}">${task.status.replace('_', ' ')}</span>
          ${task.status === 'pending' ? `
            <button class="btn btn--sm btn--primary" onclick="startTask(${task.task_id})">
              <i class="fas fa-play"></i> Start
            </button>
          ` : ''}
          ${task.status === 'in_progress' ? `
            <button class="btn btn--sm btn--secondary" onclick="completeTask(${task.task_id})">
              <i class="fas fa-check"></i> Complete
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function updateStaffAttendance() {
  const user = AppState.currentUser;
  const todayAttendance = AppData.attendance.find(a => 
    a.user_id === user.user_id && a.in_time.startsWith(new Date().toISOString().split('T')[0])
  );
  
  const todayStatus = document.getElementById('todayStatus');
  
  if (todayAttendance) {
    const inTime = new Date(todayAttendance.in_time);
    const outTime = todayAttendance.out_time ? new Date(todayAttendance.out_time) : null;
    
    todayStatus.innerHTML = `
      <div class="status-details">
        <h5>Today's Status</h5>
        <div class="status-info">
          <div class="status-item">
            <span>Check In:</span>
            <span class="text-success">${inTime.toLocaleTimeString()}</span>
          </div>
          ${outTime ? `
            <div class="status-item">
              <span>Check Out:</span>
              <span class="text-error">${outTime.toLocaleTimeString()}</span>
            </div>
          ` : `
            <div class="status-item">
              <span>Status:</span>
              <span class="status-indicator checked-in">Currently Active</span>
            </div>
          `}
        </div>
      </div>
    `;
  } else {
    todayStatus.innerHTML = `
      <div class="status-details">
        <h5>Today's Status</h5>
        <div class="status-indicator not-started">Not Checked In</div>
      </div>
    `;
  }
  
  // Attendance history
  const userAttendance = AppData.attendance.filter(a => a.user_id === user.user_id);
  const attendanceHistory = document.getElementById('staffAttendanceHistory');
  
  attendanceHistory.innerHTML = `
    <h4>Attendance History</h4>
    <div class="attendance-history-list">
      ${userAttendance.map(att => {
        const inTime = new Date(att.in_time);
        const outTime = att.out_time ? new Date(att.out_time) : null;
        const duration = outTime ? Math.round((outTime - inTime) / (1000 * 60 * 60) * 100) / 100 : 0;
        
        return `
          <div class="attendance-history-item">
            <div class="attendance-date">
              <strong>${inTime.toLocaleDateString()}</strong>
            </div>
            <div class="attendance-details">
              <div>In: ${inTime.toLocaleTimeString()}</div>
              <div>Out: ${outTime ? outTime.toLocaleTimeString() : 'Not checked out'}</div>
              <div>Duration: ${duration > 0 ? duration.toFixed(1) + ' hours' : '-'}</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function updateStaffSchedule() {
  const user = AppState.currentUser;
  const shift = AppData.workShifts.find(s => s.user_id === user.user_id);
  const scheduleView = document.getElementById('staffScheduleView');
  
  if (shift) {
    const workDays = shift.days_of_work.split(',');
    const allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    scheduleView.innerHTML = `
      <div class="schedule-summary">
        <h4>My Work Schedule</h4>
        <div class="schedule-details">
          <div class="schedule-time">
            <strong>Shift Time:</strong> ${formatTime(shift.start_time)} - ${formatTime(shift.end_time)}
          </div>
          <div class="schedule-days">
            <strong>Work Days:</strong>
            <div class="days-grid">
              ${allDays.map((day, index) => `
                <div class="day-item ${workDays.includes(day) ? 'work-day' : 'off-day'}">
                  <div class="day-short">${day}</div>
                  <div class="day-full">${dayNames[index]}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    scheduleView.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-calendar"></i>
        <h4>No schedule assigned</h4>
        <p>Please contact your manager to set up your work schedule</p>
      </div>
    `;
  }
}

function updateStaffProfile() {
  const user = AppState.currentUser;
  const store = AppData.stores.find(s => s.store_id === user.store_id);
  
  document.getElementById('profileName').textContent = `${user.first_name} ${user.last_name}`;
  document.getElementById('profileRole').textContent = user.role.toUpperCase();
  document.getElementById('profileRegNo').textContent = user.registration_no;
  document.getElementById('profilePhone').textContent = user.phone;
  document.getElementById('profileAddress').textContent = user.address;
  document.getElementById('profileStore').textContent = store ? store.store_name : 'Unknown';
}

// Task Management Functions
function populateTaskAssignDropdown() {
  const dropdown = document.getElementById('taskAssignTo');
  const staffUsers = getStaffUsers();
  
  dropdown.innerHTML = '<option value="">Select Staff</option>' + 
    staffUsers.map(user => `
      <option value="${user.user_id}">${user.first_name} ${user.last_name}</option>
    `).join('');
}

function createTask(formData) {
  const newTask = {
    task_id: AppData.tasks.length + 1,
    title: formData.title,
    description: formData.description,
    date: formData.date,
    time: formData.time,
    duration: parseInt(formData.duration),
    recurrence: formData.recurrence,
    priority: formData.priority,
    assigned_to: parseInt(formData.assigned_to),
    assigned_by: AppState.currentUser.user_id,
    assignment_type: 'manual',
    status: 'pending'
  };
  
  AppData.tasks.push(newTask);
  updateManagerTasks();
  updateManagerStats();
  updateManagerOverview();
  
  const assignedUser = getUserById(newTask.assigned_to);
  showNotification(`Task "${newTask.title}" created and assigned to ${assignedUser.first_name} ${assignedUser.last_name}`, 'success');
}

function startTask(taskId) {
  const task = AppData.tasks.find(t => t.task_id === taskId);
  if (task) {
    task.status = 'in_progress';
    updateStaffTasks();
    updateStaffStats();
    showNotification(`Task "${task.title}" started`, 'success');
  }
}

function completeTask(taskId) {
  const task = AppData.tasks.find(t => t.task_id === taskId);
  if (task) {
    task.status = 'completed';
    updateStaffTasks();
    updateStaffStats();
    updateStaffOverview();
    showNotification(`Task "${task.title}" completed!`, 'success');
  }
}

function editTask(taskId) {
  showNotification('Edit task functionality would be implemented here', 'info');
}

function deleteTask(taskId) {
  if (confirm('Are you sure you want to delete this task?')) {
    AppData.tasks = AppData.tasks.filter(t => t.task_id !== taskId);
    updateManagerTasks();
    updateManagerStats();
    showNotification('Task deleted successfully', 'success');
  }
}

// Staff Management Functions
function registerStaff(formData) {
  const newUser = {
    user_id: AppData.users.length + 1,
    store_id: AppState.currentUser.store_id,
    first_name: formData.firstName,
    last_name: formData.lastName,
    gender: formData.gender,
    address: formData.address,
    phone: formData.phone,
    registration_no: `BBTK${String(AppData.users.length + 1).padStart(6, '0')}`,
    password: `BBTKpw${String(AppData.users.length + 1).padStart(6, '0')}`,
    role: formData.role
  };
  
  AppData.users.push(newUser);
  updateManagerStaff();
  updateManagerStats();
  populateTaskAssignDropdown();
  
  showNotification(`Staff member ${newUser.first_name} ${newUser.last_name} registered successfully. Registration No: ${newUser.registration_no}`, 'success');
}

function viewStaffDetails(userId) {
  const user = getUserById(userId);
  showNotification(`Viewing details for ${user.first_name} ${user.last_name}`, 'info');
}

function editStaff(userId) {
  showNotification('Edit staff functionality would be implemented here', 'info');
}

// Attendance Functions
function checkIn() {
  const user = AppState.currentUser;
  const today = new Date().toISOString().split('T')[0];
  
  // Check if already checked in today
  const existingAttendance = AppData.attendance.find(a => 
    a.user_id === user.user_id && a.in_time.startsWith(today)
  );
  
  if (existingAttendance) {
    showNotification('You have already checked in today', 'warning');
    return;
  }
  
  const newAttendance = {
    attendance_id: AppData.attendance.length + 1,
    user_id: user.user_id,
    in_time: new Date().toISOString().replace('T', ' ').substring(0, 19),
    out_time: null,
    marked_by: user.user_id
  };
  
  AppData.attendance.push(newAttendance);
  updateStaffAttendance();
  updateStaffStats();
  
  showNotification('Checked in successfully!', 'success');
}

function checkOut() {
  const user = AppState.currentUser;
  const today = new Date().toISOString().split('T')[0];
  
  const todayAttendance = AppData.attendance.find(a => 
    a.user_id === user.user_id && a.in_time.startsWith(today)
  );
  
  if (!todayAttendance) {
    showNotification('You need to check in first', 'warning');
    return;
  }
  
  if (todayAttendance.out_time) {
    showNotification('You have already checked out today', 'warning');
    return;
  }
  
  todayAttendance.out_time = new Date().toISOString().replace('T', ' ').substring(0, 19);
  updateStaffAttendance();
  updateStaffStats();
  
  showNotification('Checked out successfully!', 'success');
}

// Modal Functions
function showModal(modalId) {
  document.getElementById(modalId).classList.add('show');
}

function hideModal(modalId) {
  document.getElementById(modalId).classList.remove('show');
}

function hideAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('show');
  });
}

// Language Functions
function switchLanguage() {
  AppState.currentLanguage = AppState.currentLanguage === 'en' ? 'ja' : 'en';
  
  // Update language toggle buttons
  document.querySelectorAll('[id$="LangToggle"]').forEach(btn => {
    btn.innerHTML = `<i class="fas fa-globe"></i> ${AppState.currentLanguage.toUpperCase()}`;
  });
  
  document.getElementById('langToggle').innerHTML = `<i class="fas fa-globe"></i> ${AppState.currentLanguage.toUpperCase()}`;
  
  showNotification(`Language switched to ${AppState.currentLanguage === 'en' ? 'English' : 'Japanese'}`, 'info');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  // Login form
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const regNumber = document.getElementById('regNumber').value;
    const password = document.getElementById('password').value;
    login(regNumber, password);
  });
  
  // Forgot password
  document.getElementById('forgotPasswordLink').addEventListener('click', function(e) {
    e.preventDefault();
    showModal('forgotPasswordModal');
  });
  
  // Language toggles
  document.getElementById('langToggle').addEventListener('click', switchLanguage);
  document.getElementById('managerLangToggle').addEventListener('click', switchLanguage);
  document.getElementById('staffLangToggle').addEventListener('click', switchLanguage);
  
  // Logout buttons
  document.getElementById('managerLogout').addEventListener('click', logout);
  document.getElementById('staffLogout').addEventListener('click', logout);
  
  // Manager navigation
  document.querySelectorAll('#managerDashboard .nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      showManagerSection(section);
    });
  });
  
  // Staff navigation
  document.querySelectorAll('#staffDashboard .nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      showStaffSection(section);
    });
  });
  
  // Create task button
  document.getElementById('createTaskBtn').addEventListener('click', function() {
    showModal('createTaskModal');
  });
  
  // Register staff button
  document.getElementById('registerStaffBtn').addEventListener('click', function() {
    showModal('registerStaffModal');
  });
  
  // Check in/out buttons
  document.getElementById('checkInBtn').addEventListener('click', checkIn);
  document.getElementById('checkOutBtn').addEventListener('click', checkOut);
  
  // Task creation form
  document.getElementById('createTaskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
      title: document.getElementById('taskTitle').value,
      description: document.getElementById('taskDescription').value,
      date: document.getElementById('taskDate').value,
      time: document.getElementById('taskTime').value,
      duration: document.getElementById('taskDuration').value,
      priority: document.getElementById('taskPriority').value,
      assigned_to: document.getElementById('taskAssignTo').value,
      recurrence: document.getElementById('taskRecurrence').value
    };
    
    createTask(formData);
    hideModal('createTaskModal');
    this.reset();
  });
  
  // Staff registration form
  document.getElementById('registerStaffForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
      firstName: document.getElementById('staffFirstName').value,
      lastName: document.getElementById('staffLastName').value,
      gender: document.getElementById('staffGender').value,
      phone: document.getElementById('staffPhone').value,
      address: document.getElementById('staffAddress').value,
      role: document.getElementById('staffRoleSelect').value
    };
    
    registerStaff(formData);
    hideModal('registerStaffModal');
    this.reset();
  });
  
  // Filter controls
  document.getElementById('taskFilter').addEventListener('change', updateManagerTasks);
  document.getElementById('priorityFilter').addEventListener('change', updateManagerTasks);
  document.getElementById('staffTaskFilter').addEventListener('change', updateStaffTasks);
  
  // Attendance date picker
  document.getElementById('viewAttendanceBtn').addEventListener('click', function() {
    const date = document.getElementById('attendanceDate').value;
    viewAttendanceForDate(date);
  });
  
  // Modal close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function() {
      hideAllModals();
    });
  });
  
  // Click outside modal to close
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        hideAllModals();
      }
    });
  });
  
  // Notification close
  document.getElementById('notificationClose').addEventListener('click', function() {
    document.getElementById('notification').classList.add('hidden');
  });
  
  // Set default task date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('taskDate').value = today;
  
  // Set default attendance date to today
  document.getElementById('attendanceDate').value = today;
});

// Initialize the application
console.log('XDRSS Task Management System Loaded');
showNotification('System ready', 'success');
