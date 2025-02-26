-- Ensure the database exists before creating
-- This command creates the database 'event_planner_db' if it doesn't already exist.
CREATE DATABASE event_planner_db;

-- Switch to the database
-- This command connects to the 'event_planner_db' database so that all subsequent commands are executed within it.
\c event_planner_db;

-- Drop tables only if they already exist to prevent duplicate errors.
-- This ensures that if we re-run the script, it won't cause conflicts with existing tables.
DROP TABLE IF EXISTS Events;  -- Deletes the Events table if it exists.
DROP TABLE IF EXISTS Users;   -- Deletes the Users table if it exists.

-- Create Users table
CREATE TABLE Users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Unique identifier for each user, generated automatically.
    name VARCHAR(255) NOT NULL,                    -- Stores the full name of the user, required field.
    email VARCHAR(255) UNIQUE NOT NULL,            -- Stores the user's email, must be unique and required.
    username VARCHAR(255) UNIQUE NOT NULL,         -- Stores the username, must be unique and required.
    password VARCHAR(255) NOT NULL,                -- Stores the hashed password for authentication.
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatically records when the user was created.
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Automatically records when the user was last updated.
);

-- Create Events table
CREATE TABLE Events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Unique identifier for each event, generated automatically.
    title VARCHAR(255) NOT NULL,                   -- Stores the title of the event, required field.
    description TEXT,                               -- Stores additional details about the event, optional field.
    date VARCHAR(255) NOT NULL,                    -- Stores the event's date/time as a string, required field.
    location VARCHAR(255) NOT NULL,                -- Stores the location where the event is held, required field.
    createdBy UUID NOT NULL,                       -- Stores the ID of the user who created the event.
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatically records when the event was created.
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatically records when the event was last updated.
    
    -- Establish a foreign key relationship between Events and Users.
    -- This ensures that 'createdBy' references an existing user in the Users table.
    -- If a user is deleted, all their associated events will also be deleted.
    CONSTRAINT fk_createdBy FOREIGN KEY (createdBy) REFERENCES Users(id) ON DELETE CASCADE
);
