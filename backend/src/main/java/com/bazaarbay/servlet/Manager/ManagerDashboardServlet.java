package servlet.Manager;

import dao.TaskDAO;
import dao.UserDAO;
import model.Task;
import model.User;
import util.JSONUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ManagerDashboardServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int managerId = Integer.parseInt(request.getParameter("managerId"));

        try {
            TaskDAO taskDAO = new TaskDAO();
            UserDAO userDAO = new UserDAO();

            List<Task> tasks = taskDAO.getTasksAssignedBy(managerId);
            List<User> staff = userDAO.getAllStaff(1); // Assuming storeId = 1

            Map<String, Object> data = new HashMap<>();
            data.put("taskCount", tasks.size());
            data.put("staffCount", staff.size());

            JSONUtil.sendJsonResponse(response, data);
        } catch (Exception e) {
            e.printStackTrace();
            JSONUtil.sendError(response, "Error loading dashboard data.");
        }
    }
}
