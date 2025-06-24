package servlet.Manager;

import dao.AttendanceDAO;
import model.Attendance;
import util.JSONUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class ManagerAttendanceServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int storeId = Integer.parseInt(request.getParameter("storeId"));

        try {
            AttendanceDAO dao = new AttendanceDAO();
            List<Attendance> records = dao.getAllAttendanceForStore(storeId);
            JSONUtil.sendJsonResponse(response, records);
        } catch (Exception e) {
            e.printStackTrace();
            JSONUtil.sendError(response, "Failed to fetch attendance.");
        }
    }
}
