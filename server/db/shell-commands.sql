-- Create the database 'event_planner_db' if it doesn't already exist
CREATE DATABASE event_planner_db;

-- Grant all privileges on the database to the correct user
GRANT ALL PRIVILEGES ON DATABASE event_planner_db TO postgres;

-- Connect to the newly created database
\c event_planner_db;
