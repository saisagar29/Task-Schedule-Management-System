package com.bazaarbay.controller;

import com.bazaarbay.service.AuthService;
import com.bazaarbay.model.User;
import com.bazaarbay.util.JSONUtil;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.sql.Connection;
import com.bazaarbay.util.DBUtil;

public class AuthServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String regNo = request.getParameter("registrationNo");
        String password = request.getParameter("password");

        try (Connection conn = DBUtil.getConnection()) {
            AuthService authService = new AuthService(conn);
            User user = authService.login(regNo, password);

            if (user != null) {
                response.setContentType("application/json");
                response.getWriter().write(JSONUtil.createSuccessLogin(user));
            } else {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("{\"message\":\"Invalid credentials\"}");
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.sendError(500);
        }
    }
}
