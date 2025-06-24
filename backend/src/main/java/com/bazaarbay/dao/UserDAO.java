package com.bazaarbay.dao;

import com.bazaarbay.model.User;
import java.sql.*;

public class UserDAO {
    private Connection conn;

    public UserDAO(Connection conn) {
        this.conn = conn;
    }

    public User findByRegistrationNo(String regNo) throws SQLException {
        String sql = "SELECT * FROM Users WHERE registration_no = ?";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setString(1, regNo);
        ResultSet rs = stmt.executeQuery();
        if (rs.next()) {
            User user = new User();
            user.setUserId(rs.getInt("user_id"));
            user.setRegistrationNo(rs.getString("registration_no"));
            user.setPassword(rs.getString("password"));
            user.setRole(rs.getString("role"));
            return user;
        }
        return null;
    }

    public boolean updatePassword(String regNo, String newHashedPassword) throws SQLException {
        String sql = "UPDATE Users SET password = ? WHERE registration_no = ?";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setString(1, newHashedPassword);
        stmt.setString(2, regNo);
        return stmt.executeUpdate() > 0;
    }
}
