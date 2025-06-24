package servlet.Manager;

import dao.TaskDAO;
import model.Task;
import util.JSONUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class ManagerTasksServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int managerId = Integer.parseInt(request.getParameter("managerId"));

        try {
            TaskDAO dao = new TaskDAO();
            List<Task> tasks = dao.getTasksAssignedBy(managerId);
            JSONUtil.sendJsonResponse(response, tasks);
        } catch (Exception e) {
            e.printStackTrace();
            JSONUtil.sendError(response, "Failed to retrieve tasks.");
        }
    }
}
