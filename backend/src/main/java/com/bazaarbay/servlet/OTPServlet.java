package com.bazaarbay.controller;

import com.bazaarbay.service.OTPService;
import com.bazaarbay.util.DBUtil;
import javax.servlet.http.*;
import javax.servlet.*;
import java.io.IOException;
import java.sql.Connection;

public class OTPServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        String regNo = request.getParameter("registrationNo");
        String email = request.getParameter("email");

        try (Connection conn = DBUtil.getConnection()) {
            OTPService otpService = new OTPService(conn);
            otpService.sendOTP(regNo, email);
            response.getWriter().write("{\"message\":\"OTP sent\"}");
        } catch (Exception e) {
            e.printStackTrace();
            response.sendError(500);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        String regNo = request.getParameter("registrationNo");
        String otp = request.getParameter("otp");

        try (Connection conn = DBUtil.getConnection()) {
            OTPService otpService = new OTPService(conn);
            if (otpService.verify(regNo, otp)) {
                response.getWriter().write("{\"message\":\"OTP verified\"}");
            } else {
                response.sendError(401, "Invalid OTP");
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.sendError(500);
        }
    }
}
