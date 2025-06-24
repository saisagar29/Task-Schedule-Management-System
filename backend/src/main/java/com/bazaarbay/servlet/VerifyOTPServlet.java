@WebServlet("/api/otp/verify")
public class VerifyOTPServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        var body = JSONUtil.parseRequest(req);
        String phone = body.getString("phone");
        String otp = body.getString("otp");
        boolean ok = OTPService.verify(phone, otp);
        if (ok) res.getWriter().write("{\"message\":\"OTP verified\"}");
        else res.sendError(401, "Invalid/expired OTP");
    }
}
