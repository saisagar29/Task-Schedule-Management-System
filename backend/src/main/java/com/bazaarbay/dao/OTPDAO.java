package com.bazaarbay.dao;

import com.bazaarbay.model.OTPToken;
import java.sql.*;
import java.time.LocalDateTime;

public class OTPDAO {
    private Connection conn;

    public OTPDAO(Connection conn) {
        this.conn = conn;
    }

    public void saveOTP(String regNo, String otp, LocalDateTime expiry) throws SQLException {
        String sql = "REPLACE INTO OTP (registration_no, otp, expiry) VALUES (?, ?, ?)";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setString(1, regNo);
        stmt.setString(2, otp);
        stmt.setTimestamp(3, Timestamp.valueOf(expiry));
        stmt.executeUpdate();
    }

    public boolean verifyOTP(String regNo, String otp) throws SQLException {
        String sql = "SELECT * FROM OTP WHERE registration_no = ? AND otp = ? AND expiry > NOW()";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setString(1, regNo);
        stmt.setString(2, otp);
        ResultSet rs = stmt.executeQuery();
        return rs.next();
    }

    public void deleteOTP(String regNo) throws SQLException {
        String sql = "DELETE FROM OTP WHERE registration_no = ?";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setString(1, regNo);
        stmt.executeUpdate();
    }
}
