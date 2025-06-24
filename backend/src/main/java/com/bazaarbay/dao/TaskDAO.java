package dao;

import model.Task;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class TaskDAO {
    public List<Task> getTasksAssignedBy(int managerId) throws SQLException {
        List<Task> tasks = new ArrayList<>();
        String sql = "SELECT * FROM Tasks WHERE assigned_by = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, managerId);
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                Task t = new Task();
                t.setTaskId(rs.getInt("task_id"));
                t.setTitle(rs.getString("title"));
                t.setDescription(rs.getString("description"));
                t.setDate(rs.getString("date"));
                t.setTime(rs.getString("time"));
                t.setDuration(rs.getInt("duration"));
                t.setRecurrence(rs.getString("recurrence"));
                t.setPriority(rs.getString("priority"));
                t.setAssignedTo(rs.getInt("assigned_to"));
                t.setAssignedBy(rs.getInt("assigned_by"));
                t.setAssignmentType(rs.getString("assignment_type"));
                tasks.add(t);
            }
        }
        return tasks;
    }
}
