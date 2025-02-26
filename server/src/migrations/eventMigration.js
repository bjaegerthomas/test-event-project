// Import Sequelize, which provides data types and database interaction methods
import { Sequelize } from 'sequelize';


// Define the migration for creating the Events table
export const up = async (queryInterface) => {
  await queryInterface.createTable('Events', {
    id: { 
      type: Sequelize.UUID, // Unique identifier for each event (Universally Unique Identifier)
      defaultValue: Sequelize.UUIDV4, // Auto-generate a UUID for new records
      primaryKey: true // Mark this as the primary key
    },
    title: { 
      type: Sequelize.STRING, // Event title as a string
      allowNull: false // Title is required (cannot be NULL)
    },
    description: { 
      type: Sequelize.TEXT, // Event description, allows long text input
      allowNull: false // Description is required (cannot be NULL)
    },
    date: { 
      type: Sequelize.STRING, // Store date as a string (could be formatted before storing)
      allowNull: false // Date is required (cannot be NULL)
    },
    location: { 
      type: Sequelize.STRING, // Location of the event
      allowNull: false // Location is required (cannot be NULL)
    },
    createdBy: { 
      type: Sequelize.UUID, // Foreign key referencing the User who created the event
      allowNull: false, // Must be linked to a valid user
      references: { 
        model: 'Users', // References the Users table
        key: 'id' // Links to the 'id' column in the Users table
      }
    },
    createdAt: { 
      type: Sequelize.DATE, // Timestamp for when the event is created
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Automatically set to current timestamp
    },
    updatedAt: { 
      type: Sequelize.DATE, // Timestamp for when the event is last updated
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Automatically set to current timestamp
    },
  });
};

// Define the migration for dropping the Events table (rollback)
export const down = async (queryInterface) => {
  await queryInterface.dropTable('Events'); // Remove the Events table if the migration is rolled back
};
