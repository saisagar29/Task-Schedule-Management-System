package servlet.Staff;

import dao.TaskDAO;
import model.Task;
import util.JSONUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class StaffTasksServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int staffId = Integer.parseInt(request.getParameter("staffId"));

        try {
            TaskDAO taskDAO = new TaskDAO();
            List<Task> tasks = taskDAO.getTasksAssignedTo(staffId);
            JSONUtil.sendJsonResponse(response, tasks);
        } catch (Exception e) {
            e.printStackTrace();
            JSONUtil.sendError(response, "Error retrieving staff tasks.");
        }
    }
}
