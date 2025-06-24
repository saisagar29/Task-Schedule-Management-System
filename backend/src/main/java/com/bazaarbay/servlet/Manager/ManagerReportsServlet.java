package servlet.Manager;

import dao.ActivityLogDAO;
import model.ActivityLog;
import util.JSONUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class ManagerReportsServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int managerId = Integer.parseInt(request.getParameter("managerId"));

        try {
            ActivityLogDAO dao = new ActivityLogDAO();
            List<ActivityLog> logs = dao.getAllLogsByManager(managerId);
            JSONUtil.sendJsonResponse(response, logs);
        } catch (Exception e) {
            e.printStackTrace();
            JSONUtil.sendError(response, "Error loading reports.");
        }
    }
}
