// Import Sequelize to establish a database connection and define models
import { Sequelize } from 'sequelize';

// Import configuration settings for database connection
import configData from '../config/config.js';

// Import models for Users and Events
import User from './User.js';
import Event from './Event.js';

// Select the appropriate configuration settings based on the environment (development, production, etc.)
const config = configData[process.env.NODE_ENV || 'development'];

// Create a new Sequelize instance using the database configuration
const sequelize = new Sequelize(config.database, config.username, config.password, { 
  host: config.host, // Set database host
  dialect: config.dialect // Define the database dialect (PostgreSQL)
});

// Define relationships between models
User.hasMany(Event, { foreignKey: 'createdBy', onDelete: 'CASCADE' }); 
// A user can create multiple events. If the user is deleted, all associated events are removed.

Event.belongsTo(User, { foreignKey: 'createdBy', onDelete: 'CASCADE' }); 
// Each event belongs to a user. If the user is deleted, remove all their events.

// Function to sync the database models with the database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Sync models with database and alter tables if needed
    console.log('✅ Database synchronized successfully.');
  } catch (error) {
    console.error('❌ Error syncing database:', error);
  }
};

// Export the database connection and models so they can be used elsewhere in the application
export { sequelize, User, Event, syncDatabase };
