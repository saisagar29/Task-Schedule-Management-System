package com.bazaarbay.controller;

import com.bazaarbay.service.AuthService;
import com.bazaarbay.util.DBUtil;

import javax.servlet.http.*;
import javax.servlet.*;
import java.io.IOException;
import java.sql.Connection;

public class ResetPasswordServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        String regNo = request.getParameter("registrationNo");
        String newPassword = request.getParameter("newPassword");

        try (Connection conn = DBUtil.getConnection()) {
            AuthService authService = new AuthService(conn);
            if (authService.resetPassword(regNo, newPassword)) {
                response.getWriter().write("{\"message\":\"Password reset successful\"}");
            } else {
                response.sendError(400, "Reset failed");
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.sendError(500);
        }
    }
}
