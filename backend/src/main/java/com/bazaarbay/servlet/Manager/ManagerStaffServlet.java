package servlet.Manager;

import dao.UserDAO;
import model.User;
import util.JSONUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

public class ManagerStaffServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int storeId = Integer.parseInt(request.getParameter("storeId"));

        try {
            UserDAO dao = new UserDAO();
            List<User> staff = dao.getAllStaff(storeId);
            JSONUtil.sendJsonResponse(response, staff);
        } catch (Exception e) {
            e.printStackTrace();
            JSONUtil.sendError(response, "Unable to fetch staff details.");
        }
    }
}
