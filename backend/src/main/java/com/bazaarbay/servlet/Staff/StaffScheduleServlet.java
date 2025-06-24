package servlet.Staff;

import dao.ScheduleDAO;
import model.Schedule;
import util.JSONUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class StaffScheduleServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int staffId = Integer.parseInt(request.getParameter("staffId"));

        try {
            ScheduleDAO dao = new ScheduleDAO();
            List<Schedule> schedule = dao.getScheduleForUser(staffId);
            JSONUtil.sendJsonResponse(response, schedule);
        } catch (Exception e) {
            e.printStackTrace();
            JSONUtil.sendError(response, "Failed to retrieve schedule.");
        }
    }
}
