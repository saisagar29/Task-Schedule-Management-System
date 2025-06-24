package dao;

import model.Schedule;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ScheduleDAO {
    public List<Schedule> getAllSchedulesForStore(int storeId) throws SQLException {
        List<Schedule> schedules = new ArrayList<>();
        String sql = "SELECT S.* FROM WorkShifts S JOIN Users U ON S.user_id = U.user_id WHERE U.store_id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, storeId);
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                Schedule s = new Schedule();
                s.setShiftId(rs.getInt("shift_id"));
                s.setUserId(rs.getInt("user_id"));
                s.setStartTime(rs.getString("start_time"));
                s.setEndTime(rs.getString("end_time"));
                s.setDaysOfWork(rs.getString("days_of_work"));
                schedules.add(s);
            }
        }
        return schedules;
    }
}
