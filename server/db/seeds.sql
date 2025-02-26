-- Connect to the correct database
\c event_planner_db;

-- Insert sample users into the Users table
-- NOTE: Passwords should be hashed in the real application!
INSERT INTO Users (id, name, email, username, password) VALUES
(gen_random_uuid(), 'John Doe', 'user1@example.com', 'johndoe', 'hashedpassword1'),
(gen_random_uuid(), 'Jane Smith', 'user2@example.com', 'janesmith', 'hashedpassword2');

-- Insert sample events into the Events table
-- Ensure 'createdBy' references an existing user ID
INSERT INTO Events (id, title, description, date, location, createdBy) VALUES
(gen_random_uuid(), 'Team Meeting', 'Discuss project updates', '2024-03-15 10:00 AM', 'Conference Room', (SELECT id FROM Users LIMIT 1)),
(gen_random_uuid(), 'Birthday Party', 'Celebrate John’s birthday', '2024-04-01 07:00 PM', 'John’s House', (SELECT id FROM Users ORDER BY createdAt DESC LIMIT 1)),
(gen_random_uuid(), 'Workshop', 'Learn about new tech trends', '2024-05-20 02:00 PM', 'Tech Hub', (SELECT id FROM Users OFFSET 1 LIMIT 1));
