package servlet.Manager;

import dao.ScheduleDAO;
import model.Schedule;
import util.JSONUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class ManagerScheduleServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int storeId = Integer.parseInt(request.getParameter("storeId"));

        try {
            ScheduleDAO dao = new ScheduleDAO();
            List<Schedule> schedules = dao.getAllSchedulesForStore(storeId);
            JSONUtil.sendJsonResponse(response, schedules);
        } catch (Exception e) {
            e.printStackTrace();
            JSONUtil.sendError(response, "Failed to load schedules.");
        }
    }
}
