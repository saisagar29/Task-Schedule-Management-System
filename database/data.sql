SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE Attendance;
TRUNCATE TABLE WorkShifts;
TRUNCATE TABLE ActivityLog;
TRUNCATE TABLE Users;
TRUNCATE TABLE Tasks;
TRUNCATE TABLE Stores;
SET FOREIGN_KEY_CHECKS = 1;
 
 
-- ----------------------------
-- INSERT DUMMY DATA
-- ----------------------------
 
-- INSERT Stores
INSERT INTO Stores (store_name, location) VALUES
('BazaarBay Tokyo', 'Tokyo, Japan'),
('BazaarBay Osaka', 'Osaka, Japan');
 
-- INSERT Users (1 store focus: Tokyo)
INSERT INTO Users (store_id, first_name, last_name, gender, address, phone, registration_no, password, role) VALUES
(1, 'Saisagar', 'Sahukar', 'M', 'Tokyo, Chiyoda', '08012345678', 'BBTK000001', '$2y$10$sHUNlXYGm1U9qFkBoJEFUusL14Zix8Vs7kHr.GGLBjtFuWos4buAm', 'manager'),
(1, 'Sweta', 'Snigdha', 'F', 'Tokyo, Shibuya', '08023456789', 'BBTK000002', '$2y$10$Y/.5uYmYUQQ4a/w/rxli5OJ1zpl157FGojIH7Io9.XNFhgxKUaxya', 'manager'),
(1, 'Ram', 'Sahu', 'M', 'Tokyo, Minato', '08034567890', 'BBTK000003', '$2y$10$LXP9alLHAYXfZ3zUDv2OaOIbKStcu4bikYXFh0Od3MBq8bbIwtUtO', 'staff'),
(1, 'Ankit', 'Raj', 'M', 'Tokyo, Setagaya', '08045678901', 'BBTK000004', '$2y$10$rDWy3iz4us69ObzBr40.0eWJjS0p7ge6flfSyOSB35m/cBntB41qC', 'staff'),
(1, 'Ayushka', 'Singh', 'F', 'Tokyo, Meguro', '08056789012', 'BBTK000005', '$2y$10$9hk9NNoDtt7i4ibPyjecyOyV.xQD508WFnWPnf4nkBhyfMAXSBMmC', 'staff'),
(1, 'Subham', 'Sharma', 'M', 'Tokyo, Taito', '08067890123', 'BBTK000006', '$2y$10$77IlAUf.HZe4KwuRQz4nx.bBATj0kriaUlZ.RwVOvzWS/ZP6vDLLy', 'staff'),
(1, 'Divya', 'Prakash', 'F', 'Tokyo, Shibuya', '08023456781', 'BBTK000007', '$2y$10$gwdn6XNbEYLxfxBdafwHNOB.aoFkMEYvvghu1dq5qgqRoptFOaKYi', 'staff'),
(1, 'Bhojraj', 'Adhikari', 'M', 'Tokyo, Minato', '08023456782', 'BBTK000008', '$2y$10$4c0LwJbiztpgSSAy0IakvuChwPELcCEDxrIaQ0gXsx8v37qjmS4Im', 'staff');
 
-- INSERT WorkShifts
INSERT INTO WorkShifts (user_id, start_time, end_time, days_of_work) VALUES
(3, '09:00:00', '17:00:00', 'Mon,Tue,Wed'),
(4, '12:00:00', '20:00:00', 'Thu,Fri,Sat'),
(5, '08:00:00', '16:00:00', 'Mon,Wed,Fri'),
(6, '10:00:00', '18:00:00', 'Tue,Thu,Sat');
 
-- INSERT Attendance
INSERT INTO Attendance (user_id, in_time, out_time, marked_by) VALUES
(3, '2025-06-24 09:01:00', '2025-06-24 17:02:00', 1),
(4, '2025-06-24 12:05:00', '2025-06-24 20:00:00', 2),
(5, '2025-06-24 08:00:00', '2025-06-24 16:00:00', 1),
(6, '2025-06-24 10:10:00', '2025-06-24 18:15:00', 2);
 
-- INSERT Tasks
INSERT INTO Tasks (title, description, date, time, duration, recurrence, priority, assigned_to, assigned_by, assignment_type) VALUES
('Stock Check', 'Check inventory in aisle A', '2025-06-25', '10:00:00', 60, 'Weekly', 'Medium', 3, 1, 'manual'),
('Customer Survey', 'Ask feedback from customers', '2025-06-25', '15:00:00', 30, 'Daily', 'Low', 4, 2, 'auto'),
('Restock Shelves', 'Restock all empty shelves', '2025-06-25', '09:00:00', 90, 'None', 'High', 5, 1, 'manual');
 
-- INSERT ActivityLog
INSERT INTO ActivityLog (user_id, action_type, entity_id, entity_type, timestamp) VALUES
(1, 'create_task', 1, 'task', '2025-06-25 09:50:00'),
(2, 'create_task', 2, 'task', '2025-06-25 09:55:00'),
(1, 'mark_attendance', 1, 'attendance', '2025-06-24 09:01:00'),
(2, 'mark_attendance', 2, 'attendance', '2025-06-24 12:05:00');
 
