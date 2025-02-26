// Import Sequelize, which provides data types and database interaction methods
import { Sequelize } from 'sequelize';

// Define the migration for creating the Users table
export const up = async (queryInterface) => {
  await queryInterface.createTable('Users', {
    id: { 
      type: Sequelize.UUID, // Unique identifier for each user (Universally Unique Identifier)
      defaultValue: Sequelize.UUIDV4, // Auto-generate a UUID for new records
      primaryKey: true // Mark this as the primary key
    },
    name: { 
      type: Sequelize.STRING, // User's full name as a string
      allowNull: false // Name is required (cannot be NULL)
    },
    email: { 
      type: Sequelize.STRING, // User's email address
      allowNull: false, // Email is required (cannot be NULL)
      unique: true // Ensures that each email is unique in the database
    },
    username: { 
      type: Sequelize.STRING, // Unique username for the user
      allowNull: false, // Username is required (cannot be NULL)
      unique: true // Ensures that each username is unique
    },
    password: { 
      type: Sequelize.STRING, // User's password (should be hashed before storing)
      allowNull: false // Password is required (cannot be NULL)
    },
    createdAt: { 
      type: Sequelize.DATE, // Timestamp for when the user is created
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Automatically set to current timestamp
    },
    updatedAt: { 
      type: Sequelize.DATE, // Timestamp for when the user is last updated
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Automatically set to current timestamp
    },
  });
};

// Define the migration for dropping the Users table (rollback)
export const down = async (queryInterface) => {
  await queryInterface.dropTable('Users'); // Remove the Users table if the migration is rolled back
};
