package servlet.Staff;

import dao.AttendanceDAO;
import model.Attendance;
import util.JSONUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class StaffAttendanceServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int staffId = Integer.parseInt(request.getParameter("staffId"));

        try {
            AttendanceDAO dao = new AttendanceDAO();
            List<Attendance> attendance = dao.getAttendanceForUser(staffId);
            JSONUtil.sendJsonResponse(response, attendance);
        } catch (Exception e) {
            e.printStackTrace();
            JSONUtil.sendError(response, "Failed to load attendance.");
        }
    }
}
