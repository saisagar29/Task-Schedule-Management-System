package com.bazaarbay.util;

import java.sql.*;

public class DBUtil {
    public static Connection getConnection() throws SQLException {
        String url = "jdbc:mysql://localhost:3306/your_db_name";
        String user = "your_username";
        String password = "your_password";
        return DriverManager.getConnection(url, user, password);
    }
}
