USE taskscheduler;

-- Disable foreign key checks to drop tables
SET FOREIGN_KEY_CHECKS = 0;

-- Drop all tables if they exist
DROP TABLE IF EXISTS
    Attendance,
    WorkShifts,
    ActivityLog,
    Users,
    Tasks,
    Stores;

-- Enable foreign key checks again
SET FOREIGN_KEY_CHECKS = 1;
 
-- ----------------------------
-- CREATE TABLES
-- ----------------------------
 
-- CREATE Stores table
CREATE TABLE Stores (
    store_id INT PRIMARY KEY AUTO_INCREMENT,
    store_name VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL
);
 
-- CREATE Users table
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    store_id INT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender CHAR(1),
    address VARCHAR(255),
    phone VARCHAR(20) NOT NULL,
    registration_no VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('manager', 'staff') NOT NULL,
    FOREIGN KEY (store_id) REFERENCES Stores(store_id)
);
 
-- CREATE WorkShifts table
CREATE TABLE WorkShifts (
    shift_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    days_of_work VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
 
-- CREATE Attendance table
CREATE TABLE Attendance (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    in_time DATETIME NOT NULL,
    out_time DATETIME NOT NULL,
    marked_by INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (marked_by) REFERENCES Users(user_id)
);
 
-- CREATE Tasks table
CREATE TABLE Tasks (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    time TIME NOT NULL,
    duration INT,
    recurrence ENUM('Daily', 'Weekly', 'None'),
    priority ENUM('Low', 'Medium', 'High'),
    assigned_to INT,
    assigned_by INT NOT NULL,
    assignment_type ENUM('manual', 'auto') NOT NULL,
    FOREIGN KEY (assigned_to) REFERENCES Users(user_id),
    FOREIGN KEY (assigned_by) REFERENCES Users(user_id)
);
 
-- CREATE ActivityLog table
CREATE TABLE ActivityLog (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    action_type VARCHAR(50) NOT NULL,
    entity_id INT NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    timestamp DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
 
