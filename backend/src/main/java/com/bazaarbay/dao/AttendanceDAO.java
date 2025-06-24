package dao;

import model.Attendance;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AttendanceDAO {
    public List<Attendance> getAllAttendanceForStore(int storeId) throws SQLException {
        List<Attendance> records = new ArrayList<>();
        String sql = "SELECT A.* FROM Attendance A JOIN Users U ON A.user_id = U.user_id WHERE U.store_id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, storeId);
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                Attendance a = new Attendance();
                a.setAttendanceId(rs.getInt("attendance_id"));
                a.setUserId(rs.getInt("user_id"));
                a.setInTime(rs.getTimestamp("in_time").toLocalDateTime());
                a.setOutTime(rs.getTimestamp("out_time").toLocalDateTime());
                a.setMarkedBy(rs.getInt("marked_by"));
                records.add(a);
            }
        }
        return records;
    }
}
