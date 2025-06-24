package com.bazaarbay.service;

import com.bazaarbay.dao.OTPDAO;
import java.sql.Connection;
import java.time.LocalDateTime;
import java.util.Random;

public class OTPService {
    private OTPDAO otpDAO;

    public OTPService(Connection conn) {
        this.otpDAO = new OTPDAO(conn);
    }

    public String generateOTP() {
        Random random = new Random();
        int otpInt = 100000 + random.nextInt(900000);
        return String.valueOf(otpInt);
    }

    public boolean sendOTP(String regNo, String email) throws Exception {
        String otp = generateOTP();
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(5);
        otpDAO.saveOTP(regNo, otp, expiry);
        EmailUtil.sendEmail(email, "Your OTP Code", "Use this OTP: " + otp);
        return true;
    }

    public boolean verify(String regNo, String otp) throws Exception {
        boolean valid = otpDAO.verifyOTP(regNo, otp);
        if (valid) otpDAO.deleteOTP(regNo);
        return valid;
    }
}
