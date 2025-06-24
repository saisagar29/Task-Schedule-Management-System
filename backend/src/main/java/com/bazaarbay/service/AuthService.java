package com.bazaarbay.service;

import com.bazaarbay.dao.UserDAO;
import com.bazaarbay.model.User;
import org.mindrot.jbcrypt.BCrypt;

import java.sql.Connection;
import java.sql.SQLException;

public class AuthService {
    private UserDAO userDAO;

    public AuthService(Connection conn) {
        this.userDAO = new UserDAO(conn);
    }

    public User login(String regNo, String password) throws SQLException {
        User user = userDAO.findByRegistrationNo(regNo);
        if (user != null && BCrypt.checkpw(password, user.getPassword())) {
            return user;
        }
        return null;
    }

    public boolean resetPassword(String regNo, String newPassword) throws SQLException {
        String hashed = BCrypt.hashpw(newPassword, BCrypt.gensalt());
        return userDAO.updatePassword(regNo, hashed);
    }
}
