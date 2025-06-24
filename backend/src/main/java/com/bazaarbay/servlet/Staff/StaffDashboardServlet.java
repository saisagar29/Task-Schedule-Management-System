package servlet.Staff;

import dao.TaskDAO;
import dao.AttendanceDAO;
import model.Task;
import model.Attendance;
import util.JSONUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class StaffDashboardServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int staffId = Integer.parseInt(request.getParameter("staffId"));

        try {
            TaskDAO taskDAO = new TaskDAO();
            AttendanceDAO attendanceDAO = new AttendanceDAO();

            List<Task> tasks = taskDAO.getTasksAssignedTo(staffId);
            List<Attendance> attendance = attendanceDAO.getAttendanceForUser(staffId);

            Map<String, Object> data = new HashMap<>();
            data.put("totalTasks", tasks.size());
            data.put("attendanceRecords", attendance.size());

            JSONUtil.sendJsonResponse(response, data);
        } catch (Exception e) {
            e.printStackTrace();
            JSONUtil.sendError(response, "Error loading dashboard data.");
        }
    }
}
